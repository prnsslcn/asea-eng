import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData, getColorClasses } from '../../data/curriculum/CurriculumData.ts';

const DepartmentPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">잘못된 접근입니다</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const data = curriculumData[id];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h1>
                    <p className="text-gray-600 mb-4">요청하신 교육과정을 찾을 수 없습니다.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const colorClasses = getColorClasses(data.color);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 히어로 섹션 */}
            <section className={`bg-gradient-to-r ${colorClasses.gradient} text-white py-20`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-6xl mb-4">{data.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {data.name}
                        </h1>
                        <p className="text-xl md:text-2xl mb-6 opacity-90">
                            {data.englishName}
                        </p>
                        <div className="bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-2 inline-block">
                            <span className="text-lg font-semibold">{data.highlight}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 브레드크럼 */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <button
                            onClick={() => navigate('/')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            홈
                        </button>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900">교육과정</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900">{data.name}</span>
                    </nav>
                </div>
            </div>

            {/* 메인 설명 */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.description}</h2>
                        <div className="max-w-4xl mx-auto">
                            <ul className="space-y-3">
                                {data.keyPoints.map((point, index) => (
                                    <li key={index} className="text-lg text-gray-700 flex items-start justify-center">
                                        <span className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-3 mr-3 flex-shrink-0`}></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 과정 소개 및 비디오 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">과정 소개 자세히보기</h3>
                            <div className="space-y-4">
                                {data.courses.map((course, index) => (
                                    <button
                                        key={index}
                                        onClick={() => navigate(course.link)}
                                        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 text-left"
                                    >
                                        <span className="font-medium text-gray-900">{course.name}</span>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {data.videoId && (
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${data.videoId}?rel=0&vq=hd720&showinfo=0`}
                                    className="w-full h-full rounded-lg shadow-lg"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`${data.name} 소개 영상`}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 교육목표 */}
            <section className={`py-16 ${colorClasses.bg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">교육목표</h2>
                        <p className="text-xl text-gray-600">
                            {data.name.includes('항공정비') ? "항공정비부야를 선도할 항공정비사 양성" :
                                data.name.includes('스마트안전') ? "산업계의 안전전문가 스마트 비파괴 기술자 양성" :
                                    data.name.includes('항공관광') ? "항공관광산업에 필요한 글로벌 인재양성" :
                                        data.name.includes('관광경영') ? "세계를 무대로 관광 전문가로 활동" :
                                            data.name.includes('항공보안') ? "다양한 인성과 취업역량을 갖춘 항공보안 인재양성" :
                                                data.name.includes('국방경찰') ? "미래 국가안보를 선도하는 국방·경찰 공무원 양성" :
                                                    "전문분야를 선도할 인재 양성"}
                        </p>
                        <p className="text-lg text-gray-500 mt-2">전문학사 학위 취득</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">1학년</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{data.curriculum.year1.semester1.title}</h4>
                                    <p className="text-gray-600 mb-3">{data.curriculum.year1.semester1.description}</p>
                                    <ul className="space-y-1">
                                        {data.curriculum.year1.semester1.subjects.map((subject, index) => (
                                            <li key={index} className="text-sm text-gray-700">{subject}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{data.curriculum.year1.semester2.title}</h4>
                                    <p className="text-gray-600 mb-3">{data.curriculum.year1.semester2.description}</p>
                                    <ul className="space-y-1">
                                        {data.curriculum.year1.semester2.subjects.map((subject, index) => (
                                            <li key={index} className="text-sm text-gray-700">{subject}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">2학년</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{data.curriculum.year2.semester1.title}</h4>
                                    <p className="text-gray-600 mb-3">{data.curriculum.year2.semester1.description}</p>
                                    <ul className="space-y-1">
                                        {data.curriculum.year2.semester1.subjects.map((subject, index) => (
                                            <li key={index} className="text-sm text-gray-700">{subject}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{data.curriculum.year2.semester2.title}</h4>
                                    <p className="text-gray-600 mb-3">{data.curriculum.year2.semester2.description}</p>
                                    <ul className="space-y-1">
                                        {data.curriculum.year2.semester2.subjects.map((subject, index) => (
                                            <li key={index} className="text-sm text-gray-700">{subject}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 졸업 후 진로 */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">졸업 후 진로</h2>
                        <p className="text-lg text-gray-600">ASEA 졸업생들이 활동하고 있는 주요 기업 및 기관</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <tbody className="divide-y divide-gray-200">
                            {data.employmentCompanies.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-lg font-semibold text-gray-900">{item.category}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-700">{item.companies}</div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 관련 이미지 섹션 (실시설 소개) */}
            <section className={`py-16 ${colorClasses.bg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">실시설 소개</h2>
                        <p className="text-lg text-gray-600">최첨단 시설에서 실무 중심 교육을 경험하세요</p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                        <div className="text-gray-500 mb-4">
                            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-gray-600">실시설 사진이 곧 업데이트됩니다.</p>
                    </div>
                </div>
            </section>

            {/* CTA 섹션 */}
            <section className={`py-16 bg-gradient-to-r ${colorClasses.gradient} text-white`}>
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">더 자세한 정보가 궁금하신가요?</h2>
                    <p className="text-xl mb-8 opacity-90">전문 상담사가 친절하게 안내해드립니다.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/admission/consultation')}
                            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            입학상담 신청
                        </button>
                        <button
                            onClick={() => navigate('/about/facilities')}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            캠퍼스 견학 신청
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold">📞</div>
                                <p className="mt-2">입학상담</p>
                                <p className="text-lg font-semibold">1588-1234</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">📍</div>
                                <p className="mt-2">캠퍼스 위치</p>
                                <p className="text-lg font-semibold">서울캠퍼스 | 이천캠퍼스</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">🎓</div>
                                <p className="mt-2">졸업생 수</p>
                                <p className="text-lg font-semibold">15,000명 이상</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DepartmentPage;