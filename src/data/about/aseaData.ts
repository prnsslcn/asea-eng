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
        title: "Your First Step to the Sky",
        subtitle: "Turn Your Aviation Dreams into Reality!",
        description: "ASEA Aviation College is Korea's leading aviation specialized educational institution with the highest number of graduates employed in the aviation industry."
    },

    departments: [
        {
            name: "Aviation Maintenance",
            englishName: "Aviation Maintenance",
            color: "blue",
            bgColor: "bg-blue-600",
            textColor: "text-blue-900",
            programs: [
                {
                    title: "Programs",
                    description: "Aviation Maintenance Technician / Aircraft Mechanical / Aviation NCO / Drone (Pilot & Maintenance) / Aviation Maintenance Engineering [3-year program]",
                    highlights: [
                        "2-year program • Associate Degree",
                        "4-year program • Bachelor's Degree"
                    ]
                },
                {
                    title: "Department Features & Advantages",
                    description: "Aimed at cultivating aviation maintenance professionals for Korea's aviation maintenance industry with hands-on, employment-focused aviation maintenance education",
                    highlights: [
                        "Ministry of Land, Infrastructure and Transport designated aviation maintenance technician (license) program specialized educational institution (largest enrollment quota among national educational institutions approved by MOLIT) *420 students",
                        "Domestic first and only! Simultaneous authorization for 3 aviation training aircraft type education programs (B737NG / C172 / B737NG Instructor Course)",
                        "Korea's largest-scale aviation maintenance specialized training facilities",
                        "Training Army, Navy, Air Force, and Marine Corps aviation maintenance NCOs (Army & Navy scholarship NCOs)",
                        "Aviation maintenance specialization for employment (airline employment, military NCOs, drones, machinery, etc.)"
                    ]
                }
            ]
        },
        {
            name: "Aviation Security",
            englishName: "Aviation Security",
            color: "navy",
            bgColor: "bg-slate-700",
            textColor: "text-slate-900",
            programs: [
                {
                    title: "Programs",
                    description: "Aviation Security / VIP Security / PMC Security / Sports Rehabilitation Conditioning / Action Acting",
                    highlights: [
                        "2-year program • Associate Degree"
                    ]
                },
                {
                    title: "Department Features & Advantages",
                    description: "Training aviation security professionals for safety in the aviation industry, specialized security screening personnel for airports, ports, railways and other national critical facilities",
                    highlights: [
                        "Highest number of graduates employed in aviation security field among all national educational institutions",
                        "Korea's first AI (Artificial Intelligence) security screening education program support",
                        "8 consecutive years ranked #1 nationally among educational institutions for bodyguard license exam pass rates",
                        "First private educational institution to operate IED (Improvised Explosive Device) terrorism response education program",
                        "Various martial arts certifications available (Taekwondo, Judo, Hapkido, Security Martial Arts, Yongmudo, etc.)",
                        "Security and martial arts practical training facilities (Heavy equipment operation training room, Rappelling training center, etc.)"
                    ]
                }
            ]
        },
        {
            name: "Aviation Tourism",
            englishName: "Aviation Tourism",
            color: "pink",
            bgColor: "bg-pink-500",
            textColor: "text-pink-900",
            programs: [
                {
                    title: "Programs",
                    description: "Flight Attendant / Hotel Tourism Expert / Food & Beverage Expert",
                    highlights: [
                        "2-year program • Associate Degree"
                    ]
                },
                {
                    title: "Department Features & Advantages",
                    description: "Cultivating global aviation tourism talent with international manners and service expertise",
                    highlights: [
                        "Employment-focused program through 3+2 system during semester (3 days theory + 2 days industry-academia practical education)",
                        "Dedicated airport training facility & aircraft cabin training room & hotel food & beverage training room",
                        "Foreign language study abroad & overseas hotel internship opportunities for enrolled students",
                        "Selected as excellent hotel service workforce training institution (Korea Tourism Organization)",
                        "5-star hotel partnership internship programs (seasonal internships, weekend internships during semester)",
                        "Metropolitan area's only cruise professional workforce training institution selected twice (Ministry of Oceans and Fisheries)",
                        "Designated examination center for cocktail, coffee, and wine certifications (written & practical exams)"
                    ]
                }
            ]
        },
        {
            name: "Smart Safety Diagnostics",
            englishName: "Smart Safety Diagnostics",
            color: "green",
            bgColor: "bg-green-600",
            textColor: "text-green-900",
            programs: [
                {
                    title: "Programs",
                    description: "Ultrasonic Testing / Aviation Non-Destructive Testing / Metallurgical Engineering [3-year program]",
                    highlights: [
                        "2-year program • Associate Degree",
                        "3-year program • Bachelor's Degree"
                    ]
                },
                {
                    title: "Department Features & Advantages",
                    description: "Training safety experts and ultrasonic testing technology specialists for advanced industries",
                    highlights: [
                        "Pre-graduation job guarantee system solves employment concerns",
                        "100% employment success rate for 2023 on-campus recruitment fair participants",
                        "Employment as safety diagnosis experts in aviation, railway, construction, and shipbuilding industries",
                        "Canada non-destructive industry training & program operations → active overseas employment connections",
                        "Full industry-academia scholarship provided to all 2024 academic year freshmen"
                    ]
                }
            ]
        },
        {
            name: "Defense & Police AI",
            englishName: "Defense & Police AI",
            color: "gray",
            bgColor: "bg-gray-600",
            textColor: "text-gray-900",
            programs: [
                {
                    title: "Programs",
                    description: "Defense Officer / Defense NCO / Defense AI / Police Civil Service",
                    highlights: [
                        "2-year program • Associate Degree"
                    ]
                },
                {
                    title: "Department Features & Advantages",
                    description: "Training military officers, NCOs, and police civil servants with excellent leadership",
                    highlights: [
                        "10 consecutive years ranked #1 nationally for Korea Army Academy at Yeongcheon admissions (based on cumulative successful candidates among national 4-year universities and vocational colleges)",
                        "6 consecutive years ranked #1 in Seoul/metropolitan area for military scholarship students (military additional service NCOs)",
                        "Faculty composed of field-grade officers and police executive alumni",
                        "Average graduation success rate of 91% over the past 9 years (officers, NCOs, etc.)",
                        "Korea's first Virtual Reality (VR) shooting training facility",
                        "Priority educational support for Korea Army Academy at Yeongcheon transfer admissions"
                    ]
                }
            ]
        }
    ],

    benefits: [
        {
            icon: "🏛️",
            title: "Korea's Largest Aviation Specialized Educational Institution",
            subtitle: "Associate and Bachelor's Degrees Conferred by Minister of Education",
            description: "Ministry of Land, Infrastructure and Transport designated aviation specialized educational institution, #1 in enrolled students among national aviation colleges, operating Korea's largest aviation maintenance program (420 student enrollment quota)"
        },
        {
            icon: "💼",
            title: "Employment-Focused Practical Education",
            subtitle: "Educational institution with the highest number of graduates employed among national aviation colleges",
            description: "100% employment success for 2023 on-campus job fair participants, annual graduate employment at major airlines including Korean Air and Asiana Airlines, and low-cost carriers"
        },
        {
            icon: "🌏",
            title: "Overseas Language Training & Study Abroad Programs",
            subtitle: "Various overseas programs to enhance global competency",
            description: "Overseas language training & hotel internships during vacations, US FAA & Canada TC aviation maintenance study abroad programs, support for Canada NDT non-destructive testing national certification"
        },
        {
            icon: "🎓",
            title: "Student-Centered ASEA Advantages!",
            subtitle: "Optimal educational environment and student support systems",
            description: "ASEA exclusive dormitories, various scholarship programs, 1-minute walk from Yeouido-gu Office Station for transportation convenience, customized student management system & dedicated advisor professor system"
        },
        {
            icon: "🪖",
            title: "Korea Army Academy at Yeongcheon Transfer & NCO Training Specialized Institution",
            subtitle: "10 consecutive years ranked #1 nationally for Korea Army Academy at Yeongcheon admissions",
            description: "Female cadets produced for 7 consecutive years, military scholarship students ranked #1 in Seoul/metropolitan area for 7 consecutive years, 91% of graduates entered as officers/NCOs over the past 9 years"
        }
    ],

    contacts: [
        {
            type: "general_inquiry",
            title: "General Inquiry",
            phone: "+82-2-717-8811",
            description: "For all admissions, career guidance, and general inquiries, our professional counselors provide friendly assistance."
        }
    ],

    location: {
        address: "16, Dangsan-ro 32-gil, Yeongdeungpo-gu, Seoul, South Korea",
        schoolName: "ASEA Aviation College",
        mapInfo: "5-minute walk from Yeouido-gu Office Station (Line 2, Exit 4)"
    }
};

// 계열별 색상 헬퍼 함수
export const getDepartmentColorClasses = (color: string) => {
    switch (color) {
        case 'blue':
            return {
                bg: 'bg-blue-800',
                bgLight: 'bg-blue-50',
                text: 'text-blue-900',
                textLight: 'text-blue-800',
                border: 'border-blue-300',
                hover: 'hover:bg-blue-900'
            };
        case 'navy':
            return {
                bg: 'bg-slate-800',
                bgLight: 'bg-slate-50',
                text: 'text-slate-900',
                textLight: 'text-slate-800',
                border: 'border-slate-300',
                hover: 'hover:bg-slate-900'
            };
        case 'pink':
            return {
                bg: 'bg-rose-700',
                bgLight: 'bg-rose-50',
                text: 'text-rose-900',
                textLight: 'text-rose-800',
                border: 'border-rose-300',
                hover: 'hover:bg-rose-800'
            };
        case 'green':
            return {
                bg: 'bg-emerald-700',
                bgLight: 'bg-emerald-50',
                text: 'text-emerald-900',
                textLight: 'text-emerald-800',
                border: 'border-emerald-300',
                hover: 'hover:bg-emerald-800'
            };
        case 'gray':
            return {
                bg: 'bg-gray-700',
                bgLight: 'bg-gray-50',
                text: 'text-gray-900',
                textLight: 'text-gray-800',
                border: 'border-gray-300',
                hover: 'hover:bg-gray-800'
            };
        default:
            return {
                bg: 'bg-blue-800',
                bgLight: 'bg-blue-50',
                text: 'text-blue-900',
                textLight: 'text-blue-800',
                border: 'border-blue-300',
                hover: 'hover:bg-blue-900'
            };
    }
};

export default aseaData;