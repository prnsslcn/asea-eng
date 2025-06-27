import React from 'react';
import aseaData, { getDepartmentColorClasses } from '../../../data/about/aseaData';

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

interface ContactInfo {
    type: string;
    title: string;
    phone: string;
    description: string;
}

const AseaPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <span className="text-4xl">✈️</span>
                </div>
                <h1 className="text-4xl font-bold text-blue-600 mb-2">
                    {aseaData.hero.title}
                </h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {aseaData.hero.subtitle}
                </h2>
                <div className="text-3xl font-bold text-blue-800 mb-4">
                    ASEA AVIATION
                </div>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    {aseaData.hero.description}
                </p>
            </div>

            {/* Department Programs Grid */}
            <div>
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-blue-800 mb-4">
                        ASEA AVIATION
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        아세아의 계열 및 과정
                    </h4>
                    <p className="text-lg text-gray-600">
                        33년 뿌리 깊은 역사를 자랑하는 아세아항공직업전문학교에서 운영중인 계열입니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {aseaData.departments.map((department: DepartmentProgram, index: number) => {
                        const colorClasses = getDepartmentColorClasses(department.color);

                        return (
                            <div
                                key={index}
                                className={`${colorClasses.bgLight} border ${colorClasses.border} rounded-xl p-6 hover:shadow-lg transition-shadow`}
                            >
                                {/* Department Header */}
                                <div className={`${colorClasses.bg} text-white rounded-lg p-4 mb-6 text-center`}>
                                    <h4 className="text-xl font-bold mb-1">
                                        {department.name}
                                    </h4>
                                    <p className="text-sm opacity-90">
                                        {department.englishName}
                                    </p>
                                </div>

                                {/* Programs List */}
                                <div className="space-y-4">
                                    {department.programs.map((program, programIndex) => (
                                        <div key={programIndex} className="bg-white p-4 rounded-lg border border-gray-100">
                                            <h5 className={`font-semibold ${colorClasses.text} mb-2`}>
                                                {program.title}
                                            </h5>
                                            <p className="text-gray-600 text-sm mb-3">
                                                {program.description}
                                            </p>
                                            <div className="space-y-1">
                                                {program.highlights.map((highlight, highlightIndex) => (
                                                    <div key={highlightIndex} className="flex items-start space-x-2">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></span>
                                                        <span className="text-sm text-gray-700">{highlight}</span>
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
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-blue-800 mb-4">
                        ASEA AVIATION
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        아세아의 특별한 혜택
                    </h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {aseaData.benefits.map((benefit: Benefit, index: number) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-4xl flex-shrink-0 mt-1">{benefit.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-blue-600 font-medium text-sm mb-4 leading-relaxed">
                                        {benefit.subtitle}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>

                            {/* 추가 상세 정보 (특정 혜택에 대해) */}
                            {index === 0 && (
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-white p-3 rounded border border-blue-200">
                                            <div className="font-semibold text-blue-900">전문학사 학위</div>
                                            <div className="text-blue-700 text-xs mt-1">취업 or 4년제 대학 3학년 편입</div>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-blue-200">
                                            <div className="font-semibold text-blue-900">학사 학위</div>
                                            <div className="text-blue-700 text-xs mt-1">취업 or 대학원 진학</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {index === 1 && (
                                <div className="mt-6 space-y-2">
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>국토교통부 지정 국내유일, 국내 최초 기종교육 3개부문 동시인가</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>대학 포함 전국 최초/유일 (B737NG, C172, B737NG 교관과정)</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Information */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    전문 상담 안내
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {aseaData.contacts.map((contact: ContactInfo, index: number) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                                <span className="text-xl">📞</span>
                            </div>
                            <h4 className="font-bold text-blue-900 mb-2">
                                {contact.title}
                            </h4>
                            <div className="text-2xl font-bold text-blue-600 mb-3">
                                {contact.phone}
                            </div>
                            <p className="text-blue-800 text-sm">
                                {contact.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location Information */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    오시는 길
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
                        <span className="text-2xl">📍</span>
                    </div>
                    <h4 className="text-xl font-bold text-green-900 mb-2">
                        {aseaData.location.schoolName}
                    </h4>
                    <div className="text-lg text-green-800 mb-4">
                        {aseaData.location.address}
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-2 text-green-700">
                            <span className="text-lg">🚇</span>
                            <span className="font-medium">{aseaData.location.mapInfo}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                    아세아에서 여러분의 꿈을 실현하세요!
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    33년의 경험과 노하우로 여러분의 성공적인 항공업계 진출을 지원합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        입학 상담 신청
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        교육과정 보기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AseaPage;