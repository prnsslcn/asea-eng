import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const DefensePoliceAIPage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('national-defense-police-ai');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('national-defense-police-ai', programId));
    };

    const employmentAreas = [
        {
            category: "사관",
            companies: "육군3사관학교, 학사사관, AI사이버작전사령부, AI육군국수사령부, 육군, 해군, 공군, 해병대 외 다수"
        },
        {
            category: "부사관 준사관",
            companies: "육군 부사관, 해군 부사관, 공군 부사관, 해병대 부사관, 특임 부사관, 기술 부사관, AI사이버작전사령부, AI육군국수사령부 외 다수"
        },
        {
            category: "군무원",
            companies: "육군 군무원, 해군 군무원, 공군 군무원, 해병대 군무원, 국방부 군무원, AI사이버작전사령부, AI육군국수사령부 외 다수"
        },
        {
            category: "경찰 공무원",
            companies: "경찰, 경찰특공대, 경찰기동대, 해양경찰 외 다수"
        },
        {
            category: "국방/경찰 공무원 통과 후 진로",
            companies: "대학교수, 예비군 지휘관, 분석관 활동, 경보업체 간부, 보안업체 간부, 해티보안업체 간부, 북데이터업체 간부 외 다수"
        },
        {
            category: "기타",
            companies: "인천공항보안검색원, 4년제 대학 편입, 소방공무원, 교정공무원, 법무공무원, 국회경찰청, 청와경찰 외 다수"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <button
                                    onClick={() => navigate('/')}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <button
                                        onClick={() => navigate('/departments')}
                                        className="ml-4 text-gray-500 hover:text-gray-700"
                                    >
                                        Departments
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-blue-900 font-medium">National Defense Police AI</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {department.name}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
                            {department.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-6xl mx-auto">
                            <div className="text-2xl font-bold mb-4">미래 국가안보를 선도하는 AI 기반의 국방정경찰 공무원 양성!</div>
                            <div className="text-lg mb-4">오직 실전으로 입증하는 군정경 특성화 계열!</div>
                            <div className="text-lg mb-4 text-yellow-300 font-bold">최근 9년간 국방정경찰공무원 시험 합격률 91% 달성!</div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-green-300">육군3사관학교</div>
                                    <div className="text-xs">10년 연속 전국 1~2위</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-green-300">생도선발시험</div>
                                    <div className="text-xs">대답 고사위 부정</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-green-300">군인학사</div>
                                    <div className="text-xs">8년 연속 서울 수원 1위</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-green-300">국방 영어급 사관</div>
                                    <div className="text-xs">취업 간부 취업</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">National Defense Police AI Programs</h2>
                        <p className="text-lg text-gray-600">과정소개 자세히보기</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {department.programs.map((program, index) => (
                            <button
                                key={program.id}
                                onClick={() => handleProgramClick(program.id)}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left group hover:bg-blue-50"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-blue-100 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                                    {program.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {program.description}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* YouTube Video Section */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900">Department Introduction Video</h3>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/oFaCGBeJEeI?rel=0&vq=hd720&showinfo=0"
                                className="w-full h-96"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Goals */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Goals</h2>
                        <p className="text-lg text-gray-600 mb-2">미래 국가안보를 선도하는 국방•경찰공무원 양성</p>
                        <p className="text-gray-500">전문학사 학위 과정</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 1학년 */}
                        <div className="bg-blue-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">1st</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900">1학년</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. 전공기본함양</h4>
                                    <p className="text-gray-600 mb-4">기본윤리, 체력, 정신, 제식훈련 등 국방 경찰공무원으로서의 기초역량 강화</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 군대윤리</li>
                                        <li>• 한국사 I</li>
                                        <li>• 군사/경찰체조 I</li>
                                        <li>• 개인화기사격 I</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 전공입문과정</h4>
                                    <p className="text-gray-600 mb-4">국방 및 경찰 조직 내에서 역할과 책임을 다할 수 있는 국방/경찰공무원 양성</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 리더십</li>
                                        <li>• 한국사 II</li>
                                        <li>• 군사/경찰체조 II</li>
                                        <li>• 개인화기사격 II</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2학년 */}
                        <div className="bg-emerald-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-emerald-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">2nd</span>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-700">2학년</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. 전공심화과정</h4>
                                    <p className="text-gray-600 mb-4">국방 및 경찰에서 요구하는 국방간부/경찰의 분야별 실무능력 배양</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 국가안보학</li>
                                        <li>• 인성교육학</li>
                                        <li>• 군사/경찰체조 III</li>
                                        <li>• 개인화기사격 III</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실무능력강화</h4>
                                    <p className="text-gray-600 mb-4">야전부대 및 경찰 근무부서 실무 적용 능력 배양, 미래 유망의 대응능력 배양</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 교수법</li>
                                        <li>• 부대관리</li>
                                        <li>• 군사/경찰체조 IV</li>
                                        <li>• 개인화기사격 IV</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialization Image Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-12">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-center space-x-8 mb-6">
                                    <div className="text-5xl">🎖️</div>
                                    <div className="text-5xl">👮</div>
                                    <div className="text-5xl">🤖</div>
                                    <div className="text-5xl">⭐</div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">National Defense Police AI Specialization</h3>
                                <p className="text-gray-600 text-lg">
                                    AI 기반 국방•경찰 융합 교육을 통한 미래형 공안 전문가 양성
                                </p>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-green-600">국방사관</div>
                                        <div className="text-gray-600">육군3사관학교</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-green-600">국방부사관</div>
                                        <div className="text-gray-600">군 부사관</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-green-600">국방AI</div>
                                        <div className="text-gray-600">AI 사이버작전</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-green-600">경찰공무원</div>
                                        <div className="text-gray-600">경찰 & 특공대</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Employment Areas */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Employment Opportunities</h2>
                        <p className="text-lg text-gray-600">졸업 후 진로</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-blue-900 w-1/4">
                                        Career Field
                                    </th>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-blue-900">
                                        Companies & Organizations
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {employmentAreas.map((area, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                                            {area.category}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {area.companies}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Training Facilities */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Facilities</h2>
                            <p className="text-lg text-gray-600">실습실 소개</p>
                        </div>
                        <button
                            onClick={() => navigate('/about/facilities')}
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
                        >
                            <span>View All Facilities</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "국방전술실습실", icon: "🎖️" },
                            { name: "경찰실무실습실", icon: "👮" },
                            { name: "AI교육실습실", icon: "🤖" },
                            { name: "사격실습실", icon: "🎯" },
                            { name: "체력단련실", icon: "💪" },
                            { name: "제식훈련장", icon: "⭐" }
                        ].map((facility, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-green-100">
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">{facility.icon}</div>
                                            <p className="text-blue-600 font-medium">{facility.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                                        {facility.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">국방•경찰 전문교육시설</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Serve Your Country?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA's National Defense Police AI program and become a leader of tomorrow!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/admission')}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Apply Now
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

export default DefensePoliceAIPage;