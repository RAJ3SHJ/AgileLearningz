import { useState } from 'react';

const values = [
    {
        left: 'Individuals and interactions',
        right: 'processes and tools',
        icon: '👥',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        left: 'Working software',
        right: 'comprehensive documentation',
        icon: '⚙️',
        color: 'from-emerald-500 to-teal-600',
    },
    {
        left: 'Customer collaboration',
        right: 'contract negotiation',
        icon: '🤝',
        color: 'from-amber-500 to-orange-600',
    },
    {
        left: 'Responding to change',
        right: 'following a plan',
        icon: '🔄',
        color: 'from-purple-500 to-pink-600',
    },
];

export default function HeroManifesto() {
    const [active, setActive] = useState(null);

    return (
        <section
            id="manifesto"
            className="relative pt-20 pb-10 md:pt-24 md:pb-14 overflow-hidden min-h-screen flex flex-col justify-center"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-navy to-[#0c1d45]" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-emerald rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-brand-accent rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-brand-emerald font-semibold text-xs tracking-widest uppercase mb-2 animate-fade-in">
                    The Agile Manifesto
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 animate-fade-in-up">
                    Values That Drive
                    <br />
                    <span className="bg-gradient-to-r from-brand-emerald to-teal-400 bg-clip-text text-transparent">
                        Modern Software Delivery
                    </span>
                </h1>
                <p className="text-base text-slate-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
                    We are uncovering better ways of developing software by doing it and
                    helping others do it. Through this work we have come to value:
                </p>

                {/* Value Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                            className={`relative group rounded-xl p-4 cursor-pointer transition-all duration-500 animate-fade-in-up border border-white/10 backdrop-blur-sm ${active === i
                                ? 'bg-white/15 scale-[1.03] shadow-2xl shadow-brand-emerald/20'
                                : 'bg-white/5 hover:bg-white/10'
                                }`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="text-2xl mb-2">{v.icon}</div>
                            <p className="text-white font-bold text-lg mb-1">
                                {v.left}
                            </p>
                            <p className="text-slate-400 text-sm">
                                over{' '}
                                <span className="text-slate-500 italic">{v.right}</span>
                            </p>
                            {/* Gradient bar */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />
                        </div>
                    ))}
                </div>

                <p className="mt-5 text-slate-500 text-xs italic animate-fade-in-up delay-600">
                    That is, while there is value in the items on the right, we value the
                    items on the left more.
                </p>
            </div>
        </section>
    );
}
