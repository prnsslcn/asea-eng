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

                        {/* Desktop Layout */}
                        <div className="hidden lg:block">
                            <div className="relative max-w-6xl mx-auto">
                                {/* Top Row - Employment Goal, 본교입학, Transfer Goal */}
                                <div className="relative mb-4">
                                    <div className="flex items-center justify-center">
                                        {/* Employment Goal */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                                <div className="text-center text-white">
                                                    <h3 className="text-2xl font-bold">Employment</h3>
                                                    <h3 className="text-2xl font-bold">Goal</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Horizontal line from Employment Goal to Center */}
                                        <div className="w-32 h-0.5 bg-gray-400 mx-4"></div>

                                        {/* Center Circle - 본교입학 */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                                                <div className="text-center text-gray-700">
                                                    <h3 className="text-xl font-bold">ASEA</h3>
                                                    <h3 className="text-xl font-bold">Education</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Horizontal line from Center to Transfer Goal */}
                                        <div className="w-32 h-0.5 bg-gray-400 mx-4"></div>

                                        {/* Transfer Goal */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-48 h-48 bg-rose-600 rounded-full flex items-center justify-center shadow-lg">
                                                <div className="text-center text-white">
                                                    <h3 className="text-2xl font-bold">Transfer</h3>
                                                    <h3 className="text-2xl font-bold">Goal</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Vertical line from center down */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-0.5 h-24 bg-gray-400"></div>
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
                        </div>

                        {/* Mobile Layout */}
                        <div className="lg:hidden space-y-8">
                            {/* Employment Goal */}
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <div className="text-center text-white">
                                        <h3 className="text-lg font-bold">Employment</h3>
                                        <h3 className="text-lg font-bold">Goal</h3>
                                    </div>
                                </div>
                                <div className="w-0.5 h-8 bg-gray-400 mt-4"></div>
                            </div>

                            {/* 본교입학 */}
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                                    <div className="text-center text-gray-700">
                                        <h3 className="text-sm font-bold">ASEA</h3>
                                        <h3 className="text-sm font-bold">Education</h3>
                                    </div>
                                </div>
                                <div className="w-0.5 h-8 bg-gray-400 mt-4"></div>
                            </div>

                            {/* Transfer Goal */}
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 bg-rose-600 rounded-full flex items-center justify-center shadow-lg">
                                    <div className="text-center text-white">
                                        <h3 className="text-lg font-bold">Transfer</h3>
                                        <h3 className="text-lg font-bold">Goal</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Department Career Roadmaps */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Department Career Roadmaps</h3>
                                <div className="space-y-3">
                                    {departments.map((dept, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDepartmentClick(dept.link)}
                                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg transition-all duration-200 group"
                                        >
                                            <div className="text-left">
                                                <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 block">
                                                    {dept.name}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {dept.korean}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CareerRoadmapPage;