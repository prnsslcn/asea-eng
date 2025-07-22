import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';
import { getFacilitiesByDepartment, getFacilityImagePath } from '../../data/facilities/FacilitiesData';
import { employmentData, getEmployeePhoto, getCompanyLogo } from '../../data/employment/EmploymentData';

const SmartSafetyPage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('smart-safety');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('smart-safety', programId));
    };

    // 스마트안전진단계열 시설 데이터 가져오기
    const facilities = getFacilitiesByDepartment('Smart Safety Diagnostics');

    // 스마트안전진단계열 취업자 데이터 가져오기
    const employmentDepartment = employmentData.departments.find(dept => dept.departmentId === '02');
    const employees = employmentDepartment ? employmentDepartment.employees.slice(0, 12) : []; // 12명만 표시

    const employmentAreas = [
        {
            category: "Public Enterprises",
            companies: "Korea Electrical Safety Corporation, Korea Gas Corporation, Korea Electric Power Corporation, Korea Customs Service, Korea Western Power, Korea Southern Power and many more"
        },
        {
            category: "Heavy Industry & Shipbuilding",
            companies: "POSCO, Hyundai Heavy Industries, Samsung Heavy Industries, ISU Chemical, Hanwha Defense and many more"
        },
        {
            category: "Aviation Sector",
            companies: "Korean Air, Asiana Airlines, Jeju Air, Korea Aerospace Industries, Hanwha Aerospace and many more"
        },
        {
            category: "NDT Specialized Field",
            companies: "Korea Industrial Inspection, Korea Inspection Technology, Seoul Inspection, Orbitec, iTech Technology, Airtech and many more"
        },
        {
            category: "Railway Sector",
            companies: "Korea Railroad Corporation, Incheon Transit Corporation, Busan Transportation Corporation, Daegu Transportation Corporation, Airport Railroad and many more"
        },
        {
            category: "Transfer & Graduate School",
            companies: "Korea Aerospace University, Korea University, Seoul National University of Science and Technology, Hanyang University and many more"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Education Means Employment!<br />
                            End Your Job Worries with Our<br />
                            'Pre-Graduation Employment Guarantee System'!
                        </h1>
                        <div className="space-y-4 mb-8">
                            <p className="text-lg md:text-xl">
                                <span className="font-bold text-yellow-300">100% Employment Success Rate</span> for campus recruiting participants
                            </p>
                            <p className="text-lg md:text-xl">
                                <span className="font-bold text-yellow-300">KEPCO KPS</span> - Highest number of successful candidates nationwide in NDT field
                            </p>
                            <p className="text-lg md:text-xl">
                                Training <span className="font-bold text-yellow-300">top safety diagnosis experts</span> in aviation, railway, construction, shipbuilding sectors
                            </p>
                            <p className="text-lg md:text-xl">
                                <span className="font-bold text-yellow-300">International employment opportunities</span> with Canada NDT industrial training
                            </p>
                        </div>

                        {/* Key Statistics */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-xl font-bold text-yellow-300">100% Success</div>
                                    <div className="text-sm">Campus Recruiting Participants</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-xl font-bold text-yellow-300">KEPCO KPS</div>
                                    <div className="text-sm">NDT Field National Leader</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-xl font-bold text-yellow-300">Safety Expert</div>
                                    <div className="text-sm">Aviation, Railway, Construction</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-xl font-bold text-yellow-300">Global Career</div>
                                    <div className="text-sm">Canada NDT Training</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Safety Diagnostics Programs</h2>
                        <p className="text-lg text-gray-600">Detailed Program Information</p>
                    </div>

                    {/* 깔끔하고 우아한 프로그램 카드 */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                            {department.programs.map((program, index) => (
                                <button
                                    key={program.id}
                                    onClick={() => handleProgramClick(program.id)}
                                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-8 text-center group border border-gray-100 w-72 h-64"
                                >
                                    <div className="relative flex flex-col items-center justify-center h-full">
                                        {/* 게이지 효과가 있는 번호 원 */}
                                        <div className="relative mb-6">
                                            {/* 게이지 원 (호버 시 애니메이션) */}
                                            <svg className="absolute inset-0 w-24 h-24 -rotate-90 transform -translate-x-2 -translate-y-2" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="45"
                                                    fill="none"
                                                    stroke="#e5e7eb"
                                                    strokeWidth="2"
                                                />
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="45"
                                                    fill="none"
                                                    stroke="#059669"
                                                    strokeWidth="3"
                                                    strokeDasharray="283"
                                                    strokeDashoffset="283"
                                                    className="group-hover:stroke-dashoffset-0 transition-all duration-700 ease-out"
                                                />
                                            </svg>

                                            {/* 번호 원 */}
                                            <div className="bg-gray-50 text-emerald-700 rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-200 relative z-10">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* 프로그램 이름 */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors duration-200 leading-tight px-2">
                                            {program.name}
                                        </h3>

                                        {/* 우아한 화살표 */}
                                        <div className="flex items-center space-x-1 text-gray-400 group-hover:text-emerald-600 transition-colors duration-200">
                                            <div className="w-4 h-px bg-current"></div>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <div className="w-4 h-px bg-current"></div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mt-16">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">Department Introduction Video</h3>
                            </div>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.youtube.com/embed/uKi95U62xKY?rel=0&vq=hd720&showinfo=0"
                                    className="w-full h-96"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Goals */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Goals</h2>
                        <p className="text-lg text-gray-600 mb-2">Training smart non-destructive testing technicians as industrial safety experts</p>
                        <p className="text-gray-500">Associate Degree Program OR Bachelor's Degree Program (Optional Course)</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 1st Year */}
                        <div className="bg-emerald-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-emerald-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">1st</span>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-700">First Year</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. Basic Major Foundation</h4>
                                    <p className="text-gray-600 mb-4">Acquiring comprehensive knowledge of NDT principles and metal materials</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Introduction to Non-Destructive Testing</li>
                                        <li>• Metal Materials Science</li>
                                        <li>• Penetrant Testing Practicum</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. Specialized Introduction Course</h4>
                                    <p className="text-gray-600 mb-4">In-depth learning of various NDT methods applicable to industrial sites</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Ultrasonic Testing</li>
                                        <li>• Magnetic Particle Testing Practicum</li>
                                        <li>• Welding Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Year */}
                        <div className="bg-blue-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">2nd</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900">Second Year</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. Advanced Major Course</h4>
                                    <p className="text-gray-600 mb-4">Intensive learning of specialized NDT practical education tailored to corporate demands</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Ultrasonic Testing Practicum</li>
                                        <li>• Radiographic Testing Practicum</li>
                                        <li>• Visual Testing</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. Practical Skills Enhancement</h4>
                                    <p className="text-gray-600 mb-4">Training next-generation core NDT technicians through advanced technology education including phased array ultrasonic</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Eddy Current Testing</li>
                                        <li>• Leak Testing</li>
                                        <li>• Destructive & Non-Destructive Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Employment Areas */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities After Graduation</h2>
                        <p className="text-lg text-gray-600">Career paths after graduation</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-emerald-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-emerald-700 w-1/4">
                                        Career Field
                                    </th>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-emerald-700">
                                        Companies & Organizations
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {employmentAreas.map((area, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                                            {area.category}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {area.companies}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Training Facilities Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Facilities</h2>
                            <p className="text-lg text-gray-600">Laboratory Introduction</p>
                        </div>
                        <button
                            onClick={() => navigate('/campus-life/facilities')}
                            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
                        >
                            <span>View All Facilities</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* 좌우 스크롤 Facilities */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-4">
                            <div className="flex space-x-6" style={{ width: 'max-content' }}>
                                {facilities.map((facility, index) => (
                                    <div key={index} className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                            <img
                                                src={getFacilityImagePath(facility.filename)}
                                                alt={facility.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = `
                                                            <div class="text-center">
                                                                <svg class="w-16 h-16 text-emerald-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 10h10M7 13h10M7 16h10" />
                                                                </svg>
                                                                <p class="text-emerald-600 font-medium">Training Facility</p>
                                                            </div>
                                                        `;
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900">
                                                {facility.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-2">
                                                {facility.department}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 스크롤 힌트 */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-l-lg p-2 shadow-md">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Employment Status Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Employment Status</h2>
                            <p className="text-lg text-gray-600">Recent employment achievements from Smart Safety Diagnostics Department</p>
                        </div>
                        <button
                            onClick={() => navigate('/employment-status')}
                            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
                        >
                            <span>View All Employment Status</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* 좌우 스크롤 Employment Cards */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-4">
                            <div className="flex space-x-4" style={{ width: 'max-content' }}>
                                {employees.map((employee) => (
                                    <div key={employee.id} className="flex-none w-48 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        {/* 취업자 사진 */}
                                        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                                            <img
                                                src={getEmployeePhoto(employee.photo)}
                                                alt={employee.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = `
                                                            <div class="text-center">
                                                                <svg class="w-12 h-12 text-emerald-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                <p class="text-xs text-emerald-600 font-medium">Graduate Photo</p>
                                                            </div>
                                                        `;
                                                    }
                                                }}
                                            />
                                        </div>

                                        {/* 취업자 정보 */}
                                        <div className="p-4">
                                            {/* 회사 로고 */}
                                            <div className="flex justify-center mb-3 h-6">
                                                <img
                                                    src={getCompanyLogo(employee.companyLogo)}
                                                    alt="Company Logo"
                                                    className="h-6 object-contain"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                            </div>

                                            {/* 이름 */}
                                            <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                                                {employee.name}
                                            </h3>

                                            {/* 직책 */}
                                            <p className="text-xs text-gray-600 text-center">
                                                {employee.position}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 스크롤 힌트 */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-l-lg p-2 shadow-md">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartSafetyPage;