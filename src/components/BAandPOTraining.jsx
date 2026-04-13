const trainingSections = [
    {
        title: 'Business Analyst Mastery',
        desc: 'Learn to elicit, analyze, and document business requirements with precision. Master stakeholder engagement, root cause analysis, and creating comprehensive Business Requirements Documents (BRDs). Translate complex business needs into actionable solutions that drive measurable ROI.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        title: 'Product Owner Excellence',
        desc: 'Become a strategic Product Owner who drives product vision and success. Master backlog management, prioritization frameworks (MoSCoW, RICE, WSJF), stakeholder management, and decision-making in complex Agile environments. Lead your team to deliver maximum business value.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        title: 'JIRA Advanced Training',
        desc: 'Become a JIRA power user and administrator. Master issue tracking, custom workflows, sprint management, advanced reporting, automation (Rules Engine), and integration with development tools. Learn best practices for optimizing team productivity and visibility.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        gradient: 'from-rose-500 to-pink-600',
    },
];

export default function BAandPOTraining() {
    return (
        <section id="ba-po-jira" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-brand-emerald font-semibold text-sm tracking-widest uppercase mb-3">
                        Strategic Leadership Training
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        Business Analysts, Product Owners & JIRA Expertise
                    </h2>
                    <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
                        Elevate your team with specialized skills in requirements gathering, product strategy, and enterprise-grade project management. Transform your organization's ability to deliver customer value.
                    </p>
                       <p className="mt-6 text-2xl sm:text-3xl font-extrabold text-brand-emerald animate-pulse">
                           Don’t miss out—click the Enquire button now to claim your free demo session!
                       </p>
                </div>

                {/* Training Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {trainingSections.map((section, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-deep/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Top gradient bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} text-white flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                            >
                                {section.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-deep mb-3">
                                {section.title}
                            </h3>
                            <p className="text-brand-slate text-sm leading-relaxed">
                                {section.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Key Benefits Section */}
                <div className="bg-gradient-to-r from-brand-deep to-brand-emerald rounded-2xl p-12 text-white">
                    <h3 className="text-2xl font-bold mb-8 text-center">Why Organizations Choose This Training</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white bg-opacity-20">
                                    <span className="text-lg">✓</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Improved Requirements Quality</h4>
                                <p className="text-sm text-gray-100">Reduce scope creep and rework by capturing precise, actionable requirements upfront.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white bg-opacity-20">
                                    <span className="text-lg">✓</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Strategic Product Vision</h4>
                                <p className="text-sm text-gray-100">Empower POs to make data-driven decisions and align products with business objectives.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white bg-opacity-20">
                                    <span className="text-lg">✓</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Operational Excellence</h4>
                                <p className="text-sm text-gray-100">Leverage JIRA to orchestrate workflows, automate processes, and gain real-time insights.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white bg-opacity-20">
                                    <span className="text-lg">✓</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">24% Faster Time-to-Market</h4>
                                <p className="text-sm text-gray-100">Organizations with trained BAs and POs deploy features significantly faster.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
