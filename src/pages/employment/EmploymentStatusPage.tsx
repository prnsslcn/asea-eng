import React, { useState } from 'react';
import { employmentData, getEmployeePhoto, getCompanyLogo } from '../../data/employment/EmploymentData';
import type { EmployeeProfile } from '../../data/employment/EmploymentData';

const EmploymentStatusPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('01');

    // 5개 계열 정의
    const departments = [
        { id: '01', name: 'Aviation Maintenance' },
        { id: '02', name: 'Smart Safety Diagnostics' },
        { id: '03', name: 'Aviation Tourism' },
        { id: '05', name: 'Aviation Security' },
        { id: '06', name: 'Defense & Police AI' }
    ];

    // 현재 활성 탭의 취업자 데이터 가져오기
    const getCurrentDepartmentEmployees = (): EmployeeProfile[] => {
        const currentDept = employmentData.departments.find(dept => dept.departmentId === activeTab);
        return currentDept ? currentDept.employees : [];
    };

    // 취업자 카드 컴포넌트
    const EmployeeCard: React.FC<{ employee: EmployeeProfile }> = ({ employee }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* 취업자 사진 */}
            <div className="aspect-w-4 aspect-h-5">
                <img
                    src={getEmployeePhoto(employee.photo)}
                    alt={employee.name}
                    className="w-full object-cover"
                />
            </div>

            {/* 취업자 정보 */}
            <div className="p-4">
                {/* 회사 로고 */}
                <div className="flex justify-center mb-3">
                    <img
                        src={getCompanyLogo(employee.companyLogo)}
                        alt="Company Logo"
                        className="h-8 object-contain"
                    />
                </div>

                {/* 이름 */}
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {employee.name}
                </h3>

                {/* 직책 */}
                {/*<p className="text-sm text-gray-600 text-center">*/}
                {/*    {employee.position}*/}
                {/*</p>*/}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 헤더 */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Employment Status
                        </h1>
                        <p className="text-xl text-blue-200">
                            Discover the Success Stories of Our Graduates
                        </p>
                    </div>
                </div>
            </div>

            {/* 메인 컨텐츠 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* 탭 네비게이션 */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => setActiveTab(dept.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                    activeTab === dept.id
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                } shadow-md`}
                            >
                                {dept.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 현재 활성 계열명 표시 */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {departments.find(d => d.id === activeTab)?.name} Department
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Our graduates are making their mark in the aviation industry
                    </p>
                </div>

                {/* 취업자 그리드 (5x8 = 40명) */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
                    {getCurrentDepartmentEmployees().map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                </div>

                {/* 더 많은 정보 링크 */}
                <div className="text-center py-12 border-t border-gray-200">
                    <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Want to Learn More About Our Employment Success?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Explore detailed employment statistics and success stories of our graduates.
                        </p>
                        <a
                            href="https://asea.or.kr/sub/story/story_01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200"
                        >
                            <span>View More Employment Information</span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmploymentStatusPage;