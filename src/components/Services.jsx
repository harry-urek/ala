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
            "TAXATION": "bg-[#d6ccc2] text-[#2c2c2c]",
            "COMPLIANCE": "bg-[#e9c46a] text-[#2c2c2c]", 
            "LITIGATION": "bg-[#a8dadc] text-[#2c2c2c]",
            "CORPORATE": "bg-[#f1faee] text-[#2c2c2c]",
            "COMMERCIAL": "bg-[#f4a261] text-[#2c2c2c]",
            "IP & TECH": "bg-[#e76f51] text-white",
            "REGULATORY": "bg-[#2a9d8f] text-white"
        };
        return colors[category] || "bg-[#d6ccc2] text-[#2c2c2c]";
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#f1faee] to-[#d6ccc2] relative overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-5xl font-semibold text-[#2c2c2c] mb-6 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed font-normal">
                        Comprehensive legal solutions across multiple practice areas with dedication and expertise
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/30 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            {/* Category Tag */}
                            <div className={`inline-block px-4 py-2 rounded-lg text-sm font-medium mb-6 ${getCategoryColor(service.category)}`}>
                                {service.category}
                            </div>

                            {/* Service Title */}
                            <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-6 leading-tight tracking-tight">
                                {service.name}
                            </h3>

                            {/* Service Details */}
                            <div className="space-y-3">
                                {service.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-[#666] text-sm leading-relaxed font-normal flex items-start">
                                        <span className="text-[#d6ccc2] mr-3 mt-1 text-lg">•</span>
                                        <span>{detail}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
               
            </div>
        </section>
    );
};

export default Services;