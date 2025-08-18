import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* School Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/asea-em-1.png"
                                alt="ASEA Aviation College Logo"
                                className="w-12 h-12 mr-3 object-contain"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">ASEA Aviation College</h3>
                                <p className="text-sm text-gray-300">Since 1993</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            "Your First Step to the Sky, Turn Your Aviation Dreams into Reality!"
                        </p>

                        {/* Certifications */}
                        <div className="mb-4 p-3 bg-gray-800 rounded-lg border-l-4 border-blue-500">
                            <h4 className="text-sm font-semibold text-blue-400 mb-2">Official Designations</h4>
                            <ul className="text-xs text-gray-300 space-y-1">
                                <li>• B737/C172 Aircraft Type Training Institution</li>
                                <li>• Drone (Ultra-light Unmanned Aircraft) Training Institution</li>
                                <li>• Aviation Maintenance Technician Training Institution</li>
                            </ul>
                        </div>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-start">
                                <span className="font-medium mr-2">Seoul Campus:</span>
                                <span>16, Dangsan-ro 32-gil, Yeongdeungpo-gu, Seoul 07257, Korea</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium mr-2">Phone:</span>
                                <span>+82-2-717-8811 (Admissions)</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium mr-2">Main:</span>
                                <span>+82-2-714-9707</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => navigate('/about/asea')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    About ASEA
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/about/goals')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    Educational Goals
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/departments')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    Departments
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/campus-life/facilities')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    Facilities
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/employment-status')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    Employment Status
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/about/location')}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    Location
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
                        <div className="space-y-4">
                            {/* Social Media Links */}
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/asea_aviation/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                                    aria-label="Follow us on Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/aseacollege"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                    aria-label="Follow us on Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/@ASEAAVIATION1993"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                                    aria-label="Subscribe to our YouTube channel"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-400">
                                Copyright © 2025 ASEA Aviation College. All Rights Reserved.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Certification Badges - Placeholder for brand images */}
                            <div className="text-xs text-gray-500">
                                Leading aviation education institution designated by the Ministry of Land, Infrastructure and Transport.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;