import React from 'react';

const EducationalGoalsPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    The New Millennium Era<br />
                    Where Humanity's Dreams Become Reality!
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 mt-8">
                    With the advancement of information technology, our world is rapidly transforming into a real-time operating system.
                </p>
            </div>

            {/* Main Content */}
            <div className="px-0 sm:px-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                    <div className="space-y-6">
                        <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                            With the advancement of information technology, the global village is rapidly changing to a real-time operating system. In addition, the 21st century demands new and progressive talents. Our school is a specialized educational institution established as a non-profit corporation by the Ministry of Labor to train competent professional technical personnel who will lead the future cutting-edge industrial technology field. We opened on October 4, 1993, with the educational goal of training professional technical personnel who can respond to the increasing demand for intermediate and advanced personnel due to the diversification of the government's industrial structure and the advancement of technology levels.
                        </p>
                    </div>
                </div>
            </div>

            {/* Educational Goals Grid */}
            <div>
                <div className="text-center mb-8 px-4">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                        Educational Goals
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-0 sm:px-8">
                    {/* Goal 1 */}
                    <div className="bg-blue-100 border border-blue-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico1.png" alt="Technical/Personal/Social Professional" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                                    Technical/Personal/Social Professional
                                </h4>
                                <p className="text-base sm:text-lg text-blue-800 leading-relaxed">
                                    With ASEA Aviation College's<br />
                                    educational philosophy as our foundation,<br />
                                    your future is always open.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 2 */}
                    <div className="bg-emerald-100 border border-emerald-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico2.png" alt="Creative Technician" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-3">
                                    Creative Technician
                                </h4>
                                <p className="text-base sm:text-lg text-emerald-800 leading-relaxed">
                                    Cultivating professional abilities on a broad foundation<br />
                                    to develop technicians who creatively perform<br />
                                    their duties in their specialized fields.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 3 */}
                    <div className="bg-rose-100 border border-rose-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico3.png" alt="Service-Oriented Social Contributor" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-rose-900 mb-3">
                                    Service-Oriented Social Contributor
                                </h4>
                                <p className="text-base sm:text-lg text-rose-800 leading-relaxed">
                                    Cultivating professional knowledge and abilities<br />
                                    to develop service-oriented social contributors<br />
                                    who give back to society.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 4 */}
                    <div className="bg-gray-100 border border-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico4.png" alt="Independent Intellectual" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    Independent Intellectual
                                </h4>
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    Developing proactive intellectuals with strong<br />
                                    responsibility toward local communities and the nation,<br />
                                    working diligently for their own and community development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalGoalsPage;