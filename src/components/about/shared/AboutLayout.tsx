import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutBreadcrumb from './AboutBreadcrumb';

const AboutLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 페이지 헤더 */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            About Us
                            <span className="block text-lg font-normal mt-2 text-blue-200">
                                Learn more about ASEA Korea Aviation Technical College
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Since 1993, we have been Korea's leading aviation education institution,
                            dedicated to excellence in aviation training and education.
                        </p>
                    </div>
                </div>
            </div>

            {/* 브레드크럼 */}
            <AboutBreadcrumb />

            {/* 메인 컨텐츠 영역 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AboutLayout;