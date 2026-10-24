import {
    ArrowUpRight,
    BadgeCheck,
    Heart,
    Instagram,
    Music,
    ShieldCheck,
} from 'lucide-react';
import { HERO_WA_MESSAGE, handleAnchorClick, heroCards, waLink } from '../data';

export default function Hero() {
    return (
        <header
            id="beranda"
            className="relative flex min-h-screen w-full scroll-mt-14 flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white pt-8 pb-0 md:pt-14"
        >
            <div
                data-parallax="0.1"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="animate-glow absolute -top-32 left-1/2 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[160px]" />
                <div className="absolute top-1/3 left-10 h-[450px] w-[450px] rounded-full bg-sky-300/15 blur-[130px]" />
                <div className="absolute right-8 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#0A2540]/5 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
            </div>

            <div className="relative z-10 mb-8 w-full max-w-none px-6 sm:px-10 md:mb-14 lg:px-16">
                <div
                    data-parallax="0.05"
                    className="grid grid-cols-2 items-center justify-items-center gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6"
                >
                    {heroCards.map((card) => (
                        <div
                            key={card.image}
                            className={`${card.animation} ${card.offset} ${card.featured ? 'z-20 col-span-2 w-full max-w-[230px] rounded-2xl border-2 border-[#2563EB] bg-white p-3 shadow-[0_15px_35px_rgba(37,99,235,0.18)] transition duration-500 sm:col-span-1' : 'hero-card-shadow w-full max-w-[215px] rounded-2xl border border-slate-200/80 bg-white p-2.5 transition duration-500 hover:border-blue-500'}`}
                        >
                            <div className="relative mb-2.5 aspect-[4/5] overflow-hidden rounded-xl">
                                <img
                                    src={card.image}
                                    alt={card.alt}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                                {card.featured ? (
                                    <>
                                        <div className="absolute top-2 right-2 left-2 flex items-center justify-between">
                                            <span className="rounded-full bg-[#2563EB] px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase shadow">
                                                PREMIUM REELS
                                            </span>
                                            <span className="h-2.5 w-2.5 animate-ping rounded-full bg-blue-400" />
                                        </div>
                                        <div className="absolute right-3 bottom-3 left-3 text-left">
                                            <span className="block font-label text-[10px] text-sky-300">
                                                #MHSWRWedding2026
                                            </span>
                                            <h4 className="font-cond text-sm leading-tight font-bold text-white">
                                                {card.couple}
                                            </h4>
                                            <p className="mt-0.5 text-[10px] text-slate-300">
                                                {card.venue}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-md ${card.badgeClass} border`}
                                        >
                                            {card.badge}
                                        </span>
                                        <div className="absolute right-2 bottom-2 left-2 text-left">
                                            <p className="truncate text-[11px] font-semibold text-white">
                                                {card.couple}
                                            </p>
                                            <p className="text-[9px] text-slate-300">
                                                {card.venue}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                            {card.featured ? (
                                <div className="flex items-center justify-between px-1 pt-1 text-[11px]">
                                    <span className="font-label text-xs font-bold text-[#2563EB]">
                                        QR PASS VVIP
                                    </span>
                                    <span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                                        100% Seamless
                                    </span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between px-1 text-[10px] text-slate-600">
                                    <span className="flex items-center gap-1 font-semibold text-emerald-600">
                                        {card.footerLeft ===
                                        'LIVE STREAMING' ? (
                                            <span className="font-label text-[9px] font-bold text-[#2563EB]">
                                                LIVE STREAMING
                                            </span>
                                        ) : (
                                            <>
                                                {card.footerLeft.includes(
                                                    'RSVP',
                                                ) && (
                                                    <BadgeCheck
                                                        className="h-3 w-3"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                {card.footerLeft}
                                            </>
                                        )}
                                    </span>
                                    {card.footerIcon === 'heart' ? (
                                        <Heart
                                            className="h-3.5 w-3.5 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                    ) : card.footerIcon === 'shield' ? (
                                        <ShieldCheck
                                            className="h-3.5 w-3.5 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                    ) : card.footerIcon === 'music' ? (
                                        <Music
                                            className="h-3.5 w-3.5 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Instagram
                                            className="h-3.5 w-3.5 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 mt-2 w-full max-w-none px-6 sm:px-10 md:mt-4 lg:px-16">
                <div className="grid grid-cols-1 items-end gap-8 pb-8 lg:grid-cols-12">
                    <div data-reveal className="text-left lg:col-span-7">
                        <div className="mb-2 flex items-center gap-2 font-label text-xs tracking-widest text-slate-500 uppercase md:text-sm">
                            <span>JAKARTA & JAWA BARAT</span>
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                            <span>6.2088° S, 106.8456° E</span>
                        </div>
                        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#2563EB] uppercase md:text-xs">
                            <span>MAHESWARI ENTERPRISE</span>
                            <span>•</span>
                            <span className="text-slate-500">
                                JAGONYA WEDDING SEJAK 2018
                            </span>
                        </div>
                        <h1 className="text-3xl leading-[1.08] font-bold tracking-tight text-[#0A2540] sm:text-5xl lg:text-[3.5rem]">
                            Bringing the Elegance of Sacred Wedding Moments to
                            The World!
                        </h1>
                    </div>
                    <div
                        data-reveal
                        data-reveal-delay="120"
                        className="flex flex-col justify-end space-y-5 text-left lg:col-span-5"
                    >
                        <div className="mb-1 flex justify-start lg:justify-end">
                            <div className="text-left lg:text-right">
                                <span className="font-label text-sm font-bold tracking-wider text-[#2563EB]">
                                    1,800+ PASANGAN BERBAHAGIA
                                </span>
                                <p className="text-[11px] text-slate-500">
                                    Tersebar di Jabodetabek & Nusantara
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed font-normal text-slate-600 md:text-[15px]">
                            Sistem ekosistem undangan digital & event organizer
                            pernikahan terintegrasi karya Maheswari Enterprise.
                            Dipercaya oleh lebih dari 1,800+ pasangan pengantin
                            dengan sistem RSVP tamu cerdas, QR check-in instan,
                            audio visual sinematik, dan kepastian momen sakral
                            bebas rasa cemas.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="#katalog"
                                onClick={(event) =>
                                    handleAnchorClick(event, '#katalog')
                                }
                                className="inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                            >
                                <span>LIHAT PAKET 2026</span>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] text-[#2563EB]">
                                    <ArrowUpRight
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                            <a
                                href={waLink(HERO_WA_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0A2540] bg-white px-6 py-3.5 text-xs font-semibold tracking-wider text-[#0A2540] uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                            >
                                <span>KONSULTASI WHATSAPP</span>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] text-[#0A2540]">
                                    <ArrowUpRight
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full max-w-[100vw] overflow-x-clip border-t border-slate-200 bg-gradient-to-b from-[#f8fafc] to-white pt-6 pb-6 select-none md:pb-8">
                <div className="relative flex w-full max-w-none items-center justify-center px-0">
                    <h2
                        data-reveal
                        className="w-full max-w-none pb-2 text-center font-display text-[13vw] leading-[0.9] font-black tracking-[-0.04em] whitespace-nowrap text-[#0A2540] opacity-95"
                    >
                        MAHES AYU
                    </h2>
                </div>
            </div>
        </header>
    );
}
