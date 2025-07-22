import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Star, Award, Building2, CheckCircle, ArrowLeft,
    BookOpen, GraduationCap, UserCheck, Construction, ExternalLink
} from 'lucide-react';
import { getDepartmentById, getProgramById } from '../../../data/departments/ProgramData';
import { getDepartmentIdFromUrl } from '../../../router/routes';
import { getProfessorsByProgram } from '../../../data/professors/ProfessorData';
import { getFacilitiesByProgram, getFacilityImagePath, type FacilityImage } from '../../../data/facilities/FacilitiesData';

// 계열별 색상 테마 정의
const getDepartmentColorTheme = (departmentId: string) => {
    switch (departmentId) {
        case 'aviation-maintenance':
            return {
                primary: 'blue-900',
                secondary: 'blue-800',
                light: 'blue-50',
                text: 'blue-900',
                accent: 'blue-100',
                hover: 'blue-800'
            };
        case 'smart-safety':
            return {
                primary: 'emerald-700',
                secondary: 'emerald-600',
                light: 'emerald-50',
                text: 'emerald-700',
                accent: 'emerald-100',
                hover: 'emerald-600'
            };
        case 'aviation-tourism':
            return {
                primary: 'rose-700',
                secondary: 'rose-600',
                light: 'rose-50',
                text: 'rose-700',
                accent: 'rose-100',
                hover: 'rose-600'
            };
        case 'aviation-security':
            return {
                primary: 'slate-800',
                secondary: 'slate-700',
                light: 'slate-50',
                text: 'slate-800',
                accent: 'slate-100',
                hover: 'slate-700'
            };
        case 'defense-police-ai':
            return {
                primary: 'amber-700',
                secondary: 'amber-600',
                light: 'amber-50',
                text: 'amber-700',
                accent: 'amber-100',
                hover: 'amber-600'
            };
        default:
            return {
                primary: 'blue-900',
                secondary: 'blue-800',
                light: 'blue-50',
                text: 'blue-900',
                accent: 'blue-100',
                hover: 'blue-800'
            };
    }
};

const ProgramDetailPage: React.FC = () => {
    const { departmentId, programId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [currentPage, setCurrentPage] = useState(1);
    const [lightboxImage, setLightboxImage] = useState<FacilityImage | null>(null);

    // 색상 테마 가져오기
    const colorTheme = getDepartmentColorTheme(departmentId || '');

    // 다른 엔드포인트로 이동할 때 첫 번째 탭으로 초기화
    useEffect(() => {
        setActiveTab('overview');
        setCurrentPage(1);
    }, [departmentId, programId]);

    // 탭 변경 시 페이지네이션 초기화
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setCurrentPage(1); // 탭 변경 시 1페이지로 초기화
    };

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
                        className={`bg-${colorTheme.primary} hover:bg-${colorTheme.hover} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
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
                                <CheckCircle className={`w-5 h-5 text-${colorTheme.text} mt-1 mr-3 flex-shrink-0`} />
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
                                                        className={`inline-block bg-${colorTheme.light} text-${colorTheme.text} px-3 py-1 rounded-full text-sm font-medium`}
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
                                    <h4 className={`font-semibold text-${colorTheme.text} mb-3`}>{area.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {area.companies.map((company, companyIndex) => (
                                            <span
                                                key={companyIndex}
                                                className={`inline-block bg-${colorTheme.light} text-${colorTheme.text} px-2 py-1 rounded-full text-xs font-medium`}
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
                                        className={`inline-block bg-${colorTheme.accent} text-${colorTheme.text} px-3 py-1 rounded-full text-sm font-medium`}
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

    // 커리큘럼 탭
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
                <h2 className={`text-3xl font-bold text-${colorTheme.text} mb-8 flex items-center`}>
                    <GraduationCap className="w-8 h-8 mr-3" />
                    Curriculum Structure
                </h2>

                {Object.entries(semesterGroups).map(([semester, courses]) => (
                    <div key={semester} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className={`bg-${colorTheme.primary} text-white px-6 py-4`}>
                            <h3 className="text-xl font-bold">{semester}</h3>
                            <p className={`text-${colorTheme.light} text-sm`}>{courses.length} courses</p>
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
                                                        ? `bg-${colorTheme.accent} text-${colorTheme.text}`
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
                                                    ? `bg-${colorTheme.accent} text-${colorTheme.text}`
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

    // ✅ 교수진 탭 - 교수 소개 기능 구현
    const renderFacultyTab = () => {
        const professors = getProfessorsByProgram(programId || '');
        const professorsPerPage = 9; // 3열 그리드에 맞게 9개로 변경

        // 페이지네이션 계산
        const totalPages = Math.ceil(professors.length / professorsPerPage);
        const startIndex = (currentPage - 1) * professorsPerPage;
        const endIndex = startIndex + professorsPerPage;
        const currentProfessors = professors.slice(startIndex, endIndex);

        const handlePageChange = (page: number) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        if (professors.length === 0) {
            return (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                    <div className="text-center">
                        <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">Faculty Information</h3>
                        <p className="text-gray-500 mb-6">Faculty profiles will be available soon.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-8">
                {/* 헤더 */}
                <div className="mb-8">
                    <h2 className={`text-3xl font-bold text-${colorTheme.text} mb-2 flex items-center`}>
                        <UserCheck className="w-8 h-8 mr-3" />
                        Faculty Members
                    </h2>
                    <p className="text-gray-600">
                        Meet our experienced professors who will guide your aviation career
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <span>Total: {professors.length} professors</span>
                        {totalPages > 1 && (
                            <span className="ml-4">
                                Page {currentPage} of {totalPages}
                            </span>
                        )}
                    </div>
                </div>

                {/* 교수진 카드 그리드 - 3열 그리드로 수정 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentProfessors.map((professor) => (
                        <div key={professor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* 교수 사진 - 상단에 큰 이미지 */}
                            <div className="w-full bg-gray-100">
                                <img
                                    src={professor.photo}
                                    alt={professor.name}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/asea-eng/images/professors/default-professor.png';
                                    }}
                                />
                            </div>

                            {/* 교수 정보 - 하단에 텍스트 */}
                            <div className="p-4">
                                <div className="mb-3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {professor.name}
                                    </h3>
                                    <h3 className="text-sm text-gray-900 mb-2">
                                        {professor.title}
                                    </h3>
                                </div>

                                {/* 강의 과목 */}
                                <div>
                                    <h4 className="text-base font-semibold text-gray-700 mb-2">
                                        Teaching Subjects
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {professor.courses.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 py-8">
                        {/* 이전 페이지 버튼 */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Previous
                        </button>

                        {/* 페이지 번호 */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? `bg-${colorTheme.primary} text-white`
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* 다음 페이지 버튼 */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        );
    };

    // 자격증 탭
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
                <h2 className={`text-3xl font-bold text-${colorTheme.text} mb-8 flex items-center`}>
                    <Award className="w-8 h-8 mr-3" />
                    Certifications & Licenses
                </h2>

                <div className="space-y-6">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className={`bg-gradient-to-r from-${colorTheme.primary} to-${colorTheme.secondary} text-white px-6 py-4`}>
                                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                                <p className={`text-${colorTheme.light} text-sm`}>{cert.authority}</p>
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
                                                className={`text-${colorTheme.text} hover:text-${colorTheme.secondary} font-medium flex items-center`}
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

    // 시설 탭
    const renderFacilitiesTab = () => {
        const facilities = getFacilitiesByProgram(programId || '');
        const facilitiesPerPage = 12; // 4열 그리드에 맞게 12개로 설정

        // 페이지네이션 계산
        const totalPages = Math.ceil(facilities.length / facilitiesPerPage);
        const startIndex = (currentPage - 1) * facilitiesPerPage;
        const endIndex = startIndex + facilitiesPerPage;
        const currentFacilities = facilities.slice(startIndex, endIndex);

        const handlePageChange = (page: number) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const openLightbox = (facility: FacilityImage) => {
            setLightboxImage(facility);
        };

        const closeLightbox = () => {
            setLightboxImage(null);
        };

        if (facilities.length === 0) {
            return (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                    <div className="text-center">
                        <Construction className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">Facility Information</h3>
                        <p className="text-gray-500 mb-6">
                            Training facility information for this program will be available soon.
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-8">
                {/* 헤더 */}
                <div className="mb-8">
                    <h2 className={`text-3xl font-bold text-${colorTheme.text} mb-2 flex items-center`}>
                        <Construction className="w-8 h-8 mr-3" />
                        Training Facilities
                    </h2>
                    <p className="text-gray-600">
                        Explore our state-of-the-art facilities designed for {program.name}
                    </p>
                </div>

                {/* 시설 갤러리 그리드 - 4열 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {currentFacilities.map((facility) => (
                        <div
                            key={facility.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            onClick={() => openLightbox(facility)}
                        >
                            {/* 시설 이미지 */}
                            <div className="aspect-w-16 aspect-h-12 bg-gray-200 overflow-hidden">
                                <img
                                    src={getFacilityImagePath(facility.filename)}
                                    alt={facility.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/asea-eng/images/facilities/placeholder-facility.jpg';
                                    }}
                                />
                            </div>

                            {/* 시설 정보 */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {facility.title}
                                </h3>

                                {/* 계열 배지 */}
                                <div className="flex items-center">
                                <span className={`inline-block bg-${colorTheme.accent} text-${colorTheme.text} px-2 py-1 rounded-full text-xs font-medium`}>
                                    {facility.department}
                                </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 py-8">
                        {/* 이전 페이지 버튼 */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Previous
                        </button>

                        {/* 페이지 번호 */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? `bg-${colorTheme.primary} text-white`
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* 다음 페이지 버튼 */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* 라이트박스 모달 */}
                {lightboxImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={closeLightbox}
                    >
                        <div
                            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 닫기 버튼 */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* 이미지 */}
                            <div className="p-6">
                                <img
                                    src={getFacilityImagePath(lightboxImage.filename)}
                                    alt={lightboxImage.title}
                                    className="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-lg"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/asea-eng/images/facilities/placeholder-facility.jpg';
                                    }}
                                />
                            </div>

                            {/* 시설 상세 정보 */}
                            <div className="px-6 pb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {lightboxImage.title}
                                </h3>

                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Department</h4>
                                        <p className="text-gray-900">{lightboxImage.department}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Campus</h4>
                                        <p className="text-gray-900">
                                            {lightboxImage.campus === 'seoul' ? 'Seoul Campus' : 'Icheon Campus'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - HTML의 title 부분을 반영 */}
            <div className={`bg-${colorTheme.primary} text-white`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <button
                        onClick={() => navigate(`/departments/${departmentId}`)}
                        className={`flex items-center text-${colorTheme.light} hover:text-white mb-6 transition-colors`}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to {department.name}
                    </button>

                    {/* HTML의 title 구조 반영 */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{program.name}</h1>
                        </div>

                        {/* HTML의 주요 특장점 (btn 클래스 부분) */}
                        {program.highlights && program.highlights.length > 0 && (
                            <div className={`bg-${colorTheme.secondary} rounded-xl p-6 space-y-4`}>
                                {program.highlights.map((highlight, index) => (
                                    <div key={index} className={`text-${colorTheme.light}`}>
                                        <p className="text-lg font-semibold">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* HTML의 text1 부분 (학위 정보) */}
                        <div className={`bg-${colorTheme.secondary} rounded-lg p-4`}>
                            <p className={`text-${colorTheme.light} text-lg`}>
                                <span className={`text-${colorTheme.light} font-semibold`}>{program.duration}</span>
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
                                onClick={() => handleTabChange(tab.id)}
                                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                                    activeTab === tab.id
                                        ? `border-${colorTheme.primary} text-${colorTheme.text} bg-${colorTheme.light}`
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