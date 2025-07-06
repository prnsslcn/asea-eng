import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const AviationSecurityPage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('aviation-security');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('aviation-security', programId));
    };

    const employmentAreas = [
        {
            category: "항공사",
            companies: "인천국제공항공사, 한국공항공사, 김포공항, 제주공항, 군산공항, 김해공항, 여객 및 화물청사 외 다수"
        },
        {
            category: "공공기관",
            companies: "대한민국정보, 대한민국법무, 정보청사 및 법무경찰청, 청와경찰 외 다수"
        },
        {
            category: "국가중요시설 및 연구소",
            companies: "한국수자원공자원, 현대자동차 연구소, 부산항, 팰터항, 군산항만 외 다수"
        },
        {
            category: "학사편입 및 사관편입",
            companies: "용인대, 경기대, 한양대, 선문대, 추부대, 3사관학교 편입 외 다수"
        },
        {
            category: "다국적 이용시설 및 대기업 보안",
            companies: "서울역, 백화점, 롯데월드, 트레스코펄, 도시공항철도, 가덕5, 에스원/에스택, ADT캡스, SK 하이닉스, 삼성SDI, 네이버 외 다수"
        },
        {
            category: "부사관",
            companies: "신변보호경비원, 최사과 훈입경비/경찰원, 안개해안경찰 및 특임부사관 외 다수"
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
                                    <span className="ml-4 text-blue-900 font-medium">Aviation Security</span>
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
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto">
                            <div className="text-2xl font-bold mb-4">항공보안분야 전국 교육기관 중 여럽 최다 취업자 배출!</div>
                            <div className="text-lg mb-4">대통령 경호처 경호원 배출 교육기관!</div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-red-300">신변보호사</div>
                                    <div className="text-xs">합격자 8년 연속 전국 1위</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-red-300">AI 인공지능</div>
                                    <div className="text-xs">보안검색교육과정</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-red-300">민간교육기관 최초</div>
                                    <div className="text-xs">사제폭발물(IED)테러대응</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-red-300">최고 전문가</div>
                                    <div className="text-xs">교수진의 체계적 실무중심</div>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Aviation Security Programs</h2>
                        <p className="text-lg text-gray-600">과정소개 자세히보기</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                                src="https://www.youtube.com/embed/4u6pa3Bl5tw?rel=0&vq=hd720&showinfo=0"
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
                        <p className="text-lg text-gray-600 mb-2">바른 인성과 취업역량을 갖춘 항공보안 인재양성</p>
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
                                    <p className="text-gray-600 mb-4">대학생활 설계 & 진로탐색</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 대학생활 설계</li>
                                        <li>• 연설특강(진로탐색)</li>
                                        <li>• 동아리활동(멘토링)</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 전공입문과정</h4>
                                    <p className="text-gray-600 mb-4">진로목표 & 기초역량개발</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 전공 역량 강화</li>
                                        <li>• 전문 자격 취득</li>
                                        <li>• 취업처 탐방</li>
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
                                    <p className="text-gray-600 mb-4">직무역할 & 진로결정</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 목표 진로분야 설정</li>
                                        <li>• 개인별 진로 로드맵 작성</li>
                                        <li>• 경비•보안 현장실습</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실무능력강화</h4>
                                    <p className="text-gray-600 mb-4">사회진출준비 & 실현</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 이력서, 자소서 준비</li>
                                        <li>• 취업처별 모의면접</li>
                                        <li>• 취업성공 및 발전지도</li>
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
                        <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-12">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-center space-x-8 mb-6">
                                    <div className="text-5xl">🛡️</div>
                                    <div className="text-5xl">🚁</div>
                                    <div className="text-5xl">🏢</div>
                                    <div className="text-5xl">🎯</div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aviation Security Specialization</h3>
                                <p className="text-gray-600 text-lg">
                                    국가안보와 민간보안을 선도하는 전문 보안인력 양성
                                </p>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-red-600">항공보안</div>
                                        <div className="text-gray-600">공항보안검색</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-red-600">의전경비</div>
                                        <div className="text-gray-600">VIP 신변보호</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-red-600">PMC경비</div>
                                        <div className="text-gray-600">민간군사기업</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-red-600">액션연기</div>
                                        <div className="text-gray-600">스턴트 & 무술</div>
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
                            { name: "보안검색실습실", icon: "🔍" },
                            { name: "경비실무실습실", icon: "🛡️" },
                            { name: "액션연기실습실", icon: "🎬" },
                            { name: "격투기실습실", icon: "🥋" },
                            { name: "사격실습실", icon: "🎯" },
                            { name: "체력단련실", icon: "💪" }
                        ].map((facility, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-red-100">
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
                                    <p className="text-sm text-gray-600 mt-1">전문 보안기술 실습교육</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Become a Security Professional?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA's Aviation Security program and protect the future!
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

export default AviationSecurityPage;