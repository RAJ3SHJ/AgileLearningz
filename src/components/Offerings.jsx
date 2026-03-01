const offerings = [
    {
        title: 'Scrum Mastery',
        desc: 'Comprehensive teaching of the Scrum development methodology, including roles (Product Owner, Scrum Master, Dev Team), ceremonies (Sprint Planning, Daily Standups, Retrospectives), and artifacts (Product Backlog, Sprint Backlog, Increment).',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Requirements Engineering',
        desc: 'Specialized training on writing effective User Stories using the "As a… I want… So that…" format, drafting acceptance criteria with Given-When-Then, and mastering backlog prioritization techniques like MoSCoW and WSJF.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        title: 'Tooling Proficiency',
        desc: 'Expert guidance on using JIRA for project tracking — boards, sprints, epics, and reporting — and Confluence for documentation, knowledge bases, and team wikis. Learn to integrate both for seamless project management.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        gradient: 'from-purple-500 to-pink-600',
    },
];

export default function Offerings() {
    return (
        <section id="offerings" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-brand-emerald font-semibold text-sm tracking-widest uppercase mb-3">
                        What We Teach
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        Our Professional Offerings
                    </h2>
                    <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
                        Industry-leading Agile training designed to upskill your team and
                        accelerate delivery.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {offerings.map((o, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-deep/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Top gradient bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${o.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${o.gradient} text-white flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                            >
                                {o.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-deep mb-3">
                                {o.title}
                            </h3>
                            <p className="text-brand-slate text-sm leading-relaxed">
                                {o.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
