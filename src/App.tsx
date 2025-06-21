import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProgramsSection from './components/sections/ProgramsSection';
import StatsSection from './components/sections/StatsSection';
import ContactSection from './components/sections/ContactSection';
import CurriculumPage from './components/curriculum/CurriculumPage';

// HomePage 컴포넌트 (기존 섹션들을 조합)
const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <ProgramsSection />
            <StatsSection />
            <ContactSection />
        </>
    );
};

// 임시 페이지 컴포넌트들 (추후 구현 예정)
const AboutPage: React.FC = () => (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">학교소개</h1>
            <p className="text-lg text-gray-600">학교소개 페이지가 곧 업데이트됩니다.</p>
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

function App() {
    return (
        <Router basename="/asea-eng">
            <div className="App min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        {/* 메인 페이지 */}
                        <Route path="/" element={<HomePage />} />

                        {/* 교육과정 라우팅 */}
                        <Route path="/curriculum/:id" element={<CurriculumPage />} />

                        {/* 세부 과정 라우팅 (추후 구현) */}
                        <Route path="/curriculum/:deptId/:courseId" element={
                            <div className="min-h-screen py-16">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <h1 className="text-4xl font-bold text-gray-900 mb-8">세부 과정</h1>
                                    <p className="text-lg text-gray-600">세부 과정 페이지가 곧 업데이트됩니다.</p>
                                </div>
                            </div>
                        } />

                        {/* 학교소개 라우팅 */}
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/about/*" element={<AboutPage />} />

                        {/* 입학안내 라우팅 */}
                        <Route path="/admission" element={<AdmissionPage />} />
                        <Route path="/admission/*" element={<AdmissionPage />} />

                        {/* 취업지원 라우팅 */}
                        <Route path="/employment" element={<EmploymentPage />} />
                        <Route path="/employment/*" element={<EmploymentPage />} />

                        {/* 커뮤니티 라우팅 */}
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/community/*" element={<CommunityPage />} />

                        {/* 404 페이지 */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;