// ASEA 페이지 관련 모든 데이터

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
        title: "하늘을 향한 첫 걸음",
        subtitle: "항공 전문가 꿈을 현실로!",
        description: "아세아항공직업전문학교는 전국 항공전문학교 중 역대 '최다 취업자'를 배출한 항공특성화 교육기관입니다."
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
                    title: "교육과정",
                    description: "항공정비사/ 항공기계/ 항공부사관/ 드론(조종•정비)/ 항공정비공학사[3년제]",
                    highlights: [
                        "2년 과정 • 2년제 전문학사 학위",
                        "4년 과정 • 4년제 학사 학위"
                    ]
                },
                {
                    title: "계열 특•장점",
                    description: "대한민국 항공정비 산업분야 항공정비사 인재 양성 목표 현장 실무 중심의 취업 맞춤 항공정비 교육과정",
                    highlights: [
                        "국토교통부 지정 항공정비사(면허)과정 전문교육기관 (국토교통부 모집정원 전국 교육기관 중 최다규모 인가) *420명",
                        "국내 유일! 국내 최초 항공훈련 기종교육 3개부문 동시 인가 (B737NG/ C172/ B737NG 교관과정)",
                        "국내 초대형 규모 항공정비 전문 실습시설",
                        "육군•해군•공군•해병대 항공기 정비 부사관 양성 (육해군장학부사관)",
                        "항공정비계열 취업 특성화 (항공사 취업군부사관 드론 기계 등)"
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
                    title: "교육과정",
                    description: "항공보안 / 의전경호 / PMC경호 / 스포츠재활컨디셔닝 / 액션연기",
                    highlights: [
                        "2년 과정 • 2년제 전문학사 학위"
                    ]
                },
                {
                    title: "계열 특•장점",
                    description: "항공산업 분야 안전을 위한 항공보안 전문인력 양성, 공항, 항만, 철도 등 국가중요시설 전문 보안검색요원 양성",
                    highlights: [
                        "항공보안분야 전국 교육기관 중 역대 최다 취업자 배출",
                        "국내최초 AI (인공지능) 보안검색 교육과정 학습 지원",
                        "신변보호사 합격자 배출 전국 교육기관 중 8년 연속 1위 달성",
                        "민간 교육기관 최초 사제폭발물(IED) 테러대응 교육 프로그램 운영",
                        "각종 무도단증 취득 가능 (태권도 유도 합기도 경호무술 용무도 등)",
                        "보안 및 무도관련 실무 훈련 실습실 운영 (중기조작실습실, 레펠트레이닝센터 등)"
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
                    title: "교육과정",
                    description: "승무원 / 호텔관광전문가 / 식음료전문가",
                    highlights: [
                        "2년 과정 • 2년제 전문학사 학위"
                    ]
                },
                {
                    title: "계열 특•장점",
                    description: "국제매너와 서비스 전문성을 갖춘 항공관광 글로벌 인재양성",
                    highlights: [
                        "학기중 3+2제도를 통한 취업 특화 프로그램 운영 (3일 이론교육 + 2일 산학 실무교육)",
                        "전용 공항실습장 & 기내실습실 & 호텔식음료실습실 운영",
                        "재학생 대상 외국어 어학연수/ 해외 호텔실습 기회 제공",
                        "호텔서비스 인력양성 우수기관 선정(한국관광공사)",
                        "5성급 호텔연계 인턴십 운영 (계절인턴, 학기중 주말인턴)",
                        "수도권 유일 크루즈전문인력 양성기관 2회연속 선정(해양수산부)",
                        "칵테일, 커피, 와인 자격증 필기 실기 시험장 지정"
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
                    title: "교육과정",
                    description: "초음파진단/ 항공비파괴검사/ 금속공학사[3년제]",
                    highlights: [
                        "2년 과정 • 2년제 전문학사 학위",
                        "3년 과정 • 4년제 학사 학위"
                    ]
                },
                {
                    title: "계열 특•장점",
                    description: "첨단산업계 안전전문가 및 초음파검사기술 전문인 양성",
                    highlights: [
                        "졸업 전 취업확정 시스템으로 취업고민 해결",
                        "2023년 교내 캠퍼스리쿠르팅 참가자 100% 전원 채용합격",
                        "항공/철도/건설/조선업계 등 안전진단 전문가로 취업",
                        "캐나다 비파괴 산업연수 및 프로그램 운영 → 해외취업 적극 연계",
                        "2024학년도 계열 신입생 전원 산학연 장학금 지급"
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
                    title: "교육과정",
                    description: "국방사관/ 국방부사관/ 국방AI/ 경찰공무원",
                    highlights: [
                        "2년 과정 • 2년제 전문학사 학위"
                    ]
                },
                {
                    title: "계열 특•장점",
                    description: "우수한 리더십을 갖춘 군 장교 및 부사관, 경찰공무원 양성",
                    highlights: [
                        "육군3사관학교 배출 10년 연속 전국 1위 달성 (전국 4년제 대학교 및 직업전문학교 누적 합격자 기준)",
                        "군 장학생(군 가산복무 부사관) 합격자 6년연속 서울/수도권 지역 1위 달성",
                        "영관급 장교 및 경찰간부 출신 전문 교수진 편성",
                        "졸업생 평균 합격률 최근 9년간 91% 달성 (장교, 부사관 등)",
                        "국내 최초 가상현실(VR) 영상사격훈련 실습실 운영",
                        "육군3사관학교 편입학 최우선 교육지원"
                    ]
                }
            ]
        }
    ],

    benefits: [
        {
            icon: "🏛️",
            title: "국내 최대규모 항공특성화 전문 교육기관",
            subtitle: "전문학사 학위 및 4년제 학사학위 수여 (교육부장관)",
            description: "국토교통부 지정 항공전문 교육기관으로 전국 항공전문학교 중 재학생 수 1위, 국내 최대규모 항공정비사 과정 운영 (모집정원 420명)"
        },
        {
            icon: "💼",
            title: "취업에 강한 실무중심 교육",
            subtitle: "전국 항공전문학교 역대 최다 취업자 배출 교육기관",
            description: "2023년 교내 취업박람회 참가자 100% 전원채용 합격, 대한항공•아시아나항공 등 대형/LCC 항공사 매년 취업자 배출"
        },
        {
            icon: "🌏",
            title: "해외어학연수 및 유학 프로그램",
            subtitle: "글로벌 역량 강화를 위한 다양한 해외 프로그램",
            description: "방학 중 해외 어학연수•호텔실습, 미국FAA•캐나다TC 항공정비사 유학 프로그램, 캐나다 NDT 비파괴검사 국가자격 취득 지원"
        },
        {
            icon: "🎓",
            title: "학생중심 아세아의 장점!",
            subtitle: "최적의 교육환경과 학생 지원 시스템",
            description: "아세아 전용 생활관(기숙사), 다양한 장학제도, 영등포구청역 도보 1분 교통편의, 맞춤형 학생관리 시스템&책임지도 교수제 운영"
        },
        {
            icon: "🪖",
            title: "육군3사관학교 편입 & 부사관 양성 전문 교육기관",
            subtitle: "육군3사관학교 배출 10년 연속 전국 1위 달성",
            description: "여자생도 7년 연속 배출, 군 장학생 합격자 7년 연속 서울/수도권 1위, 최근 9년간 졸업생 91% 장교/부사관 진출"
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