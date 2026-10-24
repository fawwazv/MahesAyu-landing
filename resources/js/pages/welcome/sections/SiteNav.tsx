import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { HERO_WA_MESSAGE, handleAnchorClick, navLinks, waLink } from '../data';

interface SiteNavProps {
    activeSection: string;
    progress: number;
    scrolled: boolean;
    navHidden: boolean;
}

export default function SiteNav({
    activeSection,
    progress,
    scrolled,
    navHidden,
}: SiteNavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Slim auth bar — preserves login/register/dashboard */}
            <div
                aria-hidden="true"
                className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#2563EB]"
                style={{ transform: `scaleX(${progress})` }}
            />
            <div
                className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-transform duration-300 ${navHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'shadow-lg shadow-slate-900/5' : ''}`}
            >
                <div className="flex w-full items-center justify-between px-6 py-2.5 sm:px-10 lg:px-16">
                    <a
                        href="#beranda"
                        onClick={(event) =>
                            handleAnchorClick(event, '#beranda')
                        }
                        className="flex items-center gap-2.5"
                    >
                        <img
                            src="/images/logo/mhs-ayu-logo.png"
                            alt="Logo MHS Ayu — Maheswari Enterprise"
                            className="h-9 w-auto rounded-md"
                        />
                        <span className="hidden font-body text-[10px] font-semibold tracking-widest text-slate-500 sm:inline">
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
                                className={`rounded-full px-3.5 py-2 transition hover:bg-slate-100 hover:text-[#0A2540] ${activeSection === link.href.slice(1) ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-600'}`}
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
                                className="rounded-full bg-[#0A2540] px-4 py-2 text-white transition hover:bg-[#0f365d]"
                            >
                                Pesan Sekarang
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
                                className="w-full rounded-full bg-[#0A2540] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#0f365d]"
                            >
                                Pesan Sekarang
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
