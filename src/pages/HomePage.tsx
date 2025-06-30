import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import StatsSection from '../components/sections/StatsSection';
import ContactSection from '../components/sections/ContactSection';

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