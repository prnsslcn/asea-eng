import React from 'react';

const ChairmanPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    We Sincerely Welcome<br />
                    Your Visit to ASEA Aviation College
                </h1>
            </div>

            {/* Main Content */}
            <div className="px-0 sm:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Chairman Photo */}
                        <div className="lg:w-2/5 flex justify-center items-start p-6 lg:p-8">
                            <div className="w-full max-w-sm">
                                <img
                                    src="/asea-eng/images/chairman/chairman-photo.png"
                                    alt="Chairman Jeon Young-sook"
                                    className="w-full h-auto rounded-lg object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/400x500/e5e7eb/6b7280?text=Chairman+Photo+Coming+Soon';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="lg:w-3/5 p-6 lg:p-8">
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Established in 1993 with the goal of cultivating top-tier aviation technicians, ASEA has produced countless technical talents since its founding. These outstanding professionals now serve as pillars of the aviation industry.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Inheriting the founder's educational philosophy of nurturing creative technicians with proper character, ASEA continues to do its utmost to cultivate the finest aviation professionals who possess both skill and integrity.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    To foster global talent, we became the first vocational college to establish a Foreign Language Education Center. We also founded the ASEA Future Talent Development Research Institute to help establish proper character and values, leading the way in differentiated, advanced education.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    While youth unemployment continues to rise and overall social growth momentum is declining, the aviation industry has sustained continuous growth and is projected to expand significantly, particularly in Northeast Asia.
                                </p>

                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Based on this trend, ASEA has produced over 20,000 graduates through more than 20 years of dedicated aviation-specialized education. Even now, countless students are pursuing their dreams.
                                </p>

                                <div className="space-y-4 pt-4">
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        Now is the time to create value beyond academic credentials.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                                        If you have dreams, take on the challenge.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                                        ASEA will give wings to your dreams.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        Thank you.
                                    </p>
                                </div>

                                {/* Quote */}
                                <div className="bg-blue-50 border-l-4 border-blue-900 p-4 my-6">
                                    <blockquote className="text-lg sm:text-xl font-semibold text-blue-900 italic">
                                        "The future of the aviation industry is bright.<br />
                                        Your future, having chosen ASEA, is even brighter."
                                    </blockquote>
                                </div>

                                {/* Signature */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600 mb-1">
                                            Chairman of ASEA Aviation College
                                        </p>
                                        <p className="text-xl font-bold text-blue-900">
                                            Jeon Young-sook
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

export default ChairmanPage;