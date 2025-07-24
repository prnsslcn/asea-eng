import React from 'react';

const AdmissionGuidePage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Admission Guide
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Your pathway to aviation excellence starts here
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Admission Information & Capacity */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">Admission Information & Capacity</h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Department</th>
                                    <th className="px-4 py-3 text-left font-semibold">Program</th>
                                    <th className="px-4 py-3 text-center font-semibold">Capacity</th>
                                    <th className="px-4 py-3 text-center font-semibold">Gender</th>
                                    <th className="px-4 py-3 text-center font-semibold">Medical Exam</th>
                                    <th className="px-4 py-3 text-left font-semibold">Medical Requirements</th>
                                    <th className="px-4 py-3 text-left font-semibold">Degree/Certification</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {/* Aviation Maintenance Department */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900 border-r" rowSpan={5}>Aviation<br/>Maintenance</td>
                                    <td className="px-4 py-3">Aircraft Maintenance Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">420</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={5}>No color blindness<br/>No physical disqualifications</td>
                                    <td className="px-4 py-3 text-sm">Aviation Maintenance Associate Degree<br/>Aviation Mechanic License</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Aviation Mechanical Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">100</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={2}>Aviation Maintenance Associate Degree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Aviation NCO Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">100</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Drone Operation & Maintenance</td>
                                    <td className="px-4 py-3 text-center font-semibold">40</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm">Aviation Maintenance Associate Degree<br/>Drone Pilot License</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Aviation Maintenance Engineering [3-Year]</td>
                                    <td className="px-4 py-3 text-center font-semibold">60</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm">Aviation Maintenance Bachelor's Degree<br/>Aviation Mechanic License</td>
                                </tr>

                                {/* Smart Safety Diagnostics Department */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900 border-r" rowSpan={3}>Smart Safety<br/>Diagnostics</td>
                                    <td className="px-4 py-3">Ultrasonic Diagnostics Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">100</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={3}>No color blindness<br/>No physical disqualifications</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={2}>NDT Associate Degree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Aviation NDT Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">100</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Metallurgical Engineering [3-Year]</td>
                                    <td className="px-4 py-3 text-center font-semibold">40</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm">Metallurgical Engineering Degree</td>
                                </tr>

                                {/* Aviation Tourism Department */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900 border-r" rowSpan={3}>Aviation<br/>Tourism</td>
                                    <td className="px-4 py-3">Flight Attendant Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">60</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={3}>Uncorrected vision 0.2+<br/>Corrected vision 1.0+<br/>No color blindness<br/>No physical disqualifications</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={3}>Tourism Management Associate Degree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Hotel Tourism Specialist Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">30</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">F&B Specialist Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">30</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>

                                {/* Aviation Security Department */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900 border-r" rowSpan={5}>Aviation<br/>Security</td>
                                    <td className="px-4 py-3">Airport Security Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">80</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={5}>No color blindness<br/>No physical disqualifications</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={5}>Security Management Associate Degree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">VIP Security Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">40</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">PMC Security Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">20</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Acting Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">20</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Sports Rehabilitation Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">40</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>

                                {/* Defense & Police AI Department */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-900 border-r" rowSpan={4}>Defense &<br/>Police AI</td>
                                    <td className="px-4 py-3">Military Officer Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">40</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={3}>Height: M 159-196cm, F 152-184cm<br/>Corrected vision: 0.7+<br/>Physical grade: 3+ (No tattoos)</td>
                                    <td className="px-4 py-3 text-sm" rowSpan={4}>Choose from: Aviation Maintenance,<br/>NDT, Police Administration<br/>Associate Degree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Military NCO Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">20</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Defense AI Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">20</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Police Officer Course</td>
                                    <td className="px-4 py-3 text-center font-semibold">20</td>
                                    <td className="px-4 py-3 text-center">M/F</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-sm">No physical disqualifications</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Eligibility Requirements */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Eligibility Requirements</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                High school graduates and expected graduates (SAT/GPA scores not required)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Equivalent education level holders as per Higher Education Act (GED passers, etc.)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Students accepted to other universities (multiple applications allowed)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Foreign high school graduates (minimum 12 years of education)
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Application Process */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Application Process</h2>
                        <div className="space-y-6">
                            {/* Application Submission */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Submission</h3>
                                <p className="text-gray-700">Official website (www.asea.or.kr) / In-person application</p>
                            </div>

                            {/* Interview & Aptitude Test */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview & Aptitude Test</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2">General Track</h4>
                                        <p className="text-sm text-blue-700">Interview (50%) + Aptitude (30%) + Medical Exam (20%)</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-900 mb-2">Special Track</h4>
                                        <p className="text-sm text-green-700">Interview (50%) + Aptitude (30%) + Medical Exam (20%) + Special bonus points</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-900 mb-2">Commissioned Track</h4>
                                        <p className="text-sm text-purple-700">Interview (50%) + Aptitude (30%) + Medical Exam (20%)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Results & Payment */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Results & Payment</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Results Announcement</h4>
                                        <p className="text-sm text-gray-700">Individual notification (SMS) and website inquiry after interview</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Tuition Payment</h4>
                                        <p className="text-sm text-gray-700">Bank transfer, online banking, or direct payment at campus</p>
                                        <p className="text-sm text-blue-600 mt-1">Contact: +82-2-717-8811</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Special Track Requirements */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Special Track Requirements</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualifying Criteria</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Recommendation from high school homeroom or guidance teacher</li>
                                    <li>• Perfect attendance for 1+ years in high school</li>
                                    <li>• 50+ hours of certified volunteer service</li>
                                    <li>• Student council or club activities during high school</li>
                                    <li>• Awards for exemplary behavior, filial piety, good deeds, service, etc.</li>
                                    <li>• Competition winners</li>
                                    <li>• ASEA faculty recommendation</li>
                                    <li>• Foreign language high school graduates</li>
                                    <li>• 1+ years abroad experience</li>
                                    <li>• Relevant certification holders / 6+ months work experience</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commissioned Track</h3>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-sm text-blue-700">
                                        Current commissioned students from ASEA or other institutions
                                    </p>
                                    <p className="text-sm text-blue-900 font-semibold mt-2">
                                        Special scholarship benefits available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* International Students */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">International Students & Exchange Students</h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Required Documents</th>
                                    <th className="px-4 py-3 text-center font-semibold">High School Graduate</th>
                                    <th className="px-4 py-3 text-center font-semibold">University Graduate</th>
                                    <th className="px-4 py-3 text-center font-semibold">University Student/Dropout</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Entry/Exit records / Alien registration card</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">High school graduation certificate</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Elementary, middle, high school transcripts</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">University graduation certificate & transcript</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">University enrollment/withdrawal certificate & transcript</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">High school accreditation or Apostille certificate</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">University accreditation or Apostille certificate</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Korean translation & notarization (if in foreign language)</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                    <td className="px-4 py-3 text-center">✓</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdmissionGuidePage;