import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <div className="text-2xl font-bold text-blue-600">
                        ASEA Aviation School
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
                        <a href="#programs" className="text-gray-700 hover:text-blue-600">Programs</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;