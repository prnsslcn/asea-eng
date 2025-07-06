import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import ScrollToTop from '../components/common/ScrollToTop';

// Page Components
import HomePage from '../pages/HomePage';

// Admission Pages
import AdmissionGuidePage from '../pages/admission/AdmissionGuidePage';
import ApplicationProcessPage from '../pages/admission/ApplicationProcessPage';
import CareerRoadmapPage from '../pages/admission/CareerRoadmapPage';
import FreshmanScholarshipsPage from '../pages/admission/FreshmanScholarshipsPage';
import AdmissionLayout from '../pages/admission/shared/AdmissionLayout';

// About 관련 컴포넌트들
import {
    AboutLayout,
    AseaPage,
    EducationalGoalsPage,
    FacilitiesPage,
    DirectoryPage,
    ChairmanPage,
    PresidentPage,
    LocationPage
} from '../pages/about';

// Departments (기존 Curriculum)
import DepartmentLayout from '../pages/departments/shared/DepartmentLayout';
import DepartmentsOverviewPage from '../pages/departments/DepartmentsOverviewPage';
import AviationMaintenancePage from '../pages/departments/AviationMaintenancePage';
import SmartSafetyPage from '../pages/departments/SmartSafetyPage';
import AviationTourismPage from '../pages/departments/AviationTourismPage';
import AviationSecurityPage from '../pages/departments/AviationSecurityPage';
import DefensePoliceAIPage from '../pages/departments/DefensePoliceAIPage';

// Programs (세부 전공)
import ProgramDetailPage from '../pages/departments/programs/ProgramDetailPage';

// 임시 페이지 컴포넌트들
const EmploymentPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Employment Support</h1>
            <p className="text-lg text-gray-600">Employment support page will be updated soon.</p>
        </div>
    </div>
);

const CommunityPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Community</h1>
            <p className="text-lg text-gray-600">Community page will be updated soon.</p>
        </div>
    </div>
);

const NotFoundPage: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you requested does not exist.</p>
            <a
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                Go Home
            </a>
        </div>
    </div>
);

const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* 메인 페이지 */}
                <Route path={ROUTES.HOME} element={<HomePage />} />

                {/* About Us 중첩 라우팅 */}
                <Route path={ROUTES.ABOUT.ROOT} element={<AboutLayout />}>
                    <Route path="asea" element={<AseaPage />} />
                    <Route path="goals" element={<EducationalGoalsPage />} />
                    <Route path="facilities" element={<FacilitiesPage />} />
                    <Route path="chairman" element={<ChairmanPage />} />
                    <Route path="president" element={<PresidentPage />} />
                    <Route path="directory" element={<DirectoryPage />} />
                    <Route path="location" element={<LocationPage />} />
                </Route>

                {/* Departments (교육과정) 중첩 라우팅 */}
                <Route path={ROUTES.DEPARTMENTS.ROOT} element={<DepartmentLayout />}>
                    <Route index element={<DepartmentsOverviewPage />} />
                    <Route path="aviation-maintenance" element={<AviationMaintenancePage />} />
                    <Route path="smart-safety" element={<SmartSafetyPage />} />
                    <Route path="aviation-tourism" element={<AviationTourismPage />} />
                    <Route path="aviation-security" element={<AviationSecurityPage />} />
                    <Route path="defense-police-ai" element={<DefensePoliceAIPage />} />
                </Route>

                {/* 세부 프로그램 라우팅 */}
                <Route
                    path="/departments/:departmentId/programs/:programId"
                    element={<ProgramDetailPage />}
                />

                {/* 입학안내 중첩 라우팅 */}
                <Route path={ROUTES.ADMISSION.ROOT} element={<AdmissionLayout />}>
                    <Route path="guide" element={<AdmissionGuidePage />} />
                    <Route path="process" element={<ApplicationProcessPage />} />
                    <Route path="roadmap" element={<CareerRoadmapPage />} />
                    <Route path="scholarship" element={<FreshmanScholarshipsPage />} />
                </Route>

                {/* 취업지원 라우팅 */}
                <Route path={ROUTES.EMPLOYMENT.ROOT} element={<EmploymentPage />} />
                <Route path={ROUTES.EMPLOYMENT.WILDCARD} element={<EmploymentPage />} />

                {/* 커뮤니티 라우팅 */}
                <Route path={ROUTES.COMMUNITY.ROOT} element={<CommunityPage />} />
                <Route path={ROUTES.COMMUNITY.WILDCARD} element={<CommunityPage />} />

                {/* 404 페이지 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Router;