import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    path: string;
}

const breadcrumbMap: { [key: string]: string } = {
    '/departments': 'Academic Departments',
    '/departments/aviation-maintenance': 'Aviation Maintenance',
    '/departments/smart-safety': 'Smart Safety Diagnostics',
    '/departments/aviation-tourism': 'Aviation Tourism',
    '/departments/aviation-security': 'Aviation Security',
    '/departments/defense-police-ai': 'Defense Police AI',
    // Programs - Aviation Maintenance
    '/departments/aviation-maintenance/aircraft-maintenance': 'Aircraft Maintenance Program',
    '/departments/aviation-maintenance/aviation-mechanical': 'Aviation Mechanical Program',
    '/departments/aviation-maintenance/aviation-nco': 'Aviation NCO Program',
    '/departments/aviation-maintenance/drone-operation': 'Drone Operation Program',
    // Programs - Smart Safety
    '/departments/smart-safety/aviation-ndt': 'Aviation NDT Program',
    '/departments/smart-safety/ultrasonic-diagnostics': 'Ultrasonic Diagnostics Program',
    '/departments/smart-safety/metallurgical-engineering': 'Metallurgical Engineering Program',
    // Programs - Aviation Tourism
    '/departments/aviation-tourism/flight-attendant': 'Flight Attendant Program',
    '/departments/aviation-tourism/food-beverage-specialist': 'Food & Beverage Specialist Program',
    '/departments/aviation-tourism/tourism-specialist': 'Tourism Specialist Program',
    // Programs - Aviation Security
    '/departments/aviation-security/airport-security': 'Airport Security Program',
    '/departments/aviation-security/vip-security': 'VIP Security Program',
    '/departments/aviation-security/pmc-security': 'PMC Security Program',
    '/departments/aviation-security/action-acting': 'Action Acting Program',
    '/departments/aviation-security/sports-rehabilitation': 'Sports Rehabilitation Program',
    // Programs 중간 경로 매핑 추가
    '/departments/aviation-maintenance/programs': 'Programs',
    '/departments/smart-safety/programs': 'Programs',
    '/departments/aviation-tourism/programs': 'Programs',
    '/departments/aviation-security/programs': 'Programs',
    '/departments/defense-police-ai/programs': 'Programs',
    '/departments/defense-police-ai/national-defense-officer': 'National Defense Officer Program',
    '/departments/defense-police-ai/national-defense-nco': 'National Defense NCO Program',
    '/departments/defense-police-ai/national-defense-ai': 'National Defense AI Program',
    '/departments/defense-police-ai/police-officer': 'Police Officer Program'
};

const DepartmentsBreadcrumb: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 클릭 불가능한 중간 경로들 정의 (programs는 실제 페이지가 없음)
    const nonClickablePaths = [
        '/departments/aviation-maintenance/programs',
        '/departments/smart-safety/programs',
        '/departments/aviation-tourism/programs',
        '/departments/aviation-security/programs',
        '/departments/defense-police-ai/programs'
    ];

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const pathnames = location.pathname.split('/').filter(x => x);
        const breadcrumbs: BreadcrumbItem[] = [
            { name: 'Home', path: '/' }
        ];

        let currentPath = '';
        pathnames.forEach(pathname => {
            currentPath += `/${pathname}`;
            const breadcrumbName = breadcrumbMap[currentPath] || pathname;
            breadcrumbs.push({
                name: breadcrumbName,
                path: currentPath
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <nav className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <div key={breadcrumb.path} className="flex items-center">
                            {index > 0 && (
                                <svg
                                    className="w-4 h-4 text-gray-400 mx-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}

                            {index === breadcrumbs.length - 1 ? (
                                // 현재 페이지 (클릭 불가)
                                <span className="text-blue-600 font-medium">
                                    {breadcrumb.name}
                                </span>
                            ) : nonClickablePaths.includes(breadcrumb.path) ? (
                                // 클릭 불가능한 중간 경로 (programs 등)
                                <span className="text-gray-400 cursor-not-allowed">
                                    {breadcrumb.name}
                                </span>
                            ) : (
                                // 클릭 가능한 이전 페이지들
                                <button
                                    onClick={() => navigate(breadcrumb.path)}
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    {breadcrumb.name}
                                </button>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default DepartmentsBreadcrumb;