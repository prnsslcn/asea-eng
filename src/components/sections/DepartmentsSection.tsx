import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Microscope, Globe, Shield, Award } from 'lucide-react';

interface Department {
    id: string;
    name: string;
    koreanName: string;
    shortDescription: string;
    icon: React.ReactNode;
    color: string;
}

const departmentsData: Department[] = [
    {
        id: 'aviation-maintenance',
        name: 'Aviation Maintenance',
        koreanName: '항공정비계열',
        shortDescription: 'MOLIT designated aircraft maintenance training with 420 student capacity',
        icon: <Plane className="w-20 h-20" />,
        color: 'blue'
    },
    {
        id: 'smart-safety',
        name: 'Smart Safety Diagnostics',
        koreanName: '스마트안전진단계열',
        shortDescription: 'Advanced NDT technology training with 100% campus recruiting success',
        icon: <Microscope className="w-20 h-20" />,
        color: 'emerald'
    },
    {
        id: 'aviation-tourism',
        name: 'Aviation Tourism',
        koreanName: '항공관광계열',
        shortDescription: 'Comprehensive aviation & tourism training with global hospitality focus',
        icon: <Globe className="w-20 h-20" />,
        color: 'rose'
    },
    {
        id: 'aviation-security',
        name: 'Aviation Security',
        koreanName: '항공보안계열',
        shortDescription: 'Elite security training with AI-powered technology and IED detection',
        icon: <Shield className="w-20 h-20" />,
        color: 'slate'
    },
    {
        id: 'defense-police-ai',
        name: 'Defense & Police AI',
        koreanName: '국방경찰AI계열',
        shortDescription: 'AI-powered defense training with 91% officer commissioning rate',
        icon: <Award className="w-20 h-20" />,
        color: 'amber'
    }
];

const DepartmentsSection: React.FC = () => {
    const navigate = useNavigate();

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue':
                return 'text-blue-900';
            case 'emerald':
                return 'text-emerald-700';
            case 'rose':
                return 'text-rose-700';
            case 'slate':
                return 'text-slate-800';
            case 'amber':
                return 'text-amber-700';
            default:
                return 'text-blue-900';
        }
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Academic Departments
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our five specialized departments designed to launch your career in aviation and related fields.
                        Each program combines cutting-edge technology with hands-on experience.
                    </p>
                    <div className="mt-8 w-24 h-1 bg-blue-900 mx-auto"></div>
                </div>

                {/* Departments Overview */}
                <div className="mb-14">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {departmentsData.map((department) => (
                            <div
                                key={department.id}
                                className={`${getColorClasses(department.color)} rounded-xl p-6 text-center`}
                            >
                                <div className="flex justify-center mb-4">
                                    {department.icon}
                                </div>
                                <h3 className="font-bold text-2xl mb-2">
                                    {department.name}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {department.shortDescription}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main CTA */}
                <div className="text-center">
                    <div className="bg-blue-950 text-white rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Explore Your Future?
                        </h3>
                        <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                            Dive deeper into our departments, discover detailed program information,<br/>
                            and find the perfect path for your aviation career.
                        </p>
                        <button
                            onClick={() => navigate('/departments')}
                            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
                        >
                            <span>View All Departments</span>
                            <svg
                                className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;