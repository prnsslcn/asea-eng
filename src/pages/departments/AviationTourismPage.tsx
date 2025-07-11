import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const AviationTourismPage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('aviation-tourism');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('aviation-tourism', programId));
    };

    const employmentAreas = [
        {
            category: "국내외 항공사 객실승무원",
            companies: "대한항공, 아시아나항공, 제주항공, 에어부산, 진에어, 피치항공, 에어로K, 플라이강원, 에어서울 외 다수"
        },
        {
            category: "일반 서비스직",
            companies: "KTX/SRT/AREX 객실승무원, 공항 VIP라운지 등의 의전서비스, 병원코디네이터, 전문서비스강사, 기업영업 분서 외 다수"
        },
        {
            category: "여행사",
            companies: "하나투어, 노랑풍선, 트래픽투어, 모두투어, 국외여행인솔자, 하릴링 현지 가이드(해외취업) 외 다수"
        },
        {
            category: "호텔리조트",
            companies: "신라호텔, 롯데호텔, 메리어트 호텔브랜드, 하얏트 호텔, 힐튼 호텔 브랜드, 아코르 호텔 브랜드, 제주신화월드, 국내/국외 호텔 취업 외 다수"
        },
        {
            category: "크루즈 승무원",
            companies: "로얄캐리비안크루즈, 프린세스 크루즈, 코스타 크루즈, 스타 크루즈, 드림 크루즈, 퀸턴드 크루즈, 셀러브리티, 스타라인, 아자마라 외 다수"
        },
        {
            category: "공항 지상직",
            companies: "인천/김포/김해/제주 등 국내 공항 및 해외 공항, 제주에어서비스, 샬틴에이비에이션서비스, 스위스포트 코리아, 피치에어서비스, 에어코리아, KA 외 다수"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
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
                            <div className="text-2xl font-bold mb-4">항공/관광 조합시스템을 통한 다양한 진로선택!</div>
                            <div className="text-lg mb-4">승무원, 관광•호텔 분야를 모두 배워서 있다!</div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-cyan-300">공항지상실습</div>
                                    <div className="text-xs">기계실습실험 & 호텔실습실 운영</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-cyan-300">3+2제도 운영</div>
                                    <div className="text-xs">해외수학여행 & 해외호텔실습</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-cyan-300">5성급 호텔연계</div>
                                    <div className="text-xs">개인인턴 및 학기중 주말인턴</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                    <div className="font-bold text-cyan-300">수도권 유일</div>
                                    <div className="text-xs">크루즈전문인력양성기관</div>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Aviation Tourism Programs</h2>
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
                                src="https://www.youtube.com/embed/Bv7fSjsjIqQ?rel=0&vq=hd720&showinfo=0"
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
                        <p className="text-lg text-gray-600 mb-2">항공관광사업에 필요한 글로벌 인재양성</p>
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
                                    <p className="text-gray-600 mb-4">항공, 관광 기본 분야에 대한 전반적 지식 습득</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 관광학개론</li>
                                        <li>• 항공객실업무개론</li>
                                        <li>• 호텔경영론</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 전공입문과정</h4>
                                    <p className="text-gray-600 mb-4">항공, 관광에 대탄 전반적 이해를 바탕으로 한 다양한 직종군 지식습득</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 항공관광서비스</li>
                                        <li>• 식음료실무</li>
                                        <li>• 현장실습</li>
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
                                    <p className="text-gray-600 mb-4">항공, 관광 현장에서 즉시 적용 가능한 지식 습득 및 목표 취업처 선택</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 문화관광론</li>
                                        <li>• 분석안전실무</li>
                                        <li>• 해외어학연수</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실무능력강화</h4>
                                    <p className="text-gray-600 mb-4">항공, 관광 목표 취업처에 따른 집중 교육</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 여행업실무</li>
                                        <li>• 여객운송실무</li>
                                        <li>• 항공, 가이드, 호텔 분야별 맞춤 취업반 운영</li>
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
                        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-12">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-center space-x-8 mb-6">
                                    <div className="text-5xl">✈️</div>
                                    <div className="text-5xl">🏨</div>
                                    <div className="text-5xl">🌍</div>
                                    <div className="text-5xl">🚢</div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aviation Tourism Specialization</h3>
                                <p className="text-gray-600 text-lg">
                                    항공•관광 융합시스템을 통한 글로벌 서비스 전문가 양성
                                </p>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-blue-600">항공</div>
                                        <div className="text-gray-600">승무원 & 지상직</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-blue-600">호텔</div>
                                        <div className="text-gray-600">리조트 & 관광</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-blue-600">여행</div>
                                        <div className="text-gray-600">가이드 & 여행사</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <div className="font-bold text-blue-600">크루즈</div>
                                        <div className="text-gray-600">승무원 & 서비스</div>
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
                            onClick={() => navigate('/campus-life/facilities')}
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
                            { name: "객실승무원실습실", icon: "✈️" },
                            { name: "호텔실습실", icon: "🏨" },
                            { name: "식음료실습실", icon: "🍽️" },
                            { name: "바리스타실습실", icon: "☕" },
                            { name: "여행실무실습실", icon: "🌍" },
                            { name: "크루즈실습실", icon: "🚢" }
                        ].map((facility, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-cyan-100">
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
                                    <p className="text-sm text-gray-600 mt-1">실무중심 체험형 교육시설</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Explore the Aviation Tourism World?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA's Aviation Tourism program and discover endless career possibilities!
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

export default AviationTourismPage;