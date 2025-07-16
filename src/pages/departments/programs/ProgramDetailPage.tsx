import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Star, Award, Building2, CheckCircle, ArrowLeft,
    BookOpen, GraduationCap, UserCheck, Construction, ExternalLink
} from 'lucide-react';
import { getDepartmentById, getProgramById } from '../../../data/departments/ProgramData';
import { getDepartmentIdFromUrl } from '../../../router/routes';

const ProgramDetailPage: React.FC = () => {
    const { departmentId, programId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // 데이터 매핑 및 가져오기
    const mappedDepartmentId = getDepartmentIdFromUrl(departmentId || '');
    const department = getDepartmentById(mappedDepartmentId || '');
    const program = getProgramById(mappedDepartmentId || '', programId || '');

    // 404 처리
    if (!department || !program) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Program Not Found</h2>
                    <p className="text-gray-600 mb-8">The program you requested does not exist.</p>
                    <button
                        onClick={() => navigate('/departments')}
                        className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Back to Departments
                    </button>
                </div>
            </div>
        );
    }

    // 탭 메뉴 구성 (5개 탭만)
    const tabs = [
        { id: 'overview', label: 'Program Overview', icon: <BookOpen className="w-5 h-5" /> },
        { id: 'curriculum', label: 'Curriculum', icon: <GraduationCap className="w-5 h-5" /> },
        { id: 'faculty', label: 'Faculty', icon: <UserCheck className="w-5 h-5" /> },
        { id: 'certificates', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
        { id: 'facilities', label: 'Facilities', icon: <Construction className="w-5 h-5" /> }
    ];

    // 탭 렌더링 함수
    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return renderOverviewTab();
            case 'curriculum':
                return renderCurriculumTab();
            case 'faculty':
                return renderFacultyTab();
            case 'certificates':
                return renderCertificatesTab();
            case 'facilities':
                return renderFacilitiesTab();
            default:
                return renderOverviewTab();
        }
    };

    // ✅ HTML 구조에 맞춘 프로그램 개요 탭
    const renderOverviewTab = () => (
        <div className="space-y-8">
            {/* 메인 설명 (HTML의 contentTitle 부분) */}
            <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Introduction</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">{program.description}</p>
                </div>
            </div>

            {/* 과정혜택 섹션 (HTML의 subject_txt - 과정혜택) */}
            {program.coursebenefits && program.coursebenefits.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="w-7 h-7 mr-3 text-green-600" />
                        Course Benefits
                    </h2>
                    <ul className="space-y-4">
                        {program.coursebenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 leading-relaxed">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 특징 및 특전 섹션 (HTML의 subject_txt - 특징 및 특전) */}
            {program.features && program.features.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Star className="w-7 h-7 mr-3 text-yellow-500" />
                        Features & Benefits
                    </h2>
                    <ul className="space-y-4">
                        {program.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 시설 정보 테이블 (HTML의 table_basic_slist) */}
            {program.facilities && program.facilities.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Construction className="w-7 h-7 mr-3 text-purple-600" />
                        Training Facilities
                    </h2>

                    {/* 데스크톱 테이블 */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <tbody className="divide-y divide-gray-200">
                            {program.facilities.map((facility, index) => {
                                if (typeof facility === 'string') {
                                    return (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-900 w-48">
                                                Facility
                                            </th>
                                            <td className="px-6 py-4 text-gray-700">
                                                {facility}
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-900 w-48">
                                                {facility.campus || 'Facility'}
                                            </th>
                                            <td className="px-6 py-4 text-gray-700">
                                                {facility.description || facility.note || ''}
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                            </tbody>
                        </table>
                    </div>

                    {/* 모바일 카드 */}
                    <div className="md:hidden space-y-4">
                        {program.facilities.map((facility, index) => {
                            if (typeof facility === 'string') {
                                return (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Facility</h4>
                                        <p className="text-gray-700 text-sm">{facility}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {facility.campus || 'Facility'}
                                        </h4>
                                        <p className="text-gray-700 text-sm">
                                            {facility.description || facility.note || ''}
                                        </p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            )}

            {/* 졸업 후 진로 섹션 (HTML의 subject_txt - 졸업 후 진로) */}
            {program.employmentAreas && program.employmentAreas.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Building2 className="w-7 h-7 mr-3 text-emerald-600" />
                        Career Opportunities After Graduation
                    </h2>

                    {/* 전체 진로 설명 */}
                    <div className="mb-6 text-gray-700">
                        <p>Career opportunities in civil aviation, government agencies, foreign airlines, aircraft manufacturing, and ground services.</p>
                    </div>

                    {/* 진로 테이블 (HTML의 table_basic_slist 구조) */}
                    <div className="space-y-6">
                        {/* 데스크톱 테이블 */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                <tbody className="divide-y divide-gray-200">
                                {program.employmentAreas.map((area, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-900 w-48">
                                            {area.category}
                                        </th>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                {area.companies.map((company, companyIndex) => (
                                                    <span
                                                        key={companyIndex}
                                                        className="inline-block bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                                                    >
                                                            {company}
                                                        </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 모바일 카드 */}
                        <div className="md:hidden space-y-4">
                            {program.employmentAreas.map((area, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-emerald-700 mb-3">{area.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {area.companies.map((company, companyIndex) => (
                                            <span
                                                key={companyIndex}
                                                className="inline-block bg-emerald-50 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium"
                                            >
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 편입 가능 대학 정보 */}
                    {program.transferUniversities && program.transferUniversities.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Transfer Universities</h3>
                            <div className="flex flex-wrap gap-2">
                                {program.transferUniversities.map((university, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {university}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 군 진로 정보 */}
                    {program.militaryCareer && program.militaryCareer.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Military Career</h3>
                            <ul className="space-y-2">
                                {program.militaryCareer.map((career, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{career}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    // 기존 탭들 유지
    const renderCurriculumTab = () => {
        const curriculumData = program.curriculum || [];

        if (curriculumData.length === 0) {
            return (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                    <div className="text-center">
                        <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">Curriculum Information</h3>
                        <p className="text-gray-500 mb-6">
                            Detailed curriculum information will be available soon.
                        </p>
                    </div>
                </div>
            );
        }

        // 학기별 그룹화
        const semesterGroups = curriculumData.reduce((acc, course) => {
            if (!acc[course.semester]) {
                acc[course.semester] = [];
            }
            acc[course.semester].push(course);
            return acc;
        }, {} as Record<string, typeof curriculumData>);

        return (
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <GraduationCap className="w-8 h-8 mr-3" />
                    Curriculum Structure
                </h2>

                {Object.entries(semesterGroups).map(([semester, courses]) => (
                    <div key={semester} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-blue-900 text-white px-6 py-4">
                            <h3 className="text-xl font-bold">{semester}</h3>
                            <p className="text-blue-100 text-sm">{courses.length} courses</p>
                        </div>

                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Course Name</th>
                                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Category</th>
                                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Education Type</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {courses.map((course, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-gray-900 font-medium">{course.courseName}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                course.category === 'Major Required'
                                                    ? 'bg-red-100 text-red-800'
                                                    : course.category === 'Major Elective'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : course.category === 'Advanced Major'
                                                            ? 'bg-purple-100 text-purple-800'
                                                            : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {course.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                course.eduType === 'Credit-bearing Program'
                                                    ? 'bg-emerald-100 text-emerald-800'
                                                    : 'bg-orange-100 text-orange-800'
                                            }`}>
                                                {course.eduType === 'Credit-bearing Program' ? 'Credit' : 'Non-credit'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="md:hidden p-4 space-y-4">
                            {courses.map((course, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">{course.courseName}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            course.category === 'Major Required'
                                                ? 'bg-red-100 text-red-800'
                                                : course.category === 'Major Elective'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : course.category === 'Advanced Major'
                                                        ? 'bg-purple-100 text-purple-800'
                                                        : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {course.category}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            course.eduType === 'Credit-bearing Program'
                                                ? 'bg-emerald-100 text-emerald-800'
                                                : 'bg-orange-100 text-orange-800'
                                        }`}>
                                            {course.eduType === 'Credit-bearing Program' ? 'Credit' : 'Non-credit'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderFacultyTab = () => (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
            <div className="text-center">
                <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Faculty Information</h3>
                <p className="text-gray-500 mb-6">Faculty profiles will be available soon.</p>
            </div>
        </div>
    );

    const renderCertificatesTab = () => {
        const certificationData = program.detailedCertifications || [];

        if (certificationData.length === 0) {
            return (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                    <div className="text-center">
                        <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">Certification Information</h3>
                        <p className="text-gray-500 mb-6">Detailed certification information will be available soon.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <Award className="w-8 h-8 mr-3" />
                    Certifications & Licenses
                </h2>

                <div className="space-y-6">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4">
                                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                                <p className="text-blue-100 text-sm">{cert.authority}</p>
                            </div>

                            <div className="p-6">
                                <div className="grid md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Issuing Authority</h4>
                                        <p className="text-gray-900 font-medium">{cert.authority}</p>
                                    </div>
                                    {cert.website && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-600 mb-2">Official Website</h4>
                                            <a
                                                href={cert.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                                            >
                                                Visit Website
                                                <ExternalLink className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Description</h4>
                                    <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderFacilitiesTab = () => (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
            <div className="text-center">
                <Construction className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Facility Information</h3>
                <p className="text-gray-500 mb-6">Training facility information will be available soon.</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - HTML의 title 부분을 반영 */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <button
                        onClick={() => navigate(`/departments/${departmentId}`)}
                        className="flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to {department.name}
                    </button>

                    {/* HTML의 title 구조 반영 */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{program.name}</h1>
                            <p className="text-xl text-blue-100">{program.koreanName}</p>
                        </div>

                        {/* HTML의 주요 특장점 (btn 클래스 부분) */}
                        {program.highlights && program.highlights.length > 0 && (
                            <div className="bg-blue-800 rounded-xl p-6 space-y-4">
                                {program.highlights.map((highlight, index) => (
                                    <div key={index} className="text-blue-50">
                                        <p className="text-lg font-semibold">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* HTML의 text1 부분 (학위 정보) */}
                        <div className="bg-blue-800 rounded-lg p-4">
                            <p className="text-blue-100 text-lg">
                                <span className="text-blue-50 font-semibold">{program.duration}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs - HTML의 TabTabs 구조 반영 */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                                    activeTab === tab.id
                                        ? 'border-blue-900 text-blue-900 bg-blue-50'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.icon}
                                <span className="ml-2">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - 사이드바 제거, 전체 너비 사용 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default ProgramDetailPage;