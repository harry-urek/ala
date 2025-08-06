import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1faee]/90 backdrop-blur-sm shadow-sm py-4 px-4 md:px-10">
            <div className="max-w-7xl h-xl mx-auto p-4 flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-[#2c2c2c] tracking-tight cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
                        ALA 
                        <span className="text-gray-400 hidden min-[760px]:inline">|</span>
                        <span className="font-semibold ml-2 hidden min-[760px]:inline">ALKA LAW ASSOCIATES</span>
                    </h1>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden min-[760px]:flex items-center space-x-8 text-xl">
                    <li>
                        <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 hover:shadow-md">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="min-[760px]:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`min-[760px]:hidden absolute top-full left-0 right-0 bg-[#f1faee]/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex flex-col py-4">
                    <li>
                        <a 
                            href="#services" 
                            onClick={(e) => handleNavClick(e, 'services')}
                            className="block text-[#2c2c2c] font-medium py-3 px-6 hover:bg-[#2c2c2c]/10 transition-colors duration-200"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#team" 
                            onClick={(e) => handleNavClick(e, 'team')}
                            className="block text-[#2c2c2c] font-medium py-3 px-6 hover:bg-[#2c2c2c]/10 transition-colors duration-200"
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#team" 
                            onClick={(e) => handleNavClick(e, 'team')}
                            className="block text-[#2c2c2c] font-medium py-3 px-6 hover:bg-[#2c2c2c]/10 transition-colors duration-200"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="block text-[#2c2c2c] font-medium py-3 px-6 hover:bg-[#2c2c2c]/10 transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;