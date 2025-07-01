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
    CURRICULUM: {
        ROOT: '/curriculum',
        DEPARTMENT: (id: string) => `/curriculum/${id}`,
        COURSE: (deptId: string, courseId: string) => `/curriculum/${deptId}/${courseId}`,
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