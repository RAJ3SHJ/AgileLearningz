const milestones = [
    {
        year: '1970',
        title: 'The Waterfall Model',
        desc: 'Winston Royce publishes "Managing the Development of Large Software Systems," introducing the sequential Waterfall model that dominated for decades.',
    },
    {
        year: '1986',
        title: 'The "New New Product Dev" Paper',
        desc: 'Hirotaka Takeuchi and Ikujiro Nonaka publish their Harvard Business Review paper, introducing the rugby "scrum" approach to product development.',
    },
    {
        year: '1995',
        title: 'Scrum Framework Formalized',
        desc: 'Ken Schwaber and Jeff Sutherland present the Scrum framework at OOPSLA, giving teams a structured yet flexible way to build software.',
    },
    {
        year: '1999',
        title: 'Extreme Programming (XP)',
        desc: 'Kent Beck publishes "Extreme Programming Explained," popularizing test-driven development, pair programming, and continuous integration.',
    },
    {
        year: '2001',
        title: 'The Agile Manifesto',
        desc: 'Seventeen software developers gather at Snowbird, Utah, and sign the Agile Manifesto — defining four core values and twelve principles that would reshape the industry.',
        highlight: true,
    },
    {
        year: 'Today',
        title: 'Agile Goes Mainstream',
        desc: '71% of organizations report using Agile approaches. Frameworks like SAFe, LeSS, and Spotify Model enable Agile at enterprise scale.',
    },
];

export default function HistoryTimeline() {
    return (
        <section id="history" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-brand-emerald font-semibold text-sm tracking-widest uppercase mb-3">
                        The Journey
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        The History of Agile
                    </h2>
                    <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
                        From rigid sequential processes to a movement that transformed how
                        the world builds software.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="timeline-line" />

                    {milestones.map((m, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={i}
                                className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                {/* Dot */}
                                <div
                                    className={`absolute z-10 w-5 h-5 rounded-full border-4 border-white ${m.highlight
                                            ? 'bg-brand-emerald animate-pulse-glow'
                                            : 'bg-brand-deep'
                                        } left-[24px] md:left-1/2 md:-translate-x-1/2 top-1`}
                                />

                                {/* Card */}
                                <div
                                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                                        }`}
                                >
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${m.highlight
                                                ? 'bg-brand-emerald/10 text-brand-emerald'
                                                : 'bg-brand-deep/10 text-brand-deep'
                                            }`}
                                    >
                                        {m.year}
                                    </span>
                                    <h3
                                        className={`text-lg font-bold mb-2 ${m.highlight ? 'text-brand-emerald' : 'text-brand-deep'
                                            }`}
                                    >
                                        {m.title}
                                    </h3>
                                    <p className="text-brand-slate text-sm leading-relaxed">
                                        {m.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
