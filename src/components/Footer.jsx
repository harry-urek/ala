import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-4">
                            ALA | ALKA LAW ASSOCIATES
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            A certified legal firm providing comprehensive legal services to individuals 
                            and businesses across multiple practice areas with dedication and expertise.
                        </p>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 info@alkalawassociates.com</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📍 New Delhi, India</p>
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Practice Areas</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer">Direct & Indirect Tax</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Corporate Law</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Consumer Disputes</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Insolvency & Bankruptcy</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Commercial Arbitration</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Intellectual Property</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Meet Our Team</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Alka Law Associates. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;