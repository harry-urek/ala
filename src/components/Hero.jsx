import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#d6ccc2] to-[#f5ebe0] relative overflow-hidden">
            <div className="flex max-w-8xl mx-auto px-15  py-40 gap-15 items-start">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl py-10 pl-11 ml-2">
                    {/* Brand Name */}
                    <div className="flex flex-col mb-15">
                        <span className="text-5xl  font-semibold text-[#2c2c2c] leading-tight tracking-tight">ALKA LAW ASSOCIATES </span>
                    </div>

                    {/* Main Content */}
                    <div className="mb-20">
                        <h1 className="text-6xl font-normal text-[#2c2c2c] leading-tight mb-6 tracking-tight">
                            Your Justice <br />
                            <em className="italic font-light">Our Commitment</em>
                        </h1>

                        <p className="text-lg text-[#666] leading-relaxed pt-4 mb-5 font-normal text-wrap">
                            We're a certified legal firm that provides comprehensive
                            legal services to individuals and businesses across
                            multiple practice areas with dedication and expertise.
                        </p>


                    </div>


                </div>

                {/* Right Content - Single Large Image */}
                <div className="flex-1 relative h-[600px] flex justify-end">
                    <div className="h-[400px] w-[800px]">
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#e8f4fd] to-[#c3e9ff] transition-transform duration-300 hover:-translate-y-1">
                            <img src="/src/assets/hero.png" alt="Legal consultation" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Circular Logo */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-20 h-20">
                        {/* Existing logo code */}
                    </div>

                    {/* ...existing code... */}
                </div>
            </div>


        </section>
    );
};

export default Hero;