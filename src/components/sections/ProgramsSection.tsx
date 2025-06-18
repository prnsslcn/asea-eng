import React from 'react';

const ProgramsSection: React.FC = () => {
    const programs = [
        {
            id: 1,
            title: "Aircraft Maintenance",
            description: "Professional aircraft maintenance technician training",
            duration: "6 months"
        },
        {
            id: 2,
            title: "Aviation Security",
            description: "Airport security and safety specialist program",
            duration: "4 months"
        },
        {
            id: 3,
            title: "Flight Operations",
            description: "Ground operations and flight support training",
            duration: "5 months"
        }
    ];

    return (
        <section className="section bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">Our Programs</h2>
                    <p className="body-large text-gray-600 max-w-2xl mx-auto">
                        Choose from our comprehensive aviation training programs designed for industry success.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div key={program.id} className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="heading-3 mb-4">{program.title}</h3>
                            <p className="text-gray-600 mb-4">{program.description}</p>
                            <div className="text-sm text-blue-600 font-semibold">
                                Duration: {program.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;