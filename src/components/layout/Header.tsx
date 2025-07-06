import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
    "About Us": [
        { name: "ASEA", link: "/about/asea" },
        { name: "Educational Goals", link: "/about/goals" },
        { name: "Facilities", link: "/about/facilities" },
        { name: "Chairman's Message", link: "/about/chairman" },
        { name: "President's Message", link: "/about/president" },
        { name: "Campus Directory", link: "/about/directory" },
        { name: "Location & Directions", link: "/about/location" }
    ],
    "Admissions": [
        { name: "Admission Guide", link: "/admission/guide" },
        { name: "Application Process", link: "/admission/process" },
        { name: "Career Roadmap", link: "/admission/roadmap" },
        { name: "Freshman Scholarships", link: "/admission/scholarship" }
    ],
    "Departments": {
        "Aviation Maintenance": [
            { name: "Aircraft Maintenance Course", link: "/departments/aviation-maintenance/programs/aircraft-maintenance" },
            { name: "Aviation Mechanical Course", link: "/departments/aviation-maintenance/programs/aircraft-mechanic" },
            { name: "Aviation NCO Course", link: "/departments/aviation-maintenance/programs/military-nco" },
            { name: "Drone Operation & Maintenance Course", link: "/departments/aviation-maintenance/programs/drone" },
            { name: "Aviation Maintenance Engineering [3-Year]", link: "/departments/aviation-maintenance/programs/aviation-engineering" }
        ],
        "Smart Safety Diagnostics": [
            { name: "Ultrasonic Diagnostics Course", link: "/departments/smart-safety/programs/ultrasonic-inspection" },
            { name: "Aviation NDT Course", link: "/departments/smart-safety/programs/ndt-inspection" },
            { name: "Metallurgical Engineering [3-Year]", link: "/departments/smart-safety/programs/metallurgy-engineering" }
        ],
        "Aviation Tourism": [
            { name: "Flight Attendant Course", link: "/departments/aviation-tourism/programs/cabin-crew" },
            { name: "Hotel Tourism Specialist Course", link: "/departments/aviation-tourism/programs/hotel-tourism" },
            { name: "Food & Beverage Specialist Course", link: "/departments/aviation-tourism/programs/food-beverage" }
        ],
        "Aviation Security": [
            { name: "Airport Security Course", link: "/departments/aviation-security/programs/aviation-security" },
            { name: "VIP Security Course", link: "/departments/aviation-security/programs/security-escort" },
            { name: "PMC Security Course", link: "/departments/aviation-security/programs/pmc-security" },
            { name: "Action Acting Course", link: "/departments/aviation-security/programs/action-acting" },
            { name: "Sports Conditioning Course", link: "/departments/aviation-security/programs/sports-conditioning" }
        ],
        "Defense & Police AI": [
            { name: "Military Officer Course", link: "/departments/defense-police-ai/programs/military-academy" },
            { name: "Military NCO Course", link: "/departments/defense-police-ai/programs/military-nco" },
            { name: "Defense AI Course", link: "/departments/defense-police-ai/programs/defense-ai" },
            { name: "Police Officer Course", link: "/departments/defense-police-ai/programs/police-officer" }
        ]
    },
    "Career Support": [
        { name: "Employment Status", link: "/employment/status" },
        { name: "Industry Partnership", link: "/employment/partnership" },
        { name: "Career Programs", link: "/employment/programs" }
    ],
    "Community": [
        { name: "Announcements", link: "/community/notice" },
        { name: "News", link: "/community/news" },
        { name: "Gallery", link: "/community/gallery" },
        { name: "Employment News", link: "/community/employment" }
    ]
};

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
    };

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
        const educationData = menuStructure["Departments"] as EducationMenu;

        return (
            <div
                className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Department Overview Link */}
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <button
                            onClick={() => handleNavigation('/departments')}
                            className="text-blue-900 hover:text-blue-700 font-semibold text-lg transition-colors"
                        >
                            🎓 View All Departments Overview
                        </button>
                        <p className="text-sm text-blue-700 mt-1">Explore our comprehensive academic programs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(educationData).map(([deptName, courses]: [string, Course[]]) => (
                            <div key={deptName} className="space-y-4">
                                <h3 className="font-bold text-lg text-gray-900 border-b border-blue-200 pb-2">
                                    <button
                                        onClick={() => handleNavigation(`/departments/${getDepartmentSlug(deptName)}`)}
                                        className="hover:text-blue-600 transition-colors text-left w-full"
                                    >
                                        {deptName}
                                    </button>
                                </h3>
                                <ul className="space-y-2">
                                    {courses.map((course: Course, index: number) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleNavigation(course.link)}
                                                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-2 py-1 rounded transition-colors text-sm w-full text-left"
                                            >
                                                {course.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Department Section Highlights */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">🎓 Aviation Excellence</h4>
                                <p className="text-sm text-blue-700">Korea's Leading Aviation Education Institution</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-2">🏢 Industry Partnership</h4>
                                <p className="text-sm text-green-700">Strong Industry Connections & Career Support</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-2">📅 Since 1993</h4>
                                <p className="text-sm text-purple-700">Over 30 Years of Aviation Education Excellence</p>
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
                            <button
                                key={index}
                                onClick={() => handleNavigation(item.link)}
                                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg transition-colors text-left"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderMegaMenu = () => {
        if (!activeMenu) return null;

        if (activeMenu === "Departments") {
            return renderEducationMegaMenu();
        }

        // 일반 메뉴 처리
        const menuItems = menuStructure[activeMenu as keyof typeof menuStructure] as MenuItem[];
        if (menuItems && Array.isArray(menuItems)) {
            return renderGeneralMegaMenu(menuItems);
        }

        return null;
    };

    // Department name을 URL slug로 변환하는 헬퍼 함수
    const getDepartmentSlug = (deptName: string): string => {
        const slugMap: { [key: string]: string } = {
            "Aviation Maintenance": "aviation-maintenance",
            "Smart Safety Diagnostics": "smart-safety",
            "Aviation Tourism": "aviation-tourism",
            "Aviation Security": "aviation-security",
            "Defense & Police AI": "defense-police-ai"
        };
        return slugMap[deptName] || deptName.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-40">
            {/* 메인 헤더 */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        {/* 로고 */}
                        <div className="flex-shrink-0">
                            <button onClick={() => handleNavigation('/')} className="flex items-center text-left">
                                <img
                                    src="/asea-eng/images/asea-em-1.png"
                                    alt="ASEA Logo"
                                    className="w-16 h-16 mr-3 object-contain"
                                />
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-bold text-gray-900">ASEA</h1>
                                    <p className="text-lg text-gray-600">Aviation College</p>
                                </div>
                            </button>
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
                                    <button
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                                        onClick={() => {
                                            // 모바일에서는 첫 번째 서브메뉴로 이동하거나 토글 기능 구현
                                            if (menuName === "Departments") {
                                                handleNavigation("/departments");
                                            } else {
                                                const firstSubmenu = Array.isArray(menuStructure[menuName as keyof typeof menuStructure])
                                                    ? (menuStructure[menuName as keyof typeof menuStructure] as MenuItem[])[0]?.link
                                                    : null;
                                                if (firstSubmenu) {
                                                    handleNavigation(firstSubmenu);
                                                }
                                            }
                                        }}
                                    >
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