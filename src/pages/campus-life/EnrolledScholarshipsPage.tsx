import React from 'react';

const EnrolledScholarshipsPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Enrolled Student Scholarships
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Ongoing financial support throughout your academic journey
                </p>
                <div className="mt-6 px-4">
                    <p className="text-sm text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-lg">
                        <span className="font-semibold">Note:</span> Type I and Type II scholarships (max 2 total), Type III may be combined
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Type I Scholarships */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">Type I Scholarships</h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Scholarship Type</th>
                                    <th className="px-4 py-3 text-left font-semibold">Eligibility</th>
                                    <th className="px-4 py-3 text-center font-semibold">Benefit<br/>(Unit: 10,000 KRW)</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {/* Chairman's Special Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Chairman's Special Scholarship</td>
                                    <td className="px-4 py-3">Overall 1st place by grade level</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>

                                {/* President's Special Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">President's Special Scholarship</td>
                                    <td className="px-4 py-3">Overall 2nd-4th place by grade level</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">50% Tuition</td>
                                </tr>

                                {/* Special Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Special Scholarship</td>
                                    <td className="px-4 py-3">Students who enhanced school's honor and reputation</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Academic Excellence Scholarships */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-emerald-700 border-r" rowSpan={3}>Academic Excellence<br/>Scholarships</td>
                                    <td className="px-4 py-3">ASEA Level - Top academic performers<br/>(By department and program ranking)</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,500,000 - 1,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Changgong Level - High academic performers<br/>(By department and program ranking)</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 - 500,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Narae Level - Good academic performers<br/>(By department and program ranking)</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 - 300,000 KRW</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Type II Scholarships */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">Type II Scholarships</h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Scholarship Type</th>
                                    <th className="px-4 py-3 text-left font-semibold">Eligibility</th>
                                    <th className="px-4 py-3 text-center font-semibold">Benefit<br/>(Unit: 10,000 KRW)</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {/* Faculty/Staff Children */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Faculty/Staff Children Scholarship</td>
                                    <td className="px-4 py-3">Children of faculty and staff members</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>

                                {/* Future Dream Scholarships */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-emerald-700 border-r" rowSpan={2}>Future Dream<br/>Scholarships</td>
                                    <td className="px-4 py-3">Type I - Previous semester GPA 3.0 or higher</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Type II - Previous semester GPA 3.0 or higher</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Bachelor's Degree Acquisition */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Bachelor's Degree Acquisition Scholarship</td>
                                    <td className="px-4 py-3">Students who completed 3 semesters, obtained bachelor's degree, and enrolling in 4th semester</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">50% Tuition</td>
                                </tr>

                                {/* Sibling Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Sibling Scholarship</td>
                                    <td className="px-4 py-3">New students with direct siblings enrolled or graduated from ASEA</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(Per semester)</td>
                                </tr>

                                {/* Industry-Academic Model */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Industry-Academic Model Scholarship</td>
                                    <td className="px-4 py-3">Children of industry-academic agreement institutions or graduates from agreement high schools with GPA 3.0+</td>
                                    <td className="px-4 py-3 text-center font-semibold">Per MOU Agreement</td>
                                </tr>

                                {/* Model Student Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Model Student Scholarship</td>
                                    <td className="px-4 py-3">Students recommended by supervising professors for exemplary school life</td>
                                    <td className="px-4 py-3 text-center font-semibold">300,000 KRW</td>
                                </tr>

                                {/* Military Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-red-700">Military Scholarship</td>
                                    <td className="px-4 py-3">Recipients of military additional service support funds</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>

                                {/* Veterans Affairs */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-red-700">Veterans Affairs Scholarship</td>
                                    <td className="px-4 py-3">Patriots and veterans (direct parents) under related laws</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>

                                {/* North Korean Defector */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">North Korean Defector Scholarship</td>
                                    <td className="px-4 py-3">North Korean defectors under protection and settlement support laws</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">50% Tuition Exemption</td>
                                </tr>

                                {/* Industry-Academic Cooperation */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Industry-Academic Cooperation Scholarship</td>
                                    <td className="px-4 py-3">Scholarships supported by industry-academic cooperation institutions</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 - 300,000 KRW</td>
                                </tr>

                                {/* Bank Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Bank Scholarship</td>
                                    <td className="px-4 py-3">Students recommended by Industry-Academic Cooperation Department</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 - 300,000 KRW</td>
                                </tr>

                                {/* Graduation Ceremony Awards */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-amber-700 border-r" rowSpan={6}>Graduation Ceremony<br/>Award Scholarships</td>
                                    <td className="px-4 py-3">Chairman's Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">300,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">President's Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">200,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">ASEA Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">100,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Alumni Association Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">200,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Certification Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">100,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Graduation Certificate Award - Per regulations</td>
                                    <td className="px-4 py-3 text-center font-semibold">50,000 KRW</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Type III Scholarships */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">Type III Scholarships</h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Scholarship Type</th>
                                    <th className="px-4 py-3 text-left font-semibold">Eligibility</th>
                                    <th className="px-4 py-3 text-center font-semibold">Benefit<br/>(Unit: 10,000 KRW)</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {/* Work-Study Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-green-700">Work-Study Scholarship</td>
                                    <td className="px-4 py-3">Students who provided school-related work services</td>
                                    <td className="px-4 py-3 text-center font-semibold">Separately Determined</td>
                                </tr>

                                {/* Student Council Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-green-700">Student Council Scholarship</td>
                                    <td className="px-4 py-3">Student council activities (president and officers)</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 - 300,000 KRW</td>
                                </tr>

                                {/* Journalist Team Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-green-700">Journalist Team Scholarship</td>
                                    <td className="px-4 py-3">ASEA Journalist Team members</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">30% Tuition</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Important Notice */}
                    <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                        <div className="flex">
                            <div className="ml-3">
                                <p className="text-sm text-blue-700">
                                    <span className="font-semibold">Scholarship Combination Rules:</span><br/>
                                    • Select maximum 1 from Type I and 1 from Type II (maximum 2 total)<br/>
                                    • Type III scholarships are work-based compensation and may be combined with others
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EnrolledScholarshipsPage;