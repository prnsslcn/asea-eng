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
    },
    {
        programId: 'tourism-specialist',
        professors: [
            // 호텔관광전문가과정 - 승무원과정과 동일한 교수진
            {
                id: 'prof-tourism-specialist-001',
                name: 'Jae-Heung Yu',
                koreanName: '유재흥',
                title: 'Professor (Director of Innovation Support)',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Tourism',
                    'Tourism Marketing',
                    'Hotel Human Resources Management',
                    'Cultural Tourism',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/315154fde807de185018697610f0701a.jpg'
            },
            {
                id: 'prof-tourism-specialist-002',
                name: 'Yu-Na Kim',
                koreanName: '김유나',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Service',
                    'Introduction to Airline Cabin Operations',
                    'Airline Cabin Service Practice',
                    'Aviation Business English',
                    'Flight Safety Practice',
                    'Tourism English',
                    'Aircraft In-flight Announcement'
                ],
                photo: '/asea-eng/images/professors/554e480df49d05af0c69a36e5e0ae86f.jpg'
            },
            {
                id: 'prof-tourism-specialist-003',
                name: 'Min-Cheol Oh',
                koreanName: '오민철',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Resource Interpretation',
                    'Cultural Heritage Tourism Resources',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/f828ce7672654086ca92c81deb6ea270.jpg'
            },
            {
                id: 'prof-tourism-specialist-004',
                name: 'Yeo-San Yoon',
                koreanName: '윤여산',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'International Travel Escort Certification Course',
                    'Local Guide',
                    'Customer Satisfaction Service Management'
                ],
                photo: '/asea-eng/images/professors/445744f85c23415dafdf83decc4c702e.jpg'
            },
            {
                id: 'prof-tourism-specialist-005',
                name: 'Ji-Hyun Jung',
                koreanName: '정지현',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Business Practice',
                    'International Travel Escort',
                    'Tourism English'
                ],
                photo: '/asea-eng/images/professors/64a266aa667d7c98d7490e27558f1166.png'
            },
            {
                id: 'prof-tourism-specialist-006',
                name: 'Dong-Woo Lee',
                koreanName: '이동우',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Practice'
                ],
                photo: '/asea-eng/images/professors/85ab02cd321fff04b4a7b8cf428afd7a.png'
            },
            {
                id: 'prof-tourism-specialist-007',
                name: 'Yoon-Sun Jang',
                koreanName: '장윤선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Hotel Management',
                    'Food and Beverage Service Practice'
                ],
                photo: '/asea-eng/images/professors/b095dfb06c66a5107a006525e127d962.png'
            },
            {
                id: 'prof-tourism-specialist-008',
                name: 'Hee-Jin Lee',
                koreanName: '이희진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management'
                ],
                photo: '/asea-eng/images/professors/ab619e8d9253d4363b6b926a77616ebe.jpg'
            },
            {
                id: 'prof-tourism-specialist-009',
                name: 'Jung-Shin Cha',
                koreanName: '차정신',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Chinese',
                    'Basic Chinese',
                    'Intermediate Chinese Conversation',
                    'Hotel Chinese',
                    'Cruise Basic Conversation',
                    'Business Chinese',
                    'HSK'
                ],
                photo: '/asea-eng/images/professors/513dfdbf5cae7773e599c4f08cdd52a9.png'
            },
            {
                id: 'prof-tourism-specialist-010',
                name: 'Ju-Young Jung',
                koreanName: '정주영',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Understanding Cruise Crew I & II',
                    'Cruise Basic Practice I & II',
                    'Cruise English Interview',
                    'Marine Tourism',
                    'World Tourism Geography'
                ],
                photo: '/asea-eng/images/professors/0ea157c6603575b28e7f7c48c90d51f7.jpg'
            },
            {
                id: 'prof-tourism-specialist-011',
                name: 'Hye-Jung Jang',
                koreanName: '장혜정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Service Practical Skills'
                ],
                photo: '/asea-eng/images/professors/fc4e32571783403c30f9294a2d6a91ee.jpg'
            },
            {
                id: 'prof-tourism-specialist-012',
                name: 'Hyeok-Jin Kwon',
                koreanName: '권혁진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Principles of Tourism',
                    'Tourism Marketing',
                    'Hotel Room Service Practice'
                ],
                photo: '/asea-eng/images/professors/6a55ad1c7d18c793fde13a0636b327dc.jpg'
            },
            {
                id: 'prof-tourism-specialist-013',
                name: 'Tae-Won Kim',
                koreanName: '김태원',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Aircraft Cabin Structure',
                    'Flight Safety Practice'
                ],
                photo: '/asea-eng/images/professors/826549bae68d71fbdb3e60334afc0d02.jpg'
            },
            {
                id: 'prof-tourism-specialist-014',
                name: 'Oh-Jin Kwon',
                koreanName: '권오진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Leisure and Recreation'
                ],
                photo: '/asea-eng/images/professors/39645eb52457c5793a006468353eb42f.jpg'
            },
            {
                id: 'prof-tourism-specialist-015',
                name: 'Yeon-Jung Kim',
                koreanName: '김연정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Theory and Practice',
                    'Coffee Barista Certification Instruction'
                ],
                photo: '/asea-eng/images/professors/6141c116d28b2f6439cce9442dac9c82.jpg'
            },
            {
                id: 'prof-tourism-specialist-016',
                name: 'Hye-Sun Yang',
                koreanName: '양혜선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management',
                    'Casino Practice'
                ],
                photo: '/asea-eng/images/professors/46634eb9e56369f64c0677f095000e6e.jpg'
            },
            {
                id: 'prof-tourism-specialist-017',
                name: 'Min-Kyung Noh',
                koreanName: '노민경',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Marketing',
                    'Hotel Management',
                    'Tourism Resource Interpretation',
                    'World Tourism Geography',
                    'Convention Banquet Planning Cocktail Practice'
                ],
                photo: '/asea-eng/images/professors/bb9e2f964ed043365313823ba44a5dae.jpg'
            }
        ]
    },
    {
        programId: 'food-beverage-specialist',
        professors: [
            // 식음료전문가과정 - 승무원과정과 동일한 교수진
            {
                id: 'prof-food-beverage-specialist-001',
                name: 'Jae-Heung Yu',
                koreanName: '유재흥',
                title: 'Professor (Director of Innovation Support)',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Tourism',
                    'Tourism Marketing',
                    'Hotel Human Resources Management',
                    'Cultural Tourism',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/315154fde807de185018697610f0701a.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-002',
                name: 'Yu-Na Kim',
                koreanName: '김유나',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Service',
                    'Introduction to Airline Cabin Operations',
                    'Airline Cabin Service Practice',
                    'Aviation Business English',
                    'Flight Safety Practice',
                    'Tourism English',
                    'Aircraft In-flight Announcement'
                ],
                photo: '/asea-eng/images/professors/554e480df49d05af0c69a36e5e0ae86f.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-003',
                name: 'Min-Cheol Oh',
                koreanName: '오민철',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Resource Interpretation',
                    'Cultural Heritage Tourism Resources',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/f828ce7672654086ca92c81deb6ea270.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-004',
                name: 'Yeo-San Yoon',
                koreanName: '윤여산',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'International Travel Escort Certification Course',
                    'Local Guide',
                    'Customer Satisfaction Service Management'
                ],
                photo: '/asea-eng/images/professors/445744f85c23415dafdf83decc4c702e.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-005',
                name: 'Ji-Hyun Jung',
                koreanName: '정지현',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Business Practice',
                    'International Travel Escort',
                    'Tourism English'
                ],
                photo: '/asea-eng/images/professors/64a266aa667d7c98d7490e27558f1166.png'
            },
            {
                id: 'prof-food-beverage-specialist-006',
                name: 'Dong-Woo Lee',
                koreanName: '이동우',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Practice'
                ],
                photo: '/asea-eng/images/professors/85ab02cd321fff04b4a7b8cf428afd7a.png'
            },
            {
                id: 'prof-food-beverage-specialist-007',
                name: 'Yoon-Sun Jang',
                koreanName: '장윤선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Hotel Management',
                    'Food and Beverage Service Practice'
                ],
                photo: '/asea-eng/images/professors/b095dfb06c66a5107a006525e127d962.png'
            },
            {
                id: 'prof-food-beverage-specialist-008',
                name: 'Hee-Jin Lee',
                koreanName: '이희진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management'
                ],
                photo: '/asea-eng/images/professors/ab619e8d9253d4363b6b926a77616ebe.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-009',
                name: 'Jung-Shin Cha',
                koreanName: '차정신',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Chinese',
                    'Basic Chinese',
                    'Intermediate Chinese Conversation',
                    'Hotel Chinese',
                    'Cruise Basic Conversation',
                    'Business Chinese',
                    'HSK'
                ],
                photo: '/asea-eng/images/professors/513dfdbf5cae7773e599c4f08cdd52a9.png'
            },
            {
                id: 'prof-food-beverage-specialist-010',
                name: 'Ju-Young Jung',
                koreanName: '정주영',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Understanding Cruise Crew I & II',
                    'Cruise Basic Practice I & II',
                    'Cruise English Interview',
                    'Marine Tourism',
                    'World Tourism Geography'
                ],
                photo: '/asea-eng/images/professors/0ea157c6603575b28e7f7c48c90d51f7.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-011',
                name: 'Hye-Jung Jang',
                koreanName: '장혜정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Service Practical Skills'
                ],
                photo: '/asea-eng/images/professors/fc4e32571783403c30f9294a2d6a91ee.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-012',
                name: 'Hyeok-Jin Kwon',
                koreanName: '권혁진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Principles of Tourism',
                    'Tourism Marketing',
                    'Hotel Room Service Practice'
                ],
                photo: '/asea-eng/images/professors/6a55ad1c7d18c793fde13a0636b327dc.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-013',
                name: 'Tae-Won Kim',
                koreanName: '김태원',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Aircraft Cabin Structure',
                    'Flight Safety Practice'
                ],
                photo: '/asea-eng/images/professors/826549bae68d71fbdb3e60334afc0d02.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-014',
                name: 'Oh-Jin Kwon',
                koreanName: '권오진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Leisure and Recreation'
                ],
                photo: '/asea-eng/images/professors/39645eb52457c5793a006468353eb42f.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-015',
                name: 'Yeon-Jung Kim',
                koreanName: '김연정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Theory and Practice',
                    'Coffee Barista Certification Instruction'
                ],
                photo: '/asea-eng/images/professors/6141c116d28b2f6439cce9442dac9c82.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-016',
                name: 'Hye-Sun Yang',
                koreanName: '양혜선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management',
                    'Casino Practice'
                ],
                photo: '/asea-eng/images/professors/46634eb9e56369f64c0677f095000e6e.jpg'
            },
            {
                id: 'prof-food-beverage-specialist-017',
                name: 'Min-Kyung Noh',
                koreanName: '노민경',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Marketing',
                    'Hotel Management',
                    'Tourism Resource Interpretation',
                    'World Tourism Geography',
                    'Convention Banquet Planning Cocktail Practice'
                ],
                photo: '/asea-eng/images/professors/bb9e2f964ed043365313823ba44a5dae.jpg'
            }
        ]
    },
    {
        programId: 'flight-attendant',
        professors: [
            // 승무원과정 - 항공관광계열 교수진
            // Page 1 - 12명
            {
                id: 'prof-flight-attendant-001',
                name: 'Jae-Heung Yu',
                koreanName: '유재흥',
                title: 'Professor (Director of Innovation Support)',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Tourism',
                    'Tourism Marketing',
                    'Hotel Human Resources Management',
                    'Cultural Tourism',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/315154fde807de185018697610f0701a.jpg'
            },
            {
                id: 'prof-flight-attendant-002',
                name: 'Yu-Na Kim',
                koreanName: '김유나',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Service',
                    'Introduction to Airline Cabin Operations',
                    'Airline Cabin Service Practice',
                    'Aviation Business English',
                    'Flight Safety Practice',
                    'Tourism English',
                    'Aircraft In-flight Announcement'
                ],
                photo: '/asea-eng/images/professors/554e480df49d05af0c69a36e5e0ae86f.jpg'
            },
            {
                id: 'prof-flight-attendant-003',
                name: 'Min-Cheol Oh',
                koreanName: '오민철',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Resource Interpretation',
                    'Cultural Heritage Tourism Resources',
                    'Tourism Regulations'
                ],
                photo: '/asea-eng/images/professors/f828ce7672654086ca92c81deb6ea270.jpg'
            },
            {
                id: 'prof-flight-attendant-004',
                name: 'Yeo-San Yoon',
                koreanName: '윤여산',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'International Travel Escort Certification Course',
                    'Local Guide',
                    'Customer Satisfaction Service Management'
                ],
                photo: '/asea-eng/images/professors/445744f85c23415dafdf83decc4c702e.jpg'
            },
            {
                id: 'prof-flight-attendant-005',
                name: 'Ji-Hyun Jung',
                koreanName: '정지현',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Business Practice',
                    'International Travel Escort',
                    'Tourism English'
                ],
                photo: '/asea-eng/images/professors/64a266aa667d7c98d7490e27558f1166.png'
            },
            {
                id: 'prof-flight-attendant-006',
                name: 'Dong-Woo Lee',
                koreanName: '이동우',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Practice'
                ],
                photo: '/asea-eng/images/professors/85ab02cd321fff04b4a7b8cf428afd7a.png'
            },
            {
                id: 'prof-flight-attendant-007',
                name: 'Yoon-Sun Jang',
                koreanName: '장윤선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Hotel Management',
                    'Food and Beverage Service Practice'
                ],
                photo: '/asea-eng/images/professors/b095dfb06c66a5107a006525e127d962.png'
            },
            {
                id: 'prof-flight-attendant-008',
                name: 'Hee-Jin Lee',
                koreanName: '이희진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management'
                ],
                photo: '/asea-eng/images/professors/ab619e8d9253d4363b6b926a77616ebe.jpg'
            },
            {
                id: 'prof-flight-attendant-009',
                name: 'Jung-Shin Cha',
                koreanName: '차정신',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Chinese',
                    'Basic Chinese',
                    'Intermediate Chinese Conversation',
                    'Hotel Chinese',
                    'Cruise Basic Conversation',
                    'Business Chinese',
                    'HSK'
                ],
                photo: '/asea-eng/images/professors/513dfdbf5cae7773e599c4f08cdd52a9.png'
            },
            {
                id: 'prof-flight-attendant-010',
                name: 'Ju-Young Jung',
                koreanName: '정주영',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Understanding Cruise Crew I & II',
                    'Cruise Basic Practice I & II',
                    'Cruise English Interview',
                    'Marine Tourism',
                    'World Tourism Geography'
                ],
                photo: '/asea-eng/images/professors/0ea157c6603575b28e7f7c48c90d51f7.jpg'
            },
            {
                id: 'prof-flight-attendant-011',
                name: 'Hye-Jung Jang',
                koreanName: '장혜정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Aviation Service Practical Skills'
                ],
                photo: '/asea-eng/images/professors/fc4e32571783403c30f9294a2d6a91ee.jpg'
            },
            {
                id: 'prof-flight-attendant-012',
                name: 'Hyeok-Jin Kwon',
                koreanName: '권혁진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Principles of Tourism',
                    'Tourism Marketing',
                    'Hotel Room Service Practice'
                ],
                photo: '/asea-eng/images/professors/6a55ad1c7d18c793fde13a0636b327dc.jpg'
            },
            // Page 2 - 5명
            {
                id: 'prof-flight-attendant-013',
                name: 'Tae-Won Kim',
                koreanName: '김태원',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Introduction to Aircraft Cabin Structure',
                    'Flight Safety Practice'
                ],
                photo: '/asea-eng/images/professors/826549bae68d71fbdb3e60334afc0d02.jpg'
            },
            {
                id: 'prof-flight-attendant-014',
                name: 'Oh-Jin Kwon',
                koreanName: '권오진',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Leisure and Recreation'
                ],
                photo: '/asea-eng/images/professors/39645eb52457c5793a006468353eb42f.jpg'
            },
            {
                id: 'prof-flight-attendant-015',
                name: 'Yeon-Jung Kim',
                koreanName: '김연정',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Barista Theory and Practice',
                    'Coffee Barista Certification Instruction'
                ],
                photo: '/asea-eng/images/professors/6141c116d28b2f6439cce9442dac9c82.jpg'
            },
            {
                id: 'prof-flight-attendant-016',
                name: 'Hye-Sun Yang',
                koreanName: '양혜선',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Casino Management',
                    'Casino Practice'
                ],
                photo: '/asea-eng/images/professors/46634eb9e56369f64c0677f095000e6e.jpg'
            },
            {
                id: 'prof-flight-attendant-017',
                name: 'Min-Kyung Noh',
                koreanName: '노민경',
                title: 'Professor',
                department: 'Aviation Tourism',
                courses: [
                    'Tourism Marketing',
                    'Hotel Management',
                    'Tourism Resource Interpretation',
                    'World Tourism Geography',
                    'Convention Banquet Planning Cocktail Practice'
                ],
                photo: '/asea-eng/images/professors/bb9e2f964ed043365313823ba44a5dae.jpg'
            }
        ]
    },
    {
        programId: 'ultrasonic-diagnostics',
        professors: [
            // 초음파진단과정 - 항공비파괴검사과정과 동일한 교수진
            {
                id: 'prof-ultrasonic-diagnostics-001',
                name: 'Man-Soon Kim',
                koreanName: '김만순',
                title: 'Professor (Department Head)',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Penetrant Testing',
                    'Penetrant Testing Practice',
                    'Leak Testing'
                ],
                photo: '/asea-eng/images/professors/18f70c2dd2d14901fbec1093fb13a5c5.jpg'
            },
            {
                id: 'prof-ultrasonic-diagnostics-002',
                name: 'Cheol-Young Kim',
                koreanName: '김철영',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Ultrasonic Testing',
                    'Ultrasonic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/d0d93231b8e30ca2a0c93939e0c5d64f.jpg'
            },
            {
                id: 'prof-ultrasonic-diagnostics-003',
                name: 'Jae-Won Park',
                koreanName: '박재원',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Magnetic Particle Testing Practice',
                    'Welding Engineering',
                    'Blueprint Reading'
                ],
                photo: '/asea-eng/images/professors/5a5693d6dd99c2652e256ad8074fa560.jpg'
            },
            {
                id: 'prof-ultrasonic-diagnostics-004',
                name: 'Ho-Gyun Lee',
                koreanName: '이호균',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Visual Testing',
                    'Metallurgical Materials Engineering',
                    'Radiographic Testing',
                    'Radiographic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/f0c01fd5edaa2d7ad2474d36d1191a3f.jpg'
            }
        ]
    },
    {
        programId: 'metallurgical-engineering',
        professors: [
            // 금속공학사과정[3년제] - 항공비파괴검사과정과 동일한 교수진
            {
                id: 'prof-metallurgical-engineering-001',
                name: 'Man-Soon Kim',
                koreanName: '김만순',
                title: 'Professor (Department Head)',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Penetrant Testing',
                    'Penetrant Testing Practice',
                    'Leak Testing'
                ],
                photo: '/asea-eng/images/professors/18f70c2dd2d14901fbec1093fb13a5c5.jpg'
            },
            {
                id: 'prof-metallurgical-engineering-002',
                name: 'Cheol-Young Kim',
                koreanName: '김철영',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Ultrasonic Testing',
                    'Ultrasonic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/d0d93231b8e30ca2a0c93939e0c5d64f.jpg'
            },
            {
                id: 'prof-metallurgical-engineering-003',
                name: 'Jae-Won Park',
                koreanName: '박재원',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Magnetic Particle Testing Practice',
                    'Welding Engineering',
                    'Blueprint Reading'
                ],
                photo: '/asea-eng/images/professors/5a5693d6dd99c2652e256ad8074fa560.jpg'
            },
            {
                id: 'prof-metallurgical-engineering-004',
                name: 'Ho-Gyun Lee',
                koreanName: '이호균',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Visual Testing',
                    'Metallurgical Materials Engineering',
                    'Radiographic Testing',
                    'Radiographic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/f0c01fd5edaa2d7ad2474d36d1191a3f.jpg'
            }
        ]
    },
    {
        programId: 'aviation-ndt',
        professors: [
            // 항공비파괴검사과정 - 스마트안전진단계열 전용 교수진
            {
                id: 'prof-aviation-ndt-001',
                name: 'Man-Soon Kim',
                koreanName: '김만순',
                title: 'Professor (Department Head)',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Penetrant Testing',
                    'Penetrant Testing Practice',
                    'Leak Testing'
                ],
                photo: '/asea-eng/images/professors/18f70c2dd2d14901fbec1093fb13a5c5.jpg'
            },
            {
                id: 'prof-aviation-ndt-002',
                name: 'Cheol-Young Kim',
                koreanName: '김철영',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Ultrasonic Testing',
                    'Ultrasonic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/d0d93231b8e30ca2a0c93939e0c5d64f.jpg'
            },
            {
                id: 'prof-aviation-ndt-003',
                name: 'Jae-Won Park',
                koreanName: '박재원',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Magnetic Particle Testing Practice',
                    'Welding Engineering',
                    'Blueprint Reading'
                ],
                photo: '/asea-eng/images/professors/5a5693d6dd99c2652e256ad8074fa560.jpg'
            },
            {
                id: 'prof-aviation-ndt-004',
                name: 'Ho-Gyun Lee',
                koreanName: '이호균',
                title: 'Professor',
                department: 'Smart Safety Diagnostics',
                courses: [
                    'Visual Testing',
                    'Metallurgical Materials Engineering',
                    'Radiographic Testing',
                    'Radiographic Testing Practice'
                ],
                photo: '/asea-eng/images/professors/f0c01fd5edaa2d7ad2474d36d1191a3f.jpg'
            }
        ]
    },
    {
        programId: 'drone-operation',
        professors: [
            // 드론과정 - 항공정비사과정과 동일한 교수진
            {
                id: 'prof-drone-operation-001',
                name: 'Sung-Hee Jang',
                koreanName: '장성희',
                title: 'Professor',
                department: 'Drone Operation',
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
                id: 'prof-drone-operation-002',
                name: 'Yong-Hee Han',
                koreanName: '한용희',
                title: 'Professor',
                department: 'Drone Operation',
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
                id: 'prof-drone-operation-003',
                name: 'Bong-Su Kim',
                koreanName: '김봉수',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Engine Practice I',
                    'Aircraft Engine Practice II',
                    'Aircraft Power Plant I',
                    'Aircraft Power Plant II'
                ],
                photo: '/asea-eng/images/professors/6808744f47d8df0b3c2ce3f05225fd17.jpg'
            },
            {
                id: 'prof-drone-operation-004',
                name: 'Hyeok-Jun Kwon',
                koreanName: '권혁준',
                title: 'Professor',
                department: 'Drone Operation',
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
                id: 'prof-drone-operation-005',
                name: 'Young-Jin Hong',
                koreanName: '홍영진',
                title: 'Professor',
                department: 'Drone Operation',
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
                id: 'prof-drone-operation-006',
                name: 'Hyung-Sik Baek',
                koreanName: '백형식',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Airframe I'
                ],
                photo: '/asea-eng/images/professors/81b3b3961655d7e2ac1d20dfc8ed9176.jpg'
            },
            {
                id: 'prof-drone-operation-007',
                name: 'Myung-Yeop Lee',
                koreanName: '이명엽',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'General Helicopter',
                    'Introduction to Aerospace',
                    'Aircraft Airframe'
                ],
                photo: '/asea-eng/images/professors/323fe875c9845bc979e9e969ab9a719b.jpg'
            },
            {
                id: 'prof-drone-operation-008',
                name: 'Eun-Tae Jo',
                koreanName: '조은태',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Introduction to Electronics and Electrical Engineering'
                ],
                photo: '/asea-eng/images/professors/3245de619ca8233db9d564cb0cbd721f.jpg'
            },
            {
                id: 'prof-drone-operation-009',
                name: 'Kwang-Su Yoon',
                koreanName: '윤광수',
                title: 'Professor',
                department: 'Drone Operation',
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
                id: 'prof-drone-operation-010',
                name: 'Kyung-Hwa Song',
                koreanName: '송경화',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Maintenance Practice',
                    'Aircraft Instruments and Electrical Equipment'
                ],
                photo: '/asea-eng/images/professors/14d10601d6f466651a7bb9adeae140da.jpg'
            },
            {
                id: 'prof-drone-operation-011',
                name: 'Jun-Sik Min',
                koreanName: '민준식',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Basic Practice I',
                    'Aircraft Basic Practice II',
                    'Aircraft Power Plant I'
                ],
                photo: '/asea-eng/images/professors/110498f74d309728ad38c51219211f68.png'
            },
            {
                id: 'prof-drone-operation-012',
                name: 'Daniel Chung',
                koreanName: '정희진',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'TOEIC',
                    'Grammar'
                ],
                photo: '/asea-eng/images/professors/d8e4f4cfa3fa508e6cd74bba98c1756e.jpg'
            },
            {
                id: 'prof-drone-operation-013',
                name: 'Sung-Su Kim',
                koreanName: '김성수',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Power Plant I',
                    'Helicopter Power Transmission System'
                ],
                photo: '/asea-eng/images/professors/ba2d5a8151b7f017c31c597bb6db6e48.jpg'
            },
            {
                id: 'prof-drone-operation-014',
                name: 'Wan-Jae Lee',
                koreanName: '이완재',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Electronics Basic Practice I',
                    'Aircraft Electronics Major Practice I'
                ],
                photo: '/asea-eng/images/professors/cf63565a6d4233386a13a5b8ee3af94c.jpg'
            },
            {
                id: 'prof-drone-operation-015',
                name: 'Ju-Hyung Park',
                koreanName: '박주형',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Airframe Practice I',
                    'Aircraft Airframe Practice II',
                    'General Maintenance Practice'
                ],
                photo: '/asea-eng/images/professors/07c79d7e6ac8d690bebee20e60c5e543.png'
            },
            {
                id: 'prof-drone-operation-016',
                name: 'No-Hoon Park',
                koreanName: '박노훈',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aviation Electronics and Electrical Instruments I',
                    'Aviation Electronics and Electrical Instruments II',
                    'Aviation Electronics and Electrical Instruments Practice I'
                ],
                photo: '/asea-eng/images/professors/abaf4eecf4cc08c9c5d48001f69e1ae0.png'
            },
            {
                id: 'prof-drone-operation-017',
                name: 'Jong-Ho Kim',
                koreanName: '김종호',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Engine I',
                    'Aircraft Engine II',
                    'Aircraft Hydraulic and Pneumatic Equipment',
                    'Introduction to Non-Destructive Testing'
                ],
                photo: '/asea-eng/images/professors/05f1d80f042ea6d2aa05264f57b8eab1.png'
            },
            {
                id: 'prof-drone-operation-018',
                name: 'Byung-Mu Kim',
                koreanName: '김병무',
                title: 'Professor',
                department: 'Drone Operation',
                courses: [
                    'Aircraft Engine Practice',
                    'Engineering Mechanics'
                ],
                photo: '/asea-eng/images/professors/85c9ac8c41a4b774545560223fac89f3.png'
            }
        ]
    },
    {
        programId: 'aviation-nco',
        professors: [
            // 항공부사관과정 - 항공정비사과정과 동일한 교수진
            {
                id: 'prof-aviation-nco-001',
                name: 'Sung-Hee Jang',
                koreanName: '장성희',
                title: 'Professor',
                department: 'Aviation NCO',
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
                id: 'prof-aviation-nco-002',
                name: 'Yong-Hee Han',
                koreanName: '한용희',
                title: 'Professor',
                department: 'Aviation NCO',
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
                id: 'prof-aviation-nco-003',
                name: 'Bong-Su Kim',
                koreanName: '김봉수',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Engine Practice I',
                    'Aircraft Engine Practice II',
                    'Aircraft Power Plant I',
                    'Aircraft Power Plant II'
                ],
                photo: '/asea-eng/images/professors/6808744f47d8df0b3c2ce3f05225fd17.jpg'
            },
            {
                id: 'prof-aviation-nco-004',
                name: 'Hyeok-Jun Kwon',
                koreanName: '권혁준',
                title: 'Professor',
                department: 'Aviation NCO',
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
                id: 'prof-aviation-nco-005',
                name: 'Young-Jin Hong',
                koreanName: '홍영진',
                title: 'Professor',
                department: 'Aviation NCO',
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
                id: 'prof-aviation-nco-006',
                name: 'Hyung-Sik Baek',
                koreanName: '백형식',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Airframe I'
                ],
                photo: '/asea-eng/images/professors/81b3b3961655d7e2ac1d20dfc8ed9176.jpg'
            },
            {
                id: 'prof-aviation-nco-007',
                name: 'Myung-Yeop Lee',
                koreanName: '이명엽',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'General Helicopter',
                    'Introduction to Aerospace',
                    'Aircraft Airframe'
                ],
                photo: '/asea-eng/images/professors/323fe875c9845bc979e9e969ab9a719b.jpg'
            },
            {
                id: 'prof-aviation-nco-008',
                name: 'Eun-Tae Jo',
                koreanName: '조은태',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Introduction to Electronics and Electrical Engineering'
                ],
                photo: '/asea-eng/images/professors/3245de619ca8233db9d564cb0cbd721f.jpg'
            },
            {
                id: 'prof-aviation-nco-009',
                name: 'Kwang-Su Yoon',
                koreanName: '윤광수',
                title: 'Professor',
                department: 'Aviation NCO',
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
                id: 'prof-aviation-nco-010',
                name: 'Kyung-Hwa Song',
                koreanName: '송경화',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Maintenance Practice',
                    'Aircraft Instruments and Electrical Equipment'
                ],
                photo: '/asea-eng/images/professors/14d10601d6f466651a7bb9adeae140da.jpg'
            },
            {
                id: 'prof-aviation-nco-011',
                name: 'Jun-Sik Min',
                koreanName: '민준식',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Basic Practice I',
                    'Aircraft Basic Practice II',
                    'Aircraft Power Plant I'
                ],
                photo: '/asea-eng/images/professors/110498f74d309728ad38c51219211f68.png'
            },
            {
                id: 'prof-aviation-nco-012',
                name: 'Daniel Chung',
                koreanName: '정희진',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'TOEIC',
                    'Grammar'
                ],
                photo: '/asea-eng/images/professors/d8e4f4cfa3fa508e6cd74bba98c1756e.jpg'
            },
            {
                id: 'prof-aviation-nco-013',
                name: 'Sung-Su Kim',
                koreanName: '김성수',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Power Plant I',
                    'Helicopter Power Transmission System'
                ],
                photo: '/asea-eng/images/professors/ba2d5a8151b7f017c31c597bb6db6e48.jpg'
            },
            {
                id: 'prof-aviation-nco-014',
                name: 'Wan-Jae Lee',
                koreanName: '이완재',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Electronics Basic Practice I',
                    'Aircraft Electronics Major Practice I'
                ],
                photo: '/asea-eng/images/professors/cf63565a6d4233386a13a5b8ee3af94c.jpg'
            },
            {
                id: 'prof-aviation-nco-015',
                name: 'Ju-Hyung Park',
                koreanName: '박주형',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Airframe Practice I',
                    'Aircraft Airframe Practice II',
                    'General Maintenance Practice'
                ],
                photo: '/asea-eng/images/professors/07c79d7e6ac8d690bebee20e60c5e543.png'
            },
            {
                id: 'prof-aviation-nco-016',
                name: 'No-Hoon Park',
                koreanName: '박노훈',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aviation Electronics and Electrical Instruments I',
                    'Aviation Electronics and Electrical Instruments II',
                    'Aviation Electronics and Electrical Instruments Practice I'
                ],
                photo: '/asea-eng/images/professors/abaf4eecf4cc08c9c5d48001f69e1ae0.png'
            },
            {
                id: 'prof-aviation-nco-017',
                name: 'Jong-Ho Kim',
                koreanName: '김종호',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Engine I',
                    'Aircraft Engine II',
                    'Aircraft Hydraulic and Pneumatic Equipment',
                    'Introduction to Non-Destructive Testing'
                ],
                photo: '/asea-eng/images/professors/05f1d80f042ea6d2aa05264f57b8eab1.png'
            },
            {
                id: 'prof-aviation-nco-018',
                name: 'Byung-Mu Kim',
                koreanName: '김병무',
                title: 'Professor',
                department: 'Aviation NCO',
                courses: [
                    'Aircraft Engine Practice',
                    'Engineering Mechanics'
                ],
                photo: '/asea-eng/images/professors/85c9ac8c41a4b774545560223fac89f3.png'
            }
        ]
    },
    {
        programId: 'aviation-mechanical',
        professors: [
            // 항공기계과정 - 항공정비사과정과 동일한 교수진
            {
                id: 'prof-aviation-mechanical-001',
                name: 'Sung-Hee Jang',
                koreanName: '장성희',
                title: 'Professor',
                department: 'Aviation Mechanical',
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
                id: 'prof-aviation-mechanical-002',
                name: 'Yong-Hee Han',
                koreanName: '한용희',
                title: 'Professor',
                department: 'Aviation Mechanical',
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
                id: 'prof-aviation-mechanical-003',
                name: 'Bong-Su Kim',
                koreanName: '김봉수',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Engine Practice I',
                    'Aircraft Engine Practice II',
                    'Aircraft Power Plant I',
                    'Aircraft Power Plant II'
                ],
                photo: '/asea-eng/images/professors/6808744f47d8df0b3c2ce3f05225fd17.jpg'
            },
            {
                id: 'prof-aviation-mechanical-004',
                name: 'Hyeok-Jun Kwon',
                koreanName: '권혁준',
                title: 'Professor',
                department: 'Aviation Mechanical',
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
                id: 'prof-aviation-mechanical-005',
                name: 'Young-Jin Hong',
                koreanName: '홍영진',
                title: 'Professor',
                department: 'Aviation Mechanical',
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
                id: 'prof-aviation-mechanical-006',
                name: 'Hyung-Sik Baek',
                koreanName: '백형식',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Airframe I'
                ],
                photo: '/asea-eng/images/professors/81b3b3961655d7e2ac1d20dfc8ed9176.jpg'
            },
            {
                id: 'prof-aviation-mechanical-007',
                name: 'Myung-Yeop Lee',
                koreanName: '이명엽',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'General Helicopter',
                    'Introduction to Aerospace',
                    'Aircraft Airframe'
                ],
                photo: '/asea-eng/images/professors/323fe875c9845bc979e9e969ab9a719b.jpg'
            },
            {
                id: 'prof-aviation-mechanical-008',
                name: 'Eun-Tae Jo',
                koreanName: '조은태',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Introduction to Electronics and Electrical Engineering'
                ],
                photo: '/asea-eng/images/professors/3245de619ca8233db9d564cb0cbd721f.jpg'
            },
            {
                id: 'prof-aviation-mechanical-009',
                name: 'Kwang-Su Yoon',
                koreanName: '윤광수',
                title: 'Professor',
                department: 'Aviation Mechanical',
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
                id: 'prof-aviation-mechanical-010',
                name: 'Kyung-Hwa Song',
                koreanName: '송경화',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Maintenance Practice',
                    'Aircraft Instruments and Electrical Equipment'
                ],
                photo: '/asea-eng/images/professors/14d10601d6f466651a7bb9adeae140da.jpg'
            },
            {
                id: 'prof-aviation-mechanical-011',
                name: 'Jun-Sik Min',
                koreanName: '민준식',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Basic Practice I',
                    'Aircraft Basic Practice II',
                    'Aircraft Power Plant I'
                ],
                photo: '/asea-eng/images/professors/110498f74d309728ad38c51219211f68.png'
            },
            {
                id: 'prof-aviation-mechanical-012',
                name: 'Daniel Chung',
                koreanName: '정희진',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'TOEIC',
                    'Grammar'
                ],
                photo: '/asea-eng/images/professors/d8e4f4cfa3fa508e6cd74bba98c1756e.jpg'
            },
            {
                id: 'prof-aviation-mechanical-013',
                name: 'Sung-Su Kim',
                koreanName: '김성수',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Power Plant I',
                    'Helicopter Power Transmission System'
                ],
                photo: '/asea-eng/images/professors/ba2d5a8151b7f017c31c597bb6db6e48.jpg'
            },
            {
                id: 'prof-aviation-mechanical-014',
                name: 'Wan-Jae Lee',
                koreanName: '이완재',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Electronics Basic Practice I',
                    'Aircraft Electronics Major Practice I'
                ],
                photo: '/asea-eng/images/professors/cf63565a6d4233386a13a5b8ee3af94c.jpg'
            },
            {
                id: 'prof-aviation-mechanical-015',
                name: 'Ju-Hyung Park',
                koreanName: '박주형',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Airframe Practice I',
                    'Aircraft Airframe Practice II',
                    'General Maintenance Practice'
                ],
                photo: '/asea-eng/images/professors/07c79d7e6ac8d690bebee20e60c5e543.png'
            },
            {
                id: 'prof-aviation-mechanical-016',
                name: 'No-Hoon Park',
                koreanName: '박노훈',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aviation Electronics and Electrical Instruments I',
                    'Aviation Electronics and Electrical Instruments II',
                    'Aviation Electronics and Electrical Instruments Practice I'
                ],
                photo: '/asea-eng/images/professors/abaf4eecf4cc08c9c5d48001f69e1ae0.png'
            },
            {
                id: 'prof-aviation-mechanical-017',
                name: 'Jong-Ho Kim',
                koreanName: '김종호',
                title: 'Professor',
                department: 'Aviation Mechanical',
                courses: [
                    'Aircraft Engine I',
                    'Aircraft Engine II',
                    'Aircraft Hydraulic and Pneumatic Equipment',
                    'Introduction to Non-Destructive Testing'
                ],
                photo: '/asea-eng/images/professors/05f1d80f042ea6d2aa05264f57b8eab1.png'
            },
            {
                id: 'prof-aviation-mechanical-018',
                name: 'Byung-Mu Kim',
                koreanName: '김병무',
                title: 'Professor',
                department: 'Aviation Mechanical',
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