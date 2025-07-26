import React from 'react';
import { Phone, MapPin, Train } from 'lucide-react';
import aseaData, { getDepartmentColorClasses } from '../../data/about/aseaData.ts';

// 타입 정의 (aseaData.ts와 동일)
interface DepartmentProgram {
    name: string;
    englishName: string;
    color: string;
    bgColor: string;
    textColor: string;
    programs: Array<{
        title: string;
        description: string;
        highlights: string[];
    }>;
}

interface Benefit {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
}

const AseaPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    {aseaData.hero.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 px-4">
                    {aseaData.hero.subtitle}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
                    {aseaData.hero.description}
                </p>
            </div>

            {/* Department Programs Grid */}
            <div>
                <div className="text-center mb-4 px-4">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-4">
                        ASEA AVIATION
                    </h3>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Our Departments & Programs
                    </h4>
                    <p className="text-base sm:text-lg text-gray-600">
                        Discover the departments operated by ASEA Aviation College, proudly serving with 33 years of deep-rooted history.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:gap-8 px-0 sm:px-8">
                    {aseaData.departments.map((department: DepartmentProgram, index: number) => {
                        const colorClasses = getDepartmentColorClasses(department.color);

                        return (
                            <div
                                key={index}
                                className={`${colorClasses.bgLight} border ${colorClasses.border} rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow`}
                            >
                                {/* Department Header */}
                                <div className={`${colorClasses.bg} text-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-center`}>
                                    <h4 className="text-lg sm:text-xl font-bold">
                                        {department.name}
                                    </h4>
                                </div>

                                {/* Programs List */}
                                <div className="space-y-3 sm:space-y-4">
                                    {department.programs.map((program, programIndex) => (
                                        <div key={programIndex} className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100">
                                            <h5 className={`font-semibold ${colorClasses.text} mb-2 text-base sm:text-lg`}>
                                                {program.title}
                                            </h5>
                                            <p className="text-gray-600 text-lg sm:text-xl mb-3">
                                                {program.description}
                                            </p>
                                            <div className="space-y-1">
                                                {program.highlights.map((highlight, highlightIndex) => (
                                                    <div key={highlightIndex} className="flex items-start space-x-2">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></span>
                                                        <span className="text-lg sm:text-xl text-gray-700">{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Special Benefits */}
            <div>
                <div className="text-center mb-4 px-4">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                        ASEA AVIATION
                    </h3>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Our Special Benefits
                    </h4>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:gap-8 px-0 sm:px-8">
                    {aseaData.benefits.map((benefit: Benefit, index: number) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">{benefit.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg sm:text-xl leading-tight">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-blue-600 font-medium text-xs sm:text-sm mb-4 leading-relaxed">
                                        {benefit.subtitle}
                                    </p>
                                    <p className="text-gray-600 text-lg sm:text-lg leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>

                            {/* 추가 상세 정보 (특정 혜택에 대해) */}
                            {index === 0 && (
                                <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                                        <div className="bg-white p-2 sm:p-3 rounded border border-blue-200">
                                            <div className="font-semibold text-blue-900">Associate Degree</div>
                                            <div className="text-blue-700 text-xs mt-1">Employment or Transfer to 4-year University (3rd year)</div>
                                        </div>
                                        <div className="bg-white p-2 sm:p-3 rounded border border-blue-200">
                                            <div className="font-semibold text-blue-900">Bachelor's Degree</div>
                                            <div className="text-blue-700 text-xs mt-1">Employment or Graduate School Admission</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {index === 1 && (
                                <div className="mt-6 space-y-2">
                                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                                        <span>Ministry of Land, Infrastructure and Transport designated - Korea's only and first simultaneous authorization for 3 aircraft type education programs</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                                        <span>National first/only including universities (B737NG, C172, B737NG Instructor Course)</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Information - 중앙 정렬 */}
            <div className="px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    Professional Consultation
                </h3>
                <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 sm:p-6 text-center max-w-sm sm:max-w-md w-full">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full mb-3 sm:mb-4">
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h4 className="font-bold text-blue-900 mb-2">
                            {aseaData.contacts[0].title}
                        </h4>
                        <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-3">
                            {aseaData.contacts[0].phone}
                        </div>
                        <p className="text-blue-800 text-xs sm:text-sm">
                            {aseaData.contacts[0].description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Location Information */}
            <div className="px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    Location & Directions
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8 text-center max-w-xl sm:max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full mb-4 sm:mb-6">
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-green-900 mb-2">
                        {aseaData.location.schoolName}
                    </h4>
                    <div className="text-base sm:text-lg text-green-800 mb-3 sm:mb-4">
                        {aseaData.location.address}
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-center space-x-2 text-green-700">
                            <Train className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium text-sm sm:text-base">{aseaData.location.mapInfo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AseaPage;