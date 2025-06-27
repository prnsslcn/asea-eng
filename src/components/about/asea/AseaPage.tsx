import React from 'react';
import aseaData, { getDepartmentColorClasses } from '../../../data/about/aseaData';
import type { DepartmentProgram, Benefit, ContactInfo } from '../../../data/about/aseaData';

const AseaPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-3xl">✈️</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {aseaData.hero.title}
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {aseaData.hero.subtitle}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {aseaData.hero.description}
                </p>
            </div>

            {/* Department Programs Grid */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    전공별 특성화 교육과정
                </h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    아세아의 특별한 혜택
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aseaData.benefits.map((benefit: Benefit, index: number) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                                {benefit.title}
                            </h4>
                            <p className="text-blue-600 font-medium text-sm mb-3">
                                {benefit.subtitle}
                            </p>
                            <p className="text-gray-600 text-sm">
                                {benefit.description}
                            </p>
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