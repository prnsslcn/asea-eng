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

// Department ID 매핑 (URL ID → ProgramData.ts ID)
export const DEPARTMENT_ID_MAP = {
    'aviation-maintenance': 'aviation-maintenance',
    'smart-safety': 'smart-safety',
    'aviation-tourism': 'aviation-tourism',
    'aviation-security': 'aviation-security',
    'defense-police-ai': 'defense-police-ai',  // ✅ 매핑 제거, 완전 통일
} as const;

// Program ID 매핑 (ProgramData.ts와 정확히 일치)
export const PROGRAM_ID_MAP = {
    'aviation-maintenance': {
        '01': 'aircraft-maintenance',
        '02': 'aviation-mechanical',
        '03': 'aviation-nco',
        '04': 'drone-operation',
    },
    'smart-safety': {
        '01': 'aviation-ndt',
        '02': 'ultrasonic-diagnostics',
        '03': 'metallurgical-engineering',
    },
    'aviation-tourism': {
        '01': 'flight-attendant',
        '02': 'food-beverage-specialist',
        '03': 'tourism-specialist',
    },
    'aviation-security': {
        '01': 'airport-security',
        '02': 'vip-security',
        '03': 'pmc-security',
        '04': 'action-acting',
        '05': 'sports-rehabilitation',
    },
    'defense-police-ai': {  // ✅ 키 변경
        '01': 'national-defense-officer',  // 프로그램 ID는 유지
        '02': 'national-defense-nco',
        '03': 'national-defense-ai',
        '04': 'police-officer',
    },
} as const;

// 타입 정의
export type DepartmentId = keyof typeof PROGRAM_ID_MAP;
export type ProgramId<T extends DepartmentId> = keyof typeof PROGRAM_ID_MAP[T];

// 역방향 매핑 함수들
export const getDepartmentIdFromUrl = (urlId: string): string | undefined => {
    return DEPARTMENT_ID_MAP[urlId as keyof typeof DEPARTMENT_ID_MAP];
};

export const getProgramIdFromUrl = (departmentUrlId: string, programUrlId: string): string | undefined => {
    const programMap = PROGRAM_ID_MAP[departmentUrlId as keyof typeof PROGRAM_ID_MAP];
    return programMap ? programMap[programUrlId as keyof typeof programMap] : undefined;
};