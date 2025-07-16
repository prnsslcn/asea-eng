// src/data/professors/ProfessorData.ts

export interface Professor {
    id: string;
    name: string;
    koreanName: string;
    title: string;
    department: string;
    courses: string[];
    photo: string;
}

export interface ProgramProfessors {
    programId: string;
    professors: Professor[];
}

export const professorsData: ProgramProfessors[] = [
    {
        programId: 'aircraft-maintenance',
        professors: [
            // Page 1 - 12 professors
            {
                id: 'prof-aircraft-maintenance-001',
                name: 'Sung-Hee Jang',
                koreanName: '장성희',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Airframe I',
                    'Aircraft Airframe Practice I',
                    'Aircraft Engine',
                    'Aircraft Engine Practice I',
                    'Aviation Electrical Systems',
                    'Aviation Instrument Systems',
                    'Aviation Electronics Practice'
                ],
                photo: '/asea-eng/images/professors/b437dbf3faec6a3d6163cc9bb7daebdd.png'
            },
            {
                id: 'prof-aircraft-maintenance-002',
                name: 'Yong-Hee Han',
                koreanName: '한용희',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Airframe I',
                    'Aircraft Airframe II',
                    'Airframe Repair',
                    'Aviation Maintenance Practice',
                    'Aviation Materials',
                    'Introduction to Aerospace'
                ],
                photo: '/asea-eng/images/professors/977d6eaaabfd15b7e4164bd07778369c.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-003',
                name: 'Bong-Su Kim',
                koreanName: '김봉수',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Engine Practice I',
                    'Aircraft Engine Practice II',
                    'Aircraft Power Plant I',
                    'Aircraft Power Plant II'
                ],
                photo: '/asea-eng/images/professors/6808744f47d8df0b3c2ce3f05225fd17.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-004',
                name: 'Hyeok-Jun Kwon',
                koreanName: '권혁준',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Airframe I',
                    'Aircraft Airframe II',
                    'Airframe Repair',
                    'Aviation Materials',
                    'General Aviation Maintenance',
                    'Aircraft Power Plant II',
                    'General Helicopter'
                ],
                photo: '/asea-eng/images/professors/10aa2f5bfa41dca86f70b8c190e81b82.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-005',
                name: 'Young-Jin Hong',
                koreanName: '홍영진',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'General Aviation Maintenance',
                    'Aviation Maintenance Management',
                    'Aircraft Maintenance Practice I',
                    'Composite Materials',
                    'Aviation Regulations'
                ],
                photo: '/asea-eng/images/professors/7f68f947ddc48bb591542420d7842275.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-006',
                name: 'Hyung-Sik Baek',
                koreanName: '백형식',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Airframe I'
                ],
                photo: '/asea-eng/images/professors/81b3b3961655d7e2ac1d20dfc8ed9176.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-007',
                name: 'Myung-Yeop Lee',
                koreanName: '이명엽',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'General Helicopter',
                    'Introduction to Aerospace',
                    'Aircraft Airframe'
                ],
                photo: '/asea-eng/images/professors/323fe875c9845bc979e9e969ab9a719b.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-008',
                name: 'Eun-Tae Jo',
                koreanName: '조은태',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Introduction to Electronics and Electrical Engineering'
                ],
                photo: '/asea-eng/images/professors/3245de619ca8233db9d564cb0cbd721f.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-009',
                name: 'Kwang-Su Yoon',
                koreanName: '윤광수',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aviation Regulations',
                    'Maintenance Practice',
                    'Airframe Repair',
                    'Aircraft Airframe',
                    'Engine Practice'
                ],
                photo: '/asea-eng/images/professors/6f6fd15037850b8536075905cd3d6da6.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-010',
                name: 'Kyung-Hwa Song',
                koreanName: '송경화',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Maintenance Practice',
                    'Aircraft Instruments and Electrical Equipment'
                ],
                photo: '/asea-eng/images/professors/14d10601d6f466651a7bb9adeae140da.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-011',
                name: 'Jun-Sik Min',
                koreanName: '민준식',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Basic Practice I',
                    'Aircraft Basic Practice II',
                    'Aircraft Power Plant I'
                ],
                photo: '/asea-eng/images/professors/110498f74d309728ad38c51219211f68.png'
            },
            {
                id: 'prof-aircraft-maintenance-012',
                name: 'Daniel Chung',
                koreanName: '정희진',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'TOEIC',
                    'Grammar'
                ],
                photo: '/asea-eng/images/professors/d8e4f4cfa3fa508e6cd74bba98c1756e.jpg'
            },
            // Page 2 - 6 professors
            {
                id: 'prof-aircraft-maintenance-013',
                name: 'Sung-Su Kim',
                koreanName: '김성수',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Power Plant I',
                    'Helicopter Power Transmission System'
                ],
                photo: '/asea-eng/images/professors/ba2d5a8151b7f017c31c597bb6db6e48.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-014',
                name: 'Wan-Jae Lee',
                koreanName: '이완재',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Electronics Basic Practice I',
                    'Aircraft Electronics Major Practice I'
                ],
                photo: '/asea-eng/images/professors/cf63565a6d4233386a13a5b8ee3af94c.jpg'
            },
            {
                id: 'prof-aircraft-maintenance-015',
                name: 'Ju-Hyung Park',
                koreanName: '박주형',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Airframe Practice I',
                    'Aircraft Airframe Practice II',
                    'General Maintenance Practice'
                ],
                photo: '/asea-eng/images/professors/07c79d7e6ac8d690bebee20e60c5e543.png'
            },
            {
                id: 'prof-aircraft-maintenance-016',
                name: 'No-Hoon Park',
                koreanName: '박노훈',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aviation Electronics and Electrical Instruments I',
                    'Aviation Electronics and Electrical Instruments II',
                    'Aviation Electronics and Electrical Instruments Practice I'
                ],
                photo: '/asea-eng/images/professors/abaf4eecf4cc08c9c5d48001f69e1ae0.png'
            },
            {
                id: 'prof-aircraft-maintenance-017',
                name: 'Jong-Ho Kim',
                koreanName: '김종호',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Engine I',
                    'Aircraft Engine II',
                    'Aircraft Hydraulic and Pneumatic Equipment',
                    'Introduction to Non-Destructive Testing'
                ],
                photo: '/asea-eng/images/professors/05f1d80f042ea6d2aa05264f57b8eab1.png'
            },
            {
                id: 'prof-aircraft-maintenance-018',
                name: 'Byung-Mu Kim',
                koreanName: '김병무',
                title: 'Professor',
                department: 'Aviation Maintenance',
                courses: [
                    'Aircraft Engine Practice',
                    'Engineering Mechanics'
                ],
                photo: '/asea-eng/images/professors/85c9ac8c41a4b774545560223fac89f3.png'
            }
        ]
    }
];

// 특정 프로그램의 교수진 정보를 가져오는 함수
export const getProfessorsByProgram = (programId: string): Professor[] => {
    const program = professorsData.find(p => p.programId === programId);
    return program?.professors || [];
};

// 모든 교수진 정보를 가져오는 함수
export const getAllProfessors = (): Professor[] => {
    return professorsData.flatMap(program => program.professors);
};