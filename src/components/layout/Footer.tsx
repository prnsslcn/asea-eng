import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">ASEA Aviation School</h3>
                        <p className="text-gray-300">
                            Leading aviation education institution in Korea since 1998.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#about" className="hover:text-white">About Us</a></li>
                            <li><a href="#programs" className="hover:text-white">Programs</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <div>Phone: +82-2-XXXX-XXXX</div>
                            <div>Email: info@asea.ac.kr</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2024 ASEA Aviation Vocational School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;