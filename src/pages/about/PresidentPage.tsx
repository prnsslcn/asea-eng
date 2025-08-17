import React from 'react';

const PresidentPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Welcome to<br />
                    ASEA Aviation College
                </h1>
            </div>

            {/* Main Content */}
            <div className="px-0 sm:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* President Photo */}
                        <div className="lg:w-2/5 flex justify-center items-start p-6 lg:p-8">
                            <div className="w-full max-w-sm">
                                <img
                                    src="/images/president/president-photo.png"
                                    alt="President Kwon Oh-gun"
                                    className="w-full h-auto rounded-lg object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/400x500/e5e7eb/6b7280?text=President+Photo+Coming+Soon';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="lg:w-3/5 p-6 lg:p-8">
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Founded in 1993 with the educational philosophy of nurturing "Creative Technicians," "Service-minded Social Citizens," and "Independent Intellectuals," our institution is a specialized aviation education center established with the goal of cultivating the finest aviation technical professionals.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Our school operates as a vocational training facility certified by the Ministry of Employment and Labor, an evaluation and accreditation institution for academic credit bank system courses for credit and degree acquisition by the Ministry of Education, and a specialized education and aviation training institution designated by the Ministry of Land, Infrastructure and Transport.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    As international society reorganizes based on unlimited competition in industrial sectors, industrial sites are continuously changing to secure national competitiveness. Accordingly, educational and training institutions are required to make continuous efforts to cultivate and produce excellent talent to prepare for these changes.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    In response, our school has established departments including Aviation Maintenance, Aviation Piloting, Smart Non-Destructive Testing, Aviation Tourism, Aviation Security, and Defense Police in line with industry demands and government policy directions, and we are doing our best to cultivate excellent technical personnel in these fields.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Based on over 30 years of accumulated tradition, we strive to become a truly "strong school in education and training" and a "strong school in employment," while serving as a "reliable partner" for your "joyful challenges" to help realize your dreams.
                                </p>

                                {/* Quote */}
                                <div className="bg-blue-50 border-l-4 border-blue-900 p-4 my-6">
                                    <blockquote className="text-lg sm:text-xl font-semibold text-blue-900 italic">
                                        "We will be your reliable partner in joyful challenges,<br />
                                        helping you realize your aviation dreams."
                                    </blockquote>
                                </div>

                                {/* Signature */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600 mb-1">
                                            President of ASEA Aviation College
                                        </p>
                                        <p className="text-xl font-bold text-blue-900">
                                            Kwon Oh-gun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresidentPage;