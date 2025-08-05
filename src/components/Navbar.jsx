import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1faee] shadow-sm py-4 px-10">
            <div className="max-w-7xl h-xl mx-auto p-4 flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-[#2c2c2c] tracking-tight">
                        ALA <span className="text-gray-400">|</span>
                        <span className="font-semibold ml-2">ALKA LAW ASSOCIATES</span>
                    </h1>
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center space-x-8 text-xl">
                    <li>
                        <a href="#services" className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2  hover:shadow--md">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#team" className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;