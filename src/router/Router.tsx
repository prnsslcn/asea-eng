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
import AdmissionLayout from '../pages/admission/shared/AdmissionLayout';

// About 관련 컴포넌트들 (Facilities 제거됨)
import {
    AboutLayout,
    AseaPage,
    EducationalGoalsPage,
    DirectoryPage,
    ChairmanPage,
    PresidentPage,
    LocationPage
} from '../pages/about';

// Campus Life Pages (이동된 페이지들)
import CampusLifeLayout from "../pages/campus-life/shared/CampusLifeLayout.tsx";
import FreshmanScholarshipsPage from '../pages/campus-life/FreshmanScholarshipsPage'; // 이동됨
import FacilitiesPage from '../pages/campus-life/FacilitiesPage'; // 이동됨
import EnrolledScholarshipsPage from "../pages/campus-life/EnrolledScholarshipsPage.tsx";
import DormitoryPage from "../pages/campus-life/DormitoryPage.tsx";

// Departments Layout
import DepartmentsLayout from '../pages/departments/shared/DepartmentsLayout';

// Departments Pages
import DepartmentsOverviewPage from '../pages/departments/DepartmentsOverviewPage';
import AviationMaintenancePage from '../pages/departments/AviationMaintenancePage';
import SmartSafetyPage from '../pages/departments/SmartSafetyPage';
import AviationTourismPage from '../pages/departments/AviationTourismPage';
import AviationSecurityPage from '../pages/departments/AviationSecurityPage';
import DefensePoliceAIPage from '../pages/departments/DefensePoliceAIPage';

// Programs (세부 전공)
import ProgramDetailPage from '../pages/departments/programs/ProgramDetailPage';

// Career Pages - 임시 개별 컴포넌트들
const JobPlacementPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-8">Job Placement</h1>
            <p className="text-lg text-gray-600">취업현황 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const TransferResultsPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-emerald-700 mb-8">Transfer Results</h1>
            <p className="text-lg text-gray-600">편입현황 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const NCOAdmissionPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rose-700 mb-8">NCO Admission</h1>
            <p className="text-lg text-gray-600">부사관 합격현황 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const ArmyAcademyAdmissionPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-amber-700 mb-8">Army Academy Admission</h1>
            <p className="text-lg text-gray-600">육군3사관학교 합격현황 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

// Campus Life Pages - 임시 개별 컴포넌트들
const TrainingLabsPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-purple-700 mb-8">Practical Training Facilities</h1>
            <p className="text-lg text-gray-600">실습시설 정보가 곧 업데이트됩니다.</p>
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

                {/* About Us 중첩 라우팅 - Facilities 제거됨 */}
                <Route path={ROUTES.ABOUT.ROOT} element={<AboutLayout />}>
                    <Route path="asea" element={<AseaPage />} />
                    <Route path="goals" element={<EducationalGoalsPage />} />
                    <Route path="chairman" element={<ChairmanPage />} />
                    <Route path="president" element={<PresidentPage />} />
                    <Route path="directory" element={<DirectoryPage />} />
                    <Route path="location" element={<LocationPage />} />
                </Route>

                {/* Departments (교육과정) 중첩 라우팅 - DepartmentsLayout 적용 */}
                <Route path={ROUTES.DEPARTMENTS.ROOT} element={<DepartmentsLayout />}>
                    <Route index element={<DepartmentsOverviewPage />} />
                    <Route path="aviation-maintenance" element={<AviationMaintenancePage />} />
                    <Route path="smart-safety" element={<SmartSafetyPage />} />
                    <Route path="aviation-tourism" element={<AviationTourismPage />} />
                    <Route path="aviation-security" element={<AviationSecurityPage />} />
                    <Route path="defense-police-ai" element={<DefensePoliceAIPage />} />

                    {/* 세부 프로그램들도 DepartmentsLayout 내부로 이동 */}
                    <Route path=":departmentId/programs/:programId" element={<ProgramDetailPage />} />
                </Route>

                {/* 입학안내 중첩 라우팅 - Freshman Scholarships 제거됨 */}
                <Route path={ROUTES.ADMISSION.ROOT} element={<AdmissionLayout />}>
                    <Route path="guide" element={<AdmissionGuidePage />} />
                    <Route path="process" element={<ApplicationProcessPage />} />
                    <Route path="roadmap" element={<CareerRoadmapPage />} />
                </Route>

                {/* Career Outcomes 라우팅 (개별 페이지들) */}
                <Route path={ROUTES.CAREER.JOB_PLACEMENT} element={<JobPlacementPage />} />
                <Route path={ROUTES.CAREER.TRANSFER_RESULTS} element={<TransferResultsPage />} />
                <Route path={ROUTES.CAREER.NCO_ADMISSION} element={<NCOAdmissionPage />} />
                <Route path={ROUTES.CAREER.ARMY_ACADEMY_ADMISSION} element={<ArmyAcademyAdmissionPage />} />

                // Campus Life 중첩 라우팅 추가
                <Route path={ROUTES.CAMPUS_LIFE.ROOT} element={<CampusLifeLayout />}>
                    <Route path="freshman-scholarships" element={<FreshmanScholarshipsPage />} />
                    <Route path="enrolled-scholarships" element={<EnrolledScholarshipsPage />} />
                    <Route path="facilities" element={<FacilitiesPage />} />
                    <Route path="training-labs" element={<TrainingLabsPage />} />
                    <Route path="dormitory" element={<DormitoryPage />} />
                </Route>

                {/* 404 페이지 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Router;