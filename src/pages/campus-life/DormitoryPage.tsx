import React, { useState } from 'react';

interface DormitoryInfo {
    id: string;
    name: string;
    imageName: string;
    features: string[];
    location?: string;
    capacity?: string;
}

const dormitoryData: DormitoryInfo[] = [
    {
        id: 'dorm1',
        name: 'Dormitory Building 1',
        imageName: 'dorm_new1.png',
        features: [
            'Modern residential facilities with comfortable living environment',
            'Convenient location near the school campus',
            'Affordable pricing compared to nearby accommodations',
            'Safe and secure environment managed by the school'
        ],
        location: 'Near Seoul Campus',
        capacity: 'Accommodates up to 120 students'
    },
    {
        id: 'dorm2',
        name: 'Dormitory Building 2',
        imageName: 'dorm_new2.png',
        features: [
            'Newly renovated facilities with excellent amenities',
            'Close proximity to academic buildings and training facilities',
            'Budget-friendly accommodation for students from other regions',
            'Reliable management by school administration'
        ],
        location: 'Near Seoul Campus',
        capacity: 'Accommodates up to 100 students'
    }
];

const DormitoryPage: React.FC = () => {
    const [activeDormitory, setActiveDormitory] = useState<string>('dorm1');

    // 현재 선택된 기숙사 정보 가져오기
    const getCurrentDormitory = () => {
        return dormitoryData.find(dorm => dorm.id === activeDormitory) || dormitoryData[0];
    };

    // 이미지 경로 생성 함수
    const getImagePath = (imageName: string) => {
        return `/images/dormitory/${imageName}`;
    };

    const currentDormitory = getCurrentDormitory();

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Student Housing Guide
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4 max-w-4xl mx-auto leading-relaxed">
                    ASEA Aviation College operates dormitories near the school for new students from other regions.
                </p>

                {/* Key Features */}
                <div className="mt-8 px-4">
                    <div className="bg-blue-50 rounded-2xl p-6 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-800">
                            <div className="flex items-center justify-center">
                                <span className="font-semibold mr-2">✓</span>
                                <span>Comfortable environment and excellent facilities</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="font-semibold mr-2">✓</span>
                                <span>Reliable school-managed accommodation</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="font-semibold mr-2">✓</span>
                                <span>Affordable pricing compared to nearby options</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dormitory Tabs */}
            <div className="px-0 sm:px-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        {dormitoryData.map((dorm) => (
                            <button
                                key={dorm.id}
                                onClick={() => setActiveDormitory(dorm.id)}
                                className={`px-8 py-3 rounded-md font-medium transition-all ${
                                    activeDormitory === dorm.id
                                        ? 'bg-blue-900 text-white shadow-md'
                                        : 'text-gray-600 hover:text-blue-900'
                                }`}
                            >
                                {dorm.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dormitory Content */}
            <div className="px-0 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Main Dormitory Image */}
                    <div className="mb-8">
                        <div className="relative bg-white overflow-hidden">
                            <div className="flex justify-center">
                                <img
                                    src={getImagePath(currentDormitory.imageName)}
                                    alt={currentDormitory.name}
                                    className="w-full max-w-full h-auto object-contain"
                                    onError={(e) => {
                                        // 이미지 로드 실패시 placeholder
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/800x500/e5e7eb/6b7280?text=Dormitory+Image+Coming+Soon';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DormitoryPage;