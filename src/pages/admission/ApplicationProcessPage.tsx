import React from 'react';
import { FileText, Phone, MessageSquare, Users, Trophy, UserCheck } from 'lucide-react';

const ApplicationProcessPage: React.FC = () => {
    const processSteps = [
        {
            number: '01',
            title: 'Application Submission',
            description: 'Online application through our website or in-person submission',
            icon: FileText,
            color: 'bg-blue-100 text-blue-900'
        },
        {
            number: '02',
            title: 'Interview Schedule Notification',
            description: 'Phone contact within one week after online application submission',
            icon: Phone,
            color: 'bg-green-100 text-green-900'
        },
        {
            number: '03',
            title: 'Counseling & Aptitude Test',
            description: 'Detailed counseling and aptitude test for each program',
            icon: MessageSquare,
            color: 'bg-purple-100 text-purple-900'
        },
        {
            number: '04',
            title: 'Interview',
            description: '1:1 interview with professors from your chosen program',
            icon: Users,
            color: 'bg-orange-100 text-orange-900'
        },
        {
            number: '05',
            title: 'Results Announcement',
            description: 'Results announced within the designated period after interview',
            icon: Trophy,
            color: 'bg-yellow-100 text-yellow-900'
        },
        {
            number: '06',
            title: 'Registration',
            description: 'Complete registration within the designated period after acceptance',
            icon: UserCheck,
            color: 'bg-emerald-100 text-emerald-900'
        }
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Application Process
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Your admission journey step by step
                </p>
                <div className="mt-8 max-w-3xl mx-auto px-4">
                    <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg">
                        <p className="text-xl text-blue-900 font-semibold">
                            Application Process Overview
                        </p>
                        <p className="text-blue-700 mt-2">
                            We support your passion and dedication to aviation excellence
                        </p>
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {processSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Step Card */}
                                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-8">
                                        <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mb-6 mt-4`}>
                                        <IconComponent size={32} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Arrow (except for last item) */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    {/* Mobile Arrow (below card) */}
                                    {index < processSteps.length - 1 && (
                                        <div className="lg:hidden flex justify-center mt-6">
                                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ApplicationProcessPage;