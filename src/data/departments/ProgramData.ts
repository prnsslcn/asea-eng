// ProgramData.ts - Phase 1: Aviation Maintenance Department
// Based on curriculum_01_01.php ~ curriculum_01_04.php

export interface FacilityDetail {
    campus?: string;
    description?: string;  // optional로 변경
    note?: string;         // 추가
}

export interface Program {
    id: string;
    name: string;
    koreanName: string;
    description: string;
    duration: string;
    highlights: string[];

    // 새로 추가된 필드들
    coursebenefits?: string[];
    additionalFeatures?: string[];
    transferUniversities?: string[];
    militaryCareer?: string[];
    droneSpecificCareers?: string[];
    internationalCareers?: string[];
    ultrasonicSpecificBenefits?: string[];
    metallurgicalSpecificCareers?: string[];
    bachelorDegreeBenefits?: string[];
    specializedPrograms?: string[];
    governmentCertifications?: string[];
    beverageSpecialties?: string[];

    // 기존 필드들
    features: string[];
    certifications: string[];
    employmentAreas: EmploymentArea[];
    facilities: (string | FacilityDetail)[];  // Union 타입으로 명확화
    curriculum?: CurriculumItem[];
    detailedCertifications?: CertificationItem[];
}

export interface EmploymentArea {
    category: string;
    companies: string[];
}

interface CurriculumItem {
    semester: string;        // '1st Semester', '2nd Semester' 등
    courseName: string;      // 실제 교과목명 (영문화)
    category: string;        // 'Major Required', 'Major Elective', 'Advanced Major'
    eduType: string;         // 'Credit-bearing Program', 'Advanced Program (Non-credit)'
}

// 자격증 타입 - 실제 HTML 구조만 반영
interface CertificationItem {
    name: string;           // 실제 자격증명 (영문화)
    authority: string;      // 실제 시행기관 (영문화)
    description: string;    // 실제 소개 내용 (영문화)
    website?: string;       // 실제 URL (있는 경우만)
}

export interface EmploymentArea {
    category: string;
    companies: string[];
}

export interface Department {
    id: string;
    name: string;
    koreanName: string;
    description: string;
    educationalGoals: string;
    departmentFeatures: string[];
    programs: Program[];
    overallEmploymentAreas: EmploymentArea[];
    facilities: FacilityInfo[];
}

export interface FacilityInfo {
    name: string;
    description: string;
    equipment: string[];
}

// 항공정비사과정 교육과정 데이터
const aircraftMaintenanceCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Aviation Regulations',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aerodynamics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Instruments and Electrical Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Powerplant I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Transportation Safety Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Engine Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'General Maintenance Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mathematics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Hydraulic Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Powerplant II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Helicopter Maintenance Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Machine Element Design I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Digital Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aviation Maintenance',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Thermodynamics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Mechanics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Helicopter General',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 항공정비사과정 자격증 데이터
const aircraftMaintenanceCertifications: CertificationItem[] = [
    {
        name: 'Aircraft Maintenance Technician (Airplane) [License]',
        authority: 'Korea Transportation Safety Authority',
        description: 'The scope of aircraft maintenance technician duties includes confirming airworthiness of aircraft, equipment, or parts that have undergone maintenance in accordance with Article 32, Paragraph 1 of the Aviation Safety Act, and confirming that light aircraft or their equipment and parts that have undergone maintenance can be operated safely in accordance with Article 108, Paragraph 4 of the Aviation Safety Act.',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Aviation Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This certification was established to cultivate personnel who possess practical maintenance skills and fundamental knowledge of aviation technology to perform field work related to aircraft maintenance and manufacturing, in order to train skilled professionals with basic knowledge and adaptability regarding overall aviation technology and practical maintenance skills for aircraft maintenance technology to ensure flight safety.',
        website: 'https://www.q-net.or.kr'
    },
    {
        name: 'Aviation Transportation Safety Manager',
        authority: 'Korea Transportation Safety Authority',
        description: 'This certification is granted to those with professional knowledge and skills in transportation safety to have them exclusively handle transportation safety tasks at transportation companies, thereby preventing traffic accidents and contributing to the protection of people\'s lives and property. The transportation safety manager qualification exam is conducted for 5 categories (road, railway, aviation, port, cableway).',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Radio Equipment Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'As the limitations of wired communication facilities have become apparent due to various constraints from industrial development, the wireless communication field is increasing. Accordingly, this qualification system was established to train professional personnel with knowledge and skills in wireless communication facilities to perform construction, installation, and maintenance work for wireless communication facilities.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Radio Electronic Communication Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This qualification system was established to train skilled personnel who possess both technical basic knowledge and skilled functions in radio communication, to efficiently communicate radio communications and further develop the information and communication field, which is the key to national competitiveness.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Information Communication Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'The management function of data communication and computer communication is essential for advanced information and telecommunication. Accordingly, this qualification system was established to train personnel who can perform professional technical work in the information communication facilities field.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Information Processing Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'To effectively utilize computers, not only hardware but also sophisticated software is required. Accordingly, this certification was established with the purpose of training people with professional knowledge and skills in computers to develop excellent programs, improve work efficiency, and ultimately contribute to national development.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 교육과정 데이터 (68개 과목)
const aviationMechanicalCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Aviation Regulations',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aerodynamics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Instruments and Electrical Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Powerplant I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Transportation Safety Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Engine Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'General Maintenance Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mathematics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Hydraulic Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Powerplant II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Helicopter Maintenance Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Machine Element Design I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Digital Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aviation Maintenance',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Thermodynamics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Mechanics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Helicopter General',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 자격증 데이터 (7개 - 항공정비사과정과 동일)
const aviationMechanicalCertifications: CertificationItem[] = [
    {
        name: 'Aircraft Maintenance Technician (Airplane) [License]',
        authority: 'Korea Transportation Safety Authority',
        description: 'The scope of aircraft maintenance technician duties includes confirming airworthiness of aircraft, equipment, or parts that have undergone maintenance in accordance with Article 32, Paragraph 1 of the Aviation Safety Act, and confirming that light aircraft or their equipment and parts that have undergone maintenance can be operated safely in accordance with Article 108, Paragraph 4 of the Aviation Safety Act.',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Aviation Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This certification was established to cultivate personnel who possess practical maintenance skills and fundamental knowledge of aviation technology to perform field work related to aircraft maintenance and manufacturing, in order to train skilled professionals with basic knowledge and adaptability regarding overall aviation technology and practical maintenance skills for aircraft maintenance technology to ensure flight safety.',
        website: 'https://www.q-net.or.kr'
    },
    {
        name: 'Aviation Transportation Safety Manager',
        authority: 'Korea Transportation Safety Authority',
        description: 'This certification is granted to those with professional knowledge and skills in transportation safety to have them exclusively handle transportation safety tasks at transportation companies, thereby preventing traffic accidents and contributing to the protection of people\'s lives and property. The transportation safety manager qualification exam is conducted for 5 categories (road, railway, aviation, port, cableway).',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Radio Equipment Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'As the limitations of wired communication facilities have become apparent due to various constraints from industrial development, the wireless communication field is increasing. Accordingly, this qualification system was established to train professional personnel with knowledge and skills in wireless communication facilities to perform construction, installation, and maintenance work for wireless communication facilities.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Radio Electronic Communication Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This qualification system was established to train skilled personnel who possess both technical basic knowledge and skilled functions in radio communication, to efficiently communicate radio communications and further develop the information and communication field, which is the key to national competitiveness.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Information Communication Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'The management function of data communication and computer communication is essential for advanced information and telecommunication. Accordingly, this qualification system was established to train personnel who can perform professional technical work in the information communication facilities field.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Information Processing Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'To effectively utilize computers, not only hardware but also sophisticated software is required. Accordingly, this certification was established with the purpose of training people with professional knowledge and skills in computers to develop excellent programs, improve work efficiency, and ultimately contribute to national development.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 항공부사관과정 교육과정
const aviationNCOCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Aviation Regulations',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aerodynamics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Instruments and Electrical Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Powerplant I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Transportation Safety Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Engine Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'General Maintenance Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mathematics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Hydraulic Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Powerplant II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Helicopter Maintenance Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Machine Element Design I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Digital Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aviation Maintenance',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Thermodynamics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Mechanics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Helicopter General',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 항공부사관과정 자격증 데이터 (7개 - 동일)
const aviationNCOCertifications: CertificationItem[] = [
    {
        name: 'Aircraft Maintenance Technician (Airplane) [License]',
        authority: 'Korea Transportation Safety Authority',
        description: 'The scope of aircraft maintenance technician duties includes confirming airworthiness of aircraft, equipment, or parts that have undergone maintenance in accordance with Article 32, Paragraph 1 of the Aviation Safety Act, and confirming that light aircraft or their equipment and parts that have undergone maintenance can be operated safely in accordance with Article 108, Paragraph 4 of the Aviation Safety Act.',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Aviation Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This certification was established to cultivate personnel who possess practical maintenance skills and fundamental knowledge of aviation technology to perform field work related to aircraft maintenance and manufacturing, in order to train skilled professionals with basic knowledge and adaptability regarding overall aviation technology and practical maintenance skills for aircraft maintenance technology to ensure flight safety.',
        website: 'https://www.q-net.or.kr'
    },
    {
        name: 'Aviation Transportation Safety Manager',
        authority: 'Korea Transportation Safety Authority',
        description: 'This certification is granted to those with professional knowledge and skills in transportation safety to have them exclusively handle transportation safety tasks at transportation companies, thereby preventing traffic accidents and contributing to the protection of people\'s lives and property. The transportation safety manager qualification exam is conducted for 5 categories (road, railway, aviation, port, cableway).',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Radio Equipment Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'As the limitations of wired communication facilities have become apparent due to various constraints from industrial development, the wireless communication field is increasing. Accordingly, this qualification system was established to train professional personnel with knowledge and skills in wireless communication facilities to perform construction, installation, and maintenance work for wireless communication facilities.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Radio Electronic Communication Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This qualification system was established to train skilled personnel who possess both technical basic knowledge and skilled functions in radio communication, to efficiently communicate radio communications and further develop the information and communication field, which is the key to national competitiveness.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Information Communication Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'The management function of data communication and computer communication is essential for advanced information and telecommunication. Accordingly, this qualification system was established to train personnel who can perform professional technical work in the information communication facilities field.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Information Processing Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'To effectively utilize computers, not only hardware but also sophisticated software is required. Accordingly, this certification was established with the purpose of training people with professional knowledge and skills in computers to develop excellent programs, improve work efficiency, and ultimately contribute to national development.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 드론과정 실제 데이터 (59개 과목 - 동일 구조)
const droneOperationCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Aviation Regulations',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aerodynamics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Instruments and Electrical Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Powerplant I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Transportation Safety Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Engine Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Airframe Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'General Maintenance Practice 2',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mathematics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Hydraulic Equipment',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Powerplant II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Aviation Maintenance',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Helicopter Maintenance Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Fluid Mechanics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Machine Element Design I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aerospace',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Electronics and Electrical Engineering Fundamentals',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Digital Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 3',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'General Maintenance Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Airframe Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Engine Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 1',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Aviation Maintenance',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Maintenance Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Engineering Mechanics',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Thermodynamics I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Airframe Repair',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Mechanics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Maintenance Human Factors',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Helicopter General',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Airframe Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Engine Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Aircraft Electronics, Electrical & Instrument Practice 4',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 드론과정 자격증 데이터 (7개 - 동일)
const droneOperationCertifications: CertificationItem[] = [
    {
        name: 'Aircraft Maintenance Technician (Airplane) [License]',
        authority: 'Korea Transportation Safety Authority',
        description: 'The scope of aircraft maintenance technician duties includes confirming airworthiness of aircraft, equipment, or parts that have undergone maintenance in accordance with Article 32, Paragraph 1 of the Aviation Safety Act, and confirming that light aircraft or their equipment and parts that have undergone maintenance can be operated safely in accordance with Article 108, Paragraph 4 of the Aviation Safety Act.',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Aviation Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This certification was established to cultivate personnel who possess practical maintenance skills and fundamental knowledge of aviation technology to perform field work related to aircraft maintenance and manufacturing, in order to train skilled professionals with basic knowledge and adaptability regarding overall aviation technology and practical maintenance skills for aircraft maintenance technology to ensure flight safety.',
        website: 'https://www.q-net.or.kr'
    },
    {
        name: 'Aviation Transportation Safety Manager',
        authority: 'Korea Transportation Safety Authority',
        description: 'This certification is granted to those with professional knowledge and skills in transportation safety to have them exclusively handle transportation safety tasks at transportation companies, thereby preventing traffic accidents and contributing to the protection of people\'s lives and property. The transportation safety manager qualification exam is conducted for 5 categories (road, railway, aviation, port, cableway).',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Radio Equipment Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'As the limitations of wired communication facilities have become apparent due to various constraints from industrial development, the wireless communication field is increasing. Accordingly, this qualification system was established to train professional personnel with knowledge and skills in wireless communication facilities to perform construction, installation, and maintenance work for wireless communication facilities.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Radio Electronic Communication Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'This qualification system was established to train skilled personnel who possess both technical basic knowledge and skilled functions in radio communication, to efficiently communicate radio communications and further develop the information and communication field, which is the key to national competitiveness.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Information Communication Industrial Engineer',
        authority: 'KCA National Technical Qualification Test',
        description: 'The management function of data communication and computer communication is essential for advanced information and telecommunication. Accordingly, this qualification system was established to train personnel who can perform professional technical work in the information communication facilities field.',
        website: 'https://cq.or.kr'
    },
    {
        name: 'Information Processing Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'To effectively utilize computers, not only hardware but also sophisticated software is required. Accordingly, this certification was established with the purpose of training people with professional knowledge and skills in computers to develop excellent programs, improve work efficiency, and ultimately contribute to national development.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 스마트진단안전계열 -----------------------------------------------------------------------------------------------

const aviationNDTCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Penetrant Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Radiographic Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Magnetic Particle Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Metal Materials Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Non-Destructive Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Basic Magnetic Particle Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Basic Penetrant Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Magnetic Particle Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Ultrasonic Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Penetrant Testing Practice',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Welding Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Non-Ferrous Materials',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Nuclear Basic Theory I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Industrial Safety Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Ultrasonic Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Radiation Safety Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Visual Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Advanced Materials Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Metal Microstructure',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Materials Processing Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Materials Science',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Casting Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Iron and Steel Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Metal Materials Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Basic Radiographic Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Capstone Design',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Eddy Current Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Leak Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Radiographic Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Destructive and Non-Destructive Testing',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Materials Heat Treatment Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Composite Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Non-Ferrous Metallurgy',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Magnetic Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Materials Evaluation',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Iron and Steel Manufacturing Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Phased Array Ultrasonic',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'NDT Professional Basic Skills I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Capstone Design',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 항공비파괴검사과정 자격증 데이터 (9개)
const aviationNDTCertifications: CertificationItem[] = [
    {
        name: 'Eddy Current Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'When alternating current is brought close to a test specimen such as metal, eddy currents are induced in the conductor, and the magnitude and distribution of these eddy currents change due to the influence of defects or materials. This is a testing method that detects discontinuities on the surface and near-surface of the test specimen by measuring this amount of change. Eddy current testing is applicable when the test object is a conductor, is a non-contact method, and can perform high-speed testing, so it is widely used for inspection of relatively simple-shaped products such as tubes and rods, and for maintenance inspection of power plant and chemical plant piping.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Leak Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'This refers to the leakage of fluids from airtight containers, storage facilities, and piping that contain gases or liquids due to pressure differences inside and outside the test specimen, or the infiltration of other fluids, which occurs due to discontinuities in the test specimen. This is a method to inspect whether fluid leaks or infiltrates, or to detect the amount of leakage. Leak non-destructive testing is a non-destructive testing method mainly used to inspect water tightness, oil tightness, and air tightness in welded parts of pipelines, storage tanks, and pressure vessels.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Metal Materials Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Based on technical basic knowledge and advanced skilled functions related to metal materials, performs material testing, defect testing, metal heat treatment, etc. to make metals and alloys into useful shapes, or performs related guidance functions. Most companies prefer to hire people with publicly recognized abilities, so obtaining a certification is advantageous for employment, and many working professionals also obtain certifications to have their experience and skills recognized.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Welding Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly performs welding work necessary for the product process to complete one product or structure, and performs tasks such as welding design and drafting, cost calculation, and material preparation according to this. The application range of welding is becoming wider, and high-adhesion and high-speed welding techniques are being developed through technological development. Accordingly, an increase in demand for technical personnel is expected, and fields that still require manual work, such as shipbuilding or construction, are influenced by the growth of the relevant industries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Industrial Safety Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Assigned to various industrial sites such as manufacturing and service industries, performs tasks related to establishing industrial accident prevention plans, inspecting and improving work environments, preventing hazards and risks, analyzing and improving accident cases, and safety education and training for workers. The social awareness of continuous investment in this area is increasing as the safety level is a measure of advanced countries, and our country\'s accident rate is still at the level of developing countries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Ultrasonic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly used for detecting internal defects in test specimens, this is a testing method that transmits ultrasonic waves to the test specimen and displays and analyzes the energy amount of ultrasonic waves reflected from discontinuities existing inside and the travel time of ultrasonic waves on a CRT screen to determine the location and size of discontinuities. It has superior detection capability for cracks and other planar defects compared to radiographic testing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Magnetic Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of magnetizing ferromagnetic materials to detect discontinuities on the surface or sub-surface, applying magnetic particles to form the outline of discontinuities by magnetic particles gathering or sticking due to leakage magnetic fields, and inspecting their location, size, shape, and width. Although it has the disadvantage of being applicable only to ferromagnetic metals, it has the advantage of being able to perform testing regardless of the size and shape of the test specimen as a non-destructive testing method that is easy to detect fine surface cracks.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Penetrant Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A testing method that applies penetrant to the surface of a test specimen, allows sufficient time for the penetrant to penetrate into discontinuities open to the surface, removes excess penetrant remaining on the test specimen surface that could not penetrate into discontinuities, and then applies developer to draw up the penetrant in the discontinuities, thereby detecting the location, size, and indication pattern of discontinuities.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Radiographic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of detecting defects by recording the change in transmitted radiation intensity, that is, the density difference on film as a two-dimensional image due to the difference in transmitted dose between sound and defective parts when radiation (X-rays or γ-rays) is irradiated to a test specimen. This is a method for detecting defects in welded parts, castings, etc. The radiographic non-destructive testing field currently has the largest number of personnel and is the most used non-destructive testing method by companies.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 초음파진단과정
const ultrasonicDiagnosticsCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Penetrant Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Radiographic Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Magnetic Particle Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Metal Materials Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Non-Destructive Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'Basic Magnetic Particle Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Basic Penetrant Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Magnetic Particle Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Ultrasonic Testing',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Penetrant Testing Practice',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Welding Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Non-Ferrous Materials',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Nuclear Basic Theory I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Industrial Safety Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Ultrasonic Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Radiation Safety Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Visual Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Advanced Materials Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Metal Microstructure',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Materials Processing Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Materials Science',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Casting Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Iron and Steel Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'Metal Materials Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Basic Radiographic Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Capstone Design',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Eddy Current Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Leak Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Radiographic Testing Practice I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Destructive and Non-Destructive Testing',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Materials Heat Treatment Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Composite Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Non-Ferrous Metallurgy',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Magnetic Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Materials Evaluation',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Iron and Steel Manufacturing Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Phased Array Ultrasonic',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'NDT Professional Basic Skills I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Capstone Design',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 초음파진단과정 자격증
const ultrasonicDiagnosticsCertifications: CertificationItem[] = [
    {
        name: 'Eddy Current Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'When alternating current is brought close to a test specimen such as metal, eddy currents are induced in the conductor, and the magnitude and distribution of these eddy currents change due to the influence of defects or materials. This is a testing method that detects discontinuities on the surface and near-surface of the test specimen by measuring this amount of change. Eddy current testing is applicable when the test object is a conductor, is a non-contact method, and can perform high-speed testing, so it is widely used for inspection of relatively simple-shaped products such as tubes and rods, and for maintenance inspection of power plant and chemical plant piping.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Leak Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'This refers to the leakage of fluids from airtight containers, storage facilities, and piping that contain gases or liquids due to pressure differences inside and outside the test specimen, or the infiltration of other fluids, which occurs due to discontinuities in the test specimen. This is a method to inspect whether fluid leaks or infiltrates, or to detect the amount of leakage. Leak non-destructive testing is a non-destructive testing method mainly used to inspect water tightness, oil tightness, and air tightness in welded parts of pipelines, storage tanks, and pressure vessels.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Metal Materials Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Based on technical basic knowledge and advanced skilled functions related to metal materials, performs material testing, defect testing, metal heat treatment, etc. to make metals and alloys into useful shapes, or performs related guidance functions. Most companies prefer to hire people with publicly recognized abilities, so obtaining a certification is advantageous for employment, and many working professionals also obtain certifications to have their experience and skills recognized.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Welding Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly performs welding work necessary for the product process to complete one product or structure, and performs tasks such as welding design and drafting, cost calculation, and material preparation according to this. The application range of welding is becoming wider, and high-adhesion and high-speed welding techniques are being developed through technological development. Accordingly, an increase in demand for technical personnel is expected, and fields that still require manual work, such as shipbuilding or construction, are influenced by the growth of the relevant industries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Industrial Safety Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Assigned to various industrial sites such as manufacturing and service industries, performs tasks related to establishing industrial accident prevention plans, inspecting and improving work environments, preventing hazards and risks, analyzing and improving accident cases, and safety education and training for workers. The social awareness of continuous investment in this area is increasing as the safety level is a measure of advanced countries, and our country\'s accident rate is still at the level of developing countries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Ultrasonic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly used for detecting internal defects in test specimens, this is a testing method that transmits ultrasonic waves to the test specimen and displays and analyzes the energy amount of ultrasonic waves reflected from discontinuities existing inside and the travel time of ultrasonic waves on a CRT screen to determine the location and size of discontinuities. It has superior detection capability for cracks and other planar defects compared to radiographic testing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Magnetic Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of magnetizing ferromagnetic materials to detect discontinuities on the surface or sub-surface, applying magnetic particles to form the outline of discontinuities by magnetic particles gathering or sticking due to leakage magnetic fields, and inspecting their location, size, shape, and width. Although it has the disadvantage of being applicable only to ferromagnetic metals, it has the advantage of being able to perform testing regardless of the size and shape of the test specimen as a non-destructive testing method that is easy to detect fine surface cracks.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Penetrant Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A testing method that applies penetrant to the surface of a test specimen, allows sufficient time for the penetrant to penetrate into discontinuities open to the surface, removes excess penetrant remaining on the test specimen surface that could not penetrate into discontinuities, and then applies developer to draw up the penetrant in the discontinuities, thereby detecting the location, size, and indication pattern of discontinuities.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Radiographic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of detecting defects by recording the change in transmitted radiation intensity, that is, the density difference on film as a two-dimensional image due to the difference in transmitted dose between sound and defective parts when radiation (X-rays or γ-rays) is irradiated to a test specimen. This is a method for detecting defects in welded parts, castings, etc. The radiographic non-destructive testing field currently has the largest number of personnel and is the most used non-destructive testing method by companies.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// ✅ 금속공학사과정[3년제] 5-6학기 추가 데이터 (15개 과목)
// 1-4학기는 항공비파괴검사과정과 동일하고, 5-6학기만 추가

const metallurgicalEngineeringCurriculum: CurriculumItem[] = [
    // === 5th Semester (3-1학기) ===
    {
        semester: '5th Semester',
        courseName: 'Metal Microstructure',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Materials Science',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Non-Ferrous Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Materials Processing Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Advanced Materials Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Welding Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Magnetic Materials',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Composite Materials',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Iron and Steel Manufacturing Engineering',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '5th Semester',
        courseName: 'Materials Evaluation',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    // === 6th Semester (3-2학기) ===
    {
        semester: '6th Semester',
        courseName: 'Materials Mechanics I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '6th Semester',
        courseName: 'Materials Heat Treatment Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '6th Semester',
        courseName: 'Casting Engineering',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '6th Semester',
        courseName: 'Iron and Steel Materials',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '6th Semester',
        courseName: 'Destructive and Non-Destructive Testing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    }
];

// ✅ 금속공학사과정 자격증 데이터 (항공비파괴검사과정과 동일한 9개)
const metallurgicalEngineeringCertifications: CertificationItem[] = [
    {
        name: 'Eddy Current Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'When alternating current is brought close to a test specimen such as metal, eddy currents are induced in the conductor, and the magnitude and distribution of these eddy currents change due to the influence of defects or materials. This is a testing method that detects discontinuities on the surface and near-surface of the test specimen by measuring this amount of change. Eddy current testing is applicable when the test object is a conductor, is a non-contact method, and can perform high-speed testing, so it is widely used for inspection of relatively simple-shaped products such as tubes and rods, and for maintenance inspection of power plant and chemical plant piping.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Leak Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'This refers to the leakage of fluids from airtight containers, storage facilities, and piping that contain gases or liquids due to pressure differences inside and outside the test specimen, or the infiltration of other fluids, which occurs due to discontinuities in the test specimen. This is a method to inspect whether fluid leaks or infiltrates, or to detect the amount of leakage. Leak non-destructive testing is a non-destructive testing method mainly used to inspect water tightness, oil tightness, and air tightness in welded parts of pipelines, storage tanks, and pressure vessels.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Metal Materials Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Based on technical basic knowledge and advanced skilled functions related to metal materials, performs material testing, defect testing, metal heat treatment, etc. to make metals and alloys into useful shapes, or performs related guidance functions. Most companies prefer to hire people with publicly recognized abilities, so obtaining a certification is advantageous for employment, and many working professionals also obtain certifications to have their experience and skills recognized.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Welding Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly performs welding work necessary for the product process to complete one product or structure, and performs tasks such as welding design and drafting, cost calculation, and material preparation according to this. The application range of welding is becoming wider, and high-adhesion and high-speed welding techniques are being developed through technological development. Accordingly, an increase in demand for technical personnel is expected, and fields that still require manual work, such as shipbuilding or construction, are influenced by the growth of the relevant industries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Industrial Safety Industrial Engineer',
        authority: 'Korea Human Resources Development Service',
        description: 'Assigned to various industrial sites such as manufacturing and service industries, performs tasks related to establishing industrial accident prevention plans, inspecting and improving work environments, preventing hazards and risks, analyzing and improving accident cases, and safety education and training for workers. The social awareness of continuous investment in this area is increasing as the safety level is a measure of advanced countries, and our country\'s accident rate is still at the level of developing countries.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Ultrasonic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'Mainly used for detecting internal defects in test specimens, this is a testing method that transmits ultrasonic waves to the test specimen and displays and analyzes the energy amount of ultrasonic waves reflected from discontinuities existing inside and the travel time of ultrasonic waves on a CRT screen to determine the location and size of discontinuities. It has superior detection capability for cracks and other planar defects compared to radiographic testing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Magnetic Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of magnetizing ferromagnetic materials to detect discontinuities on the surface or sub-surface, applying magnetic particles to form the outline of discontinuities by magnetic particles gathering or sticking due to leakage magnetic fields, and inspecting their location, size, shape, and width. Although it has the disadvantage of being applicable only to ferromagnetic metals, it has the advantage of being able to perform testing regardless of the size and shape of the test specimen as a non-destructive testing method that is easy to detect fine surface cracks.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Penetrant Non-Destructive Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A testing method that applies penetrant to the surface of a test specimen, allows sufficient time for the penetrant to penetrate into discontinuities open to the surface, removes excess penetrant remaining on the test specimen surface that could not penetrate into discontinuities, and then applies developer to draw up the penetrant in the discontinuities, thereby detecting the location, size, and indication pattern of discontinuities.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Radiographic Testing',
        authority: 'Korea Human Resources Development Service',
        description: 'A method of detecting defects by recording the change in transmitted radiation intensity, that is, the density difference on film as a two-dimensional image due to the difference in transmitted dose between sound and defective parts when radiation (X-rays or γ-rays) is irradiated to a test specimen. This is a method for detecting defects in welded parts, castings, etc. The radiographic non-destructive testing field currently has the largest number of personnel and is the most used non-destructive testing method by companies.',
        website: 'http://www.hrdkorea.or.kr'
    }
];

// 항공관광계열 ---------------------------------------------------------------------------------------------------

// 승무원과정 교육과정
const flightAttendantCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Introduction to Tourism',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Cultural Tourism Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Tourism Chinese I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Practical English',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Cabin Service Theory',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'English Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Passenger Ticketing General',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Introduction to Aircraft Cabin Structure',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Tourism Laws and Regulations',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'World Tourism Geography',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Casino Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Tourism English I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Flight Safety Practice',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Chinese Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'First Aid',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aviation Service Practical Skills',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Tourism Service Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Food and Beverage Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Hotel Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Marketing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Image Making',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'NCS Professional Basic Skills',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Recreation',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Cabin Service Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Travel Agency Practice',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Hotel Front Office and Guest Room Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Practical English',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'International Conference Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Emergency Nursing',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Aviation Field Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'In-flight Announcement',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Comprehensive In-flight Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 승무원과정 자격증
const flightAttendantCertifications: CertificationItem[] = [
    {
        name: 'Aviation Service Practical Skills Level 1, 2',
        authority: 'Korea Service Promotion Association',
        description: 'The only domestic certification system in Korea that tests the ability to perform service operation/management, practical work, and guidance in aviation or tourism industry-related organizations such as airlines, travel agencies, and hotels, with professional knowledge required in the aviation transportation service industry based on NCS. Registration Number: (Ministry of Land, Infrastructure and Transport) No. 2016-000972. Test subjects: 1. Aviation Service Introduction, 2. Aviation Service General, 3. Aviation Service Practice.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'CS Instructor',
        authority: 'Korea Service Promotion Association',
        description: 'A certification system that tests general-level job performance ability to develop and manage service human resources through service education planning and CS lectures for customer satisfaction management. Registration Number: (Ministry of Trade, Industry and Energy) No. 2013-0381. Test subjects: 1. Understanding of Service and Customer Satisfaction Management, 2. CS Instructor Theory, 3. CS Instructor Practical Theory.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'National Certified CS Manager (CS Leaders)',
        authority: 'Korea Information Assessment Association',
        description: 'A certification system that evaluates practical knowledge ability to maximize CS planning, customer response, and customer satisfaction based on professional knowledge of customer satisfaction service to achieve efficiency and practicality in real life and business, and evaluates the ability to quickly and accurately perform tasks related to situation analysis and solution presentation when customer dissatisfaction occurs. Test subjects: 1. CS Introduction, 2. CS Strategy Theory, 3. Customer Management Practice Theory.',
        website: 'https://www.kaa.or.kr'
    },
    {
        name: 'CRS Certification',
        authority: 'Asiana Abacus, Topas Travel Information Co., Ltd.',
        description: 'A certification system operated with the goal of training competent professionals who can effectively learn the program system for airline reservation/ticketing and immediately apply it in practice.',
        website: 'https://www.abacus.co.kr'
    },
    {
        name: 'First Aid (CPR)',
        authority: 'Korean Red Cross',
        description: 'An important training course necessary to protect oneself from life-threatening emergency situations that may occur at home or in external life, reduce additional damage by providing appropriate treatment to patients until they receive professional treatment when accidents occur, and prevent accidents and protect precious lives. Test subjects: CPR and automatic defibrillator operation, airway obstruction treatment, etc.',
        website: 'https://www.redcross.or.kr'
    },
    {
        name: 'Secretary National Technical Qualification Level 1, 2, 3',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'A national technical qualification system that evaluates the overall practical ability of secretaries who assist management so that executives can focus on important decision-making by being freed from administrative work. Test subjects: 1. Secretary Practice, 2. Business General, 3. Business English, 4. Office Information Management, 5. Practical Test.',
        website: 'https://www.kcci.or.kr'
    }
];

// 호텔관광전문가과정 교육과정
const hotelTourismSpecialistCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Introduction to Tourism',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Cultural Tourism Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Tourism Chinese I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Practice Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Cabin Service Theory',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '1st Semester',
        courseName: 'English Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Hotel Service History',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Tourism Recreation',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Tourism Laws and Regulations',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'World Tourism Geography',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Casino Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Tourism English I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Flight Safety Practice',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '2nd Semester',
        courseName: 'Chinese Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'First Aid',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Hotelier Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Tourism Service Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Food and Beverage Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Hotel Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Marketing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Image Making',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'NCS Professional Basic Skills',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Domestic Travel Guide',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Field Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Travel Agency Practice',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Hotel Front Office and Guest Room Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Practical English',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'International Conference Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Emergency Nursing',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '4th Semester',
        courseName: 'Hotel Field Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'International Tour Conductor (TC)',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Convention Planner',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 호텔관광전문가과정 자격증
const hotelTourismSpecialistCertifications: CertificationItem[] = [
    {
        name: 'Aviation Service Practical Skills Level 1, 2',
        authority: 'Korea Service Promotion Association',
        description: 'The only domestic certification system in Korea that tests the ability to perform service operation/management, practical work, and guidance in aviation or tourism industry-related organizations such as airlines, travel agencies, and hotels, with professional knowledge required in the aviation transportation service industry based on NCS. Registration Number: (Ministry of Land, Infrastructure and Transport) No. 2016-000972. Test subjects: 1. Aviation Service Introduction, 2. Aviation Service General, 3. Aviation Service Practice.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'CS Instructor',
        authority: 'Korea Service Promotion Association',
        description: 'A certification system that tests general-level job performance ability to develop and manage service human resources through service education planning and CS lectures for customer satisfaction management. Registration Number: (Ministry of Trade, Industry and Energy) No. 2013-0381. Test subjects: 1. Understanding of Service and Customer Satisfaction Management, 2. CS Instructor Theory, 3. CS Instructor Practical Theory.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'National Certified CS Manager (CS Leaders)',
        authority: 'Korea Information Assessment Association',
        description: 'A certification system that evaluates practical knowledge ability to maximize CS planning, customer response, and customer satisfaction based on professional knowledge of customer satisfaction service to achieve efficiency and practicality in real life and business, and evaluates the ability to quickly and accurately perform tasks related to situation analysis and solution presentation when customer dissatisfaction occurs. Test subjects: 1. CS Introduction, 2. CS Strategy Theory, 3. Customer Management Practice Theory.',
        website: 'https://www.kaa.or.kr'
    },
    {
        name: 'CRS Certification',
        authority: 'Asiana Abacus, Topas Travel Information Co., Ltd.',
        description: 'A certification system operated with the goal of training competent professionals who can effectively learn the program system for airline reservation/ticketing and immediately apply it in practice.',
        website: 'https://www.abacus.co.kr'
    },
    {
        name: 'First Aid (CPR)',
        authority: 'Korean Red Cross',
        description: 'An important training course necessary to protect oneself from life-threatening emergency situations that may occur at home or in external life, reduce additional damage by providing appropriate treatment to patients until they receive professional treatment when accidents occur, and prevent accidents and protect precious lives. Test subjects: CPR and automatic defibrillator operation, airway obstruction treatment, etc.',
        website: 'https://www.redcross.or.kr'
    },
    {
        name: 'Secretary National Technical Qualification Level 1, 2, 3',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'A national technical qualification system that evaluates the overall practical ability of secretaries who assist management so that executives can focus on important decision-making by being freed from administrative work. Test subjects: 1. Secretary Practice, 2. Business General, 3. Business English, 4. Office Information Management, 5. Practical Test.',
        website: 'https://www.kcci.or.kr'
    }
];

// 식음료전문가과정 교육과정
const foodBeverageSpecialistCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Introduction to Tourism',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Cultural Tourism Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Tourism Chinese I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Practice Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Cabin Service Theory',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 식음료 특화
    {
        semester: '1st Semester',
        courseName: 'Hotel Service History',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Barista Basic Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Bartender Technician',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Tourism Laws and Regulations',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'World Tourism Geography',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Casino Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Tourism English I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Flight Safety Practice',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 식음료 특화
    {
        semester: '2nd Semester',
        courseName: 'Chinese Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Wine Sommelier Basic Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Hotelier Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Tourism Service Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Food and Beverage Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Hotel Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Marketing',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Image Making',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit)
    {
        semester: '3rd Semester',
        courseName: 'NCS Professional Basic Skills',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'First Aid',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tourism Recreation',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Travel Agency Practice',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Hotel Front Office and Guest Room Practice',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Aviation Practical English',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'International Conference Practice',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Emergency Nursing',
        category: 'General Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 식음료 특화
    {
        semester: '4th Semester',
        courseName: 'Hotel Field Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Tourism Field Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'English Conversation Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 식음료전문가과정 자격증
const foodBeverageSpecialistCertifications: CertificationItem[] = [
    {
        name: 'Aviation Service Practical Skills Level 1, 2',
        authority: 'Korea Service Promotion Association',
        description: 'The only domestic certification system in Korea that tests the ability to perform service operation/management, practical work, and guidance in aviation or tourism industry-related organizations such as airlines, travel agencies, and hotels, with professional knowledge required in the aviation transportation service industry based on NCS. Registration Number: (Ministry of Land, Infrastructure and Transport) No. 2016-000972. Test subjects: 1. Aviation Service Introduction, 2. Aviation Service General, 3. Aviation Service Practice.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'CS Instructor',
        authority: 'Korea Service Promotion Association',
        description: 'A certification system that tests general-level job performance ability to develop and manage service human resources through service education planning and CS lectures for customer satisfaction management. Registration Number: (Ministry of Trade, Industry and Energy) No. 2013-0381. Test subjects: 1. Understanding of Service and Customer Satisfaction Management, 2. CS Instructor Theory, 3. CS Instructor Practical Theory.',
        website: 'https://www.kspa.or.kr'
    },
    {
        name: 'National Certified CS Manager (CS Leaders)',
        authority: 'Korea Information Assessment Association',
        description: 'A certification system that evaluates practical knowledge ability to maximize CS planning, customer response, and customer satisfaction based on professional knowledge of customer satisfaction service to achieve efficiency and practicality in real life and business, and evaluates the ability to quickly and accurately perform tasks related to situation analysis and solution presentation when customer dissatisfaction occurs. Test subjects: 1. CS Introduction, 2. CS Strategy Theory, 3. Customer Management Practice Theory.',
        website: 'https://www.kaa.or.kr'
    },
    {
        name: 'CRS Certification',
        authority: 'Asiana Abacus, Topas Travel Information Co., Ltd.',
        description: 'A certification system operated with the goal of training competent professionals who can effectively learn the program system for airline reservation/ticketing and immediately apply it in practice.',
        website: 'https://www.abacus.co.kr'
    },
    {
        name: 'First Aid (CPR)',
        authority: 'Korean Red Cross',
        description: 'An important training course necessary to protect oneself from life-threatening emergency situations that may occur at home or in external life, reduce additional damage by providing appropriate treatment to patients until they receive professional treatment when accidents occur, and prevent accidents and protect precious lives. Test subjects: CPR and automatic defibrillator operation, airway obstruction treatment, etc.',
        website: 'https://www.redcross.or.kr'
    },
    {
        name: 'Secretary National Technical Qualification Level 1, 2, 3',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'A national technical qualification system that evaluates the overall practical ability of secretaries who assist management so that executives can focus on important decision-making by being freed from administrative work. Test subjects: 1. Secretary Practice, 2. Business General, 3. Business English, 4. Office Information Management, 5. Practical Test.',
        website: 'https://www.kcci.or.kr'
    }
];

// 항공보안계열 --------------------------------------------------------------------------------------------

// 항공보안과정 교육과정
const aviationSecurityCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Private Security Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Self-Defense Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Emergency First Aid',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Training Methodology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 항공보안 특화
    {
        semester: '1st Semester',
        courseName: 'Aviation Security Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Industry Understanding',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Aviation Security Screening Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Security Studies Introduction',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Business Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Exercise Therapy Introduction',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 항공보안 특화
    {
        semester: '2nd Semester',
        courseName: 'Shooting Training',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Airport Operations Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Aviation Security Regulations',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Protocol Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Methodology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Martial Arts I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Safety Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Taekwondo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 항공보안 특화
    {
        semester: '3rd Semester',
        courseName: 'Shooting Training II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Security Equipment Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Aviation Security Screening CBT Analysis',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Judo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Introduction to Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Martial Arts II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Practice II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 항공보안 특화
    {
        semester: '4th Semester',
        courseName: 'Aviation Transportation Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Explosive Terrorism Response',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'AI X-ray CBT Analysis',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 항공보안과정 자격증
const aviationSecurityCertifications: CertificationItem[] = [
    {
        name: 'Security Supervisor',
        authority: 'Korea National Police Agency',
        description: 'Professional certification for security supervisors responsible for planning, directing, and managing security operations in various facilities and events.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Personal Protection Specialist',
        authority: 'Korea National Police Agency',
        description: 'Specialized certification for personal protection officers providing security services for VIPs, executives, and high-risk individuals.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Security Officer',
        authority: 'Korea National Police Agency',
        description: 'Professional certification for security personnel responsible for protecting people, property, and facilities from various security threats.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'General Security Guard',
        authority: 'Korea National Police Agency',
        description: 'Basic certification for security guards performing general security duties in commercial, residential, and public facilities.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Special Security Guard',
        authority: 'Korea National Police Agency',
        description: 'Advanced certification for security guards with specialized training for high-risk environments and special security operations.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Auxiliary Police Officer',
        authority: 'Korea National Police Agency',
        description: 'Certification for auxiliary police officers supporting regular police forces in maintaining public safety and security.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Aviation Security Guard',
        authority: 'Korea Transportation Safety Authority',
        description: 'Specialized certification for security personnel working at airports and aviation facilities, ensuring aviation security and passenger safety.',
        website: 'https://lic.kotsa.or.kr'
    },
    {
        name: 'Police Officer',
        authority: 'Korea National Police Agency',
        description: 'National certification for police officers responsible for law enforcement, crime prevention, and public safety maintenance.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Coast Guard Officer',
        authority: 'Korea Coast Guard',
        description: 'Professional certification for maritime law enforcement officers responsible for coastal security, maritime safety, and marine environment protection.',
        website: 'https://www.kcg.go.kr'
    },
    {
        name: 'Firefighter',
        authority: 'National Fire Agency',
        description: 'Professional certification for firefighters responsible for fire suppression, emergency medical services, and disaster response operations.',
        website: 'https://www.nfa.go.kr'
    },
    {
        name: 'Security Guard',
        authority: 'Korea National Police Agency',
        description: 'Professional certification for security personnel responsible for protecting facilities, assets, and people through surveillance and patrol activities.',
        website: 'https://www.police.go.kr'
    },
    {
        name: 'Martial Arts Related Certification',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'Various martial arts certifications through training in different disciplines to strengthen mind and body, developing martial arts expertise. Even complete beginners can achieve 2nd dan or higher black belt level through training at our institution.',
        website: 'https://www.sports.or.kr'
    }
];

// 의전경비과정 교육과정
const vipSecurityCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Private Security Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Emergency First Aid',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Training Methodology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 의전경비 특화
    {
        semester: '1st Semester',
        courseName: 'Practical Security Techniques',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Physical Training Method I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Screening Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Security Studies Introduction',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Protocol Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Self-Defense Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Business Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Exercise Therapy Introduction',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 의전경비 특화
    {
        semester: '2nd Semester',
        courseName: 'Shooting Training',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Physical Training Method II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Industry Understanding',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Martial Arts I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Safety Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Judo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 의전경비 특화
    {
        semester: '3rd Semester',
        courseName: 'Security Shooting Training',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Safety Detection Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Screening CBT Analysis',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Security Methodology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Introduction to Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Taekwondo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Martial Arts II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Practice II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 의전경비 특화
    {
        semester: '4th Semester',
        courseName: 'Explosive Terrorism Response',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'AI X-ray CBT Analysis',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 의전경비과정 자격증
const vipSecurityCertifications: CertificationItem[] = [
    {
        name: 'Security Supervisor',
        authority: 'Korea Human Resources Development Service',
        description: 'A certification system to train comprehensive management supervisors who are exclusively responsible for organizational guidance, management, supervision, and education of security personnel, escort security personnel, and security guards who are in charge of security work at nationally important facilities, risk prevention work for objects, and personal protection work.',
        website: 'http://www.q-net.or.kr/site/security'
    },
    {
        name: 'Personal Protection Specialist',
        authority: 'Korea Security Association',
        description: 'A certification system aimed at developing and disseminating the minimum skills necessary for crisis response capabilities that may occur during personal protection work, and training personal protection specialists with excellent practical abilities by enabling appropriate utilization according to situations.',
        website: 'http://www.ksan.or.kr/'
    },
    {
        name: 'Fire Safety Manager Level 2',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the Act on Installation, Maintenance and Safety Management of Fire-Fighting Systems when there are fire-fighting facilities in buildings.',
        website: 'http://www.kfsa.or.kr/'
    },
    {
        name: 'Hazardous Materials Manager',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the enforcement rules of the Hazardous Materials Safety Management Act when there are designated quantities of hazardous materials in buildings.',
        website: 'http://www.kfsa.or.kr'
    },
    {
        name: 'First Aid Instructor',
        authority: 'Korean Red Cross',
        description: 'A system to train those who educate to protect oneself from life-threatening situations, reduce patient suffering by providing immediate and temporary appropriate treatment and protection when injured persons or patients occur, prevent accidents, and help receive professional treatment to save precious lives.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Recreation Leader Level 1, 2',
        authority: 'Korea Leisure Recreation Association',
        description: 'A process to train professionals who provide recreation services to give clients new experiences through recreation education, provide opportunities for healthy physical and mental training, and promote personal growth and development by desirably changing physical, mental, emotional, and social behaviors.',
        website: 'http://www.recro.or.kr'
    },
    {
        name: 'Sports for All Leader',
        authority: 'Ministry of Culture, Sports and Tourism',
        description: 'A national certified qualification system for sports leaders to promote systematic guidance of national sports activities and dissemination of various programs, improve the quality of sports leaders for national sports promotion, and train sports leaders with basic knowledge and professional abilities.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Radio Operator Level 2',
        authority: 'Korea Communications Agency',
        description: 'A system that conducts technical qualification examinations to produce radio operators who respond to environmental changes and industrial manpower demands according to the development of radio communication technology.',
        website: 'http://www.kca.kr'
    },
    {
        name: 'Sports Massage',
        authority: 'Korea Sports Massage Federation',
        description: 'A certification system to train professionals aimed at promoting the physical completion of sportsmen, recovering from fatigue, and improving sports activities with the purpose of improving sportsmen\'s exercise function and increasing exercise ability through condition control and preventing sports injuries.',
        website: 'http://www.sportsmassage.or.kr'
    },
    {
        name: 'Exercise Specialist',
        authority: 'Korea Association of Certified Exercise Professionals',
        description: 'A certification system to train those with knowledge and skills who can perform duties for the purpose of physical education, sports performance improvement, leisure use, health/fitness improvement, disease and exercise injury prevention and rehabilitation, industrial safety and productivity improvement for people capable of exercise.',
        website: 'http://www.kacep.or.kr'
    },
    {
        name: 'Martial Arts Related Certification',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts experts who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even complete beginners who have never learned martial arts can become black belt holders of 2nd dan or higher through martial arts training at our institution.',
        website: 'https://www.sports.or.kr'
    }
];

// PMC경비과정 교육과정
const pmcSecurityCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Private Security Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Emergency First Aid',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Training Methodology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - PMC 특화
    {
        semester: '1st Semester',
        courseName: 'Special Forces Physical Training I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'National Security Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Military Basic Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Security Studies Introduction',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'VIP Protocol Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Self-Defense Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Business Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Exercise Therapy Introduction',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - PMC 특화
    {
        semester: '2nd Semester',
        courseName: 'Shooting Training',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'North Korean Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Special Forces Tactics',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Martial Arts I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Safety Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Judo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - PMC 특화
    {
        semester: '3rd Semester',
        courseName: 'Military History',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Tactical Shooting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Explosive Terrorism Response',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Security Methodology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Introduction to Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Taekwondo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Martial Arts II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Practice II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - PMC 특화
    {
        semester: '4th Semester',
        courseName: 'Close Quarter Combat',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Comprehensive Tactical Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Special Forces Physical Training II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// PMC경비과정 자격증
const pmcSecurityCertifications: CertificationItem[] = [
    {
        name: 'Security Supervisor',
        authority: 'Korea Human Resources Development Service',
        description: 'A certification system to train comprehensive management supervisors who are exclusively responsible for organizational guidance, management, supervision, and education of security personnel, escort security personnel, and security guards who are in charge of security work at nationally important facilities, risk prevention work for objects, and personal protection work.',
        website: 'http://www.q-net.or.kr/site/security'
    },
    {
        name: 'Personal Protection Specialist',
        authority: 'Korea Security Association',
        description: 'A certification system aimed at developing and disseminating the minimum skills necessary for crisis response capabilities that may occur during personal protection work, and training personal protection specialists with excellent practical abilities by enabling appropriate utilization according to situations.',
        website: 'http://www.ksan.or.kr/'
    },
    {
        name: 'Fire Safety Manager Level 2',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the Act on Installation, Maintenance and Safety Management of Fire-Fighting Systems when there are fire-fighting facilities in buildings.',
        website: 'http://www.kfsa.or.kr/'
    },
    {
        name: 'Hazardous Materials Manager',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the enforcement rules of the Hazardous Materials Safety Management Act when there are designated quantities of hazardous materials in buildings.',
        website: 'http://www.kfsa.or.kr'
    },
    {
        name: 'First Aid Instructor',
        authority: 'Korean Red Cross',
        description: 'A system to train those who educate to protect oneself from life-threatening situations, reduce patient suffering by providing immediate and temporary appropriate treatment and protection when injured persons or patients occur, prevent accidents, and help receive professional treatment to save precious lives.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Recreation Leader Level 1, 2',
        authority: 'Korea Leisure Recreation Association',
        description: 'A process to train professionals who provide recreation services to give clients new experiences through recreation education, provide opportunities for healthy physical and mental training, and promote personal growth and development by desirably changing physical, mental, emotional, and social behaviors.',
        website: 'http://www.recro.or.kr'
    },
    {
        name: 'Sports for All Leader',
        authority: 'Ministry of Culture, Sports and Tourism',
        description: 'A national certified qualification system for sports leaders to promote systematic guidance of national sports activities and dissemination of various programs, improve the quality of sports leaders for national sports promotion, and train sports leaders with basic knowledge and professional abilities.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Radio Operator Level 2',
        authority: 'Korea Communications Agency',
        description: 'A system that conducts technical qualification examinations to produce radio operators who respond to environmental changes and industrial manpower demands according to the development of radio communication technology.',
        website: 'http://www.kca.kr'
    },
    {
        name: 'Sports Massage',
        authority: 'Korea Sports Massage Federation',
        description: 'A certification system to train professionals aimed at promoting the physical completion of sportsmen, recovering from fatigue, and improving sports activities with the purpose of improving sportsmen\'s exercise function and increasing exercise ability through condition control and preventing sports injuries.',
        website: 'http://www.sportsmassage.or.kr'
    },
    {
        name: 'Exercise Specialist',
        authority: 'Korea Association of Certified Exercise Professionals',
        description: 'A certification system to train those with knowledge and skills who can perform duties for the purpose of physical education, sports performance improvement, leisure use, health/fitness improvement, disease and exercise injury prevention and rehabilitation, industrial safety and productivity improvement for people capable of exercise.',
        website: 'http://www.kacep.or.kr'
    },
    {
        name: 'Martial Arts Related Certification',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts experts who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even complete beginners who have never learned martial arts can become black belt holders of 2nd dan or higher through martial arts training at our institution.',
        website: 'https://www.sports.or.kr'
    }
];

// 액션연기과정 교육과정
const actionActingCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program
    {
        semester: '1st Semester',
        courseName: 'Private Security Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Security Practice I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Emergency First Aid',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Training Methodology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 액션연기 특화
    {
        semester: '1st Semester',
        courseName: 'Introduction to Film Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Basic Acting I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Action Acting Practice I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Voice and Pronunciation I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program
    {
        semester: '2nd Semester',
        courseName: 'Security Studies Introduction',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'VIP Protocol Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Self-Defense Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Security Business Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Exercise Therapy Introduction',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 액션연기 특화
    {
        semester: '2nd Semester',
        courseName: 'Theater Education Theory',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Basic Acting II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Action Acting Practice I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Voice and Pronunciation II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Security Martial Arts I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Safety Management Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Judo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 액션연기 특화
    {
        semester: '3rd Semester',
        courseName: 'Scene Acting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Camera Acting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Wire Action Basics',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Film Direction Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program
    {
        semester: '4th Semester',
        courseName: 'Security Methodology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Introduction to Law',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Taekwondo I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Martial Arts II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Security Practice II',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Online Education',
        category: 'General Education',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 액션연기 특화
    {
        semester: '4th Semester',
        courseName: 'Improvised Acting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Action Camera Acting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Wire Action Acting',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Film Production Practice',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 액션연기과정 자격증
const actionActingCertifications: CertificationItem[] = [
    {
        name: 'Security Supervisor',
        authority: 'Korea Human Resources Development Service',
        description: 'A certification system to train comprehensive management supervisors who are exclusively responsible for organizational guidance, management, supervision, and education of security personnel, escort security personnel, and security guards who are in charge of security work at nationally important facilities, risk prevention work for objects, and personal protection work.',
        website: 'http://www.q-net.or.kr/site/security'
    },
    {
        name: 'Personal Protection Specialist',
        authority: 'Korea Security Association',
        description: 'A certification system aimed at developing and disseminating the minimum skills necessary for crisis response capabilities that may occur during personal protection work, and training personal protection specialists with excellent practical abilities by enabling appropriate utilization according to situations.',
        website: 'http://www.ksan.or.kr/'
    },
    {
        name: 'Fire Safety Manager Level 2',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the Act on Installation, Maintenance and Safety Management of Fire-Fighting Systems when there are fire-fighting facilities in buildings.',
        website: 'http://www.kfsa.or.kr/'
    },
    {
        name: 'Hazardous Materials Manager',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the enforcement rules of the Hazardous Materials Safety Management Act when there are designated quantities of hazardous materials in buildings.',
        website: 'http://www.kfsa.or.kr'
    },
    {
        name: 'First Aid Instructor',
        authority: 'Korean Red Cross',
        description: 'A system to train those who educate to protect oneself from life-threatening situations, reduce patient suffering by providing immediate and temporary appropriate treatment and protection when injured persons or patients occur, prevent accidents, and help receive professional treatment to save precious lives.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Recreation Leader Level 1, 2',
        authority: 'Korea Leisure Recreation Association',
        description: 'A process to train professionals who provide recreation services to give clients new experiences through recreation education, provide opportunities for healthy physical and mental training, and promote personal growth and development by desirably changing physical, mental, emotional, and social behaviors.',
        website: 'http://www.recro.or.kr'
    },
    {
        name: 'Sports for All Leader',
        authority: 'Ministry of Culture, Sports and Tourism',
        description: 'A national certified qualification system for sports leaders to promote systematic guidance of national sports activities and dissemination of various programs, improve the quality of sports leaders for national sports promotion, and train sports leaders with basic knowledge and professional abilities.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Radio Operator Level 2',
        authority: 'Korea Communications Agency',
        description: 'A system that conducts technical qualification examinations to produce radio operators who respond to environmental changes and industrial manpower demands according to the development of radio communication technology.',
        website: 'http://www.kca.kr'
    },
    {
        name: 'Sports Massage',
        authority: 'Korea Sports Massage Federation',
        description: 'A certification system to train professionals aimed at promoting the physical completion of sportsmen, recovering from fatigue, and improving sports activities with the purpose of improving sportsmen\'s exercise function and increasing exercise ability through condition control and preventing sports injuries.',
        website: 'http://www.sportsmassage.or.kr'
    },
    {
        name: 'Exercise Specialist',
        authority: 'Korea Association of Certified Exercise Professionals',
        description: 'A certification system to train those with knowledge and skills who can perform duties for the purpose of physical education, sports performance improvement, leisure use, health/fitness improvement, disease and exercise injury prevention and rehabilitation, industrial safety and productivity improvement for people capable of exercise.',
        website: 'http://www.kacep.or.kr'
    },
    {
        name: 'Martial Arts Related Certification',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts experts who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even complete beginners who have never learned martial arts can become black belt holders of 2nd dan or higher through martial arts training at our institution.',
        website: 'https://www.sports.or.kr'
    }
];

//
// 스포츠재활컨디셔닝과정 교육과정 올바른 정보가 아님

// 스포츠재활컨디셔닝과정 자격증
const sportsRehabCertifications: CertificationItem[] = [
    {
        name: 'Security Supervisor',
        authority: 'Korea Human Resources Development Service',
        description: 'A certification system to train comprehensive management supervisors who are exclusively responsible for organizational guidance, management, supervision, and education of security personnel, escort security personnel, and security guards who are in charge of security work at nationally important facilities, risk prevention work for objects, and personal protection work.',
        website: 'http://www.q-net.or.kr/site/security'
    },
    {
        name: 'Personal Protection Specialist',
        authority: 'Korea Security Association',
        description: 'A certification system aimed at developing and disseminating the minimum skills necessary for crisis response capabilities that may occur during personal protection work, and training personal protection specialists with excellent practical abilities by enabling appropriate utilization according to situations.',
        website: 'http://www.ksan.or.kr/'
    },
    {
        name: 'Fire Safety Manager Level 2',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the Act on Installation, Maintenance and Safety Management of Fire-Fighting Systems when there are fire-fighting facilities in buildings.',
        website: 'http://www.kfsa.or.kr/'
    },
    {
        name: 'Hazardous Materials Manager',
        authority: 'Korea Fire Safety Association',
        description: 'A certification system for appointing managers according to the enforcement rules of the Hazardous Materials Safety Management Act when there are designated quantities of hazardous materials in buildings.',
        website: 'http://www.kfsa.or.kr'
    },
    {
        name: 'First Aid Instructor',
        authority: 'Korean Red Cross',
        description: 'A system to train those who educate to protect oneself from life-threatening situations, reduce patient suffering by providing immediate and temporary appropriate treatment and protection when injured persons or patients occur, prevent accidents, and help receive professional treatment to save precious lives.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Recreation Leader Level 1, 2',
        authority: 'Korea Leisure Recreation Association',
        description: 'A process to train professionals who provide recreation services to give clients new experiences through recreation education, provide opportunities for healthy physical and mental training, and promote personal growth and development by desirably changing physical, mental, emotional, and social behaviors.',
        website: 'http://www.recro.or.kr'
    },
    {
        name: 'Sports for All Leader',
        authority: 'Ministry of Culture, Sports and Tourism',
        description: 'A national certified qualification system for sports leaders to promote systematic guidance of national sports activities and dissemination of various programs, improve the quality of sports leaders for national sports promotion, and train sports leaders with basic knowledge and professional abilities.',
        website: 'http://www.redcross.or.kr'
    },
    {
        name: 'Radio Operator Level 2',
        authority: 'Korea Communications Agency',
        description: 'A system that conducts technical qualification examinations to produce radio operators who respond to environmental changes and industrial manpower demands according to the development of radio communication technology.',
        website: 'http://www.kca.kr'
    },
    {
        name: 'Sports Massage',
        authority: 'Korea Sports Massage Federation',
        description: 'A certification system to train professionals aimed at promoting the physical completion of sportsmen, recovering from fatigue, and improving sports activities with the purpose of improving sportsmen\'s exercise function and increasing exercise ability through condition control and preventing sports injuries.',
        website: 'http://www.sportsmassage.or.kr'
    },
    {
        name: 'Exercise Specialist',
        authority: 'Korea Association of Certified Exercise Professionals',
        description: 'A certification system to train those with knowledge and skills who can perform duties for the purpose of physical education, sports performance improvement, leisure use, health/fitness improvement, disease and exercise injury prevention and rehabilitation, industrial safety and productivity improvement for people capable of exercise.',
        website: 'http://www.kacep.or.kr'
    },
    {
        name: 'Martial Arts Related Certification',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts experts who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even complete beginners who have never learned martial arts can become black belt holders of 2nd dan or higher through martial arts training at our institution.',
        website: 'https://www.sports.or.kr'
    }
];

// 국방AI --------------------------------------------------------------------------------------------

// 국방사관 교육과정
const defenseOfficerCourseCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '1st Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Police Investigation Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Criminal Law I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Current Affairs Special Lecture',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Life Etiquette',
        category: 'General',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '1st Semester',
        courseName: 'Korean History I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'English I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Physical Education I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Intellectual Ability Assessment I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Police Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Constitutional Law I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Private Security Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '2nd Semester',
        courseName: 'Korean History II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'English II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Physical Education II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Military Ethics',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Criminology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Criminal Procedure Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Ethics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Martial Arts',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '3rd Semester',
        courseName: 'Leadership',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'English III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Physical Education III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Teaching Methods',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '4th Semester',
        courseName: 'Police and Society',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Criminal Psychology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Crime Prevention Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Personnel Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Organization Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '4th Semester',
        courseName: 'National Security Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'English IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Physical Education IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Unit Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 국방사관과정 자격증
const defenseOfficerCourseCertifications: CertificationItem[] = [
    {
        name: 'Aviation Industry Engineer/Technician',
        authority: 'Korea Human Resources Development Service',
        description: 'To ensure the safety of aircraft operations, this certification was established to train personnel with practical skilled functions in aircraft maintenance technology and basic knowledge and adaptability to aviation technology in general, to perform field work related to aircraft maintenance and manufacturing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Martial Arts Related Certifications',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts specialists who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even beginners who have never learned martial arts can become 2nd dan or higher black belt holders by training martial arts at our school.',
        website: 'Various associations'
    },
    {
        name: 'Personal Computer Test (PCT)',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'As industrialization advances, management analysis and data management for areas such as sales, finance, and production are essential. The Computer Utilization Ability test is a national technical qualification exam that evaluates the ability to use spreadsheets and databases, which are essential programs for office automation.',
        website: 'https://www.kcci.or.kr'
    },
    {
        name: 'TOEIC',
        authority: 'TOEIC (Educational Testing Service)',
        description: 'An English test by the American ETS (Educational Testing Service) that evaluates the level of proficiency in English as an international common language. TOEIC is a test that emphasizes listening (auditory ability).',
        website: 'http://exam.ybmsisa.com/toeic'
    },
    {
        name: 'Taekwondo',
        authority: 'Kukkiwon',
        description: 'A martial art that attacks or defends using hands and feet anytime, anywhere without weapons, characterized by fast and powerful kicking techniques. It is divided into standing at attention, standing together, sitting stance, front stance, front standing, back stance, crane standing, etc., and is a necessary certification for professional soldiers who must fight and win against enemies to have strong physical abilities.',
        website: 'https://www.kukkiwon.or.kr'
    },
    {
        name: 'National Certified Chinese Character Certification',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Most problem types include reading, writing Chinese characters, phonetics, completing idioms, antonyms, interpretation, homophones, and writing radicals, and the number of tests is maintained at twice a year. According to the standards by status, non-commissioned officers must have level 4 or higher, and officers must have level 3 or higher, so it is a certification that many students who hope to become professional soldiers prepare for. The National Certified Chinese Character Certification not only provides additional points in non-commissioned officer selection tests, but is also an essential certification that is reflected as potential capability in various evaluations such as long-term service and promotion after commissioning as officers and non-commissioned officers.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'TOEIC',
        authority: 'ETS',
        description: 'A test system developed by the US Educational Assessment Committee to measure English proficiency, helpful in learning basic conversation (meals, travel, etc.) and business English. It is a test that emphasizes listening rather than reading and writing, allowing practical English study, with a total of 200 questions and a perfect score of 990 points.',
        website: 'https://www.ets.org'
    },
    {
        name: 'Computer Utilization Ability',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Computer utilization ability is a national technical qualification exam that evaluates the ability to use computers, spreadsheets, and databases, which are essential programs for office automation. There are no restrictions on applicant qualifications, and the test consists of written and practical exams.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'Korean History Proficiency Test Certificate (Level 1, 2, 3, 4)',
        authority: 'National Institute of Korean History',
        description: 'The Korean History Proficiency Test is a test designed to measure the basic historical knowledge that citizens of the Republic of Korea should have and to form a national consensus on history. It is a test prepared by the National Institute of Korean History to innovate the paradigm of Korean history and strengthen the status of Korean history education, and is an essential certification for defense students who should have thorough national consciousness, security consciousness, and historical consciousness as future professional soldiers.',
        website: 'https://www.historyexam.go.kr'
    }
];

// 국방부사관과정 교육과정
const defenseNCOCourseCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '1st Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Police Investigation Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Criminal Law I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Current Affairs Special Lecture',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Life Etiquette',
        category: 'General',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '1st Semester',
        courseName: 'Korean History I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'English I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Physical Education I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Intellectual Ability Assessment I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Police Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Constitutional Law I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Private Security Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '2nd Semester',
        courseName: 'Korean History II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'English II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Physical Education II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Military Ethics',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Criminology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Criminal Procedure Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Ethics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Martial Arts',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '3rd Semester',
        courseName: 'Leadership',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'English III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Physical Education III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Teaching Methods',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '4th Semester',
        courseName: 'Police and Society',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Criminal Psychology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Crime Prevention Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Personnel Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Organization Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점)
    {
        semester: '4th Semester',
        courseName: 'National Security Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'English IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Physical Education IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Unit Management',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 국방부사관과정 자격증
const defenseNCOCourseCertifications: CertificationItem[] = [
    {
        name: 'Aviation Industry Engineer/Technician',
        authority: 'Korea Human Resources Development Service',
        description: 'To ensure the safety of aircraft operations, this certification was established to train personnel with practical skilled functions in aircraft maintenance technology and basic knowledge and adaptability to aviation technology in general, to perform field work related to aircraft maintenance and manufacturing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Martial Arts Related Certifications',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts specialists who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even beginners who have never learned martial arts can become 2nd dan or higher black belt holders by training martial arts at our school.',
        website: 'Various associations'
    },
    {
        name: 'Personal Computer Test (PCT)',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'As industrialization advances, management analysis and data management for areas such as sales, finance, and production are essential. The Computer Utilization Ability test is a national technical qualification exam that evaluates the ability to use spreadsheets and databases, which are essential programs for office automation.',
        website: 'https://www.kcci.or.kr'
    },
    {
        name: 'TOEIC',
        authority: 'TOEIC (Educational Testing Service)',
        description: 'An English test by the American ETS (Educational Testing Service) that evaluates the level of proficiency in English as an international common language. TOEIC is a test that emphasizes listening (auditory ability).',
        website: 'http://exam.ybmsisa.com/toeic'
    },
    {
        name: 'Taekwondo',
        authority: 'Kukkiwon',
        description: 'A martial art that attacks or defends using hands and feet anytime, anywhere without weapons, characterized by fast and powerful kicking techniques. It is divided into standing at attention, standing together, sitting stance, front stance, front standing, back stance, crane standing, etc., and is a necessary certification for professional soldiers who must fight and win against enemies to have strong physical abilities.',
        website: 'https://www.kukkiwon.or.kr'
    },
    {
        name: 'National Certified Chinese Character Certification',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Most problem types include reading, writing Chinese characters, phonetics, completing idioms, antonyms, interpretation, homophones, and writing radicals, and the number of tests is maintained at twice a year. According to the standards by status, non-commissioned officers must have level 4 or higher, and officers must have level 3 or higher, so it is a certification that many students who hope to become professional soldiers prepare for. The National Certified Chinese Character Certification not only provides additional points in non-commissioned officer selection tests, but is also an essential certification that is reflected as potential capability in various evaluations such as long-term service and promotion after commissioning as officers and non-commissioned officers.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'TOEIC',
        authority: 'ETS',
        description: 'A test system developed by the US Educational Assessment Committee to measure English proficiency, helpful in learning basic conversation (meals, travel, etc.) and business English. It is a test that emphasizes listening rather than reading and writing, allowing practical English study, with a total of 200 questions and a perfect score of 990 points.',
        website: 'https://www.ets.org'
    },
    {
        name: 'Computer Utilization Ability',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Computer utilization ability is a national technical qualification exam that evaluates the ability to use computers, spreadsheets, and databases, which are essential programs for office automation. There are no restrictions on applicant qualifications, and the test consists of written and practical exams.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'Korean History Proficiency Test Certificate (Level 1, 2, 3, 4)',
        authority: 'National Institute of Korean History',
        description: 'The Korean History Proficiency Test is a test designed to measure the basic historical knowledge that citizens of the Republic of Korea should have and to form a national consensus on history. It is a test prepared by the National Institute of Korean History to innovate the paradigm of Korean history and strengthen the status of Korean history education, and is an essential certification for defense students who should have thorough national consciousness, security consciousness, and historical consciousness as future professional soldiers.',
        website: 'https://www.historyexam.go.kr'
    }
];

// 국방AI과정 교육과정
const defenseAICourseCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '1st Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Police Investigation Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Criminal Law I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Current Affairs Special Lecture',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Life Etiquette',
        category: 'General',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - AI/정보보호 특화
    {
        semester: '1st Semester',
        courseName: 'Introduction to Information Security',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Hacking and Virus',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'English I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Physical Education I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Police Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Constitutional Law I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Private Security Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Arrest Techniques',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - AI/정보보호 특화
    {
        semester: '2nd Semester',
        courseName: 'Internet Security',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Intrusion Prevention System',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'English II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Physical Education II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Criminology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Criminal Procedure Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Ethics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Martial Arts',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - AI/정보보호 특화
    {
        semester: '3rd Semester',
        courseName: 'Information Security Law',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Algorithm',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Leadership',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Teaching Methods',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) - Police Administration Major ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '4th Semester',
        courseName: 'Police and Society',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Criminal Psychology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Crime Prevention Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Personnel Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Organization Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - AI/정보보호 특화
    {
        semester: '4th Semester',
        courseName: 'Security Programming',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Malware Analysis',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Military Ethics',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'National Security Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 국방AI과정 자격증
const defenseAICourseCertifications: CertificationItem[] = [
    {
        name: 'Aviation Industry Engineer/Technician',
        authority: 'Korea Human Resources Development Service',
        description: 'To ensure the safety of aircraft operations, this certification was established to train personnel with practical skilled functions in aircraft maintenance technology and basic knowledge and adaptability to aviation technology in general, to perform field work related to aircraft maintenance and manufacturing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Martial Arts Related Certifications',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts specialists who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even beginners who have never learned martial arts can become 2nd dan or higher black belt holders by training martial arts at our school.',
        website: 'Various associations'
    },
    {
        name: 'Personal Computer Test (PCT)',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'As industrialization advances, management analysis and data management for areas such as sales, finance, and production are essential. The Computer Utilization Ability test is a national technical qualification exam that evaluates the ability to use spreadsheets and databases, which are essential programs for office automation.',
        website: 'https://www.kcci.or.kr'
    },
    {
        name: 'TOEIC',
        authority: 'TOEIC (Educational Testing Service)',
        description: 'An English test by the American ETS (Educational Testing Service) that evaluates the level of proficiency in English as an international common language. TOEIC is a test that emphasizes listening (auditory ability).',
        website: 'http://exam.ybmsisa.com/toeic'
    },
    {
        name: 'Taekwondo',
        authority: 'Kukkiwon',
        description: 'A martial art that attacks or defends using hands and feet anytime, anywhere without weapons, characterized by fast and powerful kicking techniques. It is divided into standing at attention, standing together, sitting stance, front stance, front standing, back stance, crane standing, etc., and is a necessary certification for professional soldiers who must fight and win against enemies to have strong physical abilities.',
        website: 'https://www.kukkiwon.or.kr'
    },
    {
        name: 'National Certified Chinese Character Certification',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Most problem types include reading, writing Chinese characters, phonetics, completing idioms, antonyms, interpretation, homophones, and writing radicals, and the number of tests is maintained at twice a year. According to the standards by status, non-commissioned officers must have level 4 or higher, and officers must have level 3 or higher, so it is a certification that many students who hope to become professional soldiers prepare for. The National Certified Chinese Character Certification not only provides additional points in non-commissioned officer selection tests, but is also an essential certification that is reflected as potential capability in various evaluations such as long-term service and promotion after commissioning as officers and non-commissioned officers.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'TOEIC',
        authority: 'ETS',
        description: 'A test system developed by the US Educational Assessment Committee to measure English proficiency, helpful in learning basic conversation (meals, travel, etc.) and business English. It is a test that emphasizes listening rather than reading and writing, allowing practical English study, with a total of 200 questions and a perfect score of 990 points.',
        website: 'https://www.ets.org'
    },
    {
        name: 'Computer Utilization Ability',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Computer utilization ability is a national technical qualification exam that evaluates the ability to use computers, spreadsheets, and databases, which are essential programs for office automation. There are no restrictions on applicant qualifications, and the test consists of written and practical exams.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'Korean History Proficiency Test Certificate (Level 1, 2, 3, 4)',
        authority: 'National Institute of Korean History',
        description: 'The Korean History Proficiency Test is a test designed to measure the basic historical knowledge that citizens of the Republic of Korea should have and to form a national consensus on history. It is a test prepared by the National Institute of Korean History to innovate the paradigm of Korean history and strengthen the status of Korean history education, and is an essential certification for defense students who should have thorough national consciousness, security consciousness, and historical consciousness as future professional soldiers.',
        website: 'https://www.historyexam.go.kr'
    }
];

// 경찰공무원과정 교육과정
const policeCivilServiceCourseCurriculum: CurriculumItem[] = [
    // === 1st Semester (1-1학기) ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '1st Semester',
        courseName: 'Police Administration',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Police Investigation Theory',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Criminal Law I',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Current Affairs Special Lecture',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '1st Semester',
        courseName: 'Life Etiquette',
        category: 'General',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - 경찰공무원 특화
    {
        semester: '1st Semester',
        courseName: 'Korean History I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'English I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Physical Education I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '1st Semester',
        courseName: 'Police Comprehensive Practice I',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 2nd Semester (1-2학기) ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Introduction to Police Studies',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Constitutional Law I',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Private Security Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '2nd Semester',
        courseName: 'Arrest Techniques',
        category: 'General',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - 경찰공무원 특화
    {
        semester: '2nd Semester',
        courseName: 'Korean History II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'English II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Physical Education II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '2nd Semester',
        courseName: 'Police Comprehensive Practice II',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 3rd Semester (2-1학기) ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '3rd Semester',
        courseName: 'Introduction to Criminology',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Criminal Procedure Law',
        category: 'Major Required',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Terrorism Studies',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Ethics',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Martial Arts',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - 경찰공무원 특화
    {
        semester: '3rd Semester',
        courseName: 'Teaching Methods',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'English III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Physical Education III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '3rd Semester',
        courseName: 'Police Comprehensive Practice III',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },

    // === 4th Semester (2-2학기) ===
    // Credit-bearing Program (학점인정 학습과정)
    {
        semester: '4th Semester',
        courseName: 'Police and Society',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Criminal Psychology',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Crime Prevention Theory',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Personnel Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Organization Management',
        category: 'Major Elective',
        eduType: 'Credit-bearing Program'
    },

    // Advanced Program (Non-credit) - 심화 학습과정(비학점) - 경찰공무원 특화
    {
        semester: '4th Semester',
        courseName: 'National Security Studies',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'English IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Physical Education IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    },
    {
        semester: '4th Semester',
        courseName: 'Police Comprehensive Practice IV',
        category: 'Advanced Major',
        eduType: 'Advanced Program (Non-credit)'
    }
];

// 경찰공무원과정 자격증
const policeCivilServiceCourseCertifications: CertificationItem[] = [
    {
        name: 'Aviation Industry Engineer/Technician',
        authority: 'Korea Human Resources Development Service',
        description: 'To ensure the safety of aircraft operations, this certification was established to train personnel with practical skilled functions in aircraft maintenance technology and basic knowledge and adaptability to aviation technology in general, to perform field work related to aircraft maintenance and manufacturing.',
        website: 'http://www.hrdkorea.or.kr'
    },
    {
        name: 'Martial Arts Related Certifications',
        authority: 'Various Martial Arts Associations (Taekwondo, Judo, Hapkido, Yongmudo, Sambo, Gyeokgido, Security Martial Arts, etc.)',
        description: 'A system to train martial arts specialists who strengthen mind and body through training in various martial arts and create themselves who win in the fight against themselves and will. Even beginners who have never learned martial arts can become 2nd dan or higher black belt holders by training martial arts at our school.',
        website: 'Various associations'
    },
    {
        name: 'Personal Computer Test (PCT)',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'As industrialization advances, management analysis and data management for areas such as sales, finance, and production are essential. The Computer Utilization Ability test is a national technical qualification exam that evaluates the ability to use spreadsheets and databases, which are essential programs for office automation.',
        website: 'https://www.kcci.or.kr'
    },
    {
        name: 'TOEIC',
        authority: 'TOEIC (Educational Testing Service)',
        description: 'An English test by the American ETS (Educational Testing Service) that evaluates the level of proficiency in English as an international common language. TOEIC is a test that emphasizes listening (auditory ability).',
        website: 'http://exam.ybmsisa.com/toeic'
    },
    {
        name: 'Taekwondo',
        authority: 'Kukkiwon',
        description: 'A martial art that attacks or defends using hands and feet anytime, anywhere without weapons, characterized by fast and powerful kicking techniques. It is divided into standing at attention, standing together, sitting stance, front stance, front standing, back stance, crane standing, etc., and is a necessary certification for professional soldiers who must fight and win against enemies to have strong physical abilities.',
        website: 'https://www.kukkiwon.or.kr'
    },
    {
        name: 'National Certified Chinese Character Certification',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Most problem types include reading, writing Chinese characters, phonetics, completing idioms, antonyms, interpretation, homophones, and writing radicals, and the number of tests is maintained at twice a year. According to the standards by status, non-commissioned officers must have level 4 or higher, and officers must have level 3 or higher, so it is a certification that many students who hope to become professional soldiers prepare for. The National Certified Chinese Character Certification not only provides additional points in non-commissioned officer selection tests, but is also an essential certification that is reflected as potential capability in various evaluations such as long-term service and promotion after commissioning as officers and non-commissioned officers.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'TOEIC',
        authority: 'ETS',
        description: 'A test system developed by the US Educational Assessment Committee to measure English proficiency, helpful in learning basic conversation (meals, travel, etc.) and business English. It is a test that emphasizes listening rather than reading and writing, allowing practical English study, with a total of 200 questions and a perfect score of 990 points.',
        website: 'https://www.ets.org'
    },
    {
        name: 'Computer Utilization Ability',
        authority: 'Korea Chamber of Commerce and Industry',
        description: 'Computer utilization ability is a national technical qualification exam that evaluates the ability to use computers, spreadsheets, and databases, which are essential programs for office automation. There are no restrictions on applicant qualifications, and the test consists of written and practical exams.',
        website: 'https://www.korcham.net'
    },
    {
        name: 'Korean History Proficiency Test Certificate (Level 1, 2, 3, 4)',
        authority: 'National Institute of Korean History',
        description: 'The Korean History Proficiency Test is a test designed to measure the basic historical knowledge that citizens of the Republic of Korea should have and to form a national consensus on history. It is a test prepared by the National Institute of Korean History to innovate the paradigm of Korean history and strengthen the status of Korean history education, and is an essential certification for defense students who should have thorough national consciousness, security consciousness, and historical consciousness as future professional soldiers.',
        website: 'https://www.historyexam.go.kr'
    }
];

// Departments Data --------------------------------------------------------------------------------------------

// Aviation Maintenance Department - Complete Data Structure
const aviationMaintenanceData: Department = {
    id: 'aviation-maintenance',
    name: 'Aviation Maintenance',
    koreanName: '항공정비계열',
    description: 'Leading aviation maintenance technician training with the largest enrollment capacity designated by MOLIT',
    educationalGoals: 'Training leading aviation maintenance technicians to lead the aviation maintenance industry',
    departmentFeatures: [
        'MOLIT designated training institution with largest scale facilities',
        'Professional training institution for aviation maintenance technician certification and drone specialists',
        'Simultaneous training in 3 aircraft types (B737NG, C172, B737NG ground course)',
        'Largest scale aviation maintenance professional facilities in Korea'
    ],
    programs: [
        {
            id: 'aircraft-maintenance',
            name: 'Aircraft Maintenance Course',
            koreanName: '항공정비사과정',
            description: 'Aircraft maintenance technician course designated by the Ministry of Land, Infrastructure and Transport in accordance with ICAO (International Civil Aviation Organization) regulations. Aims to train aircraft maintenance technicians who will lead Korea\'s aviation maintenance industry, with primary focus on employment through practical field training.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',
            curriculum: aircraftMaintenanceCurriculum,
            detailedCertifications: aircraftMaintenanceCertifications,

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Aircraft maintenance technician type-rating education for 3 categories simultaneously (B737NG, C172, B737NG instructor course)',
                'Operating Korea\'s largest-scale aviation technology training center and practice facilities',
                'Oral interview only for aircraft maintenance technician practical exam (exemption from hands-on work)',
                '[2-year program] Awards Associate Degree in Aviation Maintenance specialty',
                '[3-year program] Awards Bachelor\'s Degree in Aviation Maintenance specialty'
            ],

            // 원본 HTML의 "과정혜택" 섹션
            coursebenefits: [
                'Subject exemption benefits for aircraft maintenance technician qualification exam upon course completion - Practical exam: Oral interview (\'exemption benefit\' for hands-on work)',
                'Operation of oral and hands-on special lectures for aircraft maintenance technician acquisition'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Professional educational institution for aircraft maintenance technician courses designated by Ministry of Land, Infrastructure and Transport',
                'Justified choice - #1 in number of students enrolled in domestic aviation professional schools (Based on 2022 Ministry of Education Credit Bank System information disclosure data)',
                'Available to obtain Associate Degree in Aviation Maintenance through Credit Bank System (college-level education)',
                'Available to obtain 4-year Bachelor\'s Degree in Aviation Maintenance Engineering through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities nationwide or graduate school admission available',
                'Available to obtain certificates: Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics), Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane), Aviation Traffic Safety Manager',
                'After obtaining aircraft maintenance technician certificate, eligible for enrollment in our school\'s type-rating education course (scholarship benefits provided)',
                'Credit recognition: Aviation Industrial Engineer 16 credits, Aircraft Maintenance Technician (Airplane) 18 credits, Aviation Traffic Safety Manager 16 credits',
                'Equipped with Korea\'s largest-scale professional aviation maintenance practice facilities for hands-on training'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역
            facilities: [
                {
                    campus: 'Seoul Yeongdeungpo Campus',
                    description: 'Practice for Aircraft Engine/Airframe/Equipment Maintenance Technician, Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane) qualification test preparation'
                },
                {
                    campus: 'Aviation Technology Training Center',
                    description: 'Aircraft system practice, Aviation CBT practice, Aircraft engine and airframe maintenance practice (J-79 & JT-3D & O-320 engine, CESSNA 152 & 172, T-33 & 37, 500MD, UH-1B). Practical aircraft hands-on practice (B737 CFM-56 engine, A320MTD, B737 & A320 Simulator, B737 Landing Gear & Nose Gear, B737 APU, etc.)'
                },
                {
                    campus: 'Icheon Campus',
                    description: 'Aircraft overhaul (disassembly, assembly) practice (F-5E, T-37 & 33, O-1G, UH-1H), Unmanned aerial vehicle (drone) flight practice'
                },
                {
                    note: 'All Seoul Yeongdeungpo Campus, Aviation Technology Training Center, and Icheon Campus are designated as aviation maintenance practice facilities by Ministry of Land, Infrastructure and Transport. Seoul Yeongdeungpo Campus is designated as practical examination site for Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics) and Aviation Industrial Engineer qualifications.'
                }
            ],

            // 원본 HTML의 추가 특징들
            additionalFeatures: [
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English through affiliated Foreign Language Education Center',
                'Field trips to Korean Air and Asiana Airlines Incheon Airport maintenance hangars, Korea Aerospace Industries (KAI) Sacheon aircraft manufacturing plant, Korea Forest Service Aviation Headquarters Wonju helicopter maintenance hangar, Air Force aircraft maintenance depot and Army aviation units',
                'Special lectures by celebrities in aviation maintenance field',
                'Additional semester operation for obtaining Bachelor\'s Degree in Aviation Maintenance Engineering (3rd year)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Study abroad program for US FAA and Canada TC aircraft maintenance technician',
                'Bachelor\'s degree study abroad programs in USA, Canada, Australia, UK, China, Malaysia, Philippines'
            ],

            // 원본 HTML의 상세한 진로 정보
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'T\'way Air', 'Eastar Jet', 'Sharp Air', 'Air Incheon', 'Korea Times Aviation',
                        'UI Helicopter', 'Heli Korea', 'Hongik Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Korea Forest Service Aviation Headquarters',
                        'National Police Agency Aviation Department',
                        'National Emergency Management Agency Fire Aviation Rescue Team',
                        'Provincial Government Transportation Aviation Department',
                        'Ministry of Land, Infrastructure and Transport Flight Inspection Center'
                    ]
                },
                {
                    category: 'Foreign Airlines',
                    companies: [
                        'Boeing', 'Airbus', 'Lufthansa Airlines', 'Sikorsky',
                        'Cathay Pacific Airways', 'Thai Airways'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'Hizero Aviation', 'AST Co.', 'Hanwha TechM', 'Samheung Precision',
                        'Future Aviation', 'Daemyung ENG', 'Korea Composite Materials Co.'
                    ]
                },
                {
                    category: 'Aviation Ground Services',
                    companies: [
                        'Asiana Airport', 'Korea Airport Co.', 'KR Co.', 'KTS Global Co.', 'Staffs'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Light aircraft companies', 'Helicopter operation companies',
                        'Pilot training institutes', 'Broadcasting stations and newspapers',
                        'Map production companies', 'Unmanned aircraft companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보
            transferUniversities: [
                'Korea Aerospace University', 'Hanseo University', 'Sejong University',
                'Chosun University', 'Korea National University of Transportation',
                'Chungju University', 'Chodang University', 'Howon University'
            ],

            // 원본 HTML의 군 진로 정보
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment'
            ],

            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics)',
                'Aviation Industrial Engineer',
                'Aircraft Maintenance Technician (Airplane)',
                'Aviation Traffic Safety Manager'
            ]
        },
        {
            id: 'aviation-mechanical',
            name: 'Aviation Mechanical Course',
            koreanName: '항공기계과정',
            description: 'Aviation engineer training course to perform a pivotal role in the aerospace industry, which is the most promising large-scale industry of the future. Aims to train competent personnel who can work as aviation engineers immediately upon graduation through aviation industrial engineer certification education and practical field training. Upon graduation, students can transfer to 4-year university mechanical and aviation departments if they obtain an Associate Degree in Aviation Maintenance through the Credit Bank System, apply as aircraft maintenance technicians at airlines and Air Force technical soldiers, and be commissioned and appointed as aviation maintenance non-commissioned officers and military civilians in the Army, Navy, Marine Corps, and Air Force.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Establishment and operation of CAD/CAM, CATIA training courses for aircraft design',
                'Operation of preparatory classes for transfer to 4-year universities in aviation and mechanical engineering',
                'Operation of employment preparation programs for veterans, female students, and other job seekers'
            ],

            // 원본 HTML의 "과정혜택" 섹션
            coursebenefits: [
                'Establishment and operation of CAD/CAM, CATIA training courses for aircraft design',
                'Operation of preparatory classes for transfer to 4-year universities in aviation and mechanical engineering',
                'Operation of employment preparation programs for veterans, female students, and other job seekers'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Available to obtain Associate Degree in Aviation Maintenance through Credit Bank System (college-level education)',
                'Available to obtain 4-year Bachelor\'s Degree in Aviation Maintenance Engineering through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities nationwide or graduate school admission available',
                'Available to obtain certificates: Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics), Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane), Aviation Traffic Safety Manager',
                'After obtaining aircraft maintenance technician certificate, eligible for enrollment in our school\'s type-rating education course (scholarship benefits provided)',
                'Credit recognition: Aviation Industrial Engineer 16 credits, Aircraft Maintenance Technician (Airplane) 18 credits, Aviation Traffic Safety Manager 16 credits',
                'Equipped with Korea\'s largest-scale professional aviation maintenance practice facilities for hands-on training'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역 (항공정비사과정과 동일)
            facilities: [
                {
                    campus: 'Seoul Yeongdeungpo Campus',
                    description: 'Practice for Aircraft Engine/Airframe/Equipment Maintenance Technician, Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane) qualification test preparation'
                },
                {
                    campus: 'Aviation Technology Training Center',
                    description: 'Aircraft system practice, Aviation CBT practice, Aircraft engine and airframe maintenance practice (J-79 & JT-3D & O-320 engine, CESSNA 152 & 172, T-33 & 37, 500MD, UH-1B). Practical aircraft hands-on practice (B737 CFM-56 engine, A320MTD, B737 & A320 Simulator, B737 Landing Gear & Nose Gear, B737 APU, etc.)'
                },
                {
                    campus: 'Icheon Campus',
                    description: 'Aircraft overhaul (disassembly, assembly) practice (F-5E, T-37 & 33, O-1G, UH-1H), Unmanned aerial vehicle (drone) flight practice'
                },
                {
                    note: 'All Seoul Yeongdeungpo Campus, Aviation Technology Training Center, and Icheon Campus are designated as aviation maintenance practice facilities by Ministry of Land, Infrastructure and Transport. Seoul Yeongdeungpo Campus is designated as practical examination site for Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics) and Aviation Industrial Engineer qualifications.'
                }
            ],

            // 원본 HTML의 추가 특징들 (항공정비사과정과 동일)
            additionalFeatures: [
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English through affiliated Foreign Language Education Center',
                'Field trips to Korean Air and Asiana Airlines Incheon Airport maintenance hangars, Korea Aerospace Industries (KAI) Sacheon aircraft manufacturing plant, Korea Forest Service Aviation Headquarters Wonju helicopter maintenance hangar, Air Force aircraft maintenance depot and Army aviation units',
                'Special lectures by celebrities in aviation maintenance field',
                'Additional semester operation for obtaining Bachelor\'s Degree in Aviation Maintenance Engineering (3rd year)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Study abroad program for US FAA and Canada TC aircraft maintenance technician',
                'Bachelor\'s degree study abroad programs in USA, Canada, Australia, UK, China, Malaysia, Philippines'
            ],

            // 원본 HTML의 상세한 진로 정보 (항공정비사과정과 동일)
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'T\'way Air', 'Eastar Jet', 'Sharp Air', 'Air Incheon', 'Korea Times Aviation',
                        'UI Helicopter', 'Heli Korea', 'Hongik Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Korea Forest Service Aviation Headquarters',
                        'National Police Agency Aviation Department',
                        'National Emergency Management Agency Fire Aviation Rescue Team',
                        'Provincial Government Transportation Aviation Department',
                        'Ministry of Land, Infrastructure and Transport Flight Inspection Center'
                    ]
                },
                {
                    category: 'Foreign Airlines',
                    companies: [
                        'Boeing', 'Airbus', 'Lufthansa Airlines', 'Sikorsky',
                        'Cathay Pacific Airways', 'Thai Airways'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'Hizero Aviation', 'AST Co.', 'Hanwha TechM', 'Samheung Precision',
                        'Future Aviation', 'Daemyung ENG', 'Korea Composite Materials Co.'
                    ]
                },
                {
                    category: 'Aviation Ground Services',
                    companies: [
                        'Asiana Airport', 'Korea Airport Co.', 'KR Co.', 'KTS Global Co.', 'Staffs'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Light aircraft companies', 'Helicopter operation companies',
                        'Pilot training institutes', 'Broadcasting stations and newspapers',
                        'Map production companies', 'Unmanned aircraft companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보 (항공정비사과정과 동일)
            transferUniversities: [
                'Korea Aerospace University', 'Hanseo University', 'Sejong University',
                'Chosun University', 'Korea National University of Transportation',
                'Chungju University', 'Chodang University', 'Howon University'
            ],

            // 원본 HTML의 군 진로 정보
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment'
            ],

            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics)',
                'Aviation Industrial Engineer',
                'Aircraft Maintenance Technician (Airplane)',
                'Aviation Traffic Safety Manager'
            ],
            curriculum: aviationMechanicalCurriculum,
            detailedCertifications: aviationMechanicalCertifications
        },
        {
            id: 'aviation-nco',
            name: 'Aviation NCO Course',
            koreanName: '항공부사관과정',
            description: 'The impact of changes in national security situations worldwide, in Northeast Asia, and on the Korean Peninsula on our Army, Navy, and Air Force is very significant. Therefore, the military is changing from the past manpower-centered quantitative structure to an elite, information, and knowledge-centered technology-intensive structure. In response to this, our school\'s Aviation NCO Course aims to train aviation maintenance non-commissioned officers from each military branch who will lead the aviation industry. Upon graduation, students can obtain an Associate Degree in Aviation Maintenance through the Credit Bank System and be commissioned as aviation maintenance non-commissioned officers in the Army, Navy, Marine Corps, and Air Force. Furthermore, they can also be commissioned as officers through the Korea Military Academy 3rd Class and Air Force Academy Bachelor Officer programs.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Operation of NCO education programs including Korean History and Intellectual Ability Assessment for NCO written examination preparation',
                'Our school practice facility designated as national official practical examination site',
                'Special lectures during semester and vacation for certificate acquisition preparation and special lectures by celebrities in aviation maintenance field'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 부사관 특화
            coursebenefits: [
                'Operation of NCO education programs including Korean History and Intellectual Ability Assessment for NCO written examination preparation',
                'Operation of coaching and counseling programs for NCO personality assessment and interview preparation (in partnership with ASEA Future Talent Research Institute)',
                'Operation of physical training programs for NCO physical examination preparation'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Available to obtain Associate Degree in Aviation Maintenance through Credit Bank System (college-level education)',
                'Available to obtain 4-year Bachelor\'s Degree in Aviation Maintenance Engineering through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities nationwide or graduate school admission available',
                'Available to obtain certificates: Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics), Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane), Aviation Traffic Safety Manager',
                'After obtaining aircraft maintenance technician certificate, eligible for enrollment in our school\'s type-rating education course (scholarship benefits provided)',
                'Credit recognition: Aviation Industrial Engineer 16 credits, Aircraft Maintenance Technician (Airplane) 18 credits, Aviation Traffic Safety Manager 16 credits',
                'Equipped with Korea\'s largest-scale professional aviation maintenance practice facilities for hands-on training'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역 (동일)
            facilities: [
                {
                    campus: 'Seoul Yeongdeungpo Campus',
                    description: 'Practice for Aircraft Engine/Airframe/Equipment Maintenance Technician, Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane) qualification test preparation'
                },
                {
                    campus: 'Aviation Technology Training Center',
                    description: 'Aircraft system practice, Aviation CBT practice, Aircraft engine and airframe maintenance practice (J-79 & JT-3D & O-320 engine, CESSNA 152 & 172, T-33 & 37, 500MD, UH-1B). Practical aircraft hands-on practice (B737 CFM-56 engine, A320MTD, B737 & A320 Simulator, B737 Landing Gear & Nose Gear, B737 APU, etc.)'
                },
                {
                    campus: 'Icheon Campus',
                    description: 'Aircraft overhaul (disassembly, assembly) practice (F-5E, T-37 & 33, O-1G, UH-1H), Unmanned aerial vehicle (drone) flight practice'
                },
                {
                    note: 'All Seoul Yeongdeungpo Campus, Aviation Technology Training Center, and Icheon Campus are designated as aviation maintenance practice facilities by Ministry of Land, Infrastructure and Transport. Seoul Yeongdeungpo Campus is designated as practical examination site for Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics) and Aviation Industrial Engineer qualifications.'
                }
            ],

            // 원본 HTML의 추가 특징들 (동일)
            additionalFeatures: [
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English through affiliated Foreign Language Education Center',
                'Field trips to Korean Air and Asiana Airlines Incheon Airport maintenance hangars, Korea Aerospace Industries (KAI) Sacheon aircraft manufacturing plant, Korea Forest Service Aviation Headquarters Wonju helicopter maintenance hangar, Air Force aircraft maintenance depot and Army aviation units',
                'Special lectures by celebrities in aviation maintenance field',
                'Additional semester operation for obtaining Bachelor\'s Degree in Aviation Maintenance Engineering (3rd year)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Study abroad program for US FAA and Canada TC aircraft maintenance technician',
                'Bachelor\'s degree study abroad programs in USA, Canada, Australia, UK, China, Malaysia, Philippines'
            ],

            // 원본 HTML의 상세한 진로 정보 (동일)
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'T\'way Air', 'Eastar Jet', 'Sharp Air', 'Air Incheon', 'Korea Times Aviation',
                        'UI Helicopter', 'Heli Korea', 'Hongik Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Korea Forest Service Aviation Headquarters',
                        'National Police Agency Aviation Department',
                        'National Emergency Management Agency Fire Aviation Rescue Team',
                        'Provincial Government Transportation Aviation Department',
                        'Ministry of Land, Infrastructure and Transport Flight Inspection Center'
                    ]
                },
                {
                    category: 'Foreign Airlines',
                    companies: [
                        'Boeing', 'Airbus', 'Lufthansa Airlines', 'Sikorsky',
                        'Cathay Pacific Airways', 'Thai Airways'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'Hizero Aviation', 'AST Co.', 'Hanwha TechM', 'Samheung Precision',
                        'Future Aviation', 'Daemyung ENG', 'Korea Composite Materials Co.'
                    ]
                },
                {
                    category: 'Aviation Ground Services',
                    companies: [
                        'Asiana Airport', 'Korea Airport Co.', 'KR Co.', 'KTS Global Co.', 'Staffs'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Light aircraft companies', 'Helicopter operation companies',
                        'Pilot training institutes', 'Broadcasting stations and newspapers',
                        'Map production companies', 'Unmanned aircraft companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보 (동일)
            transferUniversities: [
                'Korea Aerospace University', 'Hanseo University', 'Sejong University',
                'Chosun University', 'Korea National University of Transportation',
                'Chungju University', 'Chodang University', 'Howon University'
            ],

            // 원본 HTML의 군 진로 정보 - 부사관 특화
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment',
                'Officer commission through Korea Military Academy 3rd Class and Air Force Academy Bachelor Officer programs'
            ],

            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics)',
                'Aviation Industrial Engineer',
                'Aircraft Maintenance Technician (Airplane)',
                'Aviation Traffic Safety Manager'
            ],
            curriculum: aviationNCOCurriculum,
            detailedCertifications: aviationNCOCertifications
        },
        {
            id: 'drone-operation',
            name: 'Drone Operation & Maintenance Course',
            koreanName: '드론과정',
            description: 'A course to train specialists in unmanned aerial systems in response to the era of dramatically increasing demand for unmanned aircraft. The goal is to cultivate excellent talent who can contribute to the development of unmanned aircraft technology and industry by providing theoretical and practical education in the design, manufacturing, maintenance, and operation of fixed-wing drones, unmanned helicopters, multi-rotor drones, and micro drones. Upon graduation, students who obtain an Associate Degree in Aviation Maintenance through the Credit Bank System can transfer to aviation-related departments such as Unmanned Aircraft Departments and Aerospace Engineering at 4-year universities, and can apply as military non-commissioned officers for unmanned aircraft units in the Army, Navy, and Air Force specializing in operation, maintenance, and operation. Furthermore, employment is possible in unmanned aircraft-related industries (Korean Air, KAI, Museong Aviation, etc.), venture companies, and research institutions.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Excellent professional faculty with unmanned aircraft (drone) operation instructor certificates',
                'Icheon Campus dedicated unmanned aircraft (drone) operation practice facility (designated by Ministry of Land, Infrastructure and Transport, self-examination possible)',
                'Support available for Army, Navy, Air Force non-commissioned officer unmanned aircraft unit operation, maintenance, and operation specialties'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 드론 특화
            coursebenefits: [
                'Operation of dedicated unmanned aircraft (drone) operation practice facility at Icheon Campus',
                'Drone (ultra-light unmanned multi-copter flight device) operation certificate: Free education for our school drone course graduates - Conducted at our school Icheon Campus flight practical examination site (designated by Ministry of Land, Infrastructure and Transport, self-examination possible)',
                'Lectures conducted by excellent faculty with unmanned aircraft (drone) operation instructor certificates'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역 - 드론 특화 내용 포함
            features: [
                'Available to obtain Associate Degree in Aviation Maintenance through Credit Bank System (college-level education)',
                'Available to obtain Bachelor\'s Degree in Aviation Maintenance Studies through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities nationwide or graduate school admission available',
                'Available to obtain certificates: Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics), Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane)',
                'Credit recognition: Aviation Industrial Engineer 16 credits, Aircraft Maintenance Technician (Airplane) 18 credits',
                'Equipped with Korea\'s largest-scale professional aviation maintenance practice facilities for hands-on training'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역 (동일)
            facilities: [
                {
                    campus: 'Seoul Yeongdeungpo Campus',
                    description: 'Practice for Aircraft Engine/Airframe/Equipment Maintenance Technician, Aviation Industrial Engineer, Aircraft Maintenance Technician (Airplane) qualification test preparation'
                },
                {
                    campus: 'Aviation Technology Training Center',
                    description: 'Aircraft system practice, Aviation CBT practice, Aircraft engine and airframe maintenance practice (J-79 & JT-3D & O-320 engine, CESSNA 152 & 172, T-33 & 37, 500MD, UH-1B). Practical aircraft hands-on practice (B737 CFM-56 engine, A320MTD, B737 & A320 Simulator, B737 Landing Gear & Nose Gear, B737 APU, etc.)'
                },
                {
                    campus: 'Icheon Campus',
                    description: 'Aircraft overhaul (disassembly, assembly) practice (F-5E, T-37 & 33, O-1G, UH-1H), Unmanned aerial vehicle (drone) flight practice'
                },
                {
                    note: 'All Seoul Yeongdeungpo Campus, Aviation Technology Training Center, and Icheon Campus are designated as aviation maintenance practice facilities by Ministry of Land, Infrastructure and Transport. Seoul Yeongdeungpo Campus is designated as practical examination site for Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics) and Aviation Industrial Engineer qualifications.'
                }
            ],

            // 원본 HTML의 추가 특징들 (동일)
            additionalFeatures: [
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English through affiliated Foreign Language Education Center',
                'Field trips to Korean Air and Asiana Airlines Incheon Airport maintenance hangars, Korea Aerospace Industries (KAI) Sacheon aircraft manufacturing plant, Korea Forest Service Aviation Headquarters Wonju helicopter maintenance hangar, Air Force aircraft maintenance depot and Army aviation units',
                'Special lectures by celebrities in aviation maintenance field',
                'Additional semester operation for obtaining Bachelor\'s Degree in Aviation Maintenance Engineering (3rd year)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Study abroad program for US FAA and Canada TC aircraft maintenance technician',
                'Bachelor\'s degree study abroad programs in USA, Canada, Australia, UK, China, Malaysia, Philippines'
            ],

            // 원본 HTML의 상세한 진로 정보 (동일)
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'T\'way Air', 'Eastar Jet', 'Sharp Air', 'Air Incheon', 'Korea Times Aviation',
                        'UI Helicopter', 'Heli Korea', 'Hongik Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Korea Forest Service Aviation Headquarters',
                        'National Police Agency Aviation Department',
                        'National Emergency Management Agency Fire Aviation Rescue Team',
                        'Provincial Government Transportation Aviation Department',
                        'Ministry of Land, Infrastructure and Transport Flight Inspection Center'
                    ]
                },
                {
                    category: 'Foreign Airlines',
                    companies: [
                        'Boeing', 'Airbus', 'Lufthansa Airlines', 'Sikorsky',
                        'Cathay Pacific Airways', 'Thai Airways'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'Hizero Aviation', 'AST Co.', 'Hanwha TechM', 'Samheung Precision',
                        'Future Aviation', 'Daemyung ENG', 'Korea Composite Materials Co.'
                    ]
                },
                {
                    category: 'Aviation Ground Services',
                    companies: [
                        'Asiana Airport', 'Korea Airport Co.', 'KR Co.', 'KTS Global Co.', 'Staffs'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Light aircraft companies', 'Helicopter operation companies',
                        'Pilot training institutes', 'Broadcasting stations and newspapers',
                        'Map production companies', 'Unmanned aircraft companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보 (동일)
            transferUniversities: [
                'Korea Aerospace University', 'Hanseo University', 'Sejong University',
                'Chosun University', 'Korea National University of Transportation',
                'Chungju University', 'Chodang University', 'Howon University'
            ],

            // 원본 HTML의 군 진로 정보 - 드론 특화
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment',
                'Support for unmanned aircraft unit operation, maintenance, and operation specialties as Army, Navy, Air Force non-commissioned officers'
            ],

            // 드론 특화 진로 추가
            droneSpecificCareers: [
                'Unmanned aircraft-related industries (Korean Air, KAI, Museong Aviation, etc.)',
                'Venture companies specializing in drone technology',
                'Research institutions for unmanned aerial systems',
                'Transfer to Unmanned Aircraft Departments and Aerospace Engineering at 4-year universities'
            ],

            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Equipment/Electronics)',
                'Aviation Industrial Engineer',
                'Aircraft Maintenance Technician (Airplane)',
                'Drone (Ultra-light Unmanned Multi-copter Flight Device) Operation Certificate'
            ],
            curriculum: droneOperationCurriculum,
            detailedCertifications: droneOperationCertifications
        }
    ],
    overallEmploymentAreas: [
        {
            category: 'Civil Aviation Companies',
            companies: [
                'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                'Fly Gangwon', 'Eastar Jet', 'Star Jet', 'Air Incheon', 'T\'way Air'
            ]
        },
        {
            category: 'Government Agencies',
            companies: [
                'Ministry of Defense Aviation Maintenance', 'Police Aviation',
                'Fire Department Aviation', 'Transportation Safety Board'
            ]
        },
        {
            category: 'Aircraft Manufacturing & MRO',
            companies: [
                'Korea Aerospace Industries (KAI)', 'HIZEAERO', 'Hanwha Aerospace',
                'Samsung Techwin', 'Future Aviation', 'Daelim ENG'
            ]
        },
        {
            category: 'Helicopter Operations',
            companies: [
                'Korean Air Helicopter', 'UA Helicopter', 'Helicopter Korea',
                'AERO PEACE', 'RHF'
            ]
        },
        {
            category: 'Military Services',
            companies: [
                'Republic of Korea Air Force', 'Republic of Korea Navy',
                'Republic of Korea Army Aviation', 'Republic of Korea Marine Corps'
            ]
        },
        {
            category: 'Others',
            companies: [
                'Air Busan', 'Air Seoul', 'CATHAY PACIFIC', 'SHARP', 'FLY GANGWON'
            ]
        }
    ],
    facilities: [
        {
            name: 'Seoul Yeongdeungpo Campus',
            description: 'Main campus for theoretical education and certification preparation',
            equipment: [
                'Aircraft maintenance technician certification test preparation facilities',
                'Aviation maintenance engineer practical training facilities',
                'Aircraft maintenance technician (non-powered aircraft) certification facilities'
            ]
        },
        {
            name: 'Aviation Technology Training Center',
            description: 'Advanced aviation technology and systems training facility',
            equipment: [
                'Aircraft CBT training systems',
                'Aircraft engine and airframe maintenance training equipment',
                'J-79 & JT-3D & O-320 engines, CESSNA 152 & 172',
                'T-33 & 37, 500MD, UH-1B aircraft',
                'B737 CFM-56 engine, A320MTD',
                'B737 & A320 Simulators',
                'B737 Landing Gear & Nose Gear, B737 APU'
            ]
        },
        {
            name: 'Icheon Campus',
            description: 'Hands-on practical training facility with real aircraft',
            equipment: [
                'Aircraft debris (fuselage, cockpit) training with F-5E, T-37 & 33, O-1G, UH-1H',
                'Unmanned aircraft (drone) operation training facilities'
            ]
        }
    ]
};

// Smart Safety Diagnostics Department - Complete Data Structure
const smartSafetyData: Department = {
    id: 'smart-safety',
    name: 'Smart Safety Diagnostics',
    koreanName: '스마트안전진단계열',
    description: 'Cutting-edge NDT specialists training with 100% campus recruiting success rate',
    educationalGoals: 'Training professional experts in smart safety diagnostics for the industrial age',
    departmentFeatures: [
        '100% campus recruiting success rate (2023)',
        'Advanced NDT technology training with latest equipment',
        'Partnership with Canada for advanced training programs',
        'Overseas employment opportunities available',
        'Professional NDT certification programs'
    ],
    programs: [
        {
            id: 'aviation-ndt',
            name: 'Aviation NDT Course',
            koreanName: '항공비파괴검사과정',
            description: 'Non-destructive testing refers to conducting inspection and safety checks on products such as nuclear power, railways, aircraft, and buildings using X-rays or ultrasound without disassembling or damaging the inspection objects, and performing product reliability evaluation work. The Aviation NDT Course is a fusion of aviation maintenance technology and non-destructive testing technology, from diagnosis to maintenance for aircraft safety, aiming to train specialized technicians optimized for the aviation industry who can obtain related qualifications.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'No job worries! 100% employment for all job seekers for 22 consecutive years',
                'NDT-related technician and industrial engineer certification acquisition and eligibility to take aviation maintenance technician and aviation industrial engineer certification exams',
                'Training specialized technicians optimized for the aviation industry from aviation non-destructive testing (safety diagnosis) to maintenance'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - NDT 특화
            coursebenefits: [
                'Upon course completion: Transfer preference to Korea Military Academy 3rd Class, non-commissioned officer application, MOU 4-year universities with transfer preference and scholarship benefits upon admission',
                'Graduates are employed as quality controllers (Q.C) and inspectors in supervision companies, NDT specialized companies, small and medium enterprises, and large corporations',
                'Obtain Associate Degree in Non-Destructive Testing (Bachelor\'s degree in engineering upon additional credit completion)',
                'Professional faculty and Korea\'s largest practice facilities with cutting-edge equipment',
                'Aiming to train NDT specialists by acquiring 3-4 or more certificates per person',
                'Not only acquire NDT-related (penetrant, magnetic, ultrasonic, radiographic) technician and industrial engineer certificates, but also eligible to take aviation maintenance technician and aviation industrial engineer certification exams',
                'Employment of all graduates who wish to be employed through industry-academia partnerships',
                'Conduct aviation NDT maintenance education through aviation-related technical education'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Obtain Associate Degree in Non-Destructive Testing (recognized as college-level education)',
                'Available to obtain Bachelor\'s Degree in Metallurgical Engineering/Safety Engineering through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities available',
                'Available to obtain NDT-related (penetrant, magnetic, ultrasonic, radiographic) technician and industrial engineer certificates',
                'Credit conversion available: 16 credits for industrial engineer, 20 credits for engineer when obtaining NDT-related national technical qualifications',
                'Equipped with practice facilities by major. Practice conducted with Korea\'s best and largest facilities'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역
            facilities: [
                {
                    description: 'Penetrant testing laboratory, Magnetic particle testing laboratory, Ultrasonic testing laboratory, Radiographic testing laboratory, Materials laboratory'
                }
            ],

            // 원본 HTML의 추가 특징들 - NDT 특화
            additionalFeatures: [
                'Free English education (TOEIC, conversation, etc.) through affiliated ASEA Foreign Language Education Center for employment, transfer, and study abroad preparation',
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English. Free TOEIC and conversation special lectures during vacation',
                'Additional semester operation for obtaining Bachelor\'s Degree in Metallurgical Engineering/Safety Engineering (5th semester)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Operation of advanced learning courses in NDT field in addition to NDT Associate Degree curriculum',
                'Employment of all graduates who wish to be employed through industry-academia partnerships',
                'Phased Array Ultrasonic Testing (PAUT) equipment education',
                'Customized education for Korea Military Academy 3rd Class and technical non-commissioned officers'
            ],

            // 원본 HTML의 상세한 진로 정보 - NDT 특화 광범위한 산업분야
            employmentAreas: [
                {
                    category: 'Heavy Industry & Shipbuilding',
                    companies: [
                        'Hyundai Heavy Industries', 'Hanjin Heavy Industries', 'Doosan Infracore',
                        'Hyundai Mipo Dockyard', 'Daewoo Shipbuilding & Marine Engineering'
                    ]
                },
                {
                    category: 'Aviation',
                    companies: [
                        'Asiana Airlines', 'Korean Air', 'Korea Aerospace Industries', 'and many others'
                    ]
                },
                {
                    category: 'Petrochemical',
                    companies: [
                        'SK Chemical', 'GS Caltex', 'Hyundai Oilbank'
                    ]
                },
                {
                    category: 'Engineering',
                    companies: [
                        'Hyundai, Samsung, LG comprehensive companies for design, construction, supervision'
                    ]
                },
                {
                    category: 'Government Public Corporations',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation', 'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Power Plants',
                    companies: [
                        'Korea Atomic Energy Research Institute', 'Kori/Yeonggwang Nuclear Power Plants'
                    ]
                },
                {
                    category: 'Automotive',
                    companies: [
                        'Hyundai Motor Company', 'GM Korea', 'related parts companies'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies', 'Safety diagnosis companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보 - NDT 특화
            transferUniversities: [
                'Korea University', 'Seoul National University of Science and Technology',
                'Korea Aerospace University', 'Hanyang University',
                'metallurgy, safety, mechanical engineering related departments at 4-year universities'
            ],

            // 원본 HTML의 군 진로 정보
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment'
            ],

            // 원본 HTML의 해외 취업 정보
            internationalCareers: [
                'Employment in overseas companies related to shipbuilding, aviation, railway, electronics, construction, nuclear power, and plant (Australia, Japan, etc.)'
            ],

            certifications: [
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Technician',
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Industrial Engineer',
                'Aviation Maintenance Technician',
                'Aviation Industrial Engineer'
            ],
            curriculum: aviationNDTCurriculum,
            detailedCertifications: aviationNDTCertifications
        },
        {
            id: 'ultrasonic-diagnostics',
            name: 'Ultrasonic Diagnostics Course',
            koreanName: '초음파진단과정',
            description: 'The goal is to train ultrasonic testing technology specialists to advance quality control work through scientific and efficient product inspection. Through systematic education and practice of ultrasonic NDT industrial engineer qualification acquisition and various related inspection training using the latest ultrasonic testing equipment including PAUT testing, we aim to strengthen direct connection with industrial sites and cultivate core talent in the ultrasonic testing field.',
            duration: '2 years (Associate Degree) / 3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Phased Array Ultrasonic Testing (PAUT) equipment education implementation',
                'Training specialists by acquiring 3 or more certificates per person',
                '100% employment for all job seekers through industry-academia partnerships'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 초음파 특화
            coursebenefits: [
                'Various benefits available when graduates wish to transfer: Transfer preference to MOU 4-year universities and scholarship benefits upon admission',
                'Aiming to train NDT specialists by acquiring 3-4 or more certificates per person',
                'Professional faculty and Korea\'s largest practice facilities with cutting-edge equipment',
                'Employment of all graduates who wish to be employed through industry-academia partnerships: Graduates are employed as quality controllers (Q.C) and inspectors in supervision companies, NDT specialized companies, small and medium enterprises, and large corporations',
                'Complete advanced courses in ultrasonic testing: Employment possible in companies specializing in ultrasonic testing, Recognition as inspectors with new technology by learning PAUT during enrollment'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Obtain Associate Degree in Non-Destructive Testing (recognized as college-level education)',
                'Available to obtain Bachelor\'s Degree in Metallurgical Engineering/Safety Engineering through certificate credit conversion and additional credit completion',
                'Transfer to 3rd year of 4-year universities available',
                'Available to obtain NDT-related (penetrant, magnetic, ultrasonic, radiographic) technician and industrial engineer certificates',
                'Credit conversion available: 16 credits for industrial engineer, 20 credits for engineer when obtaining NDT-related national technical qualifications',
                'Equipped with practice facilities by major. Practice conducted with Korea\'s best and largest facilities'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역 (동일)
            facilities: [
                {
                    description: 'Penetrant testing laboratory, Magnetic particle testing laboratory, Ultrasonic testing laboratory, Radiographic testing laboratory, Materials laboratory'
                }
            ],

            // 원본 HTML의 추가 특징들 (동일)
            additionalFeatures: [
                'Free English education (TOEIC, conversation, etc.) through affiliated ASEA Foreign Language Education Center for employment, transfer, and study abroad preparation',
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Free education during semester for employment, transfer, study abroad preparation - English education (TOEIC, conversation, etc.) and aviation maintenance technical English. Free TOEIC and conversation special lectures during vacation',
                'Additional semester operation for obtaining Bachelor\'s Degree in Metallurgical Engineering/Safety Engineering (5th semester)',
                'Transfer class operation for 4-year universities such as Korea Aerospace University, Hanseo University',
                'Operation of advanced learning courses in NDT field in addition to NDT Associate Degree curriculum',
                'Employment of all graduates who wish to be employed through industry-academia partnerships',
                'Phased Array Ultrasonic Testing (PAUT) equipment education',
                'Customized education for Korea Military Academy 3rd Class and technical non-commissioned officers'
            ],

            // 원본 HTML의 상세한 진로 정보 (항공비파괴검사과정과 동일)
            employmentAreas: [
                {
                    category: 'Heavy Industry & Shipbuilding',
                    companies: [
                        'Hyundai Heavy Industries', 'Hanjin Heavy Industries', 'Doosan Infracore',
                        'Hyundai Mipo Dockyard', 'Daewoo Shipbuilding & Marine Engineering'
                    ]
                },
                {
                    category: 'Aviation',
                    companies: [
                        'Asiana Airlines', 'Korean Air', 'Korea Aerospace Industries', 'and many others'
                    ]
                },
                {
                    category: 'Petrochemical',
                    companies: [
                        'SK Chemical', 'GS Caltex', 'Hyundai Oilbank'
                    ]
                },
                {
                    category: 'Engineering',
                    companies: [
                        'Hyundai, Samsung, LG comprehensive companies for design, construction, supervision'
                    ]
                },
                {
                    category: 'Government Public Corporations',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation', 'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Power Plants',
                    companies: [
                        'Korea Atomic Energy Research Institute', 'Kori/Yeonggwang Nuclear Power Plants'
                    ]
                },
                {
                    category: 'Automotive',
                    companies: [
                        'Hyundai Motor Company', 'GM Korea', 'related parts companies'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies', 'Safety diagnosis companies'
                    ]
                }
            ],

            // 원본 HTML의 편입 가능 대학 정보 (동일)
            transferUniversities: [
                'Korea University', 'Seoul National University of Science and Technology',
                'Korea Aerospace University', 'Hanyang University',
                'metallurgy, safety, mechanical engineering related departments at 4-year universities'
            ],

            // 원본 HTML의 군 진로 정보 (동일)
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment'
            ],

            // 원본 HTML의 해외 취업 정보 (동일)
            internationalCareers: [
                'Employment in overseas companies related to shipbuilding, aviation, railway, electronics, construction, nuclear power, and plant (Australia, Japan, etc.)'
            ],

            // 초음파 특화 혜택
            ultrasonicSpecificBenefits: [
                'Employment possible in companies specializing in ultrasonic testing',
                'Recognition as inspectors with new technology by learning PAUT during enrollment',
                'Systematic education and practice strengthening direct connection with industrial sites'
            ],

            certifications: [
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Technician',
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Industrial Engineer',
                'Ultrasonic NDT Industrial Engineer',
                'Phased Array Ultrasonic Testing (PAUT) Certification'
            ],
            curriculum: ultrasonicDiagnosticsCurriculum,
            detailedCertifications: ultrasonicDiagnosticsCertifications
        },
        {
            id: 'metallurgical-engineering',
            name: 'Metallurgical Engineering [3-Year]',
            koreanName: '금속공학사과정[3년제]',
            description: 'We train professionals in the broader non-destructive testing industry by basically obtaining an Associate Degree in Non-Destructive Testing and acquiring a 4-year Bachelor\'s Degree in Metallurgical Engineering within a total of 3 years. [3-Year Program] 3-year course awarding \'4-year specialized Bachelor\'s Degree\'.',
            duration: '3 years (Bachelor\'s Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                '100% employment for all job seekers through industry-academia partnership system',
                'Free special lectures for acquiring NDT and metal-related engineer and industrial engineer certifications',
                'Day, evening, and weekend programs for working professionals'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 금속공학사 특화
            coursebenefits: [
                'Recommendation to semiconductor-related graduate schools (Seoul area)',
                'Tuition support benefits for our school graduates',
                'Aiming to train NDT specialists by acquiring 3-4 or more certificates per person',
                'Professional faculty and Korea\'s largest practice facilities with cutting-edge equipment',
                'Employment of all graduates who wish to be employed through industry-academia partnerships: Graduates are employed as quality controllers (Q.C) and inspectors in supervision companies, NDT specialized companies, small and medium enterprises, and large corporations'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역
            features: [
                'Obtain Bachelor\'s Degree in Metallurgical Engineering (recognized as 4-year university education)',
                'Acquire 4-year Bachelor\'s degree in just 3 years',
                'Available to obtain NDT-related (penetrant, magnetic, ultrasonic, radiographic) technician and industrial engineer certificates',
                'Credit conversion available: 16 credits for industrial engineer, 20 credits for engineer when obtaining NDT-related national technical qualifications',
                'Equipped with practice facilities by major. Practice conducted with Korea\'s best and largest facilities'
            ],

            // 원본 HTML의 상세한 시설 정보를 완전히 번역 (동일)
            facilities: [
                {
                    description: 'Penetrant testing laboratory, Magnetic particle testing laboratory, Ultrasonic testing laboratory, Radiographic testing laboratory, Materials laboratory'
                }
            ],

            // 원본 HTML의 추가 특징들 - 금속공학사 특화
            additionalFeatures: [
                'Free English education (TOEIC, conversation, etc.) through affiliated ASEA Foreign Language Education Center for employment and study abroad preparation, and free aviation maintenance technical English during semester. Free TOEIC and conversation special lectures during vacation',
                'Free special lectures during semester and vacation for certificate acquisition preparation',
                'Additional semester operation for obtaining Bachelor\'s Degree in Metallurgical Engineering/Safety Engineering (5th semester)',
                'Employment of all graduates who wish to be employed through industry-academia partnerships',
                'Phased Array Ultrasonic Testing (PAUT) equipment education',
                'Customized education for Korea Military Academy 3rd Class and technical non-commissioned officers'
            ],

            // 원본 HTML의 상세한 진로 정보 (동일)
            employmentAreas: [
                {
                    category: 'Heavy Industry & Shipbuilding',
                    companies: [
                        'Hyundai Heavy Industries', 'Hanjin Heavy Industries', 'Doosan Infracore',
                        'Hyundai Mipo Dockyard', 'Daewoo Shipbuilding & Marine Engineering'
                    ]
                },
                {
                    category: 'Aviation',
                    companies: [
                        'Asiana Airlines', 'Korean Air', 'Korea Aerospace Industries', 'and many others'
                    ]
                },
                {
                    category: 'Petrochemical',
                    companies: [
                        'SK Chemical', 'GS Caltex', 'Hyundai Oilbank'
                    ]
                },
                {
                    category: 'Engineering',
                    companies: [
                        'Hyundai, Samsung, LG comprehensive companies for design, construction, supervision'
                    ]
                },
                {
                    category: 'Government Public Corporations',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation', 'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Power Plants',
                    companies: [
                        'Korea Atomic Energy Research Institute', 'Kori/Yeonggwang Nuclear Power Plants'
                    ]
                },
                {
                    category: 'Automotive',
                    companies: [
                        'Hyundai Motor Company', 'GM Korea', 'related parts companies'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies', 'Safety diagnosis companies'
                    ]
                }
            ],

            // 원본 HTML의 군 진로 정보 (동일)
            militaryCareer: [
                'Technical soldier enlistment and technical non-commissioned officer commission in aviation maintenance branch of Air Force, Army, Navy, Marine Corps',
                'Military civilian employment'
            ],

            // 원본 HTML의 해외 취업 정보 (동일)
            internationalCareers: [
                'Employment in overseas companies related to shipbuilding, aviation, railway, electronics, construction, nuclear power, and plant (Australia, Japan, etc.)'
            ],

            // 금속공학사 특화 진로
            metallurgicalSpecificCareers: [
                'Advancement to semiconductor-related graduate schools',
                'Advanced career opportunities with Bachelor\'s degree in Metallurgical Engineering',
                'Broader employment opportunities in metallurgy and materials science fields'
            ],

            // 금속공학사 특화 혜택
            bachelorDegreeBenefits: [
                'Recommendation to semiconductor-related graduate schools (Seoul area)',
                'Tuition support benefits for our school graduates',
                'Acquire 4-year Bachelor\'s degree in just 3 years',
                'Day, evening, and weekend programs for working professionals'
            ],

            certifications: [
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Technician',
                'NDT-related (Penetrant, Magnetic, Ultrasonic, Radiographic) Industrial Engineer',
                'Bachelor\'s Degree in Metallurgical Engineering',
                'Phased Array Ultrasonic Testing (PAUT) Certification'
            ],
            curriculum: metallurgicalEngineeringCurriculum,
            detailedCertifications: metallurgicalEngineeringCertifications
        }
    ],
    overallEmploymentAreas: [
        {
            category: 'Public Companies',
            companies: [
                'Korea Electric Power Corporation', 'Korea Gas Corporation',
                'Korea Gas Safety Corporation'
            ]
        },
        {
            category: 'Heavy Industries & Shipbuilding',
            companies: [
                'Hyundai Heavy Industries', 'Hanjin Heavy Industries', 'Doosan Infrastructure',
                'Hyundai Mipo Dockyard', 'Daehan Shipbuilding'
            ]
        },
        {
            category: 'Aviation Industry',
            companies: [
                'Asiana Airlines', 'Korean Air', 'Korea Aerospace Industries'
            ]
        },
        {
            category: 'Petrochemical Industry',
            companies: [
                'SK Chemicals', 'GS Caltex', 'Hyundai Oil Bank'
            ]
        },
        {
            category: 'Manufacturing',
            companies: [
                'Hyundai', 'Samsung', 'LG design, construction, inspection companies'
            ]
        },
        {
            category: 'Railway Industry',
            companies: [
                'Korea Railroad Corporation', 'Seoul Metro', 'Incheon Transportation Corporation'
            ]
        }
    ],
    facilities: [
        {
            name: 'NDT Professional Training Center',
            description: 'Comprehensive non-destructive testing facility with latest equipment',
            equipment: [
                'Penetrant Testing (PT) facilities',
                'Magnetic Particle Testing (MT) equipment',
                'Ultrasonic Testing (UT) laboratories',
                'Radiographic Testing (RT) facilities',
                'Metallography laboratories'
            ]
        },
        {
            name: 'Advanced PAUT Laboratory',
            description: 'State-of-the-art Phased Array Ultrasonic Testing facility',
            equipment: [
                'Advanced PAUT equipment',
                'Computer-controlled ultrasonic systems',
                'Digital imaging and analysis software'
            ]
        },
        {
            name: 'Materials Science Center',
            description: 'Comprehensive materials testing and analysis facility',
            equipment: [
                'Metallurgical microscopes',
                'Hardness testing equipment',
                'Tensile testing machines',
                'Chemical analysis equipment'
            ]
        }
    ]
};

// Aviation Tourism Department - Complete Data Structure
const aviationTourismData: Department = {
    id: 'aviation-tourism',
    name: 'Aviation Tourism',
    koreanName: '항공관광계열',
    description: 'Professional tourism and hospitality training with 3+2 system and international certification programs',
    educationalGoals: 'Training global tourism professionals with specialized knowledge in aviation, hospitality, and tourism services',
    departmentFeatures: [
        '3+2 Education System: 3 years study + 2 years self-development & individual capacity building',
        'International partnerships with overseas tourism organizations',
        'Professional instructor team from 5-star hotels and tourism experts',
        'Comprehensive service education and hospitality training',
        'Multiple language programs and cultural tourism specialist training'
    ],
    programs: [
        {
            id: 'flight-attendant',
            name: 'Flight Attendant Course',
            koreanName: '승무원과정',
            description: 'Flight attendants broadly refer to airline cabin crew, railway crew, and cruise crew, aiming to train the best flight attendants representing domestic and foreign airlines and various companies. In line with the global era, we cultivate excellent talent through differentiated educational curriculum by acquiring international sensibilities and business manners. We handle aviation services as basic and will produce the best flight attendants through aviation safety practical training, which will become increasingly important in the future.',
            duration: '2 years (Associate Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'Excellent professional faculty from domestic and international airline cabin crew backgrounds',
                'Professional interview clinic operation for aviation tourism field domestic and overseas employment preparation',
                'Realistic training including flight safety training and cabin service conducted in cabin practice rooms identical to actual aircraft'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 승무원 특화 (10가지)
            coursebenefits: [
                'Operation of practice-oriented curriculum through on-campus and off-campus training during semester',
                'Advanced aviation safety education courses (methods for dealing with unruly passengers, in-flight emergency treatment, etc.)',
                'Certification acquisition through physical fitness verification education (judo, aikido, martial arts, etc.)',
                'Advanced in-flight announcement and cabin service education',
                'Practical skills provision through linked education with industry-academia partnership companies',
                'Special recruitment support when hired by industry-academia partnership companies',
                'Mock interviews by current and former airline interview committee members',
                'Participation in flight attendant experience education through domestic airline training facilities',
                'Provision of foreign airport ground staff education and interview opportunities',
                'Provision of practical training opportunities as cruise crew members'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역 (9가지)
            features: [
                'High-level service education composed of faculty from each airline\'s cabin crew and tourism specialty backgrounds',
                'Operation of aviation service-dedicated cabin practice rooms and comprehensive airport practice rooms',
                'Operation of Asiana Airlines reservation and ticketing system education courses',
                'Operation of seasonal internships linked to 5-star hotels and weekend internships during semester, and overseas university advancement (transfer, etc.) available',
                'Selected as \'Cruise Specialist Training Institution\' for 2 consecutive times (Ministry of Oceans and Fisheries)',
                'First vocational school selected as International Travel Tour Leader Qualification Training Institution (Ministry of Culture, Sports and Tourism)',
                '3+2 Education: 3 days of classes, 2 days of self-development and personal capacity building (our school\'s online language classes & internship training & personal capacity preparation)',
                'Implementation of linked education with industry-academia partnership companies and special recruitment support when hiring',
                'Aviation specialized school benefits (aviation security, illegal unruly passenger response methods, aviation emergency treatment education)'
            ],

            // 원본 HTML의 상세한 진로 정보
            employmentAreas: [
                {
                    category: 'Aviation & Transportation',
                    companies: [
                        'Domestic and international airline cabin crew',
                        'Airline ground staff',
                        'KTX, SRT, AREX railway cabin crew',
                        'Airport services'
                    ]
                },
                {
                    category: 'Hospitality & Tourism',
                    companies: [
                        'Domestic and international hotels',
                        'Travel agencies',
                        'Cruise crew members',
                        'Food service specialist companies',
                        'International travel tour leaders',
                        'Local guides',
                        'International conference planners'
                    ]
                },
                {
                    category: 'Corporate & Services',
                    companies: [
                        'Large corporation secretarial positions',
                        'Service coordinators',
                        'Casino dealers',
                        'Customer service specialists'
                    ]
                }
            ],

            // 승무원 특화 시설
            facilities: [],

            // 승무원 특화 교육 프로그램
            specializedPrograms: [
                '3+2 Education system (3 days classes + 2 days self-development)',
                'Cruise specialist training (Ministry of Oceans and Fisheries certified)',
                'International travel tour leader qualification training (Ministry of Culture, Sports and Tourism certified)',
                'Aviation safety specialized education (security, emergency response)',
                'Physical fitness verification programs (martial arts training)',
                'Industry-academia partnership internship programs'
            ],

            // 원본 HTML의 자격증 목록을 완전히 번역
            certifications: [
                'Aviation Service Practical Skills',
                'CRS Aviation Reservation and Ticketing',
                'International Travel Tour Leader',
                'Tourism Interpretation Guide',
                'Cultural Tourism Commentary',
                'Travel Product Consultant',
                'Customer Satisfaction Service Manager',
                'CPR Emergency Treatment Cardiopulmonary Resuscitation',
                'CS Leaders Manager',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC',
                'JLPT',
                'HSK',
                'SMAT (Service Management Qualification)',
                'Domestic Travel Guide'
            ],

            curriculum: flightAttendantCurriculum,
            detailedCertifications: flightAttendantCertifications
        },
        {
            id: 'food-beverage-specialist',
            name: 'Food & Beverage Specialist Course',
            koreanName: '식음료전문가과정',
            description: 'We train food and beverage specialists in hotels and restaurant businesses who can provide customer satisfaction through recommendation and production of beverages suitable for seasons and atmosphere. You can obtain national technical qualification <Liquor Service Technician> along with Wine Sommelier, Tea Master, Coffee Barista, Water Sommelier, and Korean Traditional Liquor Brewer certifications on campus, and we are training global specialists who can work in hotels, resorts, cruises, casinos, and restaurant businesses to introduce Korean traditional liquor and traditional beverages to not only domestic but also foreign customers.',
            duration: '2 years (Associate Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                '2016 Korea Tourism Organization selected Excellent Hotelier Training Institution (NCS-centered hotelier education program operation)',
                'Strengthening employment competitiveness through various certification acquisition courses (Liquor Service Technician, Barista, Wine Manager, etc.)',
                'Implementation of industry-academia training and part-time job linked education at domestic and overseas hotels, resorts, etc. during enrollment'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 식음료 특화 (10가지)
            coursebenefits: [
                'Operation of practice-oriented curriculum through on-campus and off-campus training during semester',
                'Advanced tourism site safety education courses (barrier-free tourism, tourism vulnerable service, etc.)',
                'Certification acquisition through physical fitness verification education (judo, aikido, martial arts, etc.)',
                'Smile ASEA Selection Competition',
                'Practical skills provision through linked education with industry-academia partnership 4-5 star hotels and food service companies',
                'Special recruitment support when hired by industry-academia partnership companies',
                'Mock interviews by current and former hotelier and beverage master interview committee members',
                '5-star hotel seasonal internship opportunities',
                'Overseas hotel employment and interview opportunities',
                'Overseas hotel training opportunities'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역 (12가지)
            features: [
                'High-level service education composed of excellent professional faculty from luxury hotels (5-star) and tourism doctorate backgrounds',
                'Operation of seasonal internships linked to 5-star hotels and weekend internships during semester, and overseas university advancement (transfer, etc.) available',
                'Selected as \'Cruise Specialist Training Institution\' for 2 consecutive times (Ministry of Oceans and Fisheries)',
                'Selected as Excellent Hotelier Training Institution (Korea Tourism Organization)',
                'First vocational school selected as International Travel Tour Leader Qualification Training Institution (Ministry of Culture, Sports and Tourism)',
                '3+2 Education: 3 days of classes, 2 days of self-development and personal capacity building (our school\'s online language classes & internship training & personal capacity preparation)',
                'Korea\'s first operation of IHG Academy hotelier course within InterContinental Hotels Group',
                'Implementation of linked education with industry-academia partnership companies and special recruitment support when hiring',
                'Food and beverage menu development and restaurant startup education',
                'Participation in creative cocktail contests',
                'Support for participation in service competition contests',
                'Support for tourism vulnerable consideration service capabilities through barrier-free tourism education'
            ],

            // 원본 HTML의 상세한 진로 정보 - 식음료 특화
            employmentAreas: [
                {
                    category: 'Hotel & Food Service',
                    companies: [
                        'Domestic and international hotel room and food & beverage department hoteliers',
                        'Airport lounge managers',
                        'Franchise food service companies',
                        'Service coordinators',
                        'CS instructors'
                    ]
                },
                {
                    category: 'Beverage & Bar Industry',
                    companies: [
                        'Bar startups',
                        'Traditional liquor galleries',
                        'Liquor museum curators',
                        'Wine import and distribution companies',
                        'Wine academies',
                        'Breweries'
                    ]
                },
                {
                    category: 'Coffee & Bakery',
                    companies: [
                        'Bakeries',
                        'Coffee franchises',
                        'Roasting specialist companies',
                        'Coffee specialty businesses'
                    ]
                }
            ],

            // 식음료 특화 시설 및 프로그램
            facilities: [],

            // 식음료 특화 교육 프로그램
            specializedPrograms: [
                '3+2 Education system (3 days classes + 2 days self-development)',
                'IHG Academy hotelier course (Korea\'s first)',
                'Food and beverage menu development education',
                'Creative cocktail contest participation',
                'Korean traditional liquor specialist training',
                'Barrier-free tourism service education',
                'NCS-centered hotelier education program'
            ],

            // 정부 인증 및 선정 사항 (호텔관광전문가과정과 동일)
            governmentCertifications: [
                'Korea Tourism Organization selected Excellent Hotelier Training Institution (2016)',
                'Ministry of Culture, Sports and Tourism certified International Travel Tour Leader Training Institution (First vocational school)',
                'Ministry of Oceans and Fisheries selected Cruise Specialist Training Institution (2 consecutive times)'
            ],

            // 식음료 특화 경쟁력
            beverageSpecialties: [
                'National technical qualification Liquor Service Technician certification',
                'Multiple beverage certifications (Wine Sommelier, Barista, Tea Master, Water Sommelier)',
                'Korean traditional liquor specialist training',
                'Creative cocktail development and competition',
                'Global beverage service capabilities',
                'Food and beverage startup education'
            ],

            // 원본 HTML의 자격증 목록을 완전히 번역
            certifications: [
                'Barista Certification',
                'Food & Beverage Manager',
                'Liquor Service Technician',
                'Wine Sommelier',
                'Water Sommelier',
                'Tea Master',
                'Korean Traditional Liquor Brewer',
                'Mixologist',
                'Food & Beverage Service Manager',
                'Customer Satisfaction Service Manager',
                'CPR Emergency Treatment Cardiopulmonary Resuscitation',
                'CS Leaders Manager',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC',
                'JLPT',
                'HSK',
                'SMAT (Service Management Qualification)',
                'Traditional Liquor Sommelier',
                'Computer Utilization Skills'
            ],

            curriculum: foodBeverageSpecialistCurriculum,
            detailedCertifications: foodBeverageSpecialistCertifications
        },
        {
            id: 'tourism-specialist',
            name: 'Tourism Specialist Course',
            koreanName: '호텔관광전문가과정',
            description: 'We train hoteliers and tourism specialists for the purpose of acquiring specialized knowledge and job performance capabilities that tourism service professionals should possess, including planning, marketing, and service provision for tourism and leisure activities, travel services, international conferences, and various events and festivals. You can obtain not only Hotel Service Manager certification but also Ministry of Culture, Sports and Tourism certified International Travel Tour Conductor certification on campus, and work as a guide overseas immediately upon graduation through domestic and overseas local guide employment programs.',
            duration: '2 years (Associate Degree)',

            // 원본 HTML의 주요 특장점을 정확히 번역
            highlights: [
                'First vocational school certified by Ministry of Culture, Sports and Tourism as International Travel Tour Leader Qualification Training Institution',
                'Field-oriented education provided by professors from overseas local guide backgrounds',
                '1:1 customized employment programs through industry-academia training and part-time jobs linked with tourism companies'
            ],

            // 원본 HTML의 "과정혜택" 섹션 - 호텔관광 특화 (10가지)
            coursebenefits: [
                'Operation of practice-oriented curriculum through on-campus and off-campus training during semester',
                'Advanced tourism site safety education courses (barrier-free tourism, tourism vulnerable service, etc.)',
                'Certification acquisition through physical fitness verification education (judo, aikido, martial arts, etc.)',
                'Smile ASEA Selection Competition',
                'Practical skills provision through linked education with industry-academia partnership companies',
                'Special recruitment support when hired by industry-academia partnership companies',
                'Mock interviews by current and former hotelier interview committee members',
                '5-star hotel seasonal internship opportunities',
                'Overseas hotel employment and interview opportunities',
                'Overseas hotel training opportunities'
            ],

            // 원본 HTML의 "특징 및 특전" 섹션을 완전히 번역 (10가지)
            features: [
                'High-level service education composed of excellent professional faculty from luxury hotels (5-star) and tourism doctorate backgrounds',
                'Operation of seasonal internships linked to 5-star hotels and weekend internships during semester, and overseas university advancement (transfer, etc.) available / Selected as \'Cruise Specialist Training Institution\' for 2 consecutive times (Ministry of Oceans and Fisheries)',
                'Selected as Excellent Hotelier Training Institution (Korea Tourism Organization)',
                'First vocational school selected as International Travel Tour Leader Qualification Training Institution (Ministry of Culture, Sports and Tourism)',
                '3+2 Education: 3 days of classes, 2 days of self-development and personal capacity building (our school\'s online language classes & internship training & personal capacity preparation)',
                'Korea\'s first operation of IHG Academy hotelier course within InterContinental Hotels Group',
                'Celebrity invitation special lectures and support for participation in various external activities',
                'Implementation of linked education with industry-academia partnership companies and special recruitment support when hiring',
                'Support for participation in service competition contests',
                'Support for tourism vulnerable consideration service capabilities through barrier-free tourism education'
            ],

            // 원본 HTML의 상세한 진로 정보 - 호텔관광 특화
            employmentAreas: [
                {
                    category: 'Hotel & Hospitality',
                    companies: [
                        'Domestic and international hotel room and food & beverage department hoteliers',
                        '5-star hotel management positions',
                        'Food service specialist company managers',
                        'Airport lounges',
                        'Hospital coordinators'
                    ]
                },
                {
                    category: 'Tourism & Travel',
                    companies: [
                        'Domestic and international travel agency guides and operators',
                        'International travel tour leaders',
                        'Overseas local guides',
                        'Domestic travel guides',
                        'Cultural tourism commentators',
                        'National park geological park commentators',
                        'Tourism interpretation guides'
                    ]
                },
                {
                    category: 'Event & Conference',
                    companies: [
                        'International conference planners (PCO)',
                        'Festival planners',
                        'Convention specialists',
                        'Event coordinators'
                    ]
                },
                {
                    category: 'Corporate & Services',
                    companies: [
                        'Airport ground staff',
                        'Casino dealers',
                        'Large corporation secretarial positions',
                        'Service coordinators',
                        'CS instructors',
                        'Customer service specialists'
                    ]
                }
            ],

            // 호텔관광 특화 시설 및 프로그램
            facilities: [],

            // 호텔관광 특화 교육 프로그램
            specializedPrograms: [
                '3+2 Education system (3 days classes + 2 days self-development)',
                'IHG Academy hotelier course (Korea\'s first)',
                'International Travel Tour Leader certification program (Ministry certified)',
                'Barrier-free tourism education program',
                '5-star hotel internship programs',
                'Overseas hotel training and employment programs',
                'Smile ASEA competition program'
            ],

            // 정부 인증 및 선정 사항
            governmentCertifications: [
                'Ministry of Culture, Sports and Tourism certified International Travel Tour Leader Training Institution (First vocational school)',
                'Korea Tourism Organization selected Excellent Hotelier Training Institution',
                'Ministry of Oceans and Fisheries selected Cruise Specialist Training Institution (2 consecutive times)'
            ],

            // 원본 HTML의 자격증 목록을 완전히 번역
            certifications: [
                'International Travel Tour Leader',
                'Convention Planner',
                'Hotel Manager',
                'Hotel Administrator',
                'Hotel Service Manager',
                'Tourism Interpretation Guide',
                'Cultural Tourism Commentator',
                'Travel Product Consultant',
                'Customer Satisfaction Service Manager',
                'CPR Emergency Treatment Cardiopulmonary Resuscitation',
                'CS Leaders Manager',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC',
                'JLPT',
                'HSK',
                'SMAT (Service Management Qualification)',
                'Domestic Travel Guide',
                'Computer Utilization Skills'
            ],

            curriculum: hotelTourismSpecialistCurriculum,
            detailedCertifications: hotelTourismSpecialistCertifications
        }
    ],
    overallEmploymentAreas: [
        {
            category: 'Airlines & Aviation',
            companies: [
                'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                'International Airlines Cabin Crew', 'Airport Ground Services'
            ]
        },
        {
            category: 'International Hotels',
            companies: [
                'Lotte Hotel', 'Shilla Hotel', 'Grand Hyatt', 'InterContinental',
                'Marriott', 'Hilton', 'Four Seasons', 'Ritz-Carlton'
            ]
        },
        {
            category: 'Tourism & Travel',
            companies: [
                'Hana Tour', 'Mode Tour', 'Yellow Balloon', 'Happy Together',
                'International Tour Operators', 'Cultural Tourism Organizations'
            ]
        },
        {
            category: 'Cruise & Resort',
            companies: [
                'Royal Caribbean', 'Celebrity Cruises', 'Princess Cruises',
                'Resort Management Companies', 'Theme Park Operations'
            ]
        },
        {
            category: 'F&B Industry',
            companies: [
                'Starbucks', 'Coffee Bean', 'Hotel F&B Departments',
                'Restaurant Chains', 'Catering Companies'
            ]
        },
        {
            category: 'Government & Public',
            companies: [
                'Korea Tourism Organization', 'Regional Tourism Boards',
                'Convention Centers', 'Cultural Centers'
            ]
        }
    ],
    facilities: [
        {
            name: 'Aviation Service Training Center',
            description: 'Real aircraft cabin and ground service training facility',
            equipment: [
                'Boeing aircraft cabin mockup',
                'Emergency evacuation training equipment',
                'Ground service operation simulators',
                'Aviation safety training systems'
            ]
        },
        {
            name: 'Hospitality Training Laboratory',
            description: 'Professional hotel and restaurant service training facility',
            equipment: [
                'Hotel room service training suites',
                'Restaurant service training dining rooms',
                'Bar and beverage service training stations',
                'Front desk operation systems'
            ]
        },
        {
            name: 'International Tourism Center',
            description: 'Tourism guide and cultural interpretation training facility',
            equipment: [
                'Multilingual presentation systems',
                'Cultural heritage interpretation equipment',
                'Tour planning and management software',
                'International communication facilities'
            ]
        }
    ]
};

// Aviation Security Department - Complete Data Structure (Phase 4)
const aviationSecurityData: Department = {
    id: 'aviation-security',
    name: 'Aviation Security',
    koreanName: '항공보안계열',
    description: 'Professional aviation security training with nationwide #1 ranking in bodyguard certification and AI security screening education',
    educationalGoals: 'Training professional aviation security specialists to lead the security industry with cutting-edge technology and expertise',
    departmentFeatures: [
        'Nationwide #1 ranking in bodyguard certification for 8 consecutive years',
        'AI artificial intelligence security screening education implementation',
        'Leading private training institution with most advanced facilities',
        'Comprehensive security training from aviation to personal protection',
        'Professional instructor team with current field experience'
    ],
    programs: [
        {
            id: 'airport-security',
            name: 'Airport Security Course',
            koreanName: '항공보안과정',
            description: 'Comprehensive airport security training with AI screening technology and the most advanced facilities in Korea',
            duration: '2 years',
            highlights: [
                'Korea\'s leading airport security training institution with most advanced facilities',
                'First in Korea to implement AI artificial intelligence security screening education',
                'Private training institution with IED terrorism response training programs',
                'State-certified private security guard qualification testing facility'
            ],
            features: [
                'Korea\'s leading airport security course establishment and training program standardization',
                'First private training institution to implement IED terrorism response training programs',
                'State-certified private security guard qualification testing facility (on-campus testing available)',
                'Korea\'s first AI artificial intelligence security screening education implementation',
                'Professional training for various firearms, chemical weapons, and security equipment',
                'Close Quarters Battle (CQB), anti-terrorism tactics, unmanned security guard (PSD), tactical emergency care (TCCC) training',
                'Age advantages for military service and various international certifications'
            ],
            curriculum: aviationSecurityCurriculum,
            detailedCertifications: aviationSecurityCertifications,
            certifications: [
                'Private Security Specialist Professional Degree (Associate, equivalent to 2-year university)',
                'State Technical Qualification for Security Guard (20 points advantage when taking the exam)',
                'Professional Bachelor\'s Degree available (3-year program transfer to 4-year university)',
                'Employment and transfer advantages through graduation and corporate connections',
                'Various activity club participation and self-development opportunities',
                'Overseas employment and field experience through industry partnerships',
                'Professional training completion at various training centers and facilities',
                'Multiple martial arts certifications above 4th dan and related self-defense certifications'
            ],
            employmentAreas: [
                {
                    category: 'Aviation Security',
                    companies: [
                        'Airport security and ground services',
                        'Airline security departments',
                        'Aviation security training centers',
                        'Airport operations security',
                        'International aviation security consultants'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense 9th Military Police Command',
                        'National Police University', 'Chungnam National University',
                        'Police University', 'Customs Service', 'Coast Guard',
                        'Railroad Police', 'National Intelligence Service',
                        'Various national and public facility security jobs'
                    ]
                },
                {
                    category: 'Transportation Security',
                    companies: [
                        'Incheon International Airport Corporation',
                        'Korea Railroad Corporation', 'Incheon Subway Corporation',
                        'KTX Telecom', 'Various national transportation facility security jobs'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK and other major corporations',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security jobs'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Various facilities (casinos, multi-cultural spaces, hotel security companies)',
                        'Security and facility management jobs at sports facilities'
                    ]
                }
            ],
            facilities: [
                'AI security screening training equipment',
                'Airport security simulation facilities',
                'State-certified testing facility for private security guards'
            ]
        },
        {
            id: 'vip-security',
            name: 'VIP Security Course',
            koreanName: '의전경비과정',
            description: 'Professional VIP protection and ceremonial security training for government and corporate leaders',
            duration: '2 years',
            highlights: [
                'State-certified private security guard qualification testing facility',
                'Professional training by graduates and experienced instructors',
                'Practical training at various security facilities for field experience',
                'Comprehensive VIP protection and security management training'
            ],
            features: [
                'First private training institution to implement IED terrorism response training programs',
                'State-certified private security guard qualification testing facility (on-campus testing available)',
                'Professional training for various security facilities requiring field competency',
                'VIP security facility training at various institutions including martial arts centers, cruise training facilities, computer training centers, civil security training centers, comprehensive security training centers',
                'Partnership with veteran training institutions for practical civil security experience of 15 weeks',
                'Training by graduates and professional instructors for specialized ceremonial and private security education'
            ],
            curriculum: vipSecurityCurriculum,
            detailedCertifications: vipSecurityCertifications,
            certifications: [
                'Private Security Specialist Professional Degree (Associate, equivalent to 2-year university)',
                'State Technical Qualification for Security Guard (20 points advantage when taking the exam)',
                'Professional Bachelor\'s Degree available (3-year program transfer to 4-year university)',
                'Employment and transfer advantages through graduation and corporate connections',
                'Various martial arts certifications above 4th dan (Taekwondo, Hapkido, special martial arts, Judo, Yongmudo, Takraw)',
                'State-certified private security guard qualification testing facility (Seoul, Gyeonggi, Incheon area/Level 1 manager)',
                'Professional training completion certificates from various specialized institutions'
            ],
            employmentAreas: [
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense 9th Military Police Command',
                        'National Police University', 'Chungnam National University',
                        'Police University', 'Customs Service', 'Coast Guard',
                        'Railroad Police', 'National Intelligence Service',
                        'Various national and public facility security jobs'
                    ]
                },
                {
                    category: 'Transportation Security',
                    companies: [
                        'Incheon International Airport Corporation',
                        'Korea Railroad Corporation', 'Incheon Subway Corporation',
                        'KTX Telecom', 'Various national transportation facility security jobs'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK and other major corporations',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security jobs'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Various facilities (casinos, multi-cultural spaces, hotel security companies)',
                        'Security and facility management jobs at sports facilities'
                    ]
                }
            ],
            facilities: [
                'VIP protection training facilities',
                'Ceremonial security training centers',
                'Advanced security management systems'
            ]
        },
        {
            id: 'pmc-security',
            name: 'PMC Security Course',
            koreanName: 'PMC경비과정',
            description: 'Korea\'s most advanced PMC training with veteran instructors for overseas private military contractor careers',
            duration: '2 years',
            highlights: [
                'Korea\'s most advanced PMC company with veteran instructors for field training',
                '100% overseas employment for graduates through professional training',
                'Specialized training by government agencies and military special forces graduates',
                'Professional training by current and veteran field experts'
            ],
            features: [
                'Private training institution first to implement IED terrorism response training programs',
                'Drone operation training through our subsidiary unmanned aviation training institute',
                'State-certified private security guard qualification testing facility (on-campus testing available)',
                'Korea\'s first AI artificial intelligence security screening education implementation',
                'Professional training for various firearms, ammunition, and security equipment',
                'Close Quarters Battle (CQB), anti-terrorism tactics, unmanned security guard (PSD), tactical emergency care (TCCC) training',
                'Military/special forces training for comprehensive training capabilities including admission training',
                'Veteran training institution partnerships for practical training experience of 15 weeks',
                'Overseas employment and field experience training (online or offline language training)',
                'Government agencies, military special forces graduates, current PMC company professional instructor training',
                'Korea\'s most advanced private military company with professional training for 100% overseas employment'
            ],
            curriculum: pmcSecurityCurriculum,
            detailedCertifications: pmcSecurityCertifications,
            certifications: [
                'Private Security Specialist Professional Degree (Associate, equivalent to 2-year university)',
                'State Technical Qualification for Security Guard (20 points advantage when taking the exam)',
                'Professional Bachelor\'s Degree available (3-year program transfer to 4-year university)',
                'Veteran training institution practical training experience of 15 weeks',
                'Various martial arts certifications above 4th dan and related self-defense certifications',
                'Field training with current professionals for practical experience',
                'Martial arts and trainer certification training and specialized facility training (Korea\'s largest facilities)',
                'Various activity club participation and self-development opportunities',
                'Overseas employment and field experience training with industry partnerships',
                'Government agencies, military special forces graduates, current PMC company professional instructor training',
                'Korea\'s most advanced private military company with professional training for 100% overseas employment'
            ],
            employmentAreas: [
                {
                    category: 'Overseas Employment',
                    companies: [
                        'Korea\'s most advanced private military company with professional training for 100% overseas employment',
                        'International security companies, NGOs and multinational company employment connections',
                        'Domestic and international private military company employment'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense 9th Military Police Command',
                        'National Police University', 'Chungnam National University',
                        'Police University', 'Customs Service', 'Coast Guard',
                        'Railroad Police', 'National Intelligence Service',
                        'Various national and public facility security jobs'
                    ]
                },
                {
                    category: 'Transportation Security',
                    companies: [
                        'Incheon International Airport Corporation',
                        'Korea Railroad Corporation', 'Incheon Subway Corporation',
                        'KTX Telecom', 'Various national transportation facility security jobs'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK and other major corporations',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security jobs'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'PMC and other government agencies and international organizations as senior experts',
                        'Various specialized professional activities as experts'
                    ]
                }
            ],
            facilities: [
                'Advanced PMC training facilities',
                'Tactical training centers',
                'Specialized security equipment training rooms'
            ]
        },
        {
            id: 'action-acting',
            name: 'Action Acting Course',
            koreanName: '액션연기과정',
            description: 'Professional action acting training for entertainment industry with martial arts and stunt specialization',
            duration: '2 years',
            highlights: [
                'Current action and acting industry professionals as instructors',
                'Professional casting directors visit the school as instructors for practical education',
                'Direct employment through broadcasting, film field experience opportunities',
                'Comprehensive action acting and security industry preparation'
            ],
            features: [
                'Private training institution first to implement martial arts training programs',
                'Korea\'s leading level trainer training center training programs for specialized level training',
                'Current field professionals providing direct acting guidance and various specialized field training',
                'Professional director, acting coach, and military advisory professional guidance',
                'Veteran training institution partnerships for practical training experience of 15 weeks',
                'Employment and transfer advantages through graduation and corporate connections',
                'Various activity club participation and regular formal programming and self-development opportunities',
                'Martial arts and trainer certification training and specialized facility training',
                'Various weapon and device training for Korea\'s top-level martial arts training facilities and markets',
                'Various martial arts certifications above 4th dan (Taekwondo, Hapkido, special martial arts, Judo, Yongmudo, Takraw)',
                'State-certified private security guard qualification testing facility (employment advantages in security and protection industry)',
                'Broadcasting industry professional celebrity lectures and practical knowledge and field networking training'
            ],
            curriculum: actionActingCurriculum,
            detailedCertifications: actionActingCertifications,
            certifications: [
                'Private Security Specialist Professional Degree (Associate, equivalent to 2-year university)',
                'Professional Bachelor\'s Degree available (3-year program transfer to 4-year university)',
                'Current field acting, performance supervision and action film professionals',
                'Large-scale security facility graduates and security specialist professional training',
                'Veteran training institution practical training experience of 15 weeks',
                'Employment and transfer advantages through graduation and corporate connections',
                'Various activity club participation and self-development opportunities',
                'Martial arts and trainer certification training and specialized facility training',
                'Various weapon and device training for Korea\'s top-level martial arts training facilities',
                'Various martial arts certifications above 4th dan (Taekwondo, Hapkido, special martial arts, Judo, Yongmudo, Takraw)',
                'State-certified private security guard qualification testing facility (employment advantages in security and protection industry)',
                'Broadcasting industry professional celebrity lectures and practical knowledge and field networking training'
            ],
            employmentAreas: [
                {
                    category: 'Entertainment Industry',
                    companies: [
                        'Acting, film, and broadcasting industry (film acting, talent, action supervision, action acting training)',
                        'Various entertainment industry professional activities'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense 9th Military Police Command',
                        'National Police University', 'Chungnam National University',
                        'Police University', 'Customs Service', 'Coast Guard',
                        'Railroad Police', 'National Intelligence Service',
                        'Various national and public facility security jobs'
                    ]
                },
                {
                    category: 'Transportation Security',
                    companies: [
                        'Incheon International Airport Corporation',
                        'Korea Railroad Corporation', 'Incheon Subway Corporation',
                        'KTX Telecom', 'Various national transportation facility security jobs'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK and other major corporations',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security jobs'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Various facilities (casinos, multi-cultural spaces, hotel security companies)',
                        'Security and facility management jobs at sports facilities'
                    ]
                }
            ],
            facilities: [
                'Professional acting studios',
                'Action training facilities',
                'Martial arts training centers'
            ]
        },
        {
            id: 'sports-rehabilitation',
            name: 'Sports Rehabilitation & Conditioning Course',
            koreanName: '스포츠재활컨디셔닝과정',
            description: 'Advanced sports rehabilitation and conditioning training for athletes and fitness professionals',
            duration: '2 years',
            highlights: [
                'Leading specialized sports rehabilitation education in Korea',
                'Professional training for future sports rehabilitation and security industry development',
                'Comprehensive training combining fitness, safety, and security expertise',
                'Advanced sports science and rehabilitation technology training'
            ],
            features: [
                'Private training institution first to implement advanced sports rehabilitation training programs',
                'Professional degree (Associate) in Private Security Specialist available',
                'Korea\'s leading level trainer and sports rehabilitation specialist training',
                'Current industry professionals providing specialized sports and fitness guidance',
                'Large-scale security and sports facilities for comprehensive practical training',
                'Professional sports rehabilitation and conditioning specialist training',
                'Integration of sports science with security and safety training',
                'Advanced sports rehabilitation equipment and technology training',
                'Veteran training institution partnerships for comprehensive field experience',
                'Industry connections for employment in sports and security fields'
            ],
            detailedCertifications: sportsRehabCertifications,
            certifications: [
                'Private Security Specialist Professional Degree (Associate, equivalent to 2-year university)',
                'Professional Bachelor\'s Degree available (3-year program transfer to 4-year university)',
                'Sports Rehabilitation Specialist Certification',
                'Fitness and Conditioning Trainer Certification',
                'Various martial arts certifications above 4th dan',
                'Sports Science and Rehabilitation Technology Certifications',
                'State-certified private security guard qualification',
                'Professional sports trainer and rehabilitation specialist certifications'
            ],
            employmentAreas: [
                {
                    category: 'Sports & Fitness',
                    companies: [
                        'Professional sports teams rehabilitation departments',
                        'Fitness centers and rehabilitation clinics',
                        'Sports science institutes',
                        'Athletic training facilities',
                        'Sports conditioning specialists'
                    ]
                },
                {
                    category: 'Healthcare & Rehabilitation',
                    companies: [
                        'Sports medicine clinics',
                        'Physical therapy centers',
                        'Rehabilitation hospitals',
                        'Sports injury prevention programs',
                        'Athletic performance enhancement centers'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense 9th Military Police Command',
                        'National Police University', 'Chungnam National University',
                        'Police University', 'Customs Service', 'Coast Guard',
                        'Various national and public facility security jobs'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK and other major corporations',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'Private security companies and facility security jobs'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Sports facilities management',
                        'Athletic training consulting',
                        'Fitness industry leadership positions'
                    ]
                }
            ],
            facilities: [
                'Advanced sports rehabilitation equipment',
                'Professional conditioning training facilities',
                'Sports science laboratories'
            ]
        }
    ],
    overallEmploymentAreas: [
        {
            category: 'Aviation & Transportation Security',
            companies: [
                'Airport security services', 'Airline security departments',
                'Korea Railroad Corporation', 'Incheon International Airport'
            ]
        },
        {
            category: 'Government & Military',
            companies: [
                'Ministry of Defense 9th Military Police Command',
                'National Police University', 'Coast Guard', 'Customs Service'
            ]
        },
        {
            category: 'Corporate Security',
            companies: [
                'Hyundai', 'Samsung', 'LG', 'SK major corporations',
                'ADT Caps', 'S1', 'KT Telecop', 'International hotels'
            ]
        },
        {
            category: 'Private Military & Security',
            companies: [
                'Private military contractors (PMC)', 'VIP protection services',
                'International security companies', 'Private security firms'
            ]
        },
        {
            category: 'Entertainment & Sports',
            companies: [
                'Broadcasting and film industry', 'Action coordination',
                'Sports rehabilitation centers', 'Fitness facilities'
            ]
        },
        {
            category: 'Higher Education',
            companies: [
                '4-year university transfers', 'Advanced degree programs'
            ]
        }
    ],
    facilities: [
        {
            name: 'AI Security Training Center',
            description: 'Korea\'s first AI artificial intelligence security screening education facility',
            equipment: [
                'AI security screening systems',
                'Advanced detection equipment',
                'Computer-based training systems',
                'Simulation training software'
            ]
        },
        {
            name: 'Tactical Training Complex',
            description: 'Comprehensive tactical and security training facility',
            equipment: [
                'Close Quarters Battle (CQB) training rooms',
                'Anti-terrorism tactical equipment',
                'Tactical emergency care (TCCC) training systems',
                'Various security and defense equipment'
            ]
        },
        {
            name: 'Martial Arts & Action Training Center',
            description: 'Professional martial arts and action training facility',
            equipment: [
                'Professional martial arts training equipment',
                'Action choreography training spaces',
                'Various traditional and modern weapon training equipment',
                'Professional recording and analysis systems'
            ]
        }
    ]
};

// National Defense & Police AI Department - Complete Data Structure (Phase 5)
const defensePoliceAIData: Department = {  // ✅ nationalDefensePoliceAIData → defensePoliceAIData
    id: 'defense-police-ai',  // ✅ 'national-defense-police-ai' → 'defense-police-ai'
    name: 'Defense & Police AI',  // ✅ 'National Defense & Police AI' → 'Defense & Police AI'
    koreanName: '국방경찰AI계열',
    description: 'Elite national defense and police training with 10 consecutive years #1 ranking at Army 3rd Officer Candidate School and 91% officer/NCO advancement rate',
    educationalGoals: 'Training elite defense professionals and police officers for national security and public safety with advanced AI technology integration',
    departmentFeatures: [
        'Army 3rd Officer Candidate School #1 nationwide ranking for 10 consecutive years',
        '91% advancement rate to officer/NCO positions over recent 9 years',
        'Elite training for officers, NCOs, and AI specialists',
        'Comprehensive defense and police training programs',
        'Advanced AI technology integration in defense applications'
    ],
    programs: [
        {
            id: 'national-defense-officer',
            name: 'National Defense Officer Course',
            koreanName: '국방사관과정',
            description: 'Elite Army officer training targeting Army 3rd Officer Candidate School admission and military academy commissioning',
            duration: '2 years',
            highlights: [
                'Nationwide #1 Army 3rd Officer Candidate School admission rate',
                'Priority admission to Seoul National University and professional military academies',
                'Elite officer training with 21st century military modernization and informatization',
                'Training for professional military officers as future national security backbone'
            ],
            features: [
                'Priority admission to Army 3rd Officer Candidate School with top educational standards (Target: Army Second Lieutenant commissioning)',
                'Priority admission to each service branch (Army/Navy/Air Force) officer candidate programs (Target: Service branch Second Lieutenant commissioning)',
                'Mentoring education programs with individualized officer track advancement based on personal capabilities',
                'Transfer opportunities connected to university degrees and leadership development for all social sectors',
                'Character development education and career roadmap management essential for officer duties'
            ],
            curriculum: defenseOfficerCourseCurriculum,
            detailedCertifications: defenseOfficerCourseCertifications,
            certifications: [
                'University \'3rd and 4th year\' transfer program with full government funding (40 million KRW per year benefit)',
                'Dual degree upon graduation (General Bachelor\'s and Military Science Bachelor\'s)',
                'Army 3rd Officer Candidate School commissioning with promotion to Captain after 3 years (equivalent to Grade 5 civil servant)',
                'Second Lieutenant service available for 100% of applicants (overseas deployment support included), promotion opportunities based on ability',
                'Self-development opportunities for military internal/external commissioned education and master\'s/doctoral degree acquisition',
                '19 years 6 months or longer service with special military pension benefits'
            ],
            employmentAreas: [
                {
                    category: 'Military Officer Positions',
                    companies: [
                        'Army 3rd Officer Candidate School graduates as Army Officers (Grade 7 civil servant equivalent)',
                        'Each service branch officer candidate graduates as Service Officers (Grade 7 civil servant equivalent)',
                        'Officer retirement followed by career transition opportunities to defense (Army/Navy/Air Force/Marine Corps/Special Forces) competitive appointment as military civil service: Various specialties (15 Army divisions, 60 regiments)',
                        'Officer retirement followed by military-related agencies and affiliated organization employment opportunities',
                        'Special forces officer retirement followed by security service, special police duty, and other competitive appointment civil service employment opportunities'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Regular Agencies: Defense Civil Service Grade 9 (national civil service) admission',
                        'Simultaneous civilian equivalent Correctional Officer Grade 9 (correctional service), Firefighter Grade 9 (currently, public security service transferred from public security service to national service), Fire Service Grade 9 admission',
                        'Police Officer Grade 9 admission (youth security, police, judicial police service, and legal affairs for self-governing local governments)',
                        'Korea National University of Transportation, Cheonan University, Police University, Cheongwoon Police College, Eulji University Medical Center, National Intelligence Service Training Institute, and various government facility security and public facility services'
                    ]
                },
                {
                    category: 'Public Institutions',
                    companies: [
                        'Incheon International Airport Corporation', 'Korea Railroad Corporation', 'Incheon Transportation Corporation',
                        'KTX Telecom', 'Various national transportation facility security services'
                    ]
                },
                {
                    category: 'Corporate Security & Defense',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK major corporation security services',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security services'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                }
            ],
            facilities: [
                'Military leadership training facilities',
                'Officer candidate preparation centers',
                'Military science education laboratories'
            ]
        },
        {
            id: 'national-defense-nco',
            name: 'National Defense NCO Course',
            koreanName: '국방부사관과정',
            description: 'Professional military NCO training for all service branches with 8 consecutive years of Seoul area ranking #1',
            duration: '2 years',
            highlights: [
                'Metropolitan area only defense NCO professional training institution with 8 consecutive years Seoul area ranking #1',
                'Elite military NCO training meeting military demands',
                'Each service branch NCO advancement with mentoring system',
                'Professional military NCO development as specialized career path'
            ],
            features: [
                'Air Force NCO selection test priority educational standards and instruction (Target: Air Force Sergeant commissioning)',
                'Army/Navy/Marine Corps/Special Forces/various special units military service NCO receipt priority educational standards and instruction (Target: Army/Navy/Marine Corps/Special Forces/various special units Sergeant commissioning)',
                'Army military service company NCO receipt temporary Second Lieutenant service special priority educational standards and instruction (Target: Army Sergeant commissioning)',
                'Character development and career roadmap management essential for NCO duty performance'
            ],
            curriculum: defenseNCOCourseCurriculum,
            detailedCertifications: defenseNCOCourseCertifications,
            certifications: [
                'Comprehensive benefits upon each service branch NCO commissioning',
                'Secure and stable career with professional field experience retention and free preparation opportunities',
                'Second Lieutenant service available for 70% or more applicants',
                '19 years 6 months or longer service with dedicated military pension benefits',
                'Post-discharge priority employment at military-related agencies',
                'Self-development opportunities for military internal/external commissioned education and bachelor\'s, master\'s, doctoral degree acquisition'
            ],
            employmentAreas: [
                {
                    category: 'Military NCO Positions',
                    companies: [
                        'Each service branch Sergeant commissioning (each service branch NCO career: personal preference upon retirement)',
                        'NCO retirement followed by defense military (Army/Navy/Air Force/Marine Corps/Special Forces) competitive appointment military civil service admission available: Various specialties (15 Army divisions, 60 regiments)',
                        'NCO retirement followed by military-related agencies and affiliated organization employment opportunities',
                        'Special forces NCO retirement followed by security service, special police duty, and other competitive appointment civil service employment opportunities'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Regular Agencies: Defense Civil Service Grade 9 (national civil service) admission',
                        'Simultaneous civilian equivalent Correctional Officer Grade 9 (correctional service), Firefighter Grade 9 (currently, public security service transferred from public security service to national service), Fire Service Grade 9 admission',
                        'Police Officer Grade 9 admission (youth security, police, judicial police service for self-governing local governments)',
                        'Korea National University of Transportation, Cheonan University, Police University, Cheongwoon Police College, Eulji University Medical Center, National Intelligence Service Training Institute, and various government facility security services'
                    ]
                },
                {
                    category: 'Public Institutions',
                    companies: [
                        'Incheon International Airport Corporation',
                        'Korea Railroad Corporation', 'Incheon Transportation Corporation',
                        'KTX Telecom', 'Various national transportation facility security services'
                    ]
                },
                {
                    category: 'Corporate Security & Defense',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK major corporation security services',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and private facility security services'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                }
            ],
            facilities: [
                'Military NCO training facilities',
                'Service branch specialization centers',
                'Military leadership development laboratories'
            ]
        },
        {
            id: 'national-defense-ai',
            name: 'National Defense AI Course',
            koreanName: '국방AI과정',
            description: 'Advanced AI and cybersecurity training for national defense with cutting-edge technology and specialized military applications',
            duration: '2 years',
            highlights: [
                'National defense AI and scientific technology development for national crisis management',
                'Cyber security professional training with AI-based defense systems',
                'Advanced defense technology training with artificial intelligence integration',
                'Specialized military AI applications and cybersecurity operations'
            ],
            features: [
                'Artificial Intelligence (intelligent pattern recognition, defense AI platform) education',
                'Cyber/Network (cyber warfare response, national cybersecurity), AI big data, defense technology, information security education',
                'AI-based personnel management systems and military logistics big data education',
                'University, NCO, military civilian service academy (application) followed by related unit/support service assignment ease'
            ],
            curriculum: defenseAICourseCurriculum,
            detailedCertifications: defenseAICourseCertifications,
            certifications: [
                'Graduation after 3 or more certifications during study (Target: English TOEIC score 500 or above, martial arts certification, Korean History Proficiency Test Grade 6 or above, Chinese characters, etc.)',
                'Military technical examination preparation for enhanced educational programs: National Physical Fitness Level 3 3rd grade or above target achievement',
                'Related certification acquisition: Cybersecurity professional, Information Security Engineer, Big Data Professional, Data Analysis Professional (ADsP) certification, etc.'
            ],
            employmentAreas: [
                {
                    category: 'Military AI & Cyber Operations',
                    companies: [
                        'Cyber Command AI cyber specialists and AI personnel/logistics fields (university, NCO)',
                        'Advanced weapons systems operation management specialists (university, NCO)',
                        'Post-discharge AI cyber (core security) and AI personnel/logistics (big data) related field employment ease',
                        'Post-discharge national agencies, major corporations and information security companies, defense research institutions, aviation enterprises, defense IT companies, etc., AI cyber (core security), AI personnel/logistics (big data) related field specialist employment ease'
                    ]
                },
                {
                    category: 'Government & Research Institutions',
                    companies: [
                        'National agencies and research institutions',
                        'Defense research institutes',
                        'Cybersecurity agencies',
                        'Information security companies',
                        'Aviation technology companies'
                    ]
                },
                {
                    category: 'Corporate Technology',
                    companies: [
                        'Major corporations (Hyundai, Samsung, LG, SK)',
                        'Information security companies',
                        'Defense IT companies',
                        'AI technology firms',
                        'Big data analytics companies'
                    ]
                },
                {
                    category: 'Specialized AI Fields',
                    companies: [
                        'AI cybersecurity specialists',
                        'Defense AI system developers',
                        'Military logistics AI specialists',
                        'Cybersecurity consultants'
                    ]
                }
            ],
            facilities: [
                'AI technology training laboratories',
                'Cybersecurity simulation centers',
                'Defense AI development facilities'
            ]
        },
        {
            id: 'police-officer',
            name: 'Police Officer Course',
            koreanName: '경찰공무원과정',
            description: 'Comprehensive police officer training with focus on experienced career recruitment and advanced qualifications for law enforcement careers',
            duration: '2 years',
            highlights: [
                'Career experience recruitment examination qualification through approved curriculum',
                'Grade 9 career experience recruitment examination eligibility after graduation',
                'Police martial arts certification programs with advanced training',
                'Comprehensive public safety and law enforcement career preparation'
            ],
            features: [
                'Career experience recruitment examination qualification through approved curriculum, enabling Grade 9 career experience recruitment examination application after graduation (Professional specialist: Defense professional course)',
                'Police martial arts qualification recognition organization certification programs enabling career civil service examination qualification acquisition',
                'Defense professional institution\'s defense technical professional learning enabling career civil service examination qualification acquisition',
                'Defense agency partnership through academic agreements for enhanced educational systems',
                'National technical career specialist certification acquisition with 20 points recognition (Grade 9 career civil service examination qualification granted)',
                'National technical personal protection specialist certification acquisition with 6 points recognition',
                'After-school various club activities for capacity enhancement and self-development opportunities',
                'Various martial arts certifications above 4th dan acquisition (career civil service examination qualification granted)',
                'Martial arts trainer certification education and police public safety officer employment opportunities'
            ],
            curriculum: policeCivilServiceCourseCurriculum,
            detailedCertifications: policeCivilServiceCourseCertifications,
            certifications: [
                'Career experience recruitment examination qualification acquisition',
                'Grade 9 career experience recruitment examination application eligibility',
                'National technical career specialist certification (20 points advantage)',
                'National technical personal protection specialist certification (6 points advantage)',
                'Various martial arts certifications above 4th dan',
                'Martial arts trainer certifications',
                'Police qualification and safety management certifications'
            ],
            employmentAreas: [
                {
                    category: 'Government Agencies',
                    companies: [
                        'Regular agencies: Defense civil service Grade 9 (national civil service) admission',
                        'Simultaneous civilian equivalent Correctional Officer Grade 9, Firefighter Grade 9, Fire Service Grade 9 (youth security, police, and judicial police service handling legal affairs for self-governing local governments\' civilian local government civil service)',
                        'Korea National University of Transportation, Cheonan University, Police University, Cheongwoon Police College, Eulji University Medical Center, National Intelligence Service Training Institute, and various government facility security services'
                    ]
                },
                {
                    category: 'Public Institutions',
                    companies: [
                        'Incheon International Airport Corporation', 'Korea Railroad Corporation', 'Incheon Transportation Corporation',
                        'KTX Telecom', 'Various national transportation facility security services'
                    ]
                },
                {
                    category: 'Law Enforcement & Security',
                    companies: [
                        'Police departments and law enforcement agencies',
                        'Correctional facilities and judicial police services',
                        'Fire departments and emergency services',
                        'Private security companies and facility security services'
                    ]
                },
                {
                    category: 'Corporate Security',
                    companies: [
                        'Hyundai', 'Samsung', 'LG', 'SK major corporation security services',
                        'ADT Caps', 'S1', 'KT Telecop',
                        'International hotel security service companies',
                        'Private security companies and facility security services'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Transfer to 4-year universities in Korea and metropolitan area'
                    ]
                }
            ],
            facilities: [
                'Police training simulation centers',
                'Martial arts and physical training facilities',
                'Law enforcement equipment training rooms'
            ]
        }
    ],
    overallEmploymentAreas: [
        {
            category: 'Military Officer & NCO',
            companies: [
                'Army 3rd Officer Candidate School', 'Service branch officer candidates',
                'Air Force NCO', 'Army/Navy/Marine Corps NCO', 'Special Forces NCO'
            ]
        },
        {
            category: 'Government & Public Safety',
            companies: [
                'Police departments', 'Fire departments', 'Correctional services',
                'Defense civil service', 'National Intelligence Service'
            ]
        },
        {
            category: 'AI & Cybersecurity',
            companies: [
                'Cyber Command', 'Defense research institutes', 'Information security companies',
                'AI technology firms', 'Defense IT companies'
            ]
        },
        {
            category: 'Transportation & Public Institutions',
            companies: [
                'Incheon International Airport', 'Korea Railroad Corporation',
                'Transportation corporations', 'Public facility security'
            ]
        },
        {
            category: 'Corporate Security & Defense',
            companies: [
                'Major corporations (Hyundai, Samsung, LG, SK)',
                'Private security companies', 'International hotels'
            ]
        },
        {
            category: 'Higher Education',
            companies: [
                '4-year university transfers', 'Military academies', 'Police universities'
            ]
        }
    ],
    facilities: [
        {
            name: 'Military Training Complex',
            description: 'Comprehensive military officer and NCO training facility',
            equipment: [
                'Officer candidate preparation centers',
                'Military leadership training facilities',
                'Service branch specialization equipment',
                'Military science education laboratories'
            ]
        },
        {
            name: 'AI & Cybersecurity Center',
            description: 'Advanced AI and cybersecurity training facility for defense applications',
            equipment: [
                'AI technology training laboratories',
                'Cybersecurity simulation systems',
                'Defense AI development platforms',
                'Big data analytics equipment'
            ]
        },
        {
            name: 'Law Enforcement Training Center',
            description: 'Professional police and public safety training facility',
            equipment: [
                'Police training simulation centers',
                'Martial arts and physical training facilities',
                'Law enforcement equipment training rooms',
                'Emergency response training systems'
            ]
        }
    ]
};

// Export the complete data for all five departments
export const departmentsData = {
    'aviation-maintenance': aviationMaintenanceData,
    'smart-safety': smartSafetyData,
    'aviation-tourism': aviationTourismData,
    'aviation-security': aviationSecurityData,
    'defense-police-ai': defensePoliceAIData  // ✅ 'national-defense-police-ai' → 'defense-police-ai'
};

// Helper function to get department by ID
export const getDepartmentById = (id: string): Department | undefined => {
    return departmentsData[id as keyof typeof departmentsData];
};

// Helper function to get program by department and program ID
export const getProgramById = (departmentId: string, programId: string): Program | undefined => {
    const department = getDepartmentById(departmentId);
    return department?.programs.find(program => program.id === programId);
};