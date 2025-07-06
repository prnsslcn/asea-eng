import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Department {
    id: string;
    name: string;
    koreanName: string;
    description: string;
    highlights: string[];
    icon: string;
    color: string;
    programs: string[];
}

const departmentsData: Department[] = [
    {
        id: 'aviation-maintenance',
        name: 'Aviation Maintenance',
        koreanName: '항공정비계열',
        description: 'Leading aviation maintenance technician training with the largest enrollment capacity designated by MOLIT',
        highlights: [
            'MOLIT Designated Training Institution',
            'Largest Enrollment Capacity (420 students)',
            '3 Types of Aircraft Training Simultaneously',
            'Advanced Simulator Training'
        ],
        icon: '✈️',
        color: 'blue',
        programs: [
            'Aircraft Maintenance Course',
            'Aviation Mechanical Course',
            'Aviation NCO Course',
            'Drone Operation & Maintenance',
            'Aviation Maintenance Engineering [3-Year]'
        ]
    },
    {
        id: 'smart-safety',
        name: 'Smart Safety Diagnostics',
        koreanName: '스마트안전진단계열',
        description: 'Cutting-edge NDT specialists training with 100% campus recruiting success rate',
        highlights: [
            '100% Campus Recruiting Success (2023)',
            'Advanced NDT Technology Training',
            'Industry Partnership with Canada',
            'Overseas Employment Opportunities'
        ],
        icon: '🔬',
        color: 'emerald',
        programs: [
            'Ultrasonic Diagnostics Course',
            'Aviation NDT Course',
            'Metallurgical Engineering [3-Year]'
        ]
    },
    {
        id: 'aviation-tourism',
        name: 'Aviation Tourism',
        koreanName: '항공관광계열',
        description: 'Comprehensive aviation and tourism training with global hospitality focus',
        highlights: [
            '3+2 System Operation',
            'Only Cruise Specialist Training in Seoul Area',
            'International Hotel Management',
            'Multi-language Flight Attendant Training'
        ],
        icon: '🌍',
        color: 'rose',
        programs: [
            'Flight Attendant Course',
            'Hotel Tourism Specialist Course',
            'Food & Beverage Specialist Course'
        ]
    },
    {
        id: 'aviation-security',
        name: 'Aviation Security',
        koreanName: '항공보안계열',
        description: 'Elite security professionals training with AI-powered security technology',
        highlights: [
            '8 Years Consecutive #1 in Personal Protection',
            'AI Security Screening Education',
            'Specialized IED Detection Training',
            'Action & Sports Conditioning Programs'
        ],
        icon: '🛡️',
        color: 'slate',
        programs: [
            'Airport Security Course',
            'VIP Security Course',
            'PMC Security Course',
            'Action Acting Course',
            'Sports Conditioning Course'
        ]
    },
    {
        id: 'defense-police-ai',
        name: 'Defense & Police AI',
        koreanName: '국방경찰AI계열',
        description: 'Leading AI-powered defense and police training with outstanding officer commissioning rate',
        highlights: [
            '10 Years Consecutive #1-2 at Military Academy',
            '91% Officer/NCO Commission Rate (Recent 9 Years)',
            'AI Technology Integration',
            'Comprehensive Military & Police Training'
        ],
        icon: '🎖️',
        color: 'amber',
        programs: [
            'Military Officer Course',
            'Military NCO Course',
            'Defense AI Course',
            'Police Officer Course'
        ]
    }
];

const DepartmentsSection: React.FC = () => {
    const navigate = useNavigate();

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

    // const handleDepartmentClick = (departmentId: string) => {
    //     navigate(`/departments/${departmentId}`);
    // };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Academic Departments
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our 5 specialized departments designed to launch your aviation career.
                        Each program combines cutting-edge technology with hands-on experience.
                    </p>
                    <div className="mt-8 w-24 h-1 bg-blue-900 mx-auto"></div>
                </div>

                {/* Departments Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departmentsData.map((department) => {
                        const colors = getColorClasses(department.color);

                        return (
                            <div
                                key={department.id}
                                // onClick={() => handleDepartmentClick(department.id)}
                                className="bg-white rounded-2xl shadow-lg"
                            >
                                {/* Card Header */}
                                <div className={`${colors.bg} text-white p-6 rounded-t-2xl`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-4xl">{department.icon}</span>
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
                                            {department.highlights.slice(0, 3).map((highlight, index) => (
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
                          {program}
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
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Start Your Aviation Journey?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Explore our comprehensive programs and discover which department aligns with your career goals.
                        </p>
                        <button
                            onClick={() => navigate('/departments')}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            View All Departments
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;