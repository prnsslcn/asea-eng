export interface ProgramDetail {
    title: string;
    description: string;
    highlights: string[];
    image?: string;
}

export interface DepartmentProgram {
    name: string;
    englishName: string;
    color: string;
    bgColor: string;
    textColor: string;
    programs: ProgramDetail[];
}

export interface Benefit {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface ContactInfo {
    type: string;
    title: string;
    phone: string;
    description: string;
}

export interface AseaData {
    hero: {
        title: string;
        subtitle: string;
        description: string;
    };
    departments: DepartmentProgram[];
    benefits: Benefit[];
    contacts: ContactInfo[];
    location: {
        address: string;
        schoolName: string;
        mapInfo: string;
    };
}

export const aseaData: AseaData = {
    hero: {
        title: "ASEA AVIATION",
        subtitle: "아세아의 특별한 혜택",
        description: "33년 넘어 갖은 역사를 자랑하는 아세아항공직업전문학교가 운영하는 특별혜택입니다."
    },

    departments: [
        {
            name: "항공정비계열",
            englishName: "Aviation Maintenance",
            color: "blue",
            bgColor: "bg-blue-600",
            textColor: "text-blue-900",
            programs: [
                {
                    title: "항공정비사과정",
                    description: "항공기정비 전문인력 양성과정으로 국토교통부 지정 항공정비사 전문교육기관에서 체계적인 교육을 실시합니다.",
                    highlights: [
                        "국토교통부 지정 항공정비사 전문교육기관",
                        "실무 중심의 체계적 교육과정",
                        "최신 항공정비 장비 활용"
                    ]
                },
                {
                    title: "항공기계과정",
                    description: "항공기 기계분야 전문 기술자 양성을 위한 실무중심 교육과정입니다.",
                    highlights: [
                        "항공기 기계 전문기술 습득",
                        "현장실무 중심 교육",
                        "산업체 연계 교육과정"
                    ]
                }
            ]
        },
        {
            name: "항공보안계열",
            englishName: "Aviation Security",
            color: "navy",
            bgColor: "bg-slate-700",
            textColor: "text-slate-900",
            programs: [
                {
                    title: "항공보안과정",
                    description: "공항 보안검색 및 항공보안 전문인력 양성을 위한 특화된 교육과정입니다.",
                    highlights: [
                        "공항 보안검색 전문 교육",
                        "최신 보안장비 활용 실습",
                        "현직 보안요원 특강"
                    ]
                },
                {
                    title: "의전경비과정",
                    description: "VIP 경호 및 의전업무 전문가 양성을 위한 실무중심 교육과정입니다.",
                    highlights: [
                        "VIP 경호 전문 기술",
                        "의전 매뉴얼 교육",
                        "실무진 특별강의"
                    ]
                }
            ]
        },
        {
            name: "항공관광계열",
            englishName: "Aviation Tourism",
            color: "pink",
            bgColor: "bg-pink-500",
            textColor: "text-pink-900",
            programs: [
                {
                    title: "승무원과정",
                    description: "항공사 승무원 및 관광서비스 전문인력 양성을 위한 종합교육과정입니다.",
                    highlights: [
                        "항공사 승무원 양성",
                        "서비스 매뉴얼 교육",
                        "외국어 집중 교육"
                    ]
                },
                {
                    title: "리조트관광전문가과정",
                    description: "리조트 및 관광업계 전문가 양성을 위한 실무중심 교육과정입니다.",
                    highlights: [
                        "리조트 운영 실무",
                        "관광상품 기획",
                        "해외연수 기회"
                    ]
                }
            ]
        },
        {
            name: "스마트안전진단계열",
            englishName: "Smart Safety Diagnostics",
            color: "green",
            bgColor: "bg-green-600",
            textColor: "text-green-900",
            programs: [
                {
                    title: "초음파진단과정",
                    description: "첨단 초음파 진단장비를 활용한 안전진단 전문가 양성과정입니다.",
                    highlights: [
                        "최신 초음파 진단기술",
                        "안전진단 실무교육",
                        "산업체 현장실습"
                    ]
                },
                {
                    title: "항공비파괴검사과정",
                    description: "항공기 안전진단을 위한 비파괴검사 전문인력 양성과정입니다.",
                    highlights: [
                        "항공기 비파괴검사",
                        "정밀진단 기술 습득",
                        "국제인증 취득 지원"
                    ]
                }
            ]
        },
        {
            name: "국방경찰AI계열",
            englishName: "Defense & Police AI",
            color: "gray",
            bgColor: "bg-gray-600",
            textColor: "text-gray-900",
            programs: [
                {
                    title: "국방사관과정",
                    description: "국방 분야 장교 양성을 위한 체계적인 군사교육과정입니다.",
                    highlights: [
                        "육군3사관학교 진학 지원",
                        "군사학 전문교육",
                        "리더십 함양 프로그램"
                    ]
                },
                {
                    title: "국방AI과정",
                    description: "국방 분야 AI 전문가 양성을 위한 최신 기술교육과정입니다.",
                    highlights: [
                        "AI 기술 전문교육",
                        "국방 분야 적용사례",
                        "최신 장비 활용 실습"
                    ]
                }
            ]
        }
    ],

    benefits: [
        {
            icon: "🏆",
            title: "국내 최대규모 항공특성화 전문 교육기관",
            subtitle: "전문성과 규모의 강점",
            description: "전국에서 가장 큰 규모의 항공특성화 교육기관으로 최고의 교육환경을 제공합니다."
        },
        {
            icon: "🎯",
            title: "취업에 강한 실무중심 교육",
            subtitle: "현장 실무능력 향상",
            description: "산업체 연계 실무중심 교육으로 졸업과 동시에 현장 투입이 가능한 전문인력을 양성합니다."
        },
        {
            icon: "✈️",
            title: "해외어학연수 및 취업 프로그램",
            subtitle: "글로벌 역량 강화",
            description: "해외 어학연수 기회 제공과 글로벌 항공업계 진출을 위한 체계적인 프로그램을 운영합니다."
        },
        {
            icon: "🎓",
            title: "학생중심 아세아의 장점",
            subtitle: "개별 맞춤형 교육",
            description: "학생 개개인의 특성과 진로에 맞는 맞춤형 교육과 진로지도를 제공합니다."
        },
        {
            icon: "🏢",
            title: "취업시설과 취업 & 취업과 영상 전문 교육기관",
            subtitle: "취업 보장 시스템",
            description: "체계적인 취업지원 시스템과 산학협력을 통한 안정적인 취업을 보장합니다."
        }
    ],

    contacts: [
        {
            type: "입학 전문상담",
            title: "입학 상담",
            phone: "02-717-8811",
            description: "입학 관련 모든 문의사항을 전문 상담사가 친절히 안내해드립니다."
        },
        {
            type: "취업 전문상담",
            title: "취업 상담",
            phone: "02-717-8811",
            description: "졸업 후 취업 관련 상담 및 진로지도를 전문적으로 제공합니다."
        }
    ],

    location: {
        address: "서울특별시 영등포구 당산로 32길 16",
        schoolName: "아세아항공직업전문학교",
        mapInfo: "당산역 2호선 2번 출구에서 도보 5분 거리"
    }
};

// 계열별 색상 헬퍼 함수
export const getDepartmentColorClasses = (color: string) => {
    switch (color) {
        case 'blue':
            return {
                bg: 'bg-blue-600',
                bgLight: 'bg-blue-50',
                text: 'text-blue-900',
                textLight: 'text-blue-700',
                border: 'border-blue-200',
                hover: 'hover:bg-blue-700'
            };
        case 'navy':
            return {
                bg: 'bg-slate-700',
                bgLight: 'bg-slate-50',
                text: 'text-slate-900',
                textLight: 'text-slate-700',
                border: 'border-slate-200',
                hover: 'hover:bg-slate-800'
            };
        case 'pink':
            return {
                bg: 'bg-pink-500',
                bgLight: 'bg-pink-50',
                text: 'text-pink-900',
                textLight: 'text-pink-700',
                border: 'border-pink-200',
                hover: 'hover:bg-pink-600'
            };
        case 'green':
            return {
                bg: 'bg-green-600',
                bgLight: 'bg-green-50',
                text: 'text-green-900',
                textLight: 'text-green-700',
                border: 'border-green-200',
                hover: 'hover:bg-green-700'
            };
        case 'gray':
            return {
                bg: 'bg-gray-600',
                bgLight: 'bg-gray-50',
                text: 'text-gray-900',
                textLight: 'text-gray-700',
                border: 'border-gray-200',
                hover: 'hover:bg-gray-700'
            };
        default:
            return {
                bg: 'bg-blue-600',
                bgLight: 'bg-blue-50',
                text: 'text-blue-900',
                textLight: 'text-blue-700',
                border: 'border-blue-200',
                hover: 'hover:bg-blue-700'
            };
    }
};

export default aseaData;