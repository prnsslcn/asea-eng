import React from 'react';
import HeroSection from './sections/HeroSection';
import ProgramsSection from './sections/ProgramsSection';
import StatsSection from './sections/StatsSection';
import ContactSection from './sections/ContactSection';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <ProgramsSection />
            <StatsSection />
            <ContactSection />
        </>
    );
};

export default HomePage;