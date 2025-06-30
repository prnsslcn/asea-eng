import React from 'react';

const LocationPage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    Location & Directions
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mt-4 px-4">
                    Find your way to ASEA Aviation College
                </p>
            </div>

            {/* Seoul Campus */}
            <div className="px-0 sm:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
                    <div className="bg-blue-900 text-white p-6">
                        <h2 className="text-2xl sm:text-3xl font-bold">Seoul Campus</h2>
                        <p className="text-blue-100 mt-2">Main Campus & Administrative Office</p>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Map */}
                        <div className="lg:w-3/5 h-96 lg:h-auto p-4">
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

                        {/* Campus Information */}
                        <div className="lg:w-2/5 p-6 lg:p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                                    <p className="text-gray-700">
                                        16, Dangsan-ro 32-gil, Yeongdeungpo-gu,<br />
                                        Seoul, South Korea
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact</h3>
                                    <p className="text-gray-700">
                                        Main: +82-2-714-9707<br />
                                        Admissions: +82-2-717-8811
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Transportation</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-2">
                                                Line 2
                                            </span>
                                            <span className="text-gray-700">Yeongdeungpo-gu Office Station, Exit 4</span>
                                            <br />
                                            <span className="text-sm text-gray-500 ml-16">2-minute walk</span>
                                        </div>

                                        <div>
                                            <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-2">
                                                Line 5
                                            </span>
                                            <span className="text-gray-700">Yeongdeungpo-gu Office Station, Exit 4</span>
                                            <br />
                                            <span className="text-sm text-gray-500 ml-16">2-minute walk</span>
                                        </div>

                                        <div>
                                            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-2">
                                                Bus
                                            </span>
                                            <span className="text-gray-700">70-3, 5620, 6631, 6637</span>
                                            <br />
                                            <span className="text-sm text-gray-500 ml-12">Yeongdeungpo Office stop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Icheon Campus */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-blue-900 text-white p-6">
                        <h2 className="text-2xl sm:text-3xl font-bold">Icheon Campus</h2>
                        <p className="text-blue-100 mt-2">Training & Practical Education Facility</p>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Map */}
                        <div className="lg:w-3/5 h-96 lg:h-[500px] p-4">
                            <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.9547524377!2d127.3093494760744!3d37.2266434269075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f9a7b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2s74%20Imosan-ro%20362beon-gil%2C%20Yul-myeon%2C%20Icheon-si%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Icheon Campus Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Campus Information */}
                        <div className="lg:w-2/5 p-6 lg:p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                                    <p className="text-gray-700">
                                        74, Imosan-ro 362beon-gil, Yul-myeon,<br />
                                        Icheon-si, Gyeonggi-do, South Korea
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;