import React from 'react';
import { Outlet } from 'react-router-dom';
import AdmissionBreadcrumb from './AdmissionBreadcrumb';

const AdmissionLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 페이지 헤더 */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Admissions
                            <span className="block text-lg font-normal mt-2 text-blue-200">
                                Start your aviation career journey at ASEA Aviation College
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Comprehensive admission information, application processes,
                            career pathways, and scholarship opportunities for your aviation education.
                        </p>
                    </div>
                </div>
            </div>

            {/* 브레드크럼 */}
            <AdmissionBreadcrumb />

            {/* 메인 컨텐츠 영역 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdmissionLayout;