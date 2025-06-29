import React from 'react';

const EducationalGoalsPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    인류의 꿈과 현실로 다가오고 있는<br />
                    하늘 날으는시대!
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 mt-8">
                    정보기술의 발달로 직구체는 시시각각 우리체계로 급속히 변화하고 있습니다.
                </p>
            </div>

            {/* Main Content */}
            <div className="px-0 sm:px-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                    <div className="space-y-6">
                        <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                            정보기술의 발달로 직구체는 시시각각 우리체계로 급속히 변화하고 있습니다. 또한, 21세기는 상품과 직업이인 인재를 요구하고 있습니다.
                        </p>
                        <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                            본교는 미래의 첨단 산업기술 핵심을 지어주고 나갈 유능한 전문기술인력을 양성하기 위하여 실동적인 복영리 법인으로 설립된 전문 교육기관입니다.
                        </p>
                        <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                            직업의 산업구조 다각화와 기술 수준의 고도화로 인한 직간 및 고급 인력 수요증가에 부응할 수 있는<br />
                            전문기술인력 양성에 교육목표를 두고 1993년 10월 4일 개교하여 현재에 이르렀습니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Educational Goals Grid */}
            <div>
                <div className="text-center mb-8 px-4">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                        교육목표
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-0 sm:px-8">
                    {/* Goal 1 */}
                    <div className="bg-blue-50 border border-blue-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico1.png" alt="기술인/인성인/사회인" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                                    기술인/인성인/사회인
                                </h4>
                                <p className="text-base sm:text-lg text-blue-800 leading-relaxed">
                                    아세아항공직업전문학교의<br />
                                    교육이념이 있기에 여러분의 미래는<br />
                                    아름다운 열림 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 2 */}
                    <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico2.png" alt="창의적 기술인" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-3">
                                    창의적 기술인
                                </h4>
                                <p className="text-base sm:text-lg text-emerald-800 leading-relaxed">
                                    폭넓은 폭단계에 전문적 능력을<br />
                                    발휘하여 각 전문 분야에서 자신의 직무를<br />
                                    창조적으로 수행하는 기술인을 기른다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 3 */}
                    <div className="bg-rose-50 border border-rose-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico3.png" alt="봉사적 사회인" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-rose-900 mb-3">
                                    봉사적 사회인
                                </h4>
                                <p className="text-base sm:text-lg text-rose-800 leading-relaxed">
                                    전문지식과 능력을 발휘하여 이를 사회적<br />
                                    활용하는 봉사적 사회인을 기른다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal 4 */}
                    <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img src="/images/new/sub/information/info2_ico4.png" alt="자주적 주체인" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    자주적 주체인
                                </h4>
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    주체·주역사회와 국가에 대한 강한 책임의식을<br />
                                    가지고 자신과 공동체의 발전을 위하여 끊임<br />
                                    성실하게 일하는 능동적인 주체인을 기른다.
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