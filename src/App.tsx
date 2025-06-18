import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ProgramsSection from './components/sections/ProgramsSection';
import StatsSection from './components/sections/StatsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <ProgramsSection />
                <StatsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;