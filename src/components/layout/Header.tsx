import React, { useState, useEffect, useRef } from 'react';

interface Course {
    name: string;
    link: string;
}

interface MenuItem {
    name: string;
    link: string;
}

interface EducationMenu {
    [key: string]: Course[];
}

const menuStructure = {
    "About (학교소개)": [
        { name: "History (학교연혁)", link: "/about/history" },
        { name: "President's Message (총장인사말)", link: "/about/greeting" },
        { name: "Organization (조직도)", link: "/about/organization" },
        { name: "Facilities (시설안내)", link: "/about/facilities" },
        { name: "Location (오시는길)", link: "/about/location" }
    ],
    "Programs (교육과정)": {
        "Aviation Maintenance (항공정비계열)": [
            { name: "Aircraft Maintenance Course (항공정비사과정)", link: "/curriculum/01/01" },
            { name: "Aviation Mechanical Course (항공기계과정)", link: "/curriculum/01/02" },
            { name: "Aviation NCO Course (항공부사관과정)", link: "/curriculum/01/03" },
            { name: "Drone Operation & Maintenance Course (드론(조종.정비)과정)", link: "/curriculum/01/04" },
            { name: "Aviation Maintenance Engineering [3-Year] (항공정비공학사과정[3년제])", link: "/curriculum/01/05" }
        ],
        "Smart Safety Diagnostics (스마트안전진단계열)": [
            { name: "Ultrasonic Diagnostics Course (초음파진단과정)", link: "/curriculum/02/01" },
            { name: "Aviation NDT Course (항공비파괴검사과정)", link: "/curriculum/02/02" },
            { name: "Metallurgical Engineering [3-Year] (금속공학사과정[3년제])", link: "/curriculum/02/03" }
        ],
        "Aviation Tourism (항공관광계열)": [
            { name: "Flight Attendant Course (승무원과정)", link: "/curriculum/03/01" },
            { name: "Resort Tourism Specialist Course (리조트관광전문가과정)", link: "/curriculum/03/05" },
            { name: "Facility Management Specialist Course (실시설전문가과정)", link: "/curriculum/03/03" }
        ],
        "Tourism Management (관광경영계열)": [
            { name: "Tourism Service Course (관광서비스과정)", link: "/curriculum/04/01" },
            { name: "Resort & F&B Course (리조트·외식과정)", link: "/curriculum/04/02" },
            { name: "Casino Dealer Course (카지노딜러과정)", link: "/curriculum/04/03" },
            { name: "Cruise Staff Course (크루즈승무원과정)", link: "/curriculum/04/04" }
        ],
        "Aviation Security (항공보안계열)": [
            { name: "Airport Security Course (항공보안과정)", link: "/curriculum/05/01" },
            { name: "VIP Security Course (의전경비과정)", link: "/curriculum/05/02" },
            { name: "PMC Security Course (PMC경비과정)", link: "/curriculum/05/05" },
            { name: "Acting Course (암실연기과정)", link: "/curriculum/05/04" },
            { name: "Entertainment Course (스카치콘서트엔터테인먼트과정)", link: "/curriculum/05/06" }
        ],
        "Defense & Police AI (국방경찰AI계열)": [
            { name: "Military Officer Course (국방사관과정)", link: "/curriculum/06/01" },
            { name: "Military NCO Course (국방부사관과정)", link: "/curriculum/06/02" },
            { name: "Defense AI Course (국방AI과정)", link: "/curriculum/06/03" },
            { name: "Police Officer Course (경찰공무원과정)", link: "/curriculum/06/04" }
        ]
    },
    "Admissions (입학안내)": [
        { name: "Admission Guide (모집요강)", link: "/admission/guide" },
        { name: "Schedule (전형일정)", link: "/admission/schedule" },
        { name: "Consultation (입학상담)", link: "/admission/consultation" },
        { name: "Scholarships (장학제도)", link: "/admission/scholarship" }
    ],
    "Career Support (취업지원)": [
        { name: "Employment Status (취업현황)", link: "/employment/status" },
        { name: "Industry Partnership (산학협력)", link: "/employment/partnership" },
        { name: "Career Programs (취업프로그램)", link: "/employment/programs" }
    ],
    "Community (커뮤니티)": [
        { name: "Announcements (공지사항)", link: "/community/notice" },
        { name: "News (보도자료)", link: "/community/news" },
        { name: "Gallery (갤러리)", link: "/community/gallery" },
        { name: "Employment News (취업현황)", link: "/community/employment" }
    ]
};

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleMenuEnter = (menuName: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menuName);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const handleMegaMenuEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleMegaMenuLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const renderEducationMegaMenu = () => {
        const educationData = menuStructure["Programs (교육과정)"] as EducationMenu;

        return (
            <div
                className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(educationData).map(([deptName, courses]: [string, Course[]]) => (
                            <div key={deptName} className="space-y-4">
                                <h3 className="font-bold text-lg text-gray-900 border-b border-blue-200 pb-2">
                                    {deptName}
                                </h3>
                                <ul className="space-y-2">
                                    {courses.map((course: Course, index: number) => (
                                        <li key={index}>
                                            <a
                                                href={course.link}
                                                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-2 py-1 rounded transition-colors text-sm"
                                            >
                                                {course.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Programs Section Highlights */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">🏆 91% Employment Rate (91% 취업률)</h4>
                                <p className="text-sm text-blue-700">Korea's Leading Aviation Career Producer (전국 항공분야 최다 취업자 배출)</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-2">🏢 120+ Industry Partners (120개 이상 협력업체)</h4>
                                <p className="text-sm text-green-700">Guaranteed Employment Through Industry Partnership (산학협력을 통한 취업보장)</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-2">📅 25 Years of Excellence (25년 교육경험)</h4>
                                <p className="text-sm text-purple-700">Since 1993, 15,000+ Graduates (1993년 설립, 15,000명 이상 졸업생)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderGeneralMegaMenu = (menuItems: MenuItem[]) => {
        return (
            <div
                className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {menuItems.map((item: MenuItem, index: number) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderMegaMenu = () => {
        if (!activeMenu) return null;

        if (activeMenu === "Programs (교육과정)") {
            return renderEducationMegaMenu();
        }

        // 일반 메뉴 처리
        const menuItems = menuStructure[activeMenu as keyof typeof menuStructure] as MenuItem[];
        if (menuItems && Array.isArray(menuItems)) {
            return renderGeneralMegaMenu(menuItems);
        }

        return null;
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-40">
            {/* 메인 헤더 */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        {/* 로고 */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-xl">A</span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">ASEA</h1>
                                    <p className="text-sm text-gray-600">Korea Aviation Technical College (아세아항공직업전문학교)</p>
                                </div>
                            </a>
                        </div>

                        {/* 데스크톱 네비게이션 */}
                        <nav className="hidden lg:flex space-x-8">
                            {Object.keys(menuStructure).map((menuName: string) => (
                                <div
                                    key={menuName}
                                    className="relative"
                                    onMouseEnter={() => handleMenuEnter(menuName)}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                        {menuName}
                                    </button>
                                </div>
                            ))}
                        </nav>

                        {/* 모바일 메뉴 버튼 */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 hover:text-blue-600 p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* MegaMenu */}
                {renderMegaMenu()}

                {/* 모바일 메뉴 */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {Object.keys(menuStructure).map((menuName: string) => (
                                <div key={menuName}>
                                    <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
                                        {menuName}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;