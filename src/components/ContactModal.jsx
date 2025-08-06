import React, { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in-up shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#e76f51] rounded-full mr-3"></div>
                        <h2 className="text-lg font-medium text-[#666]">Contact us</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Close modal"
                    >
                        <span className="text-gray-500 text-lg">×</span>
                    </button>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl font-normal text-[#2c2c2c] mb-8 leading-tight">
                    Have a project you'd<br />
                    like to talk about?
                </h1>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-8"></div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#999] text-sm mb-2">
                                What is your name?
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-[#666] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e76f51] transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[#999] text-sm mb-2">
                                What is your email?
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-[#666] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e76f51] transition-all duration-200"
                                required
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-[#999] text-sm mb-2">
                            What is the name of your company?
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company Name"
                            className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-[#666] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e76f51] transition-all duration-200"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-[#999] text-sm mb-2">
                            Tell us a bit more about your project
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="We are looking to..."
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-[#666] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e76f51] transition-all duration-200 resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="flex items-center px-8 py-3 border-2 border-[#e76f51] text-[#e76f51] rounded-full hover:bg-[#e76f51] hover:text-white transition-all duration-300 font-medium group"
                        >
                            <div className="w-2 h-2 bg-[#e76f51] rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;