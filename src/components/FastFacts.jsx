const facts = [
    {
        icon: '📊',
        stat: '71%',
        text: 'of organizations now use Agile approaches for their software projects.',
    },
    {
        icon: '🚀',
        stat: '98%',
        text: 'of Agile-adopting organizations report success, according to the State of Agile Report.',
    },
    {
        icon: '⏱️',
        stat: '60%',
        text: 'faster time-to-market is achieved by companies following Agile practices vs. Waterfall.',
    },
    {
        icon: '👥',
        stat: '87%',
        text: "of Agile practitioners say it has improved their team's ability to manage changing priorities.",
    },
    {
        icon: '📈',
        stat: '16x',
        text: 'more deployments are done by elite DevOps teams who combine Agile + CI/CD pipelines.',
    },
    {
        icon: '💡',
        stat: '5x',
        text: 'more productive — Agile teams consistently deliver higher quality in shorter cycles.',
    },
];

export default function FastFacts() {
    return (
        <section id="facts" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-brand-emerald font-semibold text-sm tracking-widest uppercase mb-3">
                        Did You Know?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        Fast Facts About Agile
                    </h2>
                    <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
                        Numbers that showcase why the world is going Agile.
                    </p>
                </div>

                {/* Fact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facts.map((f, i) => (
                        <div
                            key={i}
                            className="group bg-slate-50 hover:bg-brand-deep rounded-2xl p-6 border border-slate-100 hover:border-brand-deep transition-all duration-500 cursor-default"
                        >
                            <div className="text-3xl mb-3">{f.icon}</div>
                            <p className="text-3xl font-extrabold text-brand-deep group-hover:text-brand-emerald transition-colors duration-500 mb-2">
                                {f.stat}
                            </p>
                            <p className="text-brand-slate group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-500">
                                {f.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
