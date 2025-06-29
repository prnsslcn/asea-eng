import React, { useState, useCallback, useEffect } from 'react';

// 타입 정의
interface FacilityImage {
    filename: string;
    title: string;
    description?: string;
}

interface FacilitiesData {
    seoul: {
        [department: string]: FacilityImage[];
    };
    icheon: {
        [department: string]: FacilityImage[];
    };
}

// 계열 필터 옵션
const departmentFilters = [
    { key: 'all', label: 'All Departments', color: 'blue' },
    { key: 'aviation-maintenance', label: 'Aviation Maintenance', color: 'blue' },
    { key: 'smart-safety', label: 'Smart Safety Diagnostics', color: 'emerald' },
    { key: 'aviation-tourism', label: 'Aviation Tourism', color: 'rose' },
    { key: 'aviation-security', label: 'Aviation Security', color: 'slate' },
    { key: 'defense-police', label: 'Defense & Police AI', color: 'gray' },
    { key: 'facilities', label: 'Support Facilities', color: 'purple' },
    { key: 'practical-training', label: 'Practical Training', color: 'green' },
];

const FacilitiesPage: React.FC = () => {
    const [activeCampus, setActiveCampus] = useState<'seoul' | 'icheon'>('seoul');
    const [activeDepartment, setActiveDepartment] = useState<string>('all');
    const [lightboxImage, setLightboxImage] = useState<{ image: FacilityImage; department: string } | null>(null);
    const [facilitiesData, setFacilitiesData] = useState<FacilitiesData | null>(null);
    const [loading, setLoading] = useState(true);

    // JSON 데이터 로드
    useEffect(() => {
        const loadFacilitiesData = async () => {
            try {
                const response = await fetch('/asea-eng/data/facilities.json');
                if (response.ok) {
                    const data = await response.json();
                    setFacilitiesData(data);
                } else {
                    // JSON 파일이 없으면 샘플 데이터 사용
                    setFacilitiesData(getSampleData());
                }
            } catch (error) {
                console.log('JSON file not found, using sample data');
                setFacilitiesData(getSampleData());
            } finally {
                setLoading(false);
            }
        };

        loadFacilitiesData();
    }, []);

    // 샘플 데이터 (JSON 파일이 준비되기 전까지 사용)
    const getSampleData = (): FacilitiesData => ({
        seoul: {
            "aviation-maintenance": [
                { filename: "maintenance-1.jpg", title: "Electronics Laboratory", description: "Advanced electronics training facility" },
                { filename: "maintenance-2.jpg", title: "Engine Training Room", description: "Hands-on engine maintenance training" },
                { filename: "maintenance-3.jpg", title: "Avionics Laboratory", description: "Modern avionics systems training" },
                { filename: "maintenance-4.jpg", title: "Aircraft Maintenance Workshop", description: "Full-scale aircraft maintenance facility" },
                { filename: "maintenance-5.jpg", title: "Tool and Equipment Room", description: "Professional maintenance tools and equipment" }
            ],
            "smart-safety": [
                { filename: "safety-1.jpg", title: "Ultrasonic Testing Lab", description: "Non-destructive testing laboratory" },
                { filename: "safety-2.jpg", title: "NDT Equipment Room", description: "Specialized NDT equipment and instruments" },
                { filename: "safety-3.jpg", title: "Materials Testing Lab", description: "Advanced materials analysis facility" }
            ],
            "aviation-tourism": [
                { filename: "tourism-1.jpg", title: "Flight Attendant Training Room", description: "Cabin crew service training facility" },
                { filename: "tourism-2.jpg", title: "Mock Aircraft Cabin", description: "Realistic aircraft cabin simulator" },
                { filename: "tourism-3.jpg", title: "Hotel Service Training Room", description: "Hospitality and service training" }
            ],
            "aviation-security": [
                { filename: "security-1.jpg", title: "Security Training Center", description: "Comprehensive security training facility" },
                { filename: "security-2.jpg", title: "Physical Training Room", description: "Fitness and combat training area" },
                { filename: "security-3.jpg", title: "Martial Arts Training Hall", description: "Traditional and modern martial arts" }
            ],
            "defense-police": [
                { filename: "defense-1.jpg", title: "VR Shooting Training Room", description: "Virtual reality firearms training" },
                { filename: "defense-2.jpg", title: "Tactical Training Center", description: "Military and police tactics training" },
                { filename: "defense-3.jpg", title: "Command and Control Room", description: "Strategic operations training facility" }
            ],
            "facilities": [
                { filename: "facilities-1.jpg", title: "Student Dormitory", description: "Comfortable student accommodation" },
                { filename: "facilities-2.jpg", title: "Cafeteria", description: "Modern dining facility" },
                { filename: "facilities-3.jpg", title: "Library", description: "Comprehensive academic library" },
                { filename: "facilities-4.jpg", title: "Computer Lab", description: "Advanced computing facility" }
            ]
        },
        icheon: {
            "practical-training": [
                { filename: "icheon-1.jpg", title: "Practical Training Center", description: "Large-scale practical training facility" },
                { filename: "icheon-2.jpg", title: "Aircraft Hangar", description: "Real aircraft maintenance hangar" },
                { filename: "icheon-3.jpg", title: "Outdoor Training Field", description: "Extensive outdoor training area" },
                { filename: "icheon-4.jpg", title: "Heavy Equipment Training", description: "Industrial equipment operation training" }
            ]
        }
    });

    // 현재 필터에 맞는 이미지들 가져오기
    const getFilteredImages = useCallback(() => {
        if (!facilitiesData) return [];

        const campusData = facilitiesData[activeCampus];
        if (!campusData) return [];

        let allImages: Array<{ image: FacilityImage; department: string }> = [];

        if (activeDepartment === 'all') {
            // 모든 계열의 이미지
            Object.entries(campusData).forEach(([dept, images]) => {
                images.forEach(image => {
                    allImages.push({ image, department: dept });
                });
            });
        } else {
            // 특정 계열의 이미지
            const images = campusData[activeDepartment] || [];
            images.forEach(image => {
                allImages.push({ image, department: activeDepartment });
            });
        }

        return allImages;
    }, [facilitiesData, activeCampus, activeDepartment]);

    // 이미지 경로 생성 함수
    const getImagePath = useCallback((department: string, filename: string) => {
        return `/asea-eng/images/facilities/${activeCampus}/${department}/${filename}`;
    }, [activeCampus]);

    // 라이트박스 열기
    const openLightbox = (image: FacilityImage, department: string) => {
        setLightboxImage({ image, department });
    };

    // 라이트박스 닫기
    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const filteredImages = getFilteredImages();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading facilities...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    World-Class Facilities<br />
                    for Professional Excellence
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 mt-8">
                    State-of-the-art facilities and comprehensive educational infrastructure to cultivate top-tier aviation professionals.
                </p>
            </div>

            {/* Campus Tabs */}
            <div className="px-0 sm:px-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => {
                                setActiveCampus('seoul');
                                setActiveDepartment('all');
                            }}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeCampus === 'seoul'
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'text-gray-600 hover:text-blue-900'
                            }`}
                        >
                            Seoul Yeongdeungpo Campus
                        </button>
                        <button
                            onClick={() => {
                                setActiveCampus('icheon');
                                setActiveDepartment('all');
                            }}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeCampus === 'icheon'
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'text-gray-600 hover:text-blue-900'
                            }`}
                        >
                            Icheon Campus
                        </button>
                    </div>
                </div>
            </div>

            {/* Department Filters */}
            <div className="px-0 sm:px-8">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {departmentFilters.filter(filter => {
                        if (filter.key === 'all') return true;
                        if (activeCampus === 'seoul' && filter.key !== 'practical-training') return true;
                        if (activeCampus === 'icheon' && filter.key === 'practical-training') return true;
                        return false;
                    }).map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveDepartment(filter.key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeDepartment === filter.key
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image Gallery */}
            <div className="px-0 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((item, index) => (
                        <div
                            key={`${item.department}-${item.image.filename}-${index}`}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => openLightbox(item.image, item.department)}
                        >
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                <img
                                    src={getImagePath(item.department, item.image.filename)}
                                    alt={item.image.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // 이미지 로드 실패시 placeholder
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Image+Coming+Soon';
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {item.image.title}
                                </h3>
                                {item.image.description && (
                                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                        {item.image.description}
                                    </p>
                                )}
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="capitalize">{activeCampus} Campus</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 이미지가 없을 때 */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Images Available</h3>
                        <p className="text-gray-600">Images for this section are being prepared.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={getImagePath(lightboxImage.department, lightboxImage.image.filename)}
                            alt={lightboxImage.image.title}
                            className="max-w-full max-h-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                            <h3 className="text-lg font-semibold">{lightboxImage.image.title}</h3>
                            {lightboxImage.image.description && (
                                <p className="text-sm text-gray-300">{lightboxImage.image.description}</p>
                            )}
                            <p className="text-sm text-gray-300 capitalize">{activeCampus} Campus</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacilitiesPage;