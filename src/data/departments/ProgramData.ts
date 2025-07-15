// ProgramData.ts - Phase 1: Aviation Maintenance Department
// Based on curriculum_01_01.php ~ curriculum_01_04.php

export interface Program {
    id: string;
    name: string;
    koreanName: string;
    description: string;
    duration: string;
    highlights: string[];
    features: string[];
    certifications: string[];
    employmentAreas: EmploymentArea[];
    facilities: string[];
    curriculum?: CurriculumItem[];
    detailedCertifications?: CertificationItem[];
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

// ✅ 항공부사관과정 자격증 데이터 (7개 - 동일)
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

// ✅ 드론과정 실제 데이터 (59개 과목 - 동일 구조)
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

// ✅ 드론과정 자격증 데이터 (7개 - 동일)
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
            description: 'Comprehensive aircraft maintenance technician training based on ICAO standards with MOLIT certification',
            duration: '2 years',
            highlights: [
                'MOLIT designated professional aviation maintenance training institution',
                'Leading Korean aviation technical education institution (ranked #1 by 2022 Ministry of Education)',
                'Professional degree (Associate) in Aviation Maintenance available',
                'License exemption for qualified candidates through additional evaluation',
                'Transfer to 4-year universities available for top students'
            ],
            features: [
                'Practical training exemption for aircraft maintenance license exam',
                'Special lectures for license acquisition preparation',
                'Free specialized courses for employment, admission, and study abroad',
                'Technical English education and aviation maintenance technical English',
                'Field training at major airlines and aircraft manufacturers',
                'Celebrity lectures from aviation maintenance industry experts',
                'Additional degree programs for bachelor\'s degree (3-year program)',
                'Transfer programs to 4-year universities',
                'International license programs (FAA, TC)',
                'Overseas license validation programs'
            ],
            curriculum: aircraftMaintenanceCurriculum,
            detailedCertifications: aircraftMaintenanceCertifications,
            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Avionics/Electrical)',
                'Aviation Maintenance Engineer',
                'Aircraft Maintenance Technician (Non-powered Aircraft)',
                'Aviation Traffic Safety Manager',
                'Age requirement: 16 years (Aviation Maintenance Engineer), 18 years (Aircraft Maintenance Technician)'
            ],
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'Fly Gangwon', 'Eastar Jet', 'Star Jet', 'Air Incheon', 'T\'way Air',
                        'UA Helicopter', 'Helicopter Korea', 'Woong-An Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense Aviation Maintenance',
                        'Police Aviation Department',
                        'National Fire Agency Aviation Department',
                        'Regional Aviation Departments',
                        'National Transportation Safety Board'
                    ]
                },
                {
                    category: 'Foreign Airlines',
                    companies: [
                        'Boeing', 'Airbus', 'Lufthansa Technik',
                        'SIA Engineering', 'Cathay Pacific Catering', 'Thai Airways'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'HIZEAERO', 'QUEST AERO', 'Hanwha Techwin', 'Samsung Techwin',
                        'Future Aviation', 'Daelim ENG', 'Korea Defence Service'
                    ]
                },
                {
                    category: 'Aircraft Parts & Supply',
                    companies: [
                        'Asiana Aeroparts', 'Korea Gohyup', 'KAI KTS Global', 'Staples'
                    ]
                },
                {
                    category: 'Others',
                    companies: [
                        'Aircraft rental companies', 'Flight operation companies',
                        'Pilot training institutions', 'Media and journalism',
                        'Import/export companies', 'Unmanned aircraft companies'
                    ]
                }
            ],
            facilities: [
                'Seoul Yeongdeungpo Campus: Certification test preparation facilities',
                'Aviation Technology Training Center: Comprehensive aircraft training',
                'Icheon Campus: Hands-on maintenance training with real aircraft'
            ]
        },
        {
            id: 'aviation-mechanical',
            name: 'Aviation Mechanical Course',
            koreanName: '항공기계과정',
            description: 'Specialized training in aircraft design and manufacturing using CAD/CAM and CATIA technologies',
            duration: '2 years',
            highlights: [
                'Advanced CAD/CAM and CATIA training for aircraft design',
                'Transfer opportunities to 4-year mechanical and aviation engineering programs',
                'Employment preparation programs for aerospace companies',
                'Comprehensive training in aircraft manufacturing processes'
            ],
            features: [
                'Professional degree (Associate) in Aviation Maintenance available',
                'License exemption for qualified candidates',
                'Transfer to 4-year universities available for top students',
                'Multiple certifications in aircraft maintenance fields',
                'Advanced technical training programs',
                'Industry partnership training programs',
                'International certification programs',
                'Overseas employment preparation programs'
            ],
            curriculum: aviationMechanicalCurriculum,
            detailedCertifications: aviationMechanicalCertifications,
            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Avionics/Electrical)',
                'Aviation Maintenance Engineer',
                'Aircraft Maintenance Technician (Non-powered Aircraft)',
                'Aviation Traffic Safety Manager',
                'Age requirement: 16 years (Aviation Maintenance Engineer), 18 years (Aircraft Maintenance Technician)'
            ],
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'Fly Gangwon', 'Eastar Jet', 'Star Jet', 'Air Incheon', 'T\'way Air',
                        'UA Helicopter', 'Helicopter Korea', 'Woong-An Aviation'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'HIZEAERO', 'QUEST AERO', 'Hanwha Techwin', 'Samsung Techwin',
                        'Future Aviation', 'Daelim ENG', 'Korea Defence Service'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense Aviation Maintenance',
                        'Police Aviation Department',
                        'National Fire Agency Aviation Department',
                        'Regional Aviation Departments'
                    ]
                }
            ],
            facilities: [
                'Seoul Yeongdeungpo Campus: CAD/CAM and CATIA laboratories',
                'Aviation Technology Training Center: Aircraft systems training',
                'Icheon Campus: Manufacturing and assembly training'
            ]
        },
        {
            id: 'aviation-nco',
            name: 'Aviation NCO Course',
            koreanName: '항공부사관과정',
            description: 'Specialized military aviation NCO training for Air Force, Navy, Marine Corps, and Army aviation units',
            duration: '2 years',
            highlights: [
                'Preparation for military aviation NCO entrance exams',
                'Comprehensive military aviation training programs',
                'Physical fitness and interview preparation',
                'Partnership with Asian Future Human Resources Research Institute'
            ],
            features: [
                'Professional degree (Associate) in Aviation Maintenance available',
                'Military aviation technology training programs',
                'Physical training and military discipline programs',
                'Leadership development programs',
                'Advanced aircraft systems training',
                'Military aviation regulations and procedures',
                'Technical English for military aviation',
                'International military aviation standards'
            ],
            curriculum: aviationNCOCurriculum,
            detailedCertifications: aviationNCOCertifications,
            certifications: [
                'Aircraft Maintenance Technician (Engine/Airframe/Avionics/Electrical)',
                'Aviation Maintenance Engineer',
                'Aircraft Maintenance Technician (Non-powered Aircraft)',
                'Aviation Traffic Safety Manager',
                'Military Aviation Technician Certifications'
            ],
            employmentAreas: [
                {
                    category: 'Military Services',
                    companies: [
                        'Republic of Korea Air Force NCO',
                        'Republic of Korea Navy NCO',
                        'Republic of Korea Marine Corps NCO',
                        'Republic of Korea Army Aviation NCO',
                        'Military Civil Service'
                    ]
                },
                {
                    category: 'Civil Aviation (Post-Military)',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'Aircraft Manufacturing Companies',
                        'Airport Operations', 'Aviation Training Institutions'
                    ]
                },
                {
                    category: '4-Year Universities',
                    companies: [
                        'Korea National University of Transportation',
                        'Hanseo University', 'Sejong University', 'ChongJu University',
                        'Korea National University of Education', 'Cheju National University',
                        'Kangwon National University', 'Hoseo University'
                    ]
                }
            ],
            facilities: [
                'Seoul Yeongdeungpo Campus: Military aviation theory and regulations',
                'Aviation Technology Training Center: Military aircraft systems',
                'Icheon Campus: Military aircraft maintenance training'
            ]
        },
        {
            id: 'drone-operation',
            name: 'Drone Operation & Maintenance Course',
            koreanName: '드론과정',
            description: 'Comprehensive unmanned aircraft (drone) operation and maintenance training with MOLIT certification',
            duration: '2 years',
            highlights: [
                'Icheon Campus unmanned aircraft (drone) operation facility training',
                'Drone pilot license certification (MOLIT designated, autonomous testing available)',
                'Military drone operation and maintenance training for Air Force, Navy, Army',
                'Comprehensive drone technology education'
            ],
            features: [
                'Unmanned aircraft operation professional facilities at Icheon Campus',
                'MOLIT designated testing facility (autonomous testing available)',
                'Professional instructor team with drone pilot certifications',
                'Comprehensive drone operation training',
                'Advanced drone maintenance techniques',
                'Commercial drone application training',
                'Emergency response drone operations',
                'Drone photography and surveying applications'
            ],
            curriculum: droneOperationCurriculum,
            detailedCertifications: droneOperationCertifications,
            certifications: [
                'Professional degree (Associate) in Aviation Maintenance available',
                'License exemption for qualified candidates through additional evaluation',
                'Transfer to 4-year universities available for top students',
                'Aircraft Maintenance Technician certifications',
                'Aviation Maintenance Engineer',
                'Aircraft Maintenance Technician (Non-powered Aircraft)',
                'Drone Pilot License (various categories)',
                'Unmanned Aircraft System Operator License'
            ],
            employmentAreas: [
                {
                    category: 'Civil Aviation',
                    companies: [
                        'Korean Air', 'Asiana Airlines', 'Jeju Air', 'Jin Air', 'Air Busan',
                        'Fly Gangwon', 'Eastar Jet', 'Star Jet', 'Air Incheon', 'T\'way Air',
                        'UA Helicopter', 'Helicopter Korea', 'Woong-An Aviation'
                    ]
                },
                {
                    category: 'Government Agencies',
                    companies: [
                        'Ministry of Defense Aviation Maintenance',
                        'Police Aviation Department',
                        'National Fire Agency Aviation Department',
                        'National Transportation Safety Board'
                    ]
                },
                {
                    category: 'Drone Industry',
                    companies: [
                        'Police helicopter units', 'Specialized rental companies',
                        'Pilot training institutions', 'Media companies',
                        'Import/export companies', 'Unmanned aircraft companies'
                    ]
                },
                {
                    category: 'Aircraft Manufacturing',
                    companies: [
                        'Korea Aerospace Industries (KAI)', 'KAEMS (Korea Aircraft Service)',
                        'HIZEAERO', 'QUEST AERO', 'Hanwha Techwin', 'Samsung Techwin',
                        'Future Aviation', 'Daelim ENG', 'Korea Defence Service'
                    ]
                }
            ],
            facilities: [
                'Seoul Yeongdeungpo Campus: Drone theory and regulations',
                'Aviation Technology Training Center: Advanced drone systems',
                'Icheon Campus: Drone flight training and maintenance with real aircraft debris training'
            ]
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
            description: 'Comprehensive non-destructive testing for aviation industry with X-ray and ultrasonic technology',
            duration: '2 years',
            highlights: [
                'No employment concerns for 22 consecutive years with 100% employment guarantee',
                'NDT technician and engineer certifications available',
                'Aircraft maintenance technician and aviation engineer licensing available',
                'Aviation NDT inspection combining aircraft systems with NDT technology'
            ],
            features: [
                'Air Force Academy admission, military service, and 4-year university transfer options',
                'Professional NDT degree (Associate) available',
                'License exemption through additional evaluation for qualified candidates',
                'Transfer to 4-year metallurgy/safety engineering programs available',
                'Multiple NDT certifications (Penetrant, Magnetic Particle, Ultrasonic, Radiographic)',
                'Age advantages: 16 years (engineer), 20 years (technician) for national certification',
                'Specialized facilities with latest NDT equipment',
                'Free language education and technical English programs',
                'Advanced degree pathway (5-year program) for bachelor\'s degree',
                'Transfer programs to prestigious 4-year universities',
                'Advanced NDT field specialization programs',
                'Industry partnership for guaranteed employment',
                'Advanced PAUT (Phased Array Ultrasonic Testing) training',
                'Air Force Academy and military technical training'
            ],
            certifications: [
                'NDT Professional Degree (Associate)',
                'License exemption for qualified candidates through additional evaluation',
                'Metallurgy/Safety Engineering bachelor\'s degree available',
                'NDT certifications (Penetrant Testing, Magnetic Particle, Ultrasonic, Radiographic)',
                'National Technical Certifications',
                'Aircraft Maintenance Technician',
                'Aviation Maintenance Engineer'
            ],
            employmentAreas: [
                {
                    category: '4-Year Universities',
                    companies: [
                        'Korea National University of Transportation', 'Seoul Institute of Technology',
                        'Korea National University of Transportation', 'Hanseo University'
                    ]
                },
                {
                    category: 'Military Services',
                    companies: [
                        'Republic of Korea Air Force', 'Republic of Korea Navy',
                        'Republic of Korea Army', 'Republic of Korea Marine Corps'
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
                    category: 'Government Agencies',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation',
                        'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Industry',
                    companies: [
                        'Nuclear Research Institute', 'Gori/Youngkwang Nuclear Research Centers'
                    ]
                },
                {
                    category: 'Automotive Industry',
                    companies: [
                        'Hyundai Motor', 'Kia related parts manufacturers'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies',
                        'Safety inspection companies'
                    ]
                }
            ],
            facilities: [
                'Professional NDT laboratories with latest equipment',
                'Penetrant Testing, Magnetic Particle, Ultrasonic, Radiographic facilities',
                'Metallurgy and materials testing laboratories'
            ]
        },
        {
            id: 'ultrasonic-diagnostics',
            name: 'Ultrasonic Diagnostics Course',
            koreanName: '초음파진단과정',
            description: 'Advanced ultrasonic testing and PAUT (Phased Array Ultrasonic Testing) technology training',
            duration: '2 years',
            highlights: [
                'Advanced PAUT (Phased Array Ultrasonic Testing) training',
                'Professional development with 3+ certifications per person',
                'Industry partnership for guaranteed employment through corporate connections',
                'Specialized ultrasonic testing technology advancement'
            ],
            features: [
                'Multiple transfer opportunities to 4-year universities with MOU agreements',
                'Professional development with 3-4 certifications per person for NDT specialists',
                'Professional instructor team and latest facilities with cutting-edge equipment',
                'Industry partnership for guaranteed employment and employment security',
                'Employment in supervision, NDT specialists, heavy industry, and major companies',
                'PAUT specialization for employment in companies requiring ultrasonic testing',
                'Recognition as inspector with new technology for employment in PAUT-specialized companies'
            ],
            certifications: [
                'NDT Professional Degree (Associate)',
                'License exemption for qualified candidates through additional evaluation',
                'Transfer to 4-year universities available',
                'NDT certifications (Penetrant Testing, Magnetic Particle, Ultrasonic, Radiographic)',
                'National Technical Certifications with age advantages',
                'PAUT (Phased Array Ultrasonic Testing) certification',
                'Advanced NDT specialization certifications'
            ],
            employmentAreas: [
                {
                    category: '4-Year Universities',
                    companies: [
                        'Korea National University of Transportation', 'Seoul Institute of Technology',
                        'Korea National University of Transportation', 'Hanseo University'
                    ]
                },
                {
                    category: 'Military Services',
                    companies: [
                        'Republic of Korea Air Force', 'Republic of Korea Navy',
                        'Republic of Korea Army', 'Republic of Korea Marine Corps'
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
                    category: 'Government Agencies',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation',
                        'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Industry',
                    companies: [
                        'Nuclear Research Institute', 'Gori/Youngkwang Nuclear Research Centers'
                    ]
                },
                {
                    category: 'Automotive Industry',
                    companies: [
                        'Hyundai Motor', 'Kia related parts manufacturers'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies',
                        'Safety inspection companies'
                    ]
                }
            ],
            facilities: [
                'Advanced PAUT (Phased Array Ultrasonic Testing) laboratories',
                'Professional NDT equipment and testing facilities',
                'Latest ultrasonic diagnostic technology centers'
            ]
        },
        {
            id: 'metallurgical-engineering',
            name: 'Metallurgical Engineering [3-Year]',
            koreanName: '금속공학사과정[3년제]',
            description: '3-year bachelor\'s degree program in metallurgical engineering with advanced safety diagnostics',
            duration: '3 years',
            highlights: [
                'Industry employment security system for guaranteed employment',
                'NDT and metallurgy related engineer and technician certifications',
                'Full-time and weekend programs available for working adults',
                'Bachelor\'s degree (4-year equivalent) awarded after completion'
            ],
            features: [
                'Metallurgical Engineering bachelor\'s degree (4-year university equivalent)',
                '3-year program leading to 4-year bachelor\'s degree',
                'NDT certifications (Penetrant Testing, Magnetic Particle, Ultrasonic, Radiographic)',
                'National Technical Certifications with age advantages',
                'Professional specialization with 3-4 certifications per person',
                'Professional instructor team and latest facilities',
                'Industry partnership for guaranteed employment',
                'Advanced metallurgy and materials science education',
                'Advanced PAUT (Phased Array Ultrasonic Testing) training',
                'Air Force Academy and military technical training opportunities'
            ],
            certifications: [
                'Metallurgical Engineering Bachelor\'s Degree (4-year equivalent)',
                'NDT Professional certifications',
                'Metallurgy and Materials Engineering certifications',
                'NDT certifications (Penetrant Testing, Magnetic Particle, Ultrasonic, Radiographic)',
                'National Technical Certifications',
                'PAUT (Phased Array Ultrasonic Testing) advanced certification'
            ],
            employmentAreas: [
                {
                    category: 'Higher Education Transfer',
                    companies: [
                        'Graduate school admission for advanced degrees'
                    ]
                },
                {
                    category: 'Military Services',
                    companies: [
                        'Republic of Korea Air Force', 'Republic of Korea Navy',
                        'Republic of Korea Army', 'Republic of Korea Marine Corps'
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
                    category: 'Government Agencies',
                    companies: [
                        'Korea Electric Power Corporation', 'Korea Gas Corporation',
                        'Korea Gas Safety Corporation'
                    ]
                },
                {
                    category: 'Nuclear Industry',
                    companies: [
                        'Nuclear Research Institute', 'Gori/Youngkwang Nuclear Research Centers'
                    ]
                },
                {
                    category: 'Automotive Industry',
                    companies: [
                        'Hyundai Motor', 'Kia related parts manufacturers'
                    ]
                },
                {
                    category: 'Construction & Others',
                    companies: [
                        'Construction companies', 'Steel manufacturing companies',
                        'Safety inspection companies'
                    ]
                }
            ],
            facilities: [
                'Advanced metallurgy laboratories',
                'Materials testing and analysis facilities',
                'Professional NDT and diagnostic equipment'
            ]
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
            description: 'Comprehensive cabin crew and ground service training for domestic and international airlines',
            duration: '2 years',
            highlights: [
                'Training for domestic and international airline cabin crew positions',
                'Ground service and airport operations training',
                'Comprehensive aviation safety and emergency procedures',
                'Real aircraft cabin training facilities with professional instructors'
            ],
            features: [
                'Practical aviation safety training with real aircraft equipment',
                'Tourism industry safety education (barrier-free tourism, tourist accident services, etc.)',
                'Professional certification programs through various training courses (flow guide, Taekwondo, martial arts, etc.)',
                'Smart Asia future leader training',
                'Industry partnership training through corporate connections for practical experience',
                'Special recruitment advantages for corporate partnerships',
                'Professional hospitality and aviation service interview preparation',
                '5-star hotel international certification training',
                'Overseas hotel experience and interview training',
                'Overseas hotel industry experience training'
            ],
            certifications: [
                'International Tour Conductor License',
                'Convention Planning Specialist',
                'Hotel Management Specialist',
                'Hotel Service Specialist',
                'Hospitality Service Specialist',
                'Tourism Specialist Guide',
                'Cultural Tourism Guide',
                'Travel Service Management Specialist',
                'Customer Satisfaction Service Management Specialist',
                'CPR Emergency First Aid Instructor',
                'CS Leaders Management Specialist',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC, JLPT, HSK',
                'SMAT (Service Management Qualification)',
                'Domestic Travel Guide',
                'Computer Activity Instructor'
            ],
            employmentAreas: [
                {
                    category: 'Airlines & Aviation',
                    companies: [
                        'Domestic & International Airlines Cabin Crew and Ground Services',
                        'International Travel Agencies',
                        'Foreign Tourism Organizations',
                        'Airport Operations and Management',
                        'Aviation Training Institutions'
                    ]
                },
                {
                    category: 'Tourism & Hospitality',
                    companies: [
                        'Travel Agencies and Tour Operators',
                        'International Tour Conductors',
                        'Local Guides and Travel Consultants',
                        'Tourism Information Centers',
                        'Cultural Tourism Interpretation Services'
                    ]
                },
                {
                    category: 'Hotels & Resorts',
                    companies: [
                        'International Hotel Chains',
                        'Resort Management Companies',
                        'Convention Centers and Event Planning',
                        'Cruise Ship Services',
                        'Corporate Service Coordinators'
                    ]
                },
                {
                    category: 'Government & Public',
                    companies: [
                        'National Tourism Organization',
                        'Regional Tourism Boards',
                        'International Conference Organizers (PCO)',
                        'Convention and Exhibition Companies',
                        'Casino Dealers and Entertainment'
                    ]
                },
                {
                    category: 'Service Industry',
                    companies: [
                        'Corporate Service Departments',
                        'Customer Service Training Companies',
                        'Service Coordinator Positions',
                        'Beauty Coordinator Services'
                    ]
                }
            ],
            facilities: [
                'Real aircraft cabin training facility with professional aviation equipment',
                '5-star hotel service training laboratory',
                'Aviation safety and emergency training center'
            ]
        },
        {
            id: 'food-beverage-specialist',
            name: 'Food & Beverage Specialist Course',
            koreanName: '식음료전문가과정',
            description: 'Professional F&B training for hotels and restaurants with barista and sommelier specialization',
            duration: '2 years',
            highlights: [
                '2016 Korea Tourism Organization selected excellent hospitality education program',
                'NCS-based hospitality education curriculum implementation',
                'Multiple certification acquisition programs for professional development',
                'Barista, sommelier, wine management specialist training'
            ],
            features: [
                'Professional hotel and restaurant F&B specialist training',
                'Customer satisfaction and service excellence through cooking and beverage expertise',
                'Multiple certification programs for professional development (Bartending, Barista, Wine Specialist, etc.)',
                'Practical training for 4-5 star hotels and foreign companies through industry partnerships',
                'Special recruitment advantages for corporate partnerships',
                'Professional hospitality and beverage mastery interview preparation',
                '5-star hotel international certification training',
                'Industry partnership training and employment opportunities',
                'F&B menu development and food service creation training',
                'Creative culinary professional experience',
                'Service industry leadership participation',
                'Barrier-free tourism education for inclusive tourism services'
            ],
            certifications: [
                'Barista Qualification',
                'F&B Management Specialist',
                'Bartending Specialist',
                'Wine Sommelier',
                'Wine Management Specialist',
                'Pastry Master',
                'Cooking Bartender',
                'Beverage Specialist',
                'F&B Service Specialist',
                'Customer Satisfaction Service Management Specialist',
                'CPR Emergency First Aid Instructor',
                'CS Leaders Management Specialist',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC, JLPT, HSK',
                'SMAT (Service Management Qualification)',
                'Tourism Service Management Specialist',
                'Computer Activity Instructor'
            ],
            employmentAreas: [
                {
                    category: 'Hotels & Restaurants',
                    companies: [
                        'Domestic & International Hotel Guest Services and F&B Departments',
                        'Corporate Dining Management',
                        'Butler Services',
                        'Bar Creation',
                        'Front Desk and Foreign Business Operations'
                    ]
                },
                {
                    category: 'Food Service Industry',
                    companies: [
                        'Tourism Gallery Management',
                        'Food and Beverage Training Companies',
                        'Coffee Training Institutions',
                        'Restaurant Professional Businesses',
                        'Wine Import and Distribution Companies'
                    ]
                },
                {
                    category: 'Hospitality Services',
                    companies: [
                        'Wine Academies',
                        'Food Service Professional Companies',
                        'Wine Service and Distribution',
                        'Service Coordinator Positions',
                        'CS Training and Instruction'
                    ]
                }
            ],
            facilities: [
                'Professional F&B training laboratory with commercial kitchen equipment',
                'Barista and coffee training center',
                'Wine tasting and sommelier training facility'
            ]
        },
        {
            id: 'tourism-specialist',
            name: 'Tourism Specialist Course',
            koreanName: '관광전문가과정',
            description: 'International tourism professional training with tour conductor and cultural guide specialization',
            duration: '2 years',
            highlights: [
                'Professional international tour conductor training institution',
                'Excellent hospitality education program (Ministry of Culture and Tourism certified)',
                'Cultural tourism specialist training with multilingual capabilities',
                'Overseas hotel experience and practical training programs'
            ],
            features: [
                'Tourism and leisure activities, hotel services, international hospitality combining food & beverage expertise',
                'Global tourism professionals with required professional knowledge and job competencies in various events, marketing, and services',
                'Professional instructor team from 5-star hotels and tourism industry experts for high-quality professional service education',
                '5-star hotel related international certification and weekend programs with major domestic and international hotel training',
                'Overseas university (Thailand, etc.) study abroad opportunities',
                '2-year continuous working tour professional training institution selection (overseas internship)',
                'Excellent hospitality education program selection (Korea Tourism Organization)',
                'Professional university first and international tour conductor license education program selection (Ministry of Culture and Tourism)',
                '3+2 education: 3 years study, 2 years self-development & individual capacity building (school online learning & internships & individual capacity improvement)',
                'Domestic leading international hotel group IHG Academy hospitality program implementation',
                'Celebrity special lectures and various overseas activity participation',
                'Industry partnership corporate connections for training and special recruitment advantages',
                'Service industry leadership participation',
                'Barrier-free tourism education for inclusive tourism service capability improvement'
            ],
            certifications: [
                'International Tour Conductor',
                'Convention Planning Specialist',
                'Hotel Management Specialist',
                'Hotel Service Specialist',
                'Hospitality Service Specialist',
                'Tourism Specialist Guide',
                'Cultural Tourism Guide',
                'Travel Service Management Specialist',
                'Customer Satisfaction Service Management Specialist',
                'CPR Emergency First Aid Instructor',
                'CS Leaders Management Specialist',
                'Secretary National Technical Qualification',
                'Recreation Instructor',
                'TOEIC, JLPT, HSK',
                'SMAT (Service Management Qualification)',
                'Domestic Travel Guide',
                'Computer Activity Instructor'
            ],
            employmentAreas: [
                {
                    category: 'Tourism & Travel',
                    companies: [
                        'Domestic & International Hotel Guest Services and F&B Departments',
                        'International Travel Agencies and Tour Operators',
                        'Foreign Tourism Organizations and Operators',
                        'Corporate Dining Management',
                        'Corporate Travel Services'
                    ]
                },
                {
                    category: 'Hospitality & Events',
                    companies: [
                        'International Tour Conductors',
                        'Overseas Local Guides',
                        'Domestic Travel Guides',
                        'Cultural Tourism Interpreters',
                        'National Tourism Organization Staff'
                    ]
                },
                {
                    category: 'International Business',
                    companies: [
                        'International Conference Organizers (PCO)',
                        'Convention Planning Companies',
                        'Casino Dealers',
                        'Corporate Service Departments',
                        'Service Coordinators'
                    ]
                },
                {
                    category: 'Customer Service',
                    companies: [
                        'CS Training and Instruction',
                        'Beauty Coordinators',
                        'Customer Service Training Companies'
                    ]
                }
            ],
            facilities: [
                'Tourism service training laboratory with industry-standard equipment',
                'Cultural heritage and tourism interpretation training center',
                'Multilingual communication and presentation facilities'
            ]
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