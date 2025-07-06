import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Star, Award, Building2, Users, CheckCircle, ArrowLeft, MapPin } from 'lucide-react';
import { getDepartmentById, getProgramById } from '../../../data/departments/ProgramData';
import { getDepartmentIdFromUrl } from '../../../router/routes';

const ProgramDetailPage: React.FC = () => {
    const { departmentId, programId } = useParams();
    const navigate = useNavigate();

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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <button
                            onClick={() => navigate('/departments')}
                            className="hover:text-blue-900 transition-colors"
                        >
                            Departments
                        </button>
                        <span>/</span>
                        <button
                            onClick={() => navigate(`/departments/${departmentId}`)}
                            className="hover:text-blue-900 transition-colors"
                        >
                            {department.name}
                        </button>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{program.name}</span>
                    </nav>
                </div>
            </div>

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

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-12">
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

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            {/* Certifications */}
                            {program.certifications && program.certifications.length > 0 && (
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <Award className="w-6 h-6 mr-3 text-rose-600" />
                                        Certifications & Degrees
                                    </h3>
                                    <div className="space-y-3">
                                        {program.certifications.map((cert, index) => (
                                            <div key={index} className="flex items-start">
                                                <Award className="w-4 h-4 text-rose-600 mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Facilities */}
                            {program.facilities && program.facilities.length > 0 && (
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                                        Training Facilities
                                    </h3>
                                    <div className="space-y-3">
                                        {program.facilities.map((facility, index) => (
                                            <div key={index} className="flex items-start">
                                                <MapPin className="w-4 h-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailPage;