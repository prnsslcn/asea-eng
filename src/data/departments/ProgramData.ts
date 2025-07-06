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

// Export the complete data for both departments
export const departmentsData = {
    'aviation-maintenance': aviationMaintenanceData,
    'smart-safety': smartSafetyData
    // Additional departments will be added in subsequent phases
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