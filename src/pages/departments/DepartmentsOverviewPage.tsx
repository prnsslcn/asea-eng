import React from 'react';
import { useNavigate } from 'react-router-dom';
import { departmentsData } from '../../data/departments/ProgramData';
import type { Department } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const getDepartmentDisplayData = (dept: Department) => {
    const iconMap: { [key: string]: string } = {
        'aviation-maintenance': '✈️',
        'smart-safety': '🔬',
        'aviation-tourism': '🌍',
        'aviation-security': '🛡️',
        'defense-police-ai': '🎖️'
    };

    const colorMap: { [key: string]: string } = {
        'aviation-maintenance': 'blue',
        'smart-safety': 'emerald',
        'aviation-tourism': 'rose',
        'aviation-security': 'slate',
        'defense-police-ai': 'amber'
    };

    // Department별 기본 highlights 제공
    const defaultHighlights: { [key: string]: string[] } = {
        'aviation-maintenance': [
            'MOLIT Designated Training Institution',
            'Largest Enrollment Capacity (420 students)',
            'Advanced Simulator Training'
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

    return {
        ...dept,
        icon: iconMap[dept.id] || '📚',
        color: colorMap[dept.id] || 'blue',
        highlights: defaultHighlights[dept.id] || [
            'Industry-leading curriculum',
            'Expert faculty with real-world experience',
            'High employment success rate'
        ]
    };
};

const DepartmentsOverviewPage: React.FC = () => {
    const navigate = useNavigate();

    const departmentStats = {
        totalDepartments: 5,
        totalPrograms: 19,
        establishedYear: 1993,
        graduationRate: 95,
        employmentRate: 91,
        students: 420
    };

    const whyChooseASEA = [
        {
            icon: "🏆",
            title: "33 Years of Excellence",
            description: "Established in 1993, leading aviation education for over three decades"
        },
        {
            icon: "✈️",
            title: "Ministry Designated",
            description: "Official aircraft maintenance technician training institute designated by MOLIT"
        },
        {
            icon: "🎯",
            title: "91% Employment Rate",
            description: "Outstanding employment success rate across all departments"
        },
        {
            icon: "🌟",
            title: "Industry Partnerships",
            description: "Strong connections with major airlines, defense, and tourism companies"
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue':
                return {
                    bg: 'bg-blue-900',
                    border: 'border-blue-900',
                    text: 'text-blue-900',
                    hover: 'hover:bg-blue-900'
                };
            case 'emerald':
                return {
                    bg: 'bg-emerald-700',
                    border: 'border-emerald-700',
                    text: 'text-emerald-700',
                    hover: 'hover:bg-emerald-700'
                };
            case 'rose':
                return {
                    bg: 'bg-rose-700',
                    border: 'border-rose-700',
                    text: 'text-rose-700',
                    hover: 'hover:bg-rose-700'
                };
            case 'slate':
                return {
                    bg: 'bg-slate-800',
                    border: 'border-slate-800',
                    text: 'text-slate-800',
                    hover: 'hover:bg-slate-800'
                };
            case 'amber':
                return {
                    bg: 'bg-amber-700',
                    border: 'border-amber-700',
                    text: 'text-amber-700',
                    hover: 'hover:bg-amber-700'
                };
            default:
                return {
                    bg: 'bg-blue-900',
                    border: 'border-blue-900',
                    text: 'text-blue-900',
                    hover: 'hover:bg-blue-900'
                };
        }
    };

    const handleDepartmentClick = (departmentId: string) => {
        navigate(ROUTES.DEPARTMENTS.DEPARTMENT(departmentId));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our Departments
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
                            Discover world-class aviation and specialized programs designed to launch your career in the skies and beyond
                        </p>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-yellow-300">{departmentStats.totalDepartments}</div>
                                    <div className="text-sm text-blue-100">Departments</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-300">{departmentStats.totalPrograms}</div>
                                    <div className="text-sm text-blue-100">Programs</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-300">{departmentStats.students}</div>
                                    <div className="text-sm text-blue-100">Max Students</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-300">{departmentStats.employmentRate}%</div>
                                    <div className="text-sm text-blue-100">Employment Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Departments Grid - DepartmentsSection 디자인 적용 */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Path to Success
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our five specialized departments, each designed to provide industry-leading education and career opportunities in aviation and related fields.
                        </p>
                        <div className="mt-8 w-24 h-1 bg-blue-900 mx-auto"></div>
                    </div>

                    {/* DepartmentsSection 스타일의 카드 그리드 - 기존 ProgramData.ts 데이터 사용 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(departmentsData).map((department) => {
                            const displayData = getDepartmentDisplayData(department);
                            const colors = getColorClasses(displayData.color);

                            return (
                                <div
                                    key={department.id}
                                    onClick={() => handleDepartmentClick(department.id)}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                >
                                    {/* Card Header */}
                                    <div className={`${colors.bg} text-white p-6 rounded-t-2xl`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-4xl">{displayData.icon}</span>
                                            <div className="text-right">
                                                <h3 className="text-lg font-bold mb-1">{department.name}</h3>
                                                <p className="text-sm opacity-90">{department.koreanName}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed opacity-95">
                                            {department.description}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        {/* Key Highlights */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-2">
                                                {displayData.highlights.slice(0, 3).map((highlight: string, index: number) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-start">
                                                        <span className="text-blue-900 mr-2 mt-1">•</span>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Programs Preview */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                                                Programs ({department.programs.length})
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {department.programs.slice(0, 3).map((program, index) => (
                                                    <span
                                                        key={index}
                                                        className={`text-xs px-3 py-1 rounded-full ${colors.text} bg-gray-100`}
                                                    >
                                                        {program.name}
                                                    </span>
                                                ))}
                                                {department.programs.length > 3 && (
                                                    <span className="text-xs px-3 py-1 rounded-full text-gray-500 bg-gray-100">
                                                        +{department.programs.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            className={`w-full py-3 px-6 rounded-lg border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-white font-semibold transition-all duration-300 flex items-center justify-center group`}
                                        >
                                            <span>Explore Department</span>
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Coming Soon Card (for visual balance in 3-column grid) */}
                        <div className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
                            <div className="p-8 text-center h-full flex flex-col justify-center">
                                <div className="text-6xl mb-4 text-gray-400">🚀</div>
                                <h3 className="text-xl font-bold text-gray-600 mb-2">More Departments</h3>
                                <p className="text-gray-500 mb-4">
                                    We're continuously expanding our programs to meet industry demands.
                                </p>
                                <button
                                    onClick={() => navigate('/about/asea')}
                                    className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">ASEA by the Numbers</h2>
                        <p className="text-lg text-gray-600">Our commitment to excellence reflected in our achievements</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{departmentStats.establishedYear}</div>
                            <div className="text-sm text-gray-600">Established</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{33}</div>
                            <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{departmentStats.totalDepartments}</div>
                            <div className="text-sm text-gray-600">Departments</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{departmentStats.totalPrograms}</div>
                            <div className="text-sm text-gray-600">Programs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{departmentStats.students}</div>
                            <div className="text-sm text-gray-600">Max Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">{departmentStats.employmentRate}%</div>
                            <div className="text-sm text-gray-600">Employment</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose ASEA Section */}
            <div className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ASEA Aviation College?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover what makes ASEA the premier choice for aviation and specialized career education in Korea.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseASEA.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
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
                            onClick={() => navigate('/admission')}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Start Your Application
                        </button>
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