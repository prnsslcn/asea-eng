import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
        { number: "91%", label: "Employment Rate" },
        { number: "1,200+", label: "Students" },
        { number: "25+", label: "Years Experience" },
        { number: "15,000+", label: "Graduates" }
    ];

    return (
        <section className="section bg-blue-600 text-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">Our Success</h2>
                    <p className="body-large max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence in aviation education.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-6xl font-bold mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg text-blue-100">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;