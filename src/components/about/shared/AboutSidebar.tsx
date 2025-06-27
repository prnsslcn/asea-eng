import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarItem {
    name: string;
    link: string;
    icon: string;
    description: string;
}

const sidebarItems: SidebarItem[] = [
    {
        name: "ASEA",
        link: "/about/asea",
        icon: "🏛️",
        description: "About our institution"
    },
    {
        name: "Educational Goals",
        link: "/about/goals",
        icon: "🎯",
        description: "Our mission & vision"
    },
    {
        name: "Facilities",
        link: "/about/facilities",
        icon: "🏢",
        description: "Campus & equipment"
    },
    {
        name: "President's Message",
        link: "/about/greeting",
        icon: "💬",
        description: "Welcome message"
    },
    {
        name: "Campus Directory",
        link: "/about/directory",
        icon: "📞",
        description: "Contact information"
    },
    {
        name: "Location & Directions",
        link: "/about/location",
        icon: "📍",
        description: "How to find us"
    }
];

const AboutSidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* 사이드바 헤더 */}
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">About Us Menu</h3>
                <p className="text-sm text-gray-600 mt-1">Navigate through our information</p>
            </div>

            {/* 메뉴 아이템들 */}
            <div className="p-2">
                {sidebarItems.map((item, index) => {
                    const isActive = location.pathname === item.link;

                    return (
                        <button
                            key={index}
                            onClick={() => handleNavigation(item.link)}
                            className={`
                                w-full text-left p-3 rounded-lg transition-all duration-200 mb-1
                                ${isActive
                                ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                                : 'hover:bg-gray-50 text-gray-700 hover:text-blue-600'
                            }
                            `}
                        >
                            <div className="flex items-start space-x-3">
                                <span className="text-xl">{item.icon}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm">{item.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* 사이드바 푸터 */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">ASEA Aviation</div>
                    <p className="text-xs text-gray-600 mt-1">
                        Leading aviation education since 1993
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSidebar;