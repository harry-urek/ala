import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMember = ({ teamMembers = [] }) => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#f5ebe0] to-[#d6ccc2] relative overflow-hidden">
            {/* Section Heading */}
            <div className="max-w-8xl mx-auto px-15 pt-20 pb-10">
                <div className="text-center">
                    <h1 className="text-7xl font-semibold text-[#2c2c2c] leading-tight tracking-tight mb-4">
                        MEET OUR TEAM
                    </h1>
                    <div className="w-32 h-1 bg-[#2c2c2c] mx-auto"></div>
                </div>
            </div>

            {/* Team Members */}
            <div className="pb-40">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={member.id || index}
                        name={member.name}
                        position={member.position}
                        qualifications={member.qualifications}
                        description={member.description}
                        image={member.image}
                        reverse={index % 2 === 1} // Alternate layout for every other member
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamMember;