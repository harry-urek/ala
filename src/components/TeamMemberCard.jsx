import React from 'react';

const TeamMemberCard = ({ name, position, qualifications, description, image, reverse = false }) => {
    return (
        <div className={`flex max-w-8xl mx-auto px-15 py-20 gap-15 items-center ${reverse ? 'flex-row-reverse' : ''}`}>
            {/* Content Side */}
            <div className="flex-1 max-w-2xl py-10 px-11">
                <div className="mb-20">
                    <h2 className="text-6xl font-normal text-[#2c2c2c] leading-tight mb-4 tracking-tight">
                        {name}
                    </h2>
                    
                    <h3 className="text-2xl font-light text-[#666] mb-6 italic">
                        {position}
                    </h3>

                    {/* Qualifications Section */}
                    {qualifications && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-[#2c2c2c] mb-3">Qualifications</h4>
                            <p className="text-base text-[#666] leading-relaxed">
                                {qualifications.join(', ')}
                            </p>
                        </div>
                    )}

                    <p className="text-lg text-[#666] leading-relaxed pt-4 mb-5 font-normal">
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative h-[600px] flex justify-center items-center">
                <div className="relative">
                    {/* Circular Image Container */}
                    <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#e8f4fd] to-[#c3e9ff] transition-transform duration-300 hover:-translate-y-2 border-4 border-[#2c2c2c]">
                        <img 
                            src={image} 
                            alt={`${name} - ${position}`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#2c2c2c] rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#f5f3f0] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;