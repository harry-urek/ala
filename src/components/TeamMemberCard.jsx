import React from 'react';

const TeamMemberCard = ({ name, position, qualifications, description, image, reverse = false }) => {
    return (
        <div className={`flex max-w-8xl mx-auto px-15 py-20 gap-15 items-center max-[760px]:flex-col max-[760px]:px-4 max-[760px]:py-12 max-[760px]:gap-8 ${reverse ? 'flex-row-reverse max-[760px]:flex-col' : ''}`}>
            {/* Content Side */}
            <div className="flex-1 max-w-2xl py-10 px-11 max-[760px]:max-w-full max-[760px]:py-0 max-[760px]:px-0 max-[760px]:text-center">
                <div className="mb-20 max-[760px]:mb-8">
                    <h2 className="text-6xl font-normal text-[#2c2c2c] leading-tight mb-4 tracking-tight max-[760px]:text-3xl max-[760px]:mb-3">
                        {name}
                    </h2>
                    
                    <h3 className="text-2xl font-light text-[#666] mb-6 italic max-[760px]:text-xl max-[760px]:mb-4">
                        {position}
                    </h3>

                    {/* Qualifications Section */}
                    {qualifications && (
                        <div className="mb-8 max-[760px]:mb-6">
                            <h4 className="text-lg font-semibold text-[#2c2c2c] mb-3 max-[760px]:text-base max-[760px]:mb-2">Qualifications</h4>
                            <p className="text-base text-[#666] leading-relaxed max-[760px]:text-sm">
                                {qualifications.join(', ')}
                            </p>
                        </div>
                    )}

                    <p className="text-lg text-[#666] leading-relaxed pt-4 mb-5 font-normal max-[760px]:text-base max-[760px]:pt-2 max-[760px]:mb-4">
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative h-[600px] flex justify-center items-center max-[760px]:h-auto max-[760px]:flex-none">
                <div className="relative">
                    {/* Circular Image Container */}
                    <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#e8f4fd] to-[#c3e9ff] transition-transform duration-300 hover:-translate-y-2 border-4 border-[#2c2c2c] max-[760px]:w-[280px] max-[760px]:h-[280px] max-[760px]:border-2">
                        <img 
                            src={image} 
                            alt={`${name} - ${position}`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#2c2c2c] rounded-full flex items-center justify-center max-[760px]:w-12 max-[760px]:h-12 max-[760px]:-bottom-3 max-[760px]:-right-3">
                        <div className="w-8 h-8 bg-[#f5f3f0] rounded-full max-[760px]:w-6 max-[760px]:h-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;