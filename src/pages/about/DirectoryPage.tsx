import React from 'react';

// 연락처 데이터 타입
interface ContactInfo {
    department: string;
    phone: string;
}

// 연락처 데이터
const contactData: ContactInfo[] = [
    { department: "Admissions Office", phone: "+82-2-717-8811" },
    { department: "Administrative Affairs", phone: "+82-2-714-1261" },
    { department: "Planning Office", phone: "+82-2-714-9710" },
    { department: "Educational Support", phone: "+82-2-714-1259" },
    { department: "Aviation Maintenance", phone: "+82-2-714-9706 / +82-2-714-9705" },
    { department: "Smart Safety Diagnostics", phone: "+82-2-714-9703" },
    { department: "Aviation Tourism", phone: "+82-2-714-9709" },
    { department: "Aviation Security", phone: "+82-2-714-6705" },
    { department: "Defense & Police AI Convergence", phone: "+82-2-715-5397" },
    { department: "Lifelong Education Center", phone: "+82-2-714-9708" },
    { department: "Facility Management", phone: "+82-2-706-2495" },
    { department: "High School Partnership", phone: "+82-2-714-1022" },
    { department: "Aircraft Type Training Center", phone: "+82-2-2662-7370" },
    { department: "Flight Training Center", phone: "+82-2-715-5398" }
];

const DirectoryPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Campus Directory
                </h1>
                <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl mr-3">📞</span>
                    <p className="text-base sm:text-lg text-gray-600">
                        Contact information for all departments and services
                    </p>
                </div>
            </div>

            {/* Main Contact Info */}
            <div className="px-0 sm:px-8">
                <div className="bg-blue-900 text-white rounded-xl p-6 sm:p-8 text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Main Contact Number
                    </h2>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                        +82-2-717-8811
                    </div>
                    <p className="text-blue-100">
                        For general inquiries, admissions, and all information
                    </p>
                </div>
            </div>

            {/* Department Directory */}
            <div className="px-0 sm:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900">
                            Department Directory
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Direct contact numbers for each department
                        </p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                                    Department
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                                    Phone Number
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                                    Department
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                                    Phone Number
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {Array.from({ length: Math.ceil(contactData.length / 2) }, (_, index) => {
                                const leftItem = contactData[index * 2];
                                const rightItem = contactData[index * 2 + 1];

                                return (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {leftItem.department}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-blue-600 font-mono">
                                            <a href={`tel:${leftItem.phone.replace(/\s|\//g, '')}`} className="hover:text-blue-800 transition-colors">
                                                {leftItem.phone}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {rightItem?.department || ''}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-blue-600 font-mono">
                                            {rightItem && (
                                                <a href={`tel:${rightItem.phone.replace(/\s|\//g, '')}`} className="hover:text-blue-800 transition-colors">
                                                    {rightItem.phone}
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden">
                        <div className="divide-y divide-gray-200">
                            {contactData.map((contact, index) => (
                                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 mb-1">
                                                {contact.department}
                                            </h4>
                                            <a
                                                href={`tel:${contact.phone.replace(/\s|\//g, '')}`}
                                                className="text-blue-600 font-mono text-sm hover:text-blue-800 transition-colors"
                                            >
                                                {contact.phone}
                                            </a>
                                        </div>
                                        <div className="ml-4">
                                            <a
                                                href={`tel:${contact.phone.replace(/\s|\//g, '')}`}
                                                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectoryPage;