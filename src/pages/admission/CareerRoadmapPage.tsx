import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CareerRoadmapPage: React.FC = () => {
    const navigate = useNavigate();

    const departments = [
        { name: 'Aviation Maintenance', link: '/curriculum/01', korean: '항공정비계열' },
        { name: 'Smart Safety Diagnostics', link: '/curriculum/02', korean: '스마트안전진단계열' },
        { name: 'Aviation Tourism', link: '/curriculum/03', korean: '항공관광계열' },
        { name: 'Aviation Security', link: '/curriculum/05', korean: '항공보안계열' },
        { name: 'Defense & Police AI', link: '/curriculum/06', korean: '국방경찰AI계열' }
    ];

    const handleDepartmentClick = (link: string) => {
        navigate(link);
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Career Roadmap
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Your pathway to professional aviation career
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Degree Information */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Associate/Bachelor's Degree Requirements</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Associate Degree</h3>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Requirements:</span><br />
                                    Major: 60 credits + General Education: 20 credits
                                </p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-4">Bachelor's Degree</h3>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Requirements:</span><br />
                                    Major: 60 credits + General Education: 20 credits + Certifications + Online Courses
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="mb-16">
                    <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                            We aim to cultivate aviation maintenance professionals who will lead Korea's aviation maintenance industry.
                            Through hands-on practical education, our primary goal is to ensure employment opportunities
                            for students to work as certified aviation maintenance technicians.
                        </p>
                    </div>
                </section>

                {/* Career Path Diagram */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Career Path Overview</h2>

                        {/* Image Section - Career Path Illustration */}
                        <div className="mt-16 flex justify-center">
                            <div className="w-full">
                                <img
                                    src="/asea-eng/images/career-path-diagram/career-path-diagram.png"
                                    alt="Career Path Diagram"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Department Career Roadmaps Section */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Department Career Roadmaps</h3>
                        </div>

                        {/* Department List */}
                        <div className="space-y-4 max-w-md mx-auto">
                            {departments.map((dept, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDepartmentClick(dept.link)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg transition-all duration-200 group"
                                >
                                    <div className="text-left">
                                        <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 block">
                                            {dept.name}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CareerRoadmapPage;