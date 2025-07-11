import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    path: string;
}

const breadcrumbMap: { [key: string]: string } = {
    '/campus-life': 'Campus Life',
    '/campus-life/freshman-scholarships': 'Scholarships for Freshmen',
    '/campus-life/enrolled-scholarships': 'Scholarships for Enrolled Students',
    '/campus-life/facilities': 'Campus Facilities',
    '/campus-life/training-labs': 'Practical Training Facilities',
    '/campus-life/dormitory': 'Student Housing'
};

const CampusLifeBreadcrumb: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

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
                            ) : (
                                // 이전 페이지들 (클릭 가능)
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

export default CampusLifeBreadcrumb;