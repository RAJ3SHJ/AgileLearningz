import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Manifesto', href: '#manifesto' },
        { label: 'History', href: '#history' },
        { label: 'Facts', href: '#facts' },
        { label: 'Offerings', href: '#offerings' },
    ];

    return (
        <header
            id="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-brand-deep/95 backdrop-blur-md shadow-lg shadow-brand-deep/20'
                    : 'bg-brand-deep'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-brand-emerald flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-110">
                            A
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Agile <span className="text-brand-emerald">Learningz</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <nav className="md:hidden pb-4 animate-fade-in">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
