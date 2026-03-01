import { useState } from 'react';

export default function EnquireButton() {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', email: '' });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleClose = () => {
        setOpen(false);
        // Reset after animation
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '' });
        }, 300);
    };

    return (
        <>
            {/* Sticky Button — middle-left */}
            <button
                id="enquire-btn"
                onClick={() => setOpen(true)}
                className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-sm px-4 py-3 rounded-r-xl shadow-lg shadow-brand-emerald/30 transition-all duration-300 hover:px-5 hover:shadow-xl hover:shadow-brand-emerald/40 writing-mode-vertical md:writing-mode-normal"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
                <span className="flex items-center gap-2 md:rotate-0 rotate-180">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Enquire
                </span>
            </button>

            {/* Modal Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={handleClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-brand-deep/60 backdrop-blur-sm" />

                    {/* Modal Card */}
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            id="enquire-modal-close"
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {!submitted ? (
                            <>
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-deep">
                                        Get in Touch
                                    </h3>
                                    <p className="text-brand-slate text-sm mt-1">
                                        Fill in your details and we'll reach out shortly.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="enquire-name" className="block text-sm font-medium text-slate-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            id="enquire-name"
                                            name="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 focus:border-brand-emerald transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="enquire-phone" className="block text-sm font-medium text-slate-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            id="enquire-phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 focus:border-brand-emerald transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="enquire-email" className="block text-sm font-medium text-slate-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            id="enquire-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 focus:border-brand-emerald transition"
                                        />
                                    </div>
                                    <button
                                        id="enquire-submit"
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-emerald/30 active:scale-[0.98]"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-6 animate-scale-in">
                                <div className="w-16 h-16 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-brand-deep mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-brand-slate">
                                    The AgileLearningz team will contact you soon.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
