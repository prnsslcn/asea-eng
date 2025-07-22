import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Microscope, Globe, Shield, Award } from 'lucide-react';
import { departmentsData } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const DepartmentsOverviewPage: React.FC = () => {
    const navigate = useNavigate();
    const handleDepartmentClick = (departmentId: string) => {
        navigate(ROUTES.DEPARTMENTS.DEPARTMENT(departmentId));
    };

    // lucide-react 아이콘 매핑
    const getDepartmentIcon = (departmentId: string) => {
        const iconMap: { [key: string]: React.ReactNode } = {
            'aviation-maintenance': <Plane className="w-8 h-8" />,
            'smart-safety': <Microscope className="w-8 h-8" />,
            'aviation-tourism': <Globe className="w-8 h-8" />,
            'aviation-security': <Shield className="w-8 h-8" />,
            'defense-police-ai': <Award className="w-8 h-8" />
        };
        return iconMap[departmentId] || <Plane className="w-8 h-8" />;
    };

    // DepartmentsSection과 동일한 색상 클래스 함수
    const getColorClasses = (departmentId: string) => {
        const colorMap: { [key: string]: any } = {
            'aviation-maintenance': {
                bg: 'bg-blue-900',
                border: 'border-blue-900',
                text: 'text-blue-900',
                hover: 'hover:bg-blue-900'
            },
            'smart-safety': {
                bg: 'bg-emerald-700',
                border: 'border-emerald-700',
                text: 'text-emerald-700',
                hover: 'hover:bg-emerald-700'
            },
            'aviation-tourism': {
                bg: 'bg-rose-700',
                border: 'border-rose-700',
                text: 'text-rose-700',
                hover: 'hover:bg-rose-700'
            },
            'aviation-security': {
                bg: 'bg-slate-800',
                border: 'border-slate-800',
                text: 'text-slate-800',
                hover: 'hover:bg-slate-800'
            },
            'defense-police-ai': {
                bg: 'bg-amber-700',
                border: 'border-amber-700',
                text: 'text-amber-700',
                hover: 'hover:bg-amber-700'
            }
        };
        return colorMap[departmentId] || {
            bg: 'bg-blue-900',
            border: 'border-blue-900',
            text: 'text-blue-900',
            hover: 'hover:bg-blue-900'
        };
    };

    // 기본 하이라이트 (departmentFeatures 기반)
    const getDefaultHighlights = (departmentId: string) => {
        const defaultHighlights: { [key: string]: string[] } = {
            'aviation-maintenance': [
                'MOLIT Designated Training Institution',
                'Largest Enrollment Capacity (420 students)',
                '3 Types of Aircraft Training Simultaneously'
            ],
            'smart-safety': [
                '100% Campus Recruiting Success (2023)',
                'Advanced NDT Technology Training',
                'Industry Partnership with Canada'
            ],
            'aviation-tourism': [
                '3+2 System Operation',
                'Only Cruise Specialist Training in Seoul Area',
                'International Hotel Management'
            ],
            'aviation-security': [
                '8 Years Consecutive #1 in Personal Protection',
                'AI Security Screening Education',
                'Specialized IED Detection Training'
            ],
            'defense-police-ai': [
                '10 Years Consecutive #1-2 at Military Academy',
                '91% Officer/NCO Commission Rate (Recent 9 Years)',
                'AI Technology Integration'
            ]
        };
        return defaultHighlights[departmentId] || [];
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our Departments
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
                            Discover world-class aviation and specialized programs designed to launch your career in the skies and beyond
                        </p>
                    </div>
                </div>
            </div>

            {/* Departments Section - 5개 카드 1행 균등 배치 */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Path to Success
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our five specialized departments, each designed to provide industry-leading education and career opportunities in aviation and related fields.
                        </p>
                        <div className="mt-8 w-24 h-1 bg-blue-900 mx-auto"></div>
                    </div>

                    {/* 카드를 max-w 전체 너비로 세로 1열 배치 */}
                    <div className="space-y-8">
                        {Object.values(departmentsData).map((department) => {
                            const colors = getColorClasses(department.id);
                            const highlights = getDefaultHighlights(department.id);

                            return (
                                <div
                                    key={department.id}
                                    onClick={() => handleDepartmentClick(department.id)}
                                    className="bg-white rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full flex flex-col lg:flex-row"
                                >
                                    {/* Card Header - 모바일: 상단, 데스크톱: 좌측 */}
                                    <div className={`${colors.bg} text-white p-6 lg:p-8 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none w-full lg:w-1/3 flex flex-col justify-center`}>
                                        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start mb-4 lg:mb-6">
                                            <span className="text-white mb-4 sm:mb-0 sm:mr-4 lg:mr-0 lg:mb-4">
                                                {getDepartmentIcon(department.id)}
                                            </span>
                                            <div className="text-center sm:text-left lg:text-left">
                                                <h3 className="text-xl lg:text-2xl font-bold">{department.name}</h3>
                                            </div>
                                        </div>
                                        <p className="text-sm lg:text-base leading-relaxed opacity-95 text-center sm:text-left lg:text-left">
                                            {department.description}
                                        </p>
                                    </div>

                                    {/* Card Body - 모바일: 하단, 데스크톱: 우측 */}
                                    <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            {/* Key Highlights */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-900 mb-3 lg:mb-4 flex items-center text-base lg:text-lg">
                                                    <span className={`w-2 h-2 lg:w-3 lg:h-3 ${colors.bg} rounded-full mr-2 lg:mr-3`}></span>
                                                    Key Highlights
                                                </h4>
                                                <ul className="space-y-2 lg:space-y-3">
                                                    {highlights.map((highlight, index) => (
                                                        <li key={index} className="text-sm lg:text-base text-gray-600 flex items-start">
                                                            <span className={`${colors.text} mr-2 lg:mr-3 mt-1 text-sm lg:text-lg`}>•</span>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Programs Preview */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-900 mb-3 lg:mb-4 flex items-center text-base lg:text-lg">
                                                    <span className={`w-2 h-2 lg:w-3 lg:h-3 ${colors.bg} rounded-full mr-2 lg:mr-3`}></span>
                                                    Programs ({department.programs.length})
                                                </h4>
                                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                                    {department.programs.map((program, index) => (
                                                        <span
                                                            key={index}
                                                            className={`text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2 rounded-full ${colors.text} bg-gray-100 font-medium`}
                                                        >
                                                            {program.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="flex justify-center lg:justify-end">
                                            <button
                                                className={`w-full sm:w-auto py-3 px-6 lg:px-8 rounded-lg border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-white font-semibold transition-all duration-300 flex items-center justify-center group`}
                                            >
                                                <span>Explore Department</span>
                                                <svg
                                                    className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Take Flight?</h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Your journey to an exciting career in aviation and specialized fields starts here.
                        Choose your department and begin your transformation at ASEA Aviation College.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/about/asea')}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
                        >
                            Learn More About ASEA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsOverviewPage;