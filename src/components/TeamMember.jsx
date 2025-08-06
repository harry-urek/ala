import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMember = ({ id, teamMembers = [] }) => {
    return (
        <section id={id} className="min-h-screen bg-gradient-to-br from-[#f5ebe0] to-[#d6ccc2] relative overflow-hidden">
            {/* Section Heading */}
            <div className="max-w-8xl mx-auto px-15 pt-20 pb-10 max-[760px]:px-4 max-[760px]:pt-12 max-[760px]:pb-6 animate-fade-in-up">
                <div className="text-center">
                    <h1 className="text-7xl font-semibold text-[#2c2c2c] leading-tight tracking-tight mb-4 max-[760px]:text-4xl max-[760px]:mb-3 animate-slide-in-down">
                        MEET OUR TEAM
                    </h1>
                    <div className="w-32 h-1 bg-[#2c2c2c] mx-auto max-[760px]:w-20 animate-expand-width animation-delay-300"></div>
                </div>
            </div>

            {/* Team Members */}
            <div className="pb-40 max-[760px]:pb-20">
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id || index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        <TeamMemberCard
                            name={member.name}
                            position={member.position}
                            qualifications={member.qualifications}
                            description={member.description}
                            image={member.image}
                            reverse={index % 2 === 1}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMember;