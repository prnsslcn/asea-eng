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
    { key: 'all', label: 'All Training Facilities', color: 'blue' },
    { key: 'aviation-maintenance', label: 'Aviation Maintenance Training', color: 'blue' },
    { key: 'smart-safety', label: 'Smart Safety Training', color: 'emerald' },
    { key: 'aviation-tourism', label: 'Aviation Tourism Training', color: 'rose' },
    { key: 'aviation-security', label: 'Aviation Security Training', color: 'slate' },
    { key: 'defense-police', label: 'Defense & Police Training', color: 'gray' },
    { key: 'practical-equipment', label: 'Practical Equipment', color: 'purple' },
    { key: 'simulation-labs', label: 'Simulation Labs', color: 'green' },
];

const TrainingLabsPage: React.FC = () => {
    const [activeCampus, setActiveCampus] = useState<'seoul' | 'icheon'>('seoul');
    const [activeDepartment, setActiveDepartment] = useState<string>('all');
    const [lightboxImage, setLightboxImage] = useState<{ image: FacilityImage; department: string } | null>(null);
    const [facilitiesData, setFacilitiesData] = useState<FacilitiesData | null>(null);
    const [loading, setLoading] = useState(true);

    // JSON 데이터 로드
    useEffect(() => {
        const loadFacilitiesData = async () => {
            try {
                const response = await fetch('/asea-eng/data/training-facilities.json');
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
                { filename: "maintenance-training-1.jpg", title: "Advanced Aircraft Simulator", description: "State-of-the-art flight simulation training" },
                { filename: "maintenance-training-2.jpg", title: "Engine Assembly Lab", description: "Hands-on aircraft engine training" },
                { filename: "maintenance-training-3.jpg", title: "Avionics Training Center", description: "Modern avionics systems practice" },
                { filename: "maintenance-training-4.jpg", title: "Hydraulic Systems Lab", description: "Aircraft hydraulic system training" },
                { filename: "maintenance-training-5.jpg", title: "Electrical Systems Workshop", description: "Aircraft electrical systems training" }
            ],
            "smart-safety": [
                { filename: "safety-training-1.jpg", title: "NDT Training Laboratory", description: "Non-destructive testing training facility" },
                { filename: "safety-training-2.jpg", title: "Ultrasonic Training Center", description: "Advanced ultrasonic testing training" },
                { filename: "safety-training-3.jpg", title: "Materials Testing Lab", description: "Practical materials analysis training" }
            ],
            "aviation-tourism": [
                { filename: "tourism-training-1.jpg", title: "Mock Aircraft Cabin", description: "Real-scale cabin service training" },
                { filename: "tourism-training-2.jpg", title: "Emergency Procedures Trainer", description: "Safety and emergency training facility" },
                { filename: "tourism-training-3.jpg", title: "Hospitality Training Center", description: "Customer service training facility" }
            ],
            "aviation-security": [
                { filename: "security-training-1.jpg", title: "Tactical Training Center", description: "Advanced security tactics training" },
                { filename: "security-training-2.jpg", title: "Physical Training Facility", description: "Fitness and combat training center" },
                { filename: "security-training-3.jpg", title: "Weapons Training Range", description: "Professional firearms training facility" }
            ],
            "defense-police": [
                { filename: "defense-training-1.jpg", title: "VR Combat Simulator", description: "Virtual reality tactical training" },
                { filename: "defense-training-2.jpg", title: "Command Center Simulator", description: "Strategic operations training" },
                { filename: "defense-training-3.jpg", title: "Field Training Complex", description: "Outdoor tactical training facility" }
            ],
            "practical-equipment": [
                { filename: "equipment-1.jpg", title: "Professional Tool Center", description: "Complete set of industry-standard tools" },
                { filename: "equipment-2.jpg", title: "Measurement Equipment Lab", description: "Precision measurement instruments" },
                { filename: "equipment-3.jpg", title: "Safety Equipment Center", description: "Personal protective equipment training" },
                { filename: "equipment-4.jpg", title: "Workshop Equipment", description: "Advanced workshop machinery" }
            ]
        },
        icheon: {
            "simulation-labs": [
                { filename: "icheon-training-1.jpg", title: "Large-Scale Flight Simulator", description: "Full-size aircraft simulation facility" },
                { filename: "icheon-training-2.jpg", title: "Aircraft Maintenance Hangar", description: "Real aircraft maintenance training" },
                { filename: "icheon-training-3.jpg", title: "Outdoor Training Field", description: "Extensive practical training area" },
                { filename: "icheon-training-4.jpg", title: "Heavy Equipment Training", description: "Industrial equipment operation training" }
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
        return `/asea-eng/images/training-facilities/${activeCampus}/${department}/${filename}`;
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
                    <p className="text-gray-600">Loading training facilities...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Practical Training<br />
                    Facilities
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 mt-8">
                    Industry-leading practical training facilities equipped with cutting-edge technology and real-world equipment to prepare students for professional excellence.
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
                            Icheon Training Campus
                        </button>
                    </div>
                </div>
            </div>

            {/* Department Filters */}
            <div className="px-0 sm:px-8">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {departmentFilters.filter(filter => {
                        if (filter.key === 'all') return true;
                        if (activeCampus === 'seoul' && filter.key !== 'simulation-labs') return true;
                        if (activeCampus === 'icheon' && filter.key === 'simulation-labs') return true;
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
                                        target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Training+Image+Coming+Soon';
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
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Training Facilities Available</h3>
                        <p className="text-gray-600">Training facility images for this section are being prepared.</p>
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

export default TrainingLabsPage;