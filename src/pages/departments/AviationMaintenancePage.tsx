import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentById } from '../../data/departments/ProgramData';
import { ROUTES } from '../../router/routes';
import { getFacilitiesByDepartment, getFacilityImagePath } from '../../data/facilities/FacilitiesData';
import { employmentData, getEmployeePhoto, getCompanyLogo } from '../../data/employment/EmploymentData';

const AviationMaintenancePage: React.FC = () => {
    const navigate = useNavigate();
    const department = getDepartmentById('aviation-maintenance');

    if (!department) {
        return <div>Department not found</div>;
    }

    const handleProgramClick = (programId: string) => {
        navigate(ROUTES.DEPARTMENTS.PROGRAM('aviation-maintenance', programId));
    };

    // 항공정비계열 시설 데이터 가져오기
    const facilities = getFacilitiesByDepartment('Aviation Maintenance');

    // 항공정비계열 취업자 데이터 가져오기
    const employmentDepartment = employmentData.departments.find(dept => dept.departmentId === '01');
    const employees = employmentDepartment ? employmentDepartment.employees.slice(0, 12) : []; // 12명만 표시

    const employmentAreas = [
        {
            category: "Airlines",
            companies: "Korean Air, Asiana Airlines, Jin Air, T'way Air, Jeju Air and many more"
        },
        {
            category: "Government Agencies",
            companies: "Korea Forest Service Aviation Division, Korea Coast Guard, Korea National Police and many more"
        },
        {
            category: "MRO & Aircraft Manufacturing",
            companies: "HIZEAERO, Hanwha Aerospace, KAI, Korea Aircraft Service, Sharp Technics Korea and many more"
        },
        {
            category: "Helicopter Operations",
            companies: "Hongik Aviation, HELI, UI Helicopter, AERO PEACE, RHF and many more"
        },
        {
            category: "Military NCO",
            companies: "Republic of Korea Air Force, Navy, Army, Marine Corps and many more"
        },
        {
            category: "Others",
            companies: "Air Busan, Air Seoul, CATHAY PACIFIC, SHARP, FLY GANGWON and many more"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Designated by Ministry of Land,<br />
                            Infrastructure and Transport!
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
                            Aviation Maintenance Training Institution
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-lg md:text-xl">
                                <span className="font-bold text-yellow-300">Korea's First and Only!</span> - Simultaneous authorization in 3 aviation training sectors (B737NG/C172/B737NG Instructor Course)
                            </p>
                            <p className="text-lg md:text-xl">
                                Operating dedicated aviation maintenance training facilities with <span className="font-bold text-yellow-300">Korea's largest scale</span> practical training equipment
                            </p>
                            <p className="text-lg md:text-xl">
                                Specialized training institution for <span className="font-bold text-yellow-300">Military Aviation NCO advancement</span> and <span className="font-bold text-yellow-300">Drone specialist</span> training
                            </p>
                        </div>

                        {/* Key Statistics */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">Korea's Largest</div>
                                    <div className="text-sm">420 Students Capacity</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">3 Aircraft Types</div>
                                    <div className="text-sm">Simultaneous Training System</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-2xl font-bold">MOLIT Designated</div>
                                    <div className="text-sm">Aviation Maintenance Training</div>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Aviation Maintenance Programs</h2>
                        <p className="text-lg text-gray-600">Detailed Program Information</p>
                    </div>

                    {/* 깔끔하고 우아한 프로그램 카드 */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
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
                                                    stroke="#3b82f6"
                                                    strokeWidth="3"
                                                    strokeDasharray="283"
                                                    strokeDashoffset="283"
                                                    className="group-hover:stroke-dashoffset-0 transition-all duration-700 ease-out"
                                                />
                                            </svg>

                                            {/* 번호 원 */}
                                            <div className="bg-gray-50 text-blue-900 rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200 relative z-10">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* 프로그램 이름 */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-900 transition-colors duration-200 leading-tight px-2">
                                            {program.name}
                                        </h3>

                                        {/* 우아한 화살표 */}
                                        <div className="flex items-center space-x-1 text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
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
                                    src="https://www.youtube.com/embed/vmi7OI8crHw?rel=0&vq=hd720&showinfo=0"
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
                        <p className="text-lg text-gray-600 mb-2">Training aviation maintenance engineers to lead the aviation maintenance field</p>
                        <p className="text-gray-500">Associate Degree Program OR Bachelor's Degree Program (Optional Course)</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 1st Year */}
                        <div className="bg-blue-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">1st</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900">First Year</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. Basic Major Foundation</h4>
                                    <p className="text-gray-600 mb-4">Acquiring fundamental knowledge in aircraft engines, airframe, general maintenance, electronics, etc.</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Understanding personal aptitudes and interests</li>
                                        <li>• Career counseling</li>
                                        <li>• Career consulting</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. Specialized Introduction Course</h4>
                                    <p className="text-gray-600 mb-4">Intensive education for aviation certification preparation</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Career goal setting</li>
                                        <li>• Major knowledge acquisition</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Year */}
                        <div className="bg-emerald-50 rounded-lg p-8">
                            <div className="text-center mb-6">
                                <div className="bg-emerald-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold">2nd</span>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-700">Second Year</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">1. Advanced Major Course</h4>
                                    <p className="text-gray-600 mb-4">Learning aircraft advanced material maintenance and inspection</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Special lectures for certification acquisition</li>
                                        <li>• Foreign language competency enhancement</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">2. Practical Skills Enhancement</h4>
                                    <p className="text-gray-600 mb-4">Training skilled technicians through A320MTD, B737FTD, A320FTD education</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• Employment competency enhancement program</li>
                                        <li>• Field observation and practical training</li>
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
                                <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-blue-900 w-1/4">
                                        Career Field
                                    </th>
                                    <th className="px-6 py-4 text-left text-lg font-bold text-blue-900">
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
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
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
                                                                <svg class="w-16 h-16 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 10h10M7 13h10M7 16h10" />
                                                                </svg>
                                                                <p class="text-blue-600 font-medium">Training Facility</p>
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
                            <p className="text-lg text-gray-600">Recent employment achievements from Aviation Maintenance Department</p>
                        </div>
                        <button
                            onClick={() => navigate('/employment-status')}
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
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
                                                                <svg class="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                <p class="text-xs text-blue-600 font-medium">Graduate Photo</p>
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

            {/* Call to Action */}
            <div className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Aviation Career?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join ASEA Aviation College and turn your aviation dreams into reality!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/admission')}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={() => navigate('/about/asea')}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
                        >
                            Learn More About ASEA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AviationMaintenancePage;