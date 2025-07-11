import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';

const AviationMaintenancePage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('aviation-maintenance');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('aviation-maintenance', programId));
    };

    const employmentAreas = [
        {
            category: "항공사",
            companies: "대한항공, 아시아나항공, 진에어, 피치항공, 제주항공 외 다수"
        },
        {
            category: "공항기관",
            companies: "삼성항공본부, 해양경찰청, 경찰청 외 다수"
        },
        {
            category: "MRO 항공기 제작",
            companies: "HIZEAERO, 한화에어로스페이스, KAI, 한국항공서비스, 샬빈테크놀로지스컴퍼니 외 다수"
        },
        {
            category: "헬리콥터",
            companies: "현안항공, HELI, UI Helicopter, AERO PEACE, RHF 외 다수"
        },
        {
            category: "부사관",
            companies: "대한민국공군, 대한민국해군, 대한민국육군, 대한민국해병대 외 다수"
        },
        {
            category: "기타",
            companies: "에어부산, 에어서울, CATHAY PACIFIC, SHARP, FLY GANGWON 외 다수"
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
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">국내최대</div>
                                    <div className="text-sm">모집정원 420명</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">3기종</div>
                                    <div className="text-sm">동시 교육 시스템</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">국토부 지정</div>
                                    <div className="text-sm">항공정비사 양성기관</div>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Aviation Maintenance Programs</h2>
                        <p className="text-lg text-gray-600">세부 과정 자세히보기</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="mt-16">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">Department Introduction Video</h3>
                            </div>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.youtube.com/embed/vmi7OI8crHw?rel=0&vq=hd720&showinfo=0"
                                    className="w-full h-96"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Goals */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Goals</h2>
                        <p className="text-lg text-gray-600 mb-2">항공정비분야를 선도할 항공정비사 양성</p>
                        <p className="text-gray-500">전문학사 학위 과정 OR 공학사 학위 과정(선택과정)</p>
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
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. 전공기본학과</h4>
                                    <p className="text-gray-600 mb-4">항공기 엔진, 기체, 정비일반, 전자 등 기본 지식 습득</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 본인의 전성 및 적성파악</li>
                                        <li>• 진로상담</li>
                                        <li>• 진로컨설팅</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 전공전문과정</h4>
                                    <p className="text-gray-600 mb-4">항공자격 과정 준비 교육</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 진로 목표 설정</li>
                                        <li>• 전공 지식습득</li>
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
                                    <p className="text-gray-600 mb-4">항공기 실습의 정비 및 검사 습득</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 자격증 취득을 위한 전공 특강</li>
                                        <li>• 외국어 역량 강화</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실무능력강화</h4>
                                    <p className="text-gray-600 mb-4">A320MTD, B737FTD, A320FTD 교육을 통한 기술인 양성</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• 취업역량강화 프로그램</li>
                                        <li>• 현장 실습 및 실사</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Employment Areas */}
            <div className="py-16 bg-gray-50">
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

            {/* Facilities Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Facilities</h2>
                            <p className="text-lg text-gray-600">실사실 소개</p>
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
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-blue-200">
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 10h10M7 13h10M7 16h10" />
                                            </svg>
                                            <p className="text-blue-600 font-medium">Training Facility {item}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                                        Aviation Maintenance Lab {item}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Aviation Career?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA Aviation College and turn your aviation dreams into reality!
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

export default AviationMaintenancePage;