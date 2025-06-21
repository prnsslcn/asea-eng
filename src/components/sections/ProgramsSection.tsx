import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Course {
    name: string;
    link?: string;
}

interface Department {
    id: number;
    name: string;
    englishName: string;
    description: string;
    highlight: string;
    keyPoints: string[];
    courses: Course[];
    icon: string;
    color: string;
}

const departments: Department[] = [
    {
        id: 1,
        name: "항공정비계열",
        englishName: "Aviation Maintenance",
        description: "국토교통부 지정! 항공정비사 양성교육기관",
        highlight: "91% 취업률",
        keyPoints: [
            "국내최신! 국내최대! 항공화력기관 3기종 동시인가",
            "국내 최대규모의 실시설을 갖춘 항공정비전용 실시설 운영",
            "항공비행과 직업 및 드론 전문가 양성 전문교육기관"
        ],
        courses: [
            { name: "항공정비사과정", link: "/curriculum/01/01" },
            { name: "항공기계과정", link: "/curriculum/01/02" },
            { name: "항공부사관과정", link: "/curriculum/01/03" },
            { name: "드론(조종.정비)과정", link: "/curriculum/01/04" },
            { name: "항공정비공학사과정[3년제]", link: "/curriculum/01/05" }
        ],
        icon: "✈️",
        color: "blue"
    },
    {
        id: 2,
        name: "스마트안전진단계열",
        englishName: "Smart Safety Diagnosis",
        description: "교육이 곧 취업! 졸업 즉 '취업 확정 시스템'으로 취업고민 끝!",
        highlight: "100% 전용 채용협약",
        keyPoints: [
            "국내 캠퍼스 리더십테 평가자 100% 전용 채용협약",
            "한전KPS 비파괴검사부야 / 전국 최다협약",
            "항공, 철도, 건설, 조선 등 다양한 부야의 안전진단 최고 전문가로 취업"
        ],
        courses: [
            { name: "초음파진단과정", link: "/curriculum/02/01" },
            { name: "항공비파괴검사과정", link: "/curriculum/02/02" },
            { name: "금속공학사과정[3년제]", link: "/curriculum/02/03" }
        ],
        icon: "🔬",
        color: "green"
    },
    {
        id: 3,
        name: "항공관광계열",
        englishName: "Aviation Tourism",
        description: "항공/관광 전문복합시스템을 통한 다양한 진로선택!",
        highlight: "해외 어학연수",
        keyPoints: [
            "공항종합시설 & 교내실시설 & 리조트실시설 운영",
            "리조트&관광 열대 3관위 - 해양수상부, 문화체육관광부, 한국관광공사 선정&인증기관",
            "전화생 해외 어학연수 및 해외 리조트실시 기회 제공"
        ],
        courses: [
            { name: "승무원과정", link: "/curriculum/03/01" },
            { name: "리조트관광전문가과정", link: "/curriculum/03/05" },
            { name: "실시설전문가과정", link: "/curriculum/03/03" }
        ],
        icon: "🏖️",
        color: "purple"
    },
    {
        id: 4,
        name: "관광경영계열",
        englishName: "Tourism Management",
        description: "세계를 무대로 관광 전문가로 활동",
        highlight: "국제적 수준의 관광 교육프로그램",
        keyPoints: [
            "21세기 성장산업인 관광부야에서 미래의 관광산업을 주도할 수 있는 관광전문가를 육성",
            "국제적 수준의 관광 교육프로그램을 운영",
            "세계를 무대로 관광 전문가로 활동하고자 하는 젊은이들의 도전을 기다림"
        ],
        courses: [
            { name: "관광서비스과정", link: "/curriculum/04/01" },
            { name: "리조트·외식과정", link: "/curriculum/04/02" },
            { name: "카지노딜러과정", link: "/curriculum/04/03" },
            { name: "크루즈승무원과정", link: "/curriculum/04/04" }
        ],
        icon: "🌍",
        color: "orange"
    },
    {
        id: 5,
        name: "항공보안계열",
        englishName: "Aviation Security",
        description: "항공보안부야 전국 교육기관 중 열대 최다 취업자 배출!",
        highlight: "신변보호사 합격자 전국 1위",
        keyPoints: [
            "공항종합시설 및 최대규 모의 보안·경비·암실 실시설 보유",
            "국내 최대 AI 인공지능 보안검색교육과정",
            "신변보호사 합격자 배출 전국 교육기관 중 1위 달성"
        ],
        courses: [
            { name: "항공보안과정", link: "/curriculum/05/01" },
            { name: "의전경비과정", link: "/curriculum/05/02" },
            { name: "PMC경비과정", link: "/curriculum/05/05" },
            { name: "암실연기과정", link: "/curriculum/05/04" },
            { name: "스카치콘서트엔터테인먼트과정", link: "/curriculum/05/06" }
        ],
        icon: "🛡️",
        color: "red"
    },
    {
        id: 6,
        name: "국방경찰AI계열",
        englishName: "Defense Police AI",
        description: "미래 국가안보를 선도하는 AI 기반의 국방·경찰 공무원 양성!",
        highlight: "91% 달성",
        keyPoints: [
            "육군3사관학교 합격률, 10년 연속 전국 1~2위 달성",
            "군인학사 합격자 8년 연속 서울 수위 1위 달성",
            "맞춤형 군 예비 및 부사관, 군무원, 경찰공무원 양성"
        ],
        courses: [
            { name: "국방사관과정", link: "/curriculum/06/01" },
            { name: "국방부사관과정", link: "/curriculum/06/02" },
            { name: "국방AI과정", link: "/curriculum/06/03" },
            { name: "경찰공무원과정", link: "/curriculum/06/04" }
        ],
        icon: "🎖️",
        color: "navy"
    }
];

const getColorClasses = (color: string) => {
    const colors = {
        blue: {
            bg: 'bg-blue-50 hover:bg-blue-100',
            border: 'border-blue-200 hover:border-blue-300',
            text: 'text-blue-600',
            accent: 'bg-blue-600',
            highlight: 'bg-blue-100 text-blue-800'
        },
        green: {
            bg: 'bg-green-50 hover:bg-green-100',
            border: 'border-green-200 hover:border-green-300',
            text: 'text-green-600',
            accent: 'bg-green-600',
            highlight: 'bg-green-100 text-green-800'
        },
        purple: {
            bg: 'bg-purple-50 hover:bg-purple-100',
            border: 'border-purple-200 hover:border-purple-300',
            text: 'text-purple-600',
            accent: 'bg-purple-600',
            highlight: 'bg-purple-100 text-purple-800'
        },
        orange: {
            bg: 'bg-orange-50 hover:bg-orange-100',
            border: 'border-orange-200 hover:border-orange-300',
            text: 'text-orange-600',
            accent: 'bg-orange-600',
            highlight: 'bg-orange-100 text-orange-800'
        },
        red: {
            bg: 'bg-red-50 hover:bg-red-100',
            border: 'border-red-200 hover:border-red-300',
            text: 'text-red-600',
            accent: 'bg-red-600',
            highlight: 'bg-red-100 text-red-800'
        },
        navy: {
            bg: 'bg-slate-50 hover:bg-slate-100',
            border: 'border-slate-200 hover:border-slate-300',
            text: 'text-slate-600',
            accent: 'bg-slate-600',
            highlight: 'bg-slate-100 text-slate-800'
        }
    };
    return colors[color as keyof typeof colors] || colors.blue;
};

const ProgramsSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 섹션 헤더 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        교육과정 소개
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        전국 항공분야 최다 취업자 배출 • 91% 취업률
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* 계열 카드 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept) => {
                        const colorClasses = getColorClasses(dept.color);

                        return (
                            <div
                                key={dept.id}
                                className={`group relative ${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                                onClick={() => navigate(`/curriculum/${dept.id.toString().padStart(2, '0')}`)}
                            >
                                {/* 아이콘과 하이라이트 */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-4xl">{dept.icon}</div>
                                    <div className={`${colorClasses.highlight} px-3 py-1 rounded-full text-sm font-semibold`}>
                                        {dept.highlight}
                                    </div>
                                </div>

                                {/* 계열명 */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {dept.name}
                                </h3>
                                <p className={`text-sm font-medium ${colorClasses.text} mb-3`}>
                                    {dept.englishName}
                                </p>

                                {/* 설명 */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {dept.description}
                                </p>

                                {/* 핵심 포인트 */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">핵심 특징</h4>
                                    <ul className="space-y-1">
                                        {dept.keyPoints.slice(0, 2).map((point, index) => (
                                            <li key={index} className="text-xs text-gray-600 flex items-start">
                                                <span className={`w-1.5 h-1.5 ${colorClasses.accent} rounded-full mt-1.5 mr-2 flex-shrink-0`}></span>
                                                <span className="line-clamp-2">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 세부 과정 */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">세부 과정 ({dept.courses.length}개)</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {dept.courses.slice(0, 3).map((course, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-white px-2 py-1 rounded text-xs text-gray-700 border"
                                            >
                        {course.name.replace(/과정|[3년제]|\[|\]/g, '')}
                      </span>
                                        ))}
                                        {dept.courses.length > 3 && (
                                            <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs text-gray-500">
                        +{dept.courses.length - 3}개
                      </span>
                                        )}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${colorClasses.text}`}>
                    자세히 보기
                  </span>
                                    <svg
                                        className={`w-5 h-5 ${colorClasses.text} transform group-hover:translate-x-1 transition-transform`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* 호버 효과 오버레이 */}
                                <div className={`absolute inset-0 ${colorClasses.accent} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* 하단 CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        더 자세한 교육과정 정보가 궁금하신가요?
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                        입학상담 신청하기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;