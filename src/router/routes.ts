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
    'defense-police-ai': 'national-defense-police-ai',  // ✅ 수정됨
} as const;

// Program ID 매핑 (ProgramData.ts와 정확히 일치)
export const PROGRAM_ID_MAP = {
    'aviation-maintenance': {
        '01': 'aircraft-maintenance',     // 항공정비사과정
        '02': 'aviation-mechanical',      // ✅ 수정됨
        '03': 'aviation-nco',            // ✅ 수정됨
        '04': 'drone-operation',         // ✅ 수정됨
    },
    'smart-safety': {
        '01': 'aviation-ndt',            // ✅ 수정됨 (항공비파괴검사과정)
        '02': 'ultrasonic-diagnostics',  // ✅ 수정됨 (초음파진단과정)
        '03': 'metallurgical-engineering', // ✅ 수정됨 (금속공학사과정[3년제])
    },
    'aviation-tourism': {
        '01': 'flight-attendant',        // ✅ 수정됨 (승무원과정)
        '02': 'food-beverage-specialist', // ✅ 수정됨 (식음료전문가과정)
        '03': 'tourism-specialist',      // ✅ 수정됨 (관광전문가과정)
    },
    'aviation-security': {
        '01': 'airport-security',        // ✅ 수정됨 (항공보안과정)
        '02': 'vip-security',           // ✅ 수정됨 (의전경비과정)
        '03': 'pmc-security',           // PMC경비과정
        '04': 'action-acting',          // 액션연기과정
        '05': 'sports-rehabilitation',   // ✅ 수정됨 (스포츠재활컨디셔닝과정)
    },
    'defense-police-ai': {
        '01': 'national-defense-officer', // ✅ 수정됨 (국방사관과정)
        '02': 'national-defense-nco',    // ✅ 수정됨 (국방부사관과정)
        '03': 'national-defense-ai',     // ✅ 수정됨 (국방AI과정)
        '04': 'police-officer',         // 경찰공무원과정
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