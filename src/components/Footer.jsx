export default function Footer() {
    return (
        <footer className="bg-brand-deep text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-brand-emerald flex items-center justify-center text-white font-bold text-lg">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Agile <span className="text-brand-emerald">Learningz</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Professional Agile &amp; Scrum training to transform your
                            team's software delivery. Based in Hyderabad, India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm tracking-wider uppercase text-slate-400 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'Manifesto', href: '#manifesto' },
                                { label: 'History', href: '#history' },
                                { label: 'Fast Facts', href: '#facts' },
                                { label: 'Offerings', href: '#offerings' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-slate-400 hover:text-brand-emerald text-sm transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-sm tracking-wider uppercase text-slate-400 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Hyderabad, Telangana, India
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@agilelearningz.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-500 text-xs">
                        &copy; {new Date().getFullYear()} Agile Learningz. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
