import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import ScrollToTop from '../components/common/ScrollToTop';

// Page Components
import HomePage from '../pages/HomePage';

// Admission Pages
import AdmissionGuidePage from '../pages/admission/AdmissionGuidePage';
import ApplicationProcessPage from '../pages/admission/ApplicationProcessPage';

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

// Curriculum
import { DepartmentPage } from '../pages/curriculum';

// 임시 페이지 컴포넌트들
const CareerRoadmapPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Career Roadmap</h1>
            <p className="text-lg text-gray-600">진로로드맵 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const FreshmanScholarshipPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Freshman Scholarships</h1>
            <p className="text-lg text-gray-600">신입생 장학금 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const AdmissionPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">입학안내</h1>
            <p className="text-lg text-gray-600">입학안내 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const EmploymentPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">취업지원</h1>
            <p className="text-lg text-gray-600">취업지원 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const CommunityPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">커뮤니티</h1>
            <p className="text-lg text-gray-600">커뮤니티 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const CourseDetailPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">세부 과정</h1>
            <p className="text-lg text-gray-600">세부 과정 페이지가 곧 업데이트됩니다.</p>
        </div>
    </div>
);

const NotFoundPage: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">페이지를 찾을 수 없습니다</h2>
            <p className="text-gray-600 mb-8">요청하신 페이지가 존재하지 않습니다.</p>
            <a
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                홈으로 돌아가기
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

                {/* 교육과정 라우팅 */}
                <Route path="/curriculum/:id" element={<DepartmentPage />} />

                {/* 세부 과정 라우팅 (추후 구현) */}
                <Route path="/curriculum/:deptId/:courseId" element={<CourseDetailPage />} />

                {/* 입학안내 라우팅 */}
                <Route path={ROUTES.ADMISSION.ROOT} element={<AdmissionPage />} />
                <Route path={ROUTES.ADMISSION.GUIDE} element={<AdmissionGuidePage />} />
                <Route path={ROUTES.ADMISSION.PROCESS} element={<ApplicationProcessPage />} />
                <Route path={ROUTES.ADMISSION.ROADMAP} element={<CareerRoadmapPage />} />
                <Route path={ROUTES.ADMISSION.SCHOLARSHIP} element={<FreshmanScholarshipPage />} />
                <Route path={ROUTES.ADMISSION.WILDCARD} element={<AdmissionPage />} />

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