import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Clock, Star, Award, Building2, Users, CheckCircle, ArrowLeft, MapPin,
    BookOpen, GraduationCap, UserCheck, Construction
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

    // 탭 메뉴 구성
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

    // 프로그램 개요 탭
    const renderOverviewTab = () => (
        <div className="space-y-12">
            {/* Highlights Section */}
            {program.highlights && program.highlights.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                        <Star className="w-8 h-8 mr-3 text-yellow-500" />
                        Program Highlights
                    </h2>
                    <div className="grid md:grid-cols-1 gap-6">
                        {program.highlights.map((highlight, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                                    <p className="text-gray-700 text-lg leading-relaxed">{highlight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Features Section */}
            {program.features && program.features.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                        <Users className="w-8 h-8 mr-3 text-blue-600" />
                        Program Features & Benefits
                    </h2>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            {program.features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Employment Areas Section */}
            {program.employmentAreas && program.employmentAreas.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                        <Building2 className="w-8 h-8 mr-3 text-emerald-600" />
                        Career Opportunities
                    </h2>
                    <div className="grid md:grid-cols-1 gap-6">
                        {program.employmentAreas.map((area, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-xl font-bold text-emerald-700 mb-4">
                                    {area.category}
                                </h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {area.companies.map((company, companyIndex) => (
                                        <div
                                            key={companyIndex}
                                            className="bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium"
                                        >
                                            {company}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    // 교육과정 탭
    const renderCurriculumTab = () => {
        // Sample curriculum data - will be replaced with actual data
        const curriculumData = [
            {
                semester: "1st Semester",
                courseName: "Introduction to Aviation",
                credits: 3,
                type: "Core",
                prerequisites: "None"
            },
            {
                semester: "1st Semester",
                courseName: "Basic Mathematics",
                credits: 3,
                type: "General",
                prerequisites: "None"
            },
            {
                semester: "2nd Semester",
                courseName: "Aircraft Systems",
                credits: 4,
                type: "Core",
                prerequisites: "Introduction to Aviation"
            },
            {
                semester: "2nd Semester",
                courseName: "Physics for Aviation",
                credits: 3,
                type: "General",
                prerequisites: "Basic Mathematics"
            }
        ];

        return (
            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <GraduationCap className="w-8 h-8 mr-3" />
                    Curriculum Structure
                </h2>

                {/* Desktop Table */}
                <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold">Semester</th>
                                <th className="px-4 py-3 text-left font-semibold">Course Name</th>
                                <th className="px-4 py-3 text-center font-semibold">Credits</th>
                                <th className="px-4 py-3 text-center font-semibold">Type</th>
                                <th className="px-4 py-3 text-left font-semibold">Prerequisites</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {curriculumData.map((course, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900">{course.semester}</td>
                                    <td className="px-4 py-3">{course.courseName}</td>
                                    <td className="px-4 py-3 text-center">{course.credits}</td>
                                    <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                course.type === 'Core'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-green-100 text-green-800'
                                            }`}>
                                                {course.type}
                                            </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600">{course.prerequisites}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {curriculumData.map((course, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-blue-900">{course.courseName}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    course.type === 'Core'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-green-100 text-green-800'
                                }`}>
                                    {course.type}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-600">Semester:</span>
                                    <p className="font-semibold text-gray-900">{course.semester}</p>
                                </div>
                                <div>
                                    <span className="text-gray-600">Credits:</span>
                                    <p className="font-semibold text-gray-900">{course.credits}</p>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-gray-600">Prerequisites:</span>
                                    <p className="font-semibold text-gray-900">{course.prerequisites}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> This is a sample curriculum structure. Actual curriculum data will be populated from ProgramData.ts
                    </p>
                </div>
            </div>
        );
    };

    // 교수진 탭
    const renderFacultyTab = () => (
        <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                <UserCheck className="w-8 h-8 mr-3" />
                Faculty Members
            </h2>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                <div className="text-center">
                    <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Faculty Information</h3>
                    <p className="text-gray-500 mb-6">
                        Faculty profiles and information will be available soon.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-700 text-sm">
                            We are currently preparing detailed faculty profiles including photos,
                            qualifications, and areas of expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    // 자격증 탭
    const renderCertificatesTab = () => {
        // Sample certification data - will be replaced with actual data
        const certificationData = [
            {
                name: "Aviation Maintenance License",
                authority: "Ministry of Land, Infrastructure and Transport",
                level: "Professional",
                validity: "Permanent",
                requirements: "Course completion + Exam"
            },
            {
                name: "Aircraft Mechanic Certificate",
                authority: "Korea Aviation Association",
                level: "Basic",
                validity: "3 years",
                requirements: "Training hours + Assessment"
            },
            {
                name: "Safety Management Certificate",
                authority: "Korea Occupational Safety and Health Agency",
                level: "Standard",
                validity: "2 years",
                requirements: "Course completion"
            }
        ];

        return (
            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <Award className="w-8 h-8 mr-3" />
                    Certifications & Licenses
                </h2>

                {/* Desktop Table */}
                <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold">Certification Name</th>
                                <th className="px-4 py-3 text-left font-semibold">Issuing Authority</th>
                                <th className="px-4 py-3 text-center font-semibold">Level</th>
                                <th className="px-4 py-3 text-center font-semibold">Validity</th>
                                <th className="px-4 py-3 text-left font-semibold">Requirements</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {certificationData.map((cert, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900">{cert.name}</td>
                                    <td className="px-4 py-3">{cert.authority}</td>
                                    <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                cert.level === 'Professional'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : cert.level === 'Basic'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-blue-100 text-blue-800'
                                            }`}>
                                                {cert.level}
                                            </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">{cert.validity}</td>
                                    <td className="px-4 py-3 text-sm text-gray-600">{cert.requirements}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-blue-900">{cert.name}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    cert.level === 'Professional'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : cert.level === 'Basic'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                }`}>
                                    {cert.level}
                                </span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-gray-600">Issuing Authority:</span>
                                    <p className="font-semibold text-gray-900">{cert.authority}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-gray-600">Validity:</span>
                                        <p className="font-semibold text-gray-900">{cert.validity}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Requirements:</span>
                                        <p className="font-semibold text-gray-900">{cert.requirements}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> This is a sample certification structure. Actual certification data will be populated from ProgramData.ts
                    </p>
                </div>
            </div>
        );
    };

    // 실습실 탭
    const renderFacilitiesTab = () => (
        <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                <Construction className="w-8 h-8 mr-3" />
                Training Facilities
            </h2>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12">
                <div className="text-center">
                    <Construction className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Facility Information</h3>
                    <p className="text-gray-500 mb-6">
                        Training facility information and images will be available soon.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-700 text-sm">
                            We are currently preparing detailed information about our state-of-the-art
                            training facilities including equipment specifications and layout.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <button
                        onClick={() => navigate(`/departments/${departmentId}`)}
                        className="flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to {department.name}
                    </button>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.name}</h1>
                    <p className="text-xl text-blue-100 mb-6">{program.koreanName}</p>
                    <p className="text-lg text-blue-50 mb-8 max-w-4xl leading-relaxed">
                        {program.description}
                    </p>

                    <div className="flex items-center">
                        <Clock className="w-6 h-6 mr-3 text-blue-200" />
                        <span className="bg-blue-800 px-6 py-2 rounded-full text-lg font-semibold">
                            {program.duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
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

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2">
                        {renderTabContent()}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            {/* Quick Info */}
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">Program Information</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Department:</span>
                                        <span className="font-medium text-gray-900">{department.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium text-gray-900">{program.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Type:</span>
                                        <span className="font-medium text-gray-900">Professional Training</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-blue-200">
                                    <button
                                        onClick={() => navigate('/admission')}
                                        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Certifications - Only show in sidebar if not on certificates tab */}
                            {activeTab !== 'certificates' && program.certifications && program.certifications.length > 0 && (
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <Award className="w-6 h-6 mr-3 text-rose-600" />
                                        Certifications
                                    </h3>
                                    <div className="space-y-3">
                                        {program.certifications.slice(0, 5).map((cert, index) => (
                                            <div key={index} className="flex items-start">
                                                <Award className="w-4 h-4 text-rose-600 mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Facilities - Only show in sidebar if not on facilities tab */}
                            {activeTab !== 'facilities' && program.facilities && program.facilities.length > 0 && (
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                                        Training Facilities
                                    </h3>
                                    <div className="space-y-3">
                                        {program.facilities.slice(0, 5).map((facility, index) => (
                                            <div key={index} className="flex items-start">
                                                <MapPin className="w-4 h-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailPage;