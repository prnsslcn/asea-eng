import React from 'react';

const FreshmanScholarshipsPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Freshman Scholarships
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Financial support for your aviation education journey
                </p>
                <div className="mt-6 px-4">
                    <p className="text-sm text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-lg">
                        <span className="font-semibold">Important:</span> Documents must be submitted before the start of classes
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
                                {/* Commissioned Track */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Commissioned Track</td>
                                    <td className="px-4 py-3">High school commissioned program completers</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* SAT Scores */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-green-700 border-r" rowSpan={4}>SAT Scores</td>
                                    <td className="px-4 py-3">Grade 1 (Top 4%)</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 2 (Top 11%)</td>
                                    <td className="px-4 py-3 text-center font-semibold">2,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 3 (Top 23%)</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 4 (Top 40%)</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* GED Scores */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700 border-r" rowSpan={4}>GED Scores</td>
                                    <td className="px-4 py-3">Grade 1: 98+ points</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 2: 95-98 points</td>
                                    <td className="px-4 py-3 text-center font-semibold">2,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 3: 90-95 points</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 4: 84-90 points</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Degree Holder Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Degree Holder Scholarship</td>
                                    <td className="px-4 py-3">Credit and degree holders</td>
                                    <td className="px-4 py-3 text-center font-semibold">200,000 KRW</td>
                                </tr>

                                {/* Admission Office Recommendation */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Admission Office Recommendation</td>
                                    <td className="px-4 py-3">Recommended by admission office staff</td>
                                    <td className="px-4 py-3 text-center font-semibold">Partial Tuition</td>
                                </tr>

                                {/* Aviation Worker's Child */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Aviation Worker's Child</td>
                                    <td className="px-4 py-3">Children of airline and aviation industry workers</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Sports Special Track */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-orange-700">Sports Special Track</td>
                                    <td className="px-4 py-3">Sports special track document holders<br/>(High school athletes only)</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Sports Talent (Aviation Security) */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-orange-700">Sports Talent<br/>(Aviation Security)</td>
                                    <td className="px-4 py-3">National competition top 16+ or<br/>Regional competition 1st-3rd place</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition</td>
                                </tr>

                                {/* Military/Police Family */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-red-700">Military/Police Family<br/>(Defense & Police AI only)</td>
                                    <td className="px-4 py-3">Children of active or retired military/police personnel</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW</td>
                                </tr>

                                {/* Military Veteran */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-red-700">Military Veteran<br/>(Including NCO, Officers)</td>
                                    <td className="px-4 py-3">Korean military service completers</td>
                                    <td className="px-4 py-3 text-center font-semibold">300,000 KRW</td>
                                </tr>

                                {/* University Acceptance Certificate */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">University Acceptance<br/>(Including Vocational Schools)</td>
                                    <td className="px-4 py-3">Holders of university or vocational school acceptance letters</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Academic Performance (Korean, English, Math Average) */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-indigo-700 border-r" rowSpan={2}>Academic Performance<br/>(Korean, English, Math Average)</td>
                                    <td className="px-4 py-3">Grade 1-2</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Grade 3-4</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Early Tuition Payment */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-green-700 border-r" rowSpan={2}>Early Tuition Payment</td>
                                    <td className="px-4 py-3">Payment by end of March-August</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Payment by end of September-October</td>
                                    <td className="px-4 py-3 text-center font-semibold">300,000 KRW</td>
                                </tr>

                                {/* Career Experience Excellence */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Career Experience Excellence</td>
                                    <td className="px-4 py-3">Outstanding students selected from career experience participants</td>
                                    <td className="px-4 py-3 text-center font-semibold">200,000 KRW</td>
                                </tr>

                                {/* Language Excellence */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-cyan-700 border-r" rowSpan={6}>Language Excellence</td>
                                    <td className="px-4 py-3">TOEIC 750+ (TOEFL 85+/New TEPS 287+)</td>
                                    <td className="px-4 py-3 text-center font-semibold" rowSpan={3}>700,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Japanese JLPT N1+ (JPT 660+)</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Chinese New HSK Level 5+</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">TOEIC 600+ (TOEFL 69+/New TEPS 228+)</td>
                                    <td className="px-4 py-3 text-center font-semibold" rowSpan={3}>500,000 KRW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Japanese JLPT N2+ (JPT 525+)</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Chinese New HSK Level 3+</td>
                                </tr>

                                {/* Related Major Certification */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Related Major Certification</td>
                                    <td className="px-4 py-3">National technical/professional certification holders</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Related Major Admission */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Related Major Admission</td>
                                    <td className="px-4 py-3">Admission to related major from high school/university</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Related Major Experience */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Related Major Experience</td>
                                    <td className="px-4 py-3">Work experience in related field</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Competition Award */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Competition Award<br/>(Excluding Aviation Security)</td>
                                    <td className="px-4 py-3">Related competition winners</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Interview Excellence */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Interview Excellence</td>
                                    <td className="px-4 py-3">Outstanding interview performance students</td>
                                    <td className="px-4 py-3 text-center font-semibold">200,000 KRW</td>
                                </tr>

                                {/* Vocational College Re-enrollment */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-blue-700">Vocational College Re-enrollment</td>
                                    <td className="px-4 py-3">Vocational college graduates re-enrolling</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW</td>
                                </tr>

                                {/* Veterans Affairs */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-red-700">Veterans Affairs</td>
                                    <td className="px-4 py-3">Patriots and veterans (direct parents) under related laws</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">Full Tuition<br/>Exemption</td>
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
                                {/* Sibling Scholarship */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Sibling Scholarship</td>
                                    <td className="px-4 py-3">Freshmen with siblings enrolled or graduated from ASEA</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(Per semester)</td>
                                </tr>

                                {/* Multiple Children */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Multiple Children</td>
                                    <td className="px-4 py-3">Families with 3+ children (one child)</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW<br/>(First semester)</td>
                                </tr>

                                {/* Multicultural */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Multicultural</td>
                                    <td className="px-4 py-3">Children from multicultural families</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(First semester)</td>
                                </tr>

                                {/* North Korean Defector */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">North Korean Defector</td>
                                    <td className="px-4 py-3">North Korean defectors under related protection and settlement laws</td>
                                    <td className="px-4 py-3 text-center font-semibold text-green-600">50% Tuition<br/>Exemption</td>
                                </tr>

                                {/* Future Dream Scholarships */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-emerald-700 border-r" rowSpan={3}>Future Dream<br/>Scholarships</td>
                                    <td className="px-4 py-3">Type I - Basic livelihood recipients</td>
                                    <td className="px-4 py-3 text-center font-semibold">1,000,000 KRW<br/>(Per semester)</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Type II - Next income bracket</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(Per semester)</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3">Type III - Single-parent families</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(Per semester)</td>
                                </tr>

                                {/* Institutional Residents */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-purple-700">Institutional Residents</td>
                                    <td className="px-4 py-3">Students residing in care facilities (orphanages, etc.)</td>
                                    <td className="px-4 py-3 text-center font-semibold">500,000 KRW<br/>(Per semester)</td>
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

export default FreshmanScholarshipsPage;