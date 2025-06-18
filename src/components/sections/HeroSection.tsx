import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="container">
                <div className="py-24 text-center">
                    <h1 className="heading-1 mb-6">
                        ASEA Aviation Vocational School
                    </h1>
                    <p className="body-large mb-8 max-w-2xl mx-auto">
                        Leading aviation education institution preparing students for successful careers in the aviation industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                            Learn More
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;