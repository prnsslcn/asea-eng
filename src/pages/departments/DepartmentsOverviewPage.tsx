import React from 'react';
import { useNavigate } from 'react-router-dom';
import { departmentsData } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

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

    const handleDepartmentClick = (departmentId: string) => {
        navigate(ROUTES.DEPARTMENTS.DEPARTMENT(departmentId));
    };

    const getDepartmentIcon = (departmentId: string) => {
        const icons: { [key: string]: string } = {
            'aviation-maintenance': '✈️',
            'smart-safety': '🔬',
            'aviation-tourism': '🏨',
            'aviation-security': '🛡️',
            'national-defense-police-ai': '🎖️'
        };
        return icons[departmentId] || '📚';
    };

    const getDepartmentColor = (departmentId: string) => {
        const colors: { [key: string]: string } = {
            'aviation-maintenance': 'from-blue-500 to-blue-600',
            'smart-safety': 'from-emerald-500 to-emerald-600',
            'aviation-tourism': 'from-cyan-500 to-cyan-600',
            'aviation-security': 'from-red-500 to-red-600',
            'national-defense-police-ai': 'from-green-500 to-green-600'
        };
        return colors[departmentId] || 'from-gray-500 to-gray-600';
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

            {/* Departments Grid */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Path to Success
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our five specialized departments, each designed to provide industry-leading education and career opportunities in aviation and related fields.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(departmentsData).map((department) => (
                            <div
                                key={department.id}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                                onClick={() => handleDepartmentClick(department.id)}
                            >
                                {/* Department Header */}
                                <div className={`bg-gradient-to-r ${getDepartmentColor(department.id)} p-6 text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 opacity-10 text-8xl">
                                        {getDepartmentIcon(department.id)}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-3">{getDepartmentIcon(department.id)}</div>
                                        <h3 className="text-xl font-bold mb-2">{department.name}</h3>
                                        <div className="flex items-center justify-between">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        {department.programs.length} Programs
                      </span>
                                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Department Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {department.description}
                                    </p>

                                    {/* Key Features */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Industry-leading curriculum
                                        </div>
                                        <div className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Expert faculty with real-world experience
                                        </div>
                                        <div className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            High employment success rate
                                        </div>
                                    </div>

                                    {/* Programs List */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Programs Available:</h4>
                                        <div className="space-y-1">
                                            {department.programs.map((program, programIdx) => (
                                                <div key={programIdx} className="text-sm text-gray-600 flex items-center">
                                                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                                    {program.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View Department Button */}
                                    <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors group-hover:bg-blue-800">
                                        Explore Department
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Coming Soon Card (for visual balance in 3-column grid) */}
                        <div className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
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