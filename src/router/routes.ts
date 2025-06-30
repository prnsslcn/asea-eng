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