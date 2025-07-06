// 라우트 경로 상수 정의
export const ROUTES = {
    HOME: '/',
    ABOUT: {
        ROOT: '/about',
        ASEA: '/about/asea',
        GOALS: '/about/goals',
        FACILITIES: '/about/facilities',
        CHAIRMAN: '/about/chairman',
        PRESIDENT: '/about/president',
        DIRECTORY: '/about/directory',
        LOCATION: '/about/location',
    },
    DEPARTMENTS: {
        ROOT: '/departments',
        OVERVIEW: '/departments',
        AVIATION_MAINTENANCE: '/departments/aviation-maintenance',
        SMART_SAFETY: '/departments/smart-safety',
        AVIATION_TOURISM: '/departments/aviation-tourism',
        AVIATION_SECURITY: '/departments/aviation-security',
        DEFENSE_POLICE_AI: '/departments/defense-police-ai',
        // 동적 라우트 생성 함수들
        DEPARTMENT: (departmentId: string) => `/departments/${departmentId}`,
        PROGRAM: (departmentId: string, programId: string) => `/departments/${departmentId}/programs/${programId}`,
    },
    ADMISSION: {
        ROOT: '/admission',
        GUIDE: '/admission/guide',
        PROCESS: '/admission/process',
        ROADMAP: '/admission/roadmap',
        SCHOLARSHIP: '/admission/scholarship',
        WILDCARD: '/admission/*',
    },
    EMPLOYMENT: {
        ROOT: '/employment',
        WILDCARD: '/employment/*',
    },
    COMMUNITY: {
        ROOT: '/community',
        WILDCARD: '/community/*',
    },
} as const;

// Department ID 매핑 (기존 숫자 ID와 새로운 문자열 ID 연결)
export const DEPARTMENT_ID_MAP = {
    '01': 'aviation-maintenance',
    '02': 'smart-safety',
    '03': 'aviation-tourism',
    '04': 'aviation-security',
    '05': 'defense-police-ai',
} as const;

// 역방향 매핑 (문자열 ID → 숫자 ID)
export const REVERSE_DEPARTMENT_ID_MAP = {
    'aviation-maintenance': '01',
    'smart-safety': '02',
    'aviation-tourism': '03',
    'aviation-security': '04',
    'defense-police-ai': '05',
} as const;

// Program ID 매핑 (항공정비계열 예시)
export const PROGRAM_ID_MAP = {
    'aviation-maintenance': {
        '01': 'aircraft-maintenance',     // 항공정비사과정
        '02': 'aircraft-mechanic',        // 항공기계과정
        '03': 'military-nco',            // 항공부사관과정
        '04': 'drone',                   // 드론과정
        '05': 'aviation-engineering',    // 항공정비공학사과정[3년제]
    },
    'smart-safety': {
        '01': 'ultrasonic-inspection',   // 초음파진단과정
        '02': 'ndt-inspection',          // 항공비파괴검사과정
        '03': 'metallurgy-engineering',  // 금속공학사과정[3년제]
    },
    'aviation-tourism': {
        '01': 'cabin-crew',              // 승무원과정
        '02': 'hotel-tourism',           // 호텔관광전문가과정
        '03': 'food-beverage',           // 식음료전문가과정
    },
    'aviation-security': {
        '01': 'aviation-security',       // 항공보안과정
        '02': 'security-escort',         // 의전경비과정
        '03': 'pmc-security',           // PMC경비과정
        '04': 'action-acting',          // 액션연기과정
        '05': 'sports-conditioning',     // 스포츠재활컨디셔닝과정
    },
    'defense-police-ai': {
        '01': 'military-academy',        // 국방사관과정
        '02': 'military-nco',           // 국방부사관과정
        '03': 'defense-ai',             // 국방AI과정
        '04': 'police-officer',         // 경찰공무원과정
    },
} as const;

// 타입 정의
export type DepartmentId = keyof typeof PROGRAM_ID_MAP;
export type ProgramId<T extends DepartmentId> = keyof typeof PROGRAM_ID_MAP[T];