import { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 98, suffix: '%', label: 'Organizations Report Agile Success' },
    { value: 60, suffix: '%', label: 'Faster Time-to-Market' },
    { value: 250, suffix: '%', label: 'Increase in Team Productivity' },
    { value: 71, suffix: '%', label: 'Companies Now Use Agile' },
];

function AnimatedCounter({ target, suffix, started }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 35));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [started, target]);
    return <span>{count}{suffix}</span>;
}

export default function HeroSection() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-navy to-[#0c1d45]" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-emerald rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-brand-accent rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                {/* Quote */}
                <div className="text-center mb-14">
                    <p className="text-brand-emerald font-semibold text-xs tracking-widest uppercase mb-4 animate-fade-in">
                        The Power of Agile
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 animate-fade-in-up max-w-4xl mx-auto">
                        Fail Fast.
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up delay-100 max-w-4xl mx-auto">
                        <span className="bg-gradient-to-r from-brand-emerald to-teal-400 bg-clip-text text-transparent">
                            Learn Faster.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg font-medium animate-fade-in-up delay-200">
                        — The Agile Way
                    </p>
                </div>

                {/* Industry Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center transition-all hover:bg-white/10 hover:scale-105 ${visible ? 'animate-count-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <p className="text-3xl lg:text-4xl font-extrabold text-brand-emerald">
                                <AnimatedCounter target={s.value} suffix={s.suffix} started={visible} />
                            </p>
                            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Download Scrum Guide */}
                <div className="text-center animate-fade-in-up delay-400">
                    <a
                        href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="download-scrum-guide"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-emerald/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-emerald/40 hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Scrum Guide (PDF)
                    </a>
                    <p className="mt-2 text-slate-500 text-xs">Official 2020 Scrum Guide by Ken Schwaber & Jeff Sutherland</p>
                </div>
            </div>
        </section>
    );
}
