import React from 'react';

const Services = () => {
    const services = [
        {
            name: "Direct Tax",
            category: "TAXATION",
            details: [
                "Litigation before all forums including Supreme Court, High Courts, Tribunals",
                "Advisory on domestic and international taxation",
                "Strategic tax planning and regulatory compliance",
                "Assistance in assessments, re-assessments, and investigations including search and seizure cases"
            ]
        },
        {
            name: "Indirect Tax",
            category: "TAXATION", 
            details: [
                "Covers GST, Customs, Service Tax, VAT/CST, Excise",
                "Representation before courts and tax tribunals",
                "Support in recovery proceedings, constitutional matters",
                "Advice on ITC eligibility and legal compliance"
            ]
        },
        {
            name: "Benami Law & PMLA",
            category: "COMPLIANCE",
            details: [
                "Drafting/responding to notices from Initiating Officer (IO)",
                "Representation before IO, ED, and Adjudicating Authority",
                "Challenging attachments via High Court writs"
            ]
        },
        {
            name: "Consumer Dispute Redressal",
            category: "LITIGATION",
            details: [
                "Appearance before District Forums, NCDRC, and Supreme Court",
                "Drafting complaints, appeals, revisions",
                "Execution proceedings and writ petitions"
            ]
        },
        {
            name: "Insolvency & Bankruptcy Practice",
            category: "CORPORATE",
            details: [
                "Advisory on restructuring, resolution plans",
                "Representation in NCLT, NCLAT, and Supreme Court"
            ]
        },
        {
            name: "Arbitration for Commercial Disputes",
            category: "COMMERCIAL",
            details: [
                "Handling withheld payment disputes, oral agreements, contractual matters"
            ]
        },
        {
            name: "Merger-Acquisition & Competition Law",
            category: "CORPORATE",
            details: [
                "Strategic counsel on merger control, compliance, approvals",
                "Due diligence and risk mitigation"
            ]
        },
        {
            name: "Negotiable Instrument Act",
            category: "COMMERCIAL",
            details: [
                "Handling Section 138 and 147 cases, compounding offenses, court procedures"
            ]
        },
        {
            name: "Contract/Agreement Drafting & Vetting",
            category: "COMMERCIAL",
            details: [
                "Drafting and reviewing contracts to ensure clarity and flexibility"
            ]
        },
        {
            name: "Intellectual Property Rights",
            category: "IP & TECH",
            details: [
                "Registration, enforcement, licensing, commercialization, litigation"
            ]
        },
        {
            name: "Legal Advisory on Building Laws and Civic Compliance",
            category: "REGULATORY",
            details: [
                "Advising on urban planning laws, building regulations, civic issues"
            ]
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            "TAXATION": "bg-[#58a4b0] text-white",
            "COMPLIANCE": "bg-[#ff6b6b] text-white", 
            "LITIGATION": "bg-[#51cf66] text-white",
            "CORPORATE": "bg-[#ffd43b] text-[#2c2c2c]",
            "COMMERCIAL": "bg-[#845ef7] text-white",
            "IP & TECH": "bg-[#ff8cc8] text-white",
            "REGULATORY": "bg-[#20c997] text-white"
        };
        return colors[category] || "bg-gray-500 text-white";
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#e9edc9] to-[#d6ccc2] relative overflow-hidden py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="text-[200px] font-bold text-[#2c2c2c] absolute top-10 left-10 transform -rotate-12">
                    Recently
                </div>
                <div className="text-[150px] font-bold text-[#2c2c2c] absolute bottom-20 right-10 transform rotate-12">
                    Published
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-6xl font-bold text-[#2c2c2c] mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-[#666] max-w-2xl">
                        Comprehensive legal solutions across multiple practice areas
                    </p>
                    <div className="mt-4">
                        <span className="text-[#58a4b0] font-semibold text-lg cursor-pointer hover:underline">
                            MORE SERVICES →
                        </span>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            {/* Category Tag */}
                            <div className={`inline-block px-3 py-1 rounded-md text-sm font-semibold mb-4 ${getCategoryColor(service.category)}`}>
                                {service.category}
                            </div>

                            {/* Service Title */}
                            <h3 className="text-xl font-semibold text-[#2c2c2c] mb-4 leading-tight">
                                {service.name}
                            </h3>

                            {/* Service Details */}
                            <div className="space-y-2">
                                {service.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-[#666] text-sm leading-relaxed">
                                        • {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;