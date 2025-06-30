import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/about/asea');
    };

    return (
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
            <div className="container">
                <div className="py-24 text-center">
                    <h1 className="heading-1 mb-6">
                        ASEA Aviation College
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-100">
                        Korea's First Aviation School
                    </h2>
                    <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto font-semibold">
                        The Choice of 28,000 Students! Aviation Excellence Proven by Results
                    </p>
                    <p className="body-large mb-8 max-w-2xl mx-auto text-blue-100">
                        There's a reason why countless students choose us.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={handleLearnMore}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;