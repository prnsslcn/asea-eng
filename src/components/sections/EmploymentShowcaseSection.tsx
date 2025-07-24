import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { employmentData, getEmployeePhoto, getCompanyLogo } from '../../data/employment/EmploymentData';
import type { EmployeeProfile } from '../../data/employment/EmploymentData';

const EmploymentShowcaseSection: React.FC = () => {
    const navigate = useNavigate();
    const [shuffledEmployees, setShuffledEmployees] = useState<EmployeeProfile[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    // 5개 계열에서 임의로 취업자 선별 (각 계열당 8명씩 총 40명)
    useEffect(() => {
        const allEmployees: EmployeeProfile[] = [];

        // 각 계열에서 8명씩 선별
        employmentData.departments.forEach(dept => {
            const shuffled = [...dept.employees].sort(() => Math.random() - 0.5);
            allEmployees.push(...shuffled.slice(0, 8));
        });

        // 전체 40명을 다시 섞기
        const finalShuffled = allEmployees.sort(() => Math.random() - 0.5);
        setShuffledEmployees(finalShuffled);
    }, []);

    // 연속 자동 스크롤 효과 (무한 반복, 애니메이션 없는 리셋)
    useEffect(() => {
        if (shuffledEmployees.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 0.05;
                // 원본 배열의 끝에 도달하면 애니메이션 없이 리셋
                if (nextIndex >= shuffledEmployees.length) {
                    setIsResetting(true);
                    // 다음 프레임에서 애니메이션 없이 리셋
                    setTimeout(() => {
                        setIsResetting(false);
                    }, 10);
                    return 0;
                }
                return nextIndex;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [shuffledEmployees]);

    // 취업자 카드 컴포넌트
    const EmployeeCard: React.FC<{ employee: EmployeeProfile }> = ({ employee }) => (
        <div className="flex-none w-48 bg-white rounded-lg shadow-md overflow-hidden">
            {/* 취업자 사진 */}
            <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                <img
                    src={getEmployeePhoto(employee.photo)}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `
                                <div class="text-center">
                                    <svg class="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <p class="text-xs text-blue-600 font-medium">Graduate Photo</p>
                                </div>
                            `;
                        }
                    }}
                />
            </div>

            {/* 취업자 정보 */}
            <div className="p-4">
                {/* 회사 로고 */}
                <div className="flex justify-center mb-3 h-6">
                    <img
                        src={getCompanyLogo(employee.companyLogo)}
                        alt="Company Logo"
                        className="h-6 object-contain"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                        }}
                    />
                </div>

                {/* 이름 */}
                <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                    {employee.name}
                </h3>

                {/* 직책 */}
                <p className="text-xs text-gray-600 text-center">
                    {employee.position}
                </p>
            </div>
        </div>
    );

    if (shuffledEmployees.length === 0) {
        return <div className="py-16">Loading...</div>;
    }

    return (
        <section className="py-16 bg-white overflow-hidden">
            {/* 섹션 헤더 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Success Stories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Meet our graduates who are making their mark in the aviation industry across all departments
                    </p>
                    <button
                        onClick={() => navigate('/employment-status')}
                        className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center space-x-2 mx-auto"
                    >
                        <span>View All Employment Status</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* 전체 너비 자동 스크롤 취업자 카드들 */}
            <div className="w-full py-4">
                <div
                    className={`flex space-x-6 ${isResetting ? '' : 'transition-transform duration-150 ease-linear'}`}
                    style={{
                        transform: `translateX(-${currentIndex * (192 + 24)}px)`, // 카드 너비(192px) + 간격(24px)
                        width: `${(shuffledEmployees.length * 2) * (192 + 24)}px` // 복제된 배열 크기
                    }}
                >
                    {/* 원본 배열 */}
                    {shuffledEmployees.map((employee, index) => (
                        <EmployeeCard key={`original-${employee.id}-${index}`} employee={employee} />
                    ))}
                    {/* 복제된 배열 (무한 스크롤을 위해) */}
                    {shuffledEmployees.map((employee, index) => (
                        <EmployeeCard key={`duplicate-${employee.id}-${index}`} employee={employee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmploymentShowcaseSection;