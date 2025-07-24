import React from 'react';
import HeroSection from '../components/sections/HeroSection';
// import ProgramsSection from '../components/sections/ProgramsSection';
// import StatsSection from '../components/sections/StatsSection';
import ContactSection from '../components/sections/ContactSection';
import DepartmentsSection from "../components/sections/DepartmentsSection.tsx";
import EmploymentShowcaseSection from "../components/sections/EmploymentShowcaseSection.tsx";
import PartnershipShowcaseSection from "../components/sections/PartnershipShowcaseSection.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            {/*<ProgramsSection />*/}
            <DepartmentsSection />
            <EmploymentShowcaseSection />
            {/*<StatsSection />*/}
            <PartnershipShowcaseSection />
            <ContactSection />
        </>
    );
};

export default HomePage;