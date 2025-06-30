export interface Course {
    name: string;
    link: string;
}

export interface EmploymentCompany {
    category: string;
    companies: string;
}

export interface CurriculumDataType {
    id: number;
    name: string;
    englishName: string;
    description: string;
    highlight: string;
    keyPoints: string[];
    courses: Course[];
    videoId?: string;
    curriculum: {
        year1: {
            semester1: { title: string; description: string; subjects: string[] };
            semester2: { title: string; description: string; subjects: string[] };
        };
        year2: {
            semester1: { title: string; description: string; subjects: string[] };
            semester2: { title: string; description: string; subjects: string[] };
        };
    };
    employmentCompanies: EmploymentCompany[];
    icon: string;
    color: string;
}

export const curriculumData: Record<string, CurriculumDataType> = {
    "01": {
        id: 1,
        name: "항공정비계열",
        englishName: "Aviation Maintenance",
        description: "국토교통부 지정! 항공정비사 양성교육기관",
        highlight: "91% 취업률",
        keyPoints: [
            "국내최신! 국내최대! - 항공화력기관 3기종 동시인가(B737NG/C172/B737NG 교육과정)",
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
        videoId: "vmi7OI8crHw",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "항공기 엔진, 기체, 정비일반, 전자 등 기본 지식 습득",
                    subjects: ["1.비행의 원리 및 역사와 항공기법", "2.추진장치", "3.추력관리"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "항공자격 취득 준비 교육",
                    subjects: ["1.추진 모터 설정", "2.전공 지식습득"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "항공기 실습의 정비 및 검사 습득",
                    subjects: ["1.자격증 취득을 위한 전공 특강", "2.외국어 역량 강화"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "A320MTD, B737FTD, A320FTD 교육을 통한 기술인 양성",
                    subjects: ["1.취업역량강화 프로그램", "2.현장 실무 및 실시"]
                }
            }
        },
        employmentCompanies: [
            { category: "항공사", companies: "대한항공, 아시아나항공, 진에어, 페가수스항공, 제주항공 외 다수" },
            { category: "공항기관", companies: "삼성항공본부, 해양경찰청, 경찰청 외 다수" },
            { category: "MRO 항공기 제작", companies: "HIZEAERO, 한화에어로스페이스, KAI, 한국항공서비스, 샘한테크날러시아 외 다수" },
            { category: "헬리콥터", companies: "현대항공, HELI, UI Helicopter, AERO PEACE, RHF 외 다수" },
            { category: "부사관", companies: "대한민국공군, 대한민국해군, 대한민국육군, 대한민국해병대 외 다수" },
            { category: "기타", companies: "에어부산, 에어서울, CATHAY PACIFIC, SHARP, FLY GANGWON 외 다수" }
        ],
        icon: "✈️",
        color: "blue"
    },

    "02": {
        id: 2,
        name: "스마트안전진단계열",
        englishName: "Smart Safety Diagnosis",
        description: "교육이 곧 취업! 졸업 즉 '취업 확정 시스템'으로 취업고민 끝!",
        highlight: "100% 전용 채용협약",
        keyPoints: [
            "국내 캠퍼스 리더십테 평가자 100% 전용 채용협약",
            "한전KPS 비파괴검사부야 / 전국 최다협약",
            "항공, 철도, 건설, 조선 등 다양한 부야의 안전진단 최고 전문가로 취업",
            "캐나다 비파괴 사업연수 및 취업프로그램 운영으로 해외취업 가능"
        ],
        courses: [
            { name: "초음파진단과정", link: "/curriculum/02/01" },
            { name: "항공비파괴검사과정", link: "/curriculum/02/02" },
            { name: "금속공학사과정[3년제]", link: "/curriculum/02/03" }
        ],
        videoId: "uKi95U62xKY",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "비파괴검사의 원리 및 금속이론에 대한 전반적 지식 습득",
                    subjects: ["1.비파괴검사개론", "2.금속이론학", "3.컴퓨터상검사 실시"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "산업현장에 적용 가능한 다양한 비파괴검사 방법을 심도 있게 학습",
                    subjects: ["1.초음파탐상검사", "2.자기탐상검사 실시", "3.용접공학"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "기업수요에 맞춘 특화된 비파괴검사 실무교육을 집중적으로 학습",
                    subjects: ["1.초음파탐상검사 실시", "2.방사선투과검사 실시", "3.와전류검사"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "위상배열초음파 등 첨단기술 교육을 통해 차세대 핵심 비파괴검사 기술인 양성",
                    subjects: ["1.인덕턴스탐상검사", "2.누설검사", "3.파괴 및 비파괴검사 시험"]
                }
            }
        },
        employmentCompanies: [
            { category: "공기업", companies: "한국전기안전공사, 한국가스공사, 한전, 관세청, 한국남부발전, 한국동부발전 외 다수" },
            { category: "중공업 및 조선", companies: "포스코, 현대중공업, 삼성중공업, 이수화학, 한화듀폰세이프티 외 다수" },
            { category: "항공부야", companies: "대한항공, 아시아나항공, 제주항공, 한국항공우주, 한화에어로스페이스 외 다수" },
            { category: "비파괴검사 전문부야", companies: "고려검사기술, 대한검사, 서울검사, 오메가테스팅, 아이테크기술, 에어테크 외 다수" },
            { category: "철도부야", companies: "한국철도공사, 인천교통공사, 부산교통공사, 대구교통공사, 공항철도 외 다수" },
            { category: "학위취득 및 대학원 진학", companies: "연세대, 경국대, 선문대, 한양대, 충북대, 3사관학교 편입 외 다수" }
        ],
        icon: "🔬",
        color: "green"
    },

    "03": {
        id: 3,
        name: "항공관광계열",
        englishName: "Aviation Tourism",
        description: "항공/관광 전문복합시스템을 통한 다양한 진로선택!",
        highlight: "해외 어학연수",
        keyPoints: [
            "공항종합시설 & 교내실시설 & 리조트실시설 운영",
            "리조트&관광 열대 3관위 - 해양수상부, 문화체육관광부, 한국관광공사 선정&인증기관",
            "전화생 해외 어학연수 및 해외 리조트실시 기회 제공",
            "5성급 호텔연계 개인인턴 및 학위인증 주문인턴 운영 공항 현지 실시생 운영",
            "수도권 유일 해양수상부선정 '크루즈전문인력양성기관'(주요 해외 크루즈선사 취업)"
        ],
        courses: [
            { name: "승무원과정", link: "/curriculum/03/01" },
            { name: "리조트관광전문가과정", link: "/curriculum/03/05" },
            { name: "실시설전문가과정", link: "/curriculum/03/03" }
        ],
        videoId: "Bv7fSjsjIqQ",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "항공, 관광 기본 부야에 대한 전반적 지식 습득",
                    subjects: ["1.관광학개론", "2.항공객실업무개론", "3.리조트경영론"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "항공, 관광에 대립 전반적 이해를 바탕으로 한 다양한 직무군 지식습득",
                    subjects: ["1.항공관광서비스", "2.실시설실무", "3.현지실시"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "항공, 관광 현지에서 적용 가능한 지식 습득 및 모의 취업처 선택",
                    subjects: ["1.문화관광론", "2.비서안전실무", "3.해외어학연수"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "항공, 관광 모의 취업처에 맞춘 집중 교육",
                    subjects: ["1.여행업실무", "2.여객서권실무", "3.항공, 가이드, 리조트 부야별 맞춤 취업반 운영"]
                }
            }
        },
        employmentCompanies: [
            { category: "국내외 항공사 객실승무원", companies: "대한항공, 아시아나항공, 제주항공, 에어부산, 진에어, 페가수스항공, 에어로K, 플라이강원, 에어서울 외 다수" },
            { category: "일반 서비스직", companies: "KTX/SRT/AREX 객실승무원, 공항 VIP라운지 등의 의전서비스, 백화점카운터, 전문서비스강사, 기업임원 비서 외 다수" },
            { category: "여행사", companies: "하나투어, 날러한선, 트래블닷컴, 모두투어, 국외여행인수자, 코리아 현지 가이드(해외취업) 외 다수" },
            { category: "호텔리어", companies: "신라호텔, 롯데호텔, 메리어트 호텔브랜드, 하얏트 리조트, 홍탑 리조트 브랜드, 아코르 리조트 브랜드, 제주신화월드, 국내/국외 리조트 취업 외 다수" },
            { category: "크루즈 승무원", companies: "로얄카리비안크루즈, 프린세스 크루즈, 코스타 크루즈, 스타 크루즈, 드림 크루즈, 트나드 크루즈, 셀리브리티, 스테이션, 아자마라 외 다수" },
            { category: "공항 지상직", companies: "인천/김포/김해/제주 등 국내 공항 및 해외 공항, 제주에어서비스, 샘한에이비에이션, 스위스포트 코리아, 페가수스에어서비스, 에어코리아, KA 외 다수" }
        ],
        icon: "🏖️",
        color: "purple"
    },

    "04": {
        id: 4,
        name: "관광경영계열",
        englishName: "Tourism Management",
        description: "세계를 무대로 관광 전문가로 활동",
        highlight: "국제적 수준의 관광 교육프로그램",
        keyPoints: [
            "관광경영 계열에서는 21세기 성장산업인 관광부야에서 미래의 관광산업을 주도할 수 있는 관광전문가를 육성하기 위하여 국제적 수준의 관광 교육프로그램을 운영하고 있습니다.",
            "세계를 무대로 관광 전문가로 활동하고자 하는 젊은이들의 도전을 기다리고 있습니다."
        ],
        courses: [
            { name: "관광서비스과정", link: "/curriculum/04/01" },
            { name: "리조트·외식과정", link: "/curriculum/04/02" },
            { name: "카지노딜러과정", link: "/curriculum/04/03" },
            { name: "크루즈승무원과정", link: "/curriculum/04/04" }
        ],
        videoId: "GeG4vSooKIk",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "관광경영의 기본 이론과 실무 지식 습득",
                    subjects: ["1.관광학개론", "2.관광경영론", "3.호텔경영론"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "관광산업 각 분야별 전문 지식과 실무 능력 배양",
                    subjects: ["1.여행업경영", "2.외식산업론", "3.카지노경영"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "글로벌 관광산업 트렌드와 현장 적용 능력 강화",
                    subjects: ["1.국제관광론", "2.관광마케팅", "3.서비스경영론"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "취업 목표 분야별 맞춤 실무 교육과 현장 실습",
                    subjects: ["1.현장실습", "2.취업특강", "3.졸업작품"]
                }
            }
        },
        employmentCompanies: [
            { category: "관광서비스", companies: "하나투어, 모두투어, 온라인투어, 롯데관광, 노랑풍선 외 다수" },
            { category: "호텔리조트", companies: "신라호텔, 롯데호텔, 하얏트, 메리어트, 힐튼 외 다수" },
            { category: "외식업체", companies: "롯데리아, CJ푸드빌, 신세계푸드, 현대그린푸드 외 다수" },
            { category: "카지노", companies: "파라다이스시티, 그랜드코리아레저, 강원랜드 외 다수" },
            { category: "크루즈", companies: "로얄카리비안, 프린세스크루즈, 코스타크루즈 외 다수" },
            { category: "항공관광", companies: "대한항공, 아시아나항공, 제주항공, 에어부산 외 다수" }
        ],
        icon: "🌍",
        color: "orange"
    },

    "05": {
        id: 5,
        name: "항공보안계열",
        englishName: "Aviation Security",
        description: "항공보안부야 전국 교육기관 중 열대 최다 취업자 배출!",
        highlight: "신변보호사 합격자 전국 1위",
        keyPoints: [
            "공항종합시설 및 최대규 모의 보안·경비·암실 실시설 보유",
            "국내 최대 AI 인공지능 보안검색교육과정 하입자우(4년제시대 인증성 프로그램)",
            "민간교육기관 최대 사제테너리스트(IED)테러대안 교육프로그램 정규과정 개발·운영(국내 교육기관 유일)",
            "신변보호사 합격자 배출 전국 교육기관 중 1위 달성(본교 신변보호사 자격검정 시험장선정)",
            "각 부야의 최고 전문가로 구성된 교수진의 체계적인 실무중심의 교육"
        ],
        courses: [
            { name: "항공보안과정", link: "/curriculum/05/01" },
            { name: "의전경비과정", link: "/curriculum/05/02" },
            { name: "PMC경비과정", link: "/curriculum/05/05" },
            { name: "암실연기과정", link: "/curriculum/05/04" },
            { name: "스카치콘서트엔터테인먼트과정", link: "/curriculum/05/06" }
        ],
        videoId: "4u6pa3Bl5tw",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "대학생화 설계 & 직업탐색",
                    subjects: ["1.대학생화 설계", "2.영상특강(직업탐색)", "3.동아리활동(멘토링)"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "직무모의 & 기초역량개발",
                    subjects: ["1.전공 역량 강화", "2.전문 자격 취득", "3.취업처 실무"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "직무이해 & 직무결정",
                    subjects: ["1.모의 직무부야 설정", "2.개인별 직무 로드맵 작성", "3.경비 ·보안 현지실시"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "사회진출준비 & 실현",
                    subjects: ["1.이력서, 자소서 작성", "2.취업처별 면접작성", "3.취업성공 방향지도"]
                }
            }
        },
        employmentCompanies: [
            { category: "항공사", companies: "인천국제공항공사, 한국공항공사, 김포, 제주, 군산, 여객 및 화물청사 외 다수" },
            { category: "공항기관", companies: "대한민국정보, 대한민국법무, 정부청사 및 법무경비대, 청와경찰청 외 다수" },
            { category: "국가중요시설 및 연구소", companies: "한국수자원공사, 현대자동차 연구소, 부산항, 통영항, 군미항 외 다수" },
            { category: "학사편입 및 대학원 진학", companies: "용인대, 경국대, 선문대, 한양대, 충북대, 3사관학교 편입 외 다수" },
            { category: "다종 이용시설 및 대기업 보안", companies: "서울역, 백화점, 롯데타워, 트랜스컨시어, ADT캡스, SK 하이닉스, 삼성SDI, 네이버 외 다수" },
            { category: "부사관", companies: "신변보호경비원, 신사업 혁신경비/경보원, 육군·해군·공군 및 특수부사관 외 다수" }
        ],
        icon: "🛡️",
        color: "red"
    },

    "06": {
        id: 6,
        name: "국방경찰AI계열",
        englishName: "Defense Police AI",
        description: "미래 국가안보를 선도하는 AI 기반의 국방·경찰 공무원 양성!",
        highlight: "91% 달성",
        keyPoints: [
            "육군3사관학교 합격률, 10년 연속 전국 1~2위 달성 (전국 4년제 대학 및 직업전문학교 등 합격자 기준)",
            "육군3사관학교 생도선발시험 대비 고사장 수정 (서울, 경기, 인천수위)",
            "군인학사(군 가사복무 부사관) 합격자 8년 연속 서울 수위 1위 달성",
            "국군 영관급 예비 및 경찰 간부 출신 수도교수 팀성",
            "맞춤형 군 예비 및 부사관, 군무원, 경찰공무원 양성"
        ],
        courses: [
            { name: "국방사관과정", link: "/curriculum/06/01" },
            { name: "국방부사관과정", link: "/curriculum/06/02" },
            { name: "국방AI과정", link: "/curriculum/06/03" },
            { name: "경찰공무원과정", link: "/curriculum/06/04" }
        ],
        videoId: "oFaCGBeJEeI",
        curriculum: {
            year1: {
                semester1: {
                    title: "1.전공기본학습",
                    description: "기본학문이기, 체력, 정신, 제식화력 등 국방 경찰공무원으로서의 기초역량 강화",
                    subjects: ["1.군대윤리", "2.한국사 I", "3.군사/경찰체육 I", "4.개인화기사격 I"]
                },
                semester2: {
                    title: "2.전공전문과정",
                    description: "국군 및 경찰 조직 내에서 역할과 책무을 다할 수 있는 국방/경찰공무원 양성",
                    subjects: ["1.리더십", "2.한국사 II", "3.군사/경찰체육 II", "4.개인화기사격 II"]
                }
            },
            year2: {
                semester1: {
                    title: "1.전공심화과정",
                    description: "국군 및 경찰에서 요구하는 국군간부/경찰의 부야별 실무대응 배양",
                    subjects: ["1.국가안보학", "2.인성교육학", "3.군사/경찰체육 III", "4.개인화기사격 III"]
                },
                semester2: {
                    title: "2.실무대응강화",
                    description: "양성부대 및 경찰 근무부서 실무 적용 대응, 미래 환경의 대응대응 배양",
                    subjects: ["1.교수법", "2.부대관리", "3.군사/경찰체육 IV", "4.개인화기사격 IV"]
                }
            }
        },
        employmentCompanies: [
            { category: "예비", companies: "육군3사관학교, 학사사관, AI사이버예비육적용, AI인사군수예적용, 육군, 해군, 공군, 해병대 외 다수" },
            { category: "부사관 및 사관", companies: "육군 부사관, 해군 부사관, 공군 부사관, 해병대 부사관, 특수 부사관, 기술 부사관, AI사이버예비적육적용, AI인사군수적적용 외 다수" },
            { category: "군무원", companies: "육군 군무원, 해군 군무원, 공군 군무원, 해병대 군무원, 국방부 군무원, AI사이버예비적육적용, AI인사군수적적용 외 다수" },
            { category: "경찰 공무원", companies: "경찰, 경찰특공대, 경찰기동대, 해양경찰 외 다수" },
            { category: "국방/경찰 공무원 통합 후 진로", companies: "대학교수, 예비군 교육대대 간부, 부사관 교육부대 간부, 보안업체 간부, 해태 보안업체 간부, 아시아마리 보안업체 간부, 제주도항공보안업체 간부 외 다수" },
            { category: "기타", companies: "인천공항보안업체예적용, 4년제 대학 편입, 선발업무교육, 법무업무교육, 방문업무교육, 국회경비대, 청와경찰청 외 다수" }
        ],
        icon: "🎖️",
        color: "navy"
    }
};

export const getColorClasses = (color: string) => {
    const colors = {
        blue: {
            bg: 'bg-blue-50',
            gradient: 'from-blue-600 to-blue-800',
            text: 'text-blue-600',
            accent: 'bg-blue-600',
            highlight: 'bg-blue-100 text-blue-800'
        },
        green: {
            bg: 'bg-green-50',
            gradient: 'from-green-600 to-green-800',
            text: 'text-green-600',
            accent: 'bg-green-600',
            highlight: 'bg-green-100 text-green-800'
        },
        purple: {
            bg: 'bg-purple-50',
            gradient: 'from-purple-600 to-purple-800',
            text: 'text-purple-600',
            accent: 'bg-purple-600',
            highlight: 'bg-purple-100 text-purple-800'
        },
        orange: {
            bg: 'bg-orange-50',
            gradient: 'from-orange-600 to-orange-800',
            text: 'text-orange-600',
            accent: 'bg-orange-600',
            highlight: 'bg-orange-100 text-orange-800'
        },
        red: {
            bg: 'bg-red-50',
            gradient: 'from-red-600 to-red-800',
            text: 'text-red-600',
            accent: 'bg-red-600',
            highlight: 'bg-red-100 text-red-800'
        },
        navy: {
            bg: 'bg-slate-50',
            gradient: 'from-slate-600 to-slate-800',
            text: 'text-slate-600',
            accent: 'bg-slate-600',
            highlight: 'bg-slate-100 text-slate-800'
        }
    };
    return colors[color as keyof typeof colors] || colors.blue;
};