export interface SchoolInfo {
    name: string;
    nameKo: string;
    founded: string;
    totalStudents: number;
    employmentRate: number;
    location: {
        address: string;
        addressKo: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
}

export interface Program {
    id: string;
    name: string;
    nameKo: string;
    duration: string;
    description: string;
    descriptionKo: string;
    image: string;
    features: string[];
    featuresKo: string[];
    employmentAreas: string[];
}

export interface Graduate {
    id: string;
    name: string;
    nameKo: string;
    company: string;
    position: string;
    positionKo: string;
    program: string;
    year: number;
    image?: string;
    testimonial?: string;
    testimonialKo?: string;
}

export interface Slide {
    id: string;
    type: 'image' | 'video';
    title: string;
    titleKo: string;
    description?: string;
    descriptionKo?: string;
    desktop: string;
    mobile?: string;
    url?: string; // for video
}

export interface NavigationItem {
    id: string;
    name: string;
    nameKo: string;
    href: string;
    children?: NavigationItem[];
}