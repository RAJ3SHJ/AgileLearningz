import { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 60, suffix: '%', label: 'Reduction in Wasted Features', color: 'text-brand-emerald' },
    { value: 28, suffix: '%', label: 'Faster Time-to-Market', color: 'text-brand-accent' },
    { value: 40, suffix: '%', label: 'Lower Development Costs', color: 'text-brand-emerald' },
    { value: 250, suffix: '%', label: 'Higher Team Productivity', color: 'text-brand-accent' },
];

function AnimatedCounter({ target, suffix, started }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
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

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function ImportanceROI() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-brand-emerald font-semibold text-sm tracking-widest uppercase mb-3">
                        Why It Matters
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        The Importance &amp; ROI of Agile
                    </h2>
                    <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
                        Adopting Agile isn't just a methodology shift — it's a strategic
                        investment that directly impacts your bottom line.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 border border-slate-100 transition-transform hover:scale-105 hover:shadow-xl ${visible ? 'animate-count-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <p className={`text-4xl lg:text-5xl font-extrabold ${s.color}`}>
                                <AnimatedCounter target={s.value} suffix={s.suffix} started={visible} />
                            </p>
                            <p className="mt-2 text-sm text-brand-slate font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Cost Savings Infographic */}
                <div className="bg-brand-deep rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-[100px]" />
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                💰 Cost Savings Through Agile
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Studies show that <span className="text-brand-emerald font-semibold">64% of features</span> built in
                                traditional projects are rarely or never used. Agile prevents this
                                "feature creep" by delivering in small, validated increments —
                                saving companies millions in wasted development effort.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                                    🎯 Focused Delivery
                                </span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                                    📉 Reduced Risk
                                </span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                                    ⚡ Faster Feedback
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: 'Features Actually Used', pct: 36, bar: 'bg-red-400' },
                                { label: 'Waste Eliminated by Agile', pct: 60, bar: 'bg-brand-emerald' },
                                { label: 'Project Success Rate (Agile)', pct: 72, bar: 'bg-brand-accent' },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-300">{item.label}</span>
                                        <span className="font-bold">{item.pct}%</span>
                                    </div>
                                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${item.bar} rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: visible ? `${item.pct}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
