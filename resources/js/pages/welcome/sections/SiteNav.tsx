import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { HERO_WA_MESSAGE, handleAnchorClick, navLinks, waLink } from '../data';

interface SiteNavProps {
    activeSection: string;
    progress: number;
    scrolled: boolean;
    navHidden: boolean;
}

function ChatIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3v4l5-4h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
            <path d="M7.5 8h9M7.5 11.5h9M7.5 15h5" />
        </svg>
    );
}

export default function SiteNav({
    activeSection,
    progress,
    scrolled,
    navHidden,
}: SiteNavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onHero = !scrolled && !isMenuOpen;

    return (
        <>
            {/* Slim auth bar — preserves login/register/dashboard */}
            <div
                aria-hidden="true"
                className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#2563EB]"
                style={{ transform: `scaleX(${progress})` }}
            />
            <div
                className={`sticky top-0 z-50 border-b transition-all duration-300 ${onHero ? 'border-transparent bg-transparent' : 'border-slate-200/80 bg-white/90 backdrop-blur-md'} ${navHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'shadow-lg shadow-slate-900/5' : ''}`}
            >
                <div className="flex w-full items-center justify-between px-6 py-2.5 sm:px-10 lg:px-16">
                    <a
                        href="#beranda"
                        onClick={(event) =>
                            handleAnchorClick(event, '#beranda')
                        }
                        className="flex items-center gap-2.5"
                    >
                        <span className="flex items-center gap-1.5">
                            <img
                                src="/images/logo/mhs-ayu-crest.png"
                                alt="Logo MHS Ayu — Maheswari Enterprise"
                                className="h-9 w-auto"
                            />
                            <img
                                src="/images/logo/mhs-ayu-wordmark.png"
                                alt=""
                                aria-hidden="true"
                                className="h-9 w-auto"
                            />
                        </span>
                        <span
                            className={`hidden font-body text-[10px] font-semibold tracking-widest sm:inline ${onHero ? 'text-white/70' : 'text-slate-500'}`}
                        >
                            BY MAHESWARI ENTERPRISE
                        </span>
                    </a>
                    <nav className="hidden items-center gap-1 text-xs font-semibold md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(event) =>
                                    handleAnchorClick(event, link.href)
                                }
                                aria-current={
                                    activeSection === link.href.slice(1)
                                        ? 'true'
                                        : undefined
                                }
                                className={`rounded-full px-3.5 py-2 transition ${onHero ? `hover:bg-white/10 hover:text-white ${activeSection === link.href.slice(1) ? 'bg-white/15 text-white' : 'text-white/85'}` : `hover:bg-slate-100 hover:text-[#0A2540] ${activeSection === link.href.slice(1) ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-600'}`}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <nav className="hidden items-center gap-2 text-xs font-semibold sm:flex">
                            <a
                                href={waLink(HERO_WA_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${onHero ? 'bg-white text-[#0A2540] hover:bg-blue-50' : 'bg-[#0A2540] text-white hover:bg-[#0f365d]'}`}
                            >
                                <ChatIcon className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </nav>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={
                                isMenuOpen
                                    ? 'Tutup menu navigasi'
                                    : 'Buka menu navigasi'
                            }
                            aria-expanded={isMenuOpen}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0A2540] transition hover:bg-slate-100 md:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <Menu className="h-5 w-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md md:hidden">
                        <nav className="flex w-full max-w-none flex-col px-6 py-3 sm:px-10 lg:px-16">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(event) => {
                                        handleAnchorClick(
                                            event,
                                            link.href,
                                            () => setIsMenuOpen(false),
                                        );
                                    }}
                                    className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 hover:text-[#0A2540] ${activeSection === link.href.slice(1) ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-700'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={waLink(HERO_WA_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2540] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#0f365d]"
                            >
                                <ChatIcon className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
