import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const SmartSafetyPage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('smart-safety');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('smart-safety', programId));
    };

    const employmentAreas = [
        {
            category: "공기업",
            companies: "한국전기안전공사, 한국가스공사, 한국전력, 관세청, 한국서부발전, 한국남부발전 외 다수"
        },
        {
            category: "중공업 및 조선",
            companies: "포스코, 현대중공업, 삼성중공업, 이수화학, 한화디펜스 외 다수"
        },
        {
            category: "항공분야",
            companies: "대한항공, 아시아나항공, 제주항공, 한국항공우주, 한화에어로스페이스 외 다수"
        },
        {
            category: "비파괴 전문분야",
            companies: "고려공업검사, 대한검사기술, 서울검사, 오르비텍, 아이텍기술, 에어텍 외 다수"
        },
        {
            category: "철도분야",
            companies: "한국철도공사, 인천교통공사, 부산교통공사, 대구교통공사, 공항철도 외 다수"
        },
        {
            category: "편입 및 대학원 진학",
            companies: "한국항공대학교, 고려대학교, 서울과학기술대학교, 한양대학교 외 다수"
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
                                    <span className="ml-4 text-blue-900 font-medium">Smart Safety Diagnostics</span>
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
                            <div className="text-2xl font-bold mb-4">교육이 곧 취업! 졸업 전 '취업 확정 시스템'으로 취업고민 끝!</div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-yellow-300">100% 전원 채용합격</div>
                                    <div className="text-xs">캠퍼스 리쿠르팅 참가자</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-yellow-300">한전KPS</div>
                                    <div className="text-xs">비파괴검사분야 전국 최다합격</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-yellow-300">안전진단 최고 전문가</div>
                                    <div className="text-xs">항공, 철도, 건설, 조선 등</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-yellow-300">해외취업 가능</div>
                                    <div className="text-xs">캐나다 비파괴 산업연수</div>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Safety Diagnostics Programs</h2>
                        <p className="text-lg text-gray-600">과정소개 자세히보기</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
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
                                src="https://www.youtube.com/embed/uKi95U62xKY?rel=0&vq=hd720&showinfo=0"
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
                        <p className="text-lg text-gray-600 mb-2">산업계의 안전전문가 스마트 비파괴 기술자 양성</p>
                        <p className="text-gray-500">전문학사 학위 취득 OR 공학사 학위 취득(선택과정)</p>
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
                                    <p className="text-gray-600 mb-4">비파괴검사의 원리 및 금속재료에 대한 전반적 지식 습득</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 비파괴검사개론</li>
                                        <li>• 금속재료학</li>
                                        <li>• 침투탐상검사 실습</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 전공입문과정</h4>
                                    <p className="text-gray-600 mb-4">산업현장에 적용 가능한 다양한 비파괴검사 방법을 심도 있게 학습</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 초음파탐상검사</li>
                                        <li>• 자기탐상검사 실습</li>
                                        <li>• 용접공학</li>
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
                                    <p className="text-gray-600 mb-4">기업수요에 맞춘 특화된 비파괴검사 실무교육을 집중적으로 학습</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 초음파탐상검사 실습</li>
                                        <li>• 방사선투과검사 실습</li>
                                        <li>• 육안검사</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실무능력강화</h4>
                                    <p className="text-gray-600 mb-4">위상배열초음파 등 첨단기술 교육을 통해 차세대 핵심 비파괴 기술인 양성</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 와전류탐상검사</li>
                                        <li>• 누설검사</li>
                                        <li>• 파괴 및 비파괴 시험</li>
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
                        <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg p-12">
                            <div className="max-w-2xl mx-auto">
                                <div className="text-6xl mb-4">🔬</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Safety Diagnostics Specialization</h3>
                                <p className="text-gray-600">
                                    첨단 비파괴검사 기술을 활용한 산업안전 전문가 양성 프로그램
                                </p>
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
                            { name: "비파괴검사실험실", icon: "🔬" },
                            { name: "초음파탐상검사실", icon: "📡" },
                            { name: "방사선투과검사실", icon: "⚡" },
                            { name: "자기탐상검사실", icon: "🧲" },
                            { name: "침투탐상검사실", icon: "🔍" },
                            { name: "금속재료실험실", icon: "⚙️" }
                        ].map((facility, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-emerald-100">
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
                                    <p className="text-sm text-gray-600 mt-1">첨단 장비를 활용한 실습교육</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Become a Safety Expert?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA's Smart Safety Diagnostics program and secure your future career!
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

export default SmartSafetyPage;