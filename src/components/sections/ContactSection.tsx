import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="section bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">Contact Us</h2>
                    <p className="body-large text-gray-600 max-w-2xl mx-auto">
                        Ready to start your aviation career? Get in touch with us today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Get Information</h3>

                        <div className="space-y-8">
                            {/* Phone Numbers */}
                            <div>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                    Contact Numbers
                                </h4>
                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <div className="text-sm font-medium text-blue-800">Main Office</div>
                                        <div className="text-2xl font-bold text-blue-900">+82-2-714-9707</div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                        <div className="text-sm font-medium text-green-800">Admissions Counseling</div>
                                        <div className="text-2xl font-bold text-green-900">+82-2-717-8811</div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-600 mr-3">FAX:</div>
                                            <div className="text-lg font-semibold text-gray-800">+82-2-714-1260</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    Campus Address
                                </h4>
                                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                                    <div className="text-lg font-bold text-blue-900 mb-2">Seoul Campus</div>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        16, Dangsan-ro 32-gil, Yeongdeungpo-gu,<br />
                                        Seoul 07257, South Korea
                                    </p>
                                    <div className="mt-3 text-sm text-blue-700 font-medium">
                                        📍 Yeongdeungpo-gu Office Station (Line 2/5) Exit 4 - 2min walk
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-blue-900 text-white p-6">
                            <h3 className="text-2xl font-bold">Seoul Campus</h3>
                            <p className="text-blue-100 mt-2">Main Campus & Administrative Office</p>
                        </div>

                        <div className="flex flex-col">
                            {/* Map */}
                            <div className="h-64 p-4">
                                <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9547524377!2d126.90934947607443!3d37.52664342690758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f9a7b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2s16%20Dangsan-ro%2032-gil%2C%20Yeongdeungpo-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Seoul Campus Location"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Transportation Info */}
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-blue-900 mb-3">Transportation</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                            Line 2
                                        </span>
                                        <div>
                                            <span className="text-gray-700 font-medium">Yeongdeungpo-gu Office Station</span>
                                            <br />
                                            <span className="text-sm text-gray-500">Exit 4 → 2-minute walk</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                            Line 5
                                        </span>
                                        <div>
                                            <span className="text-gray-700 font-medium">Yeongdeungpo-gu Office Station</span>
                                            <br />
                                            <span className="text-sm text-gray-500">Exit 4 → 2-minute walk</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                            Bus
                                        </span>
                                        <div>
                                            <span className="text-gray-700 font-medium">70-3, 5620, 6631, 6637</span>
                                            <br />
                                            <span className="text-sm text-gray-500">Yeongdeungpo Office stop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;