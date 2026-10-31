import { ArrowUpRight } from 'lucide-react';
import { HERO_WA_MESSAGE, handleAnchorClick, waLink } from '../data';

export default function Hero() {
    return (
        <header
            id="beranda"
            className="relative -mt-14 flex min-h-screen w-full scroll-mt-14 flex-col justify-between overflow-hidden bg-[#0A2540] pt-20 pb-0 md:pt-28"
        >
            <div
                data-parallax="0.1"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <img
                    src="/images/hero-bg.jpg"
                    alt="Tim pagar ayu Mahes Ayu menemani pasangan pengantin adat Jawa di lokasi outdoor sawah"
                    className="h-full w-full scale-110 object-cover object-[50%_65%]"
                    fetchPriority="high"
                    loading="eager"
                />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A2540]/75 via-[#0A2540]/55 to-[#0A2540]/30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-white/90 to-white" />

            <div className="relative z-10 mt-2 w-full max-w-none px-6 sm:px-10 md:mt-4 lg:px-16">
                <div className="grid grid-cols-1 items-end gap-8 pb-8 lg:grid-cols-12">
                    <div data-reveal className="text-left lg:col-span-7">
                        <div className="mb-2 flex items-center gap-2 font-label text-xs tracking-widest text-white/70 uppercase md:text-sm">
                            <span>JAKARTA & JAWA BARAT</span>
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                            <span>6.2088° S, 106.8456° E</span>
                        </div>
                        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-blue-300 uppercase md:text-xs">
                            <span>MAHESWARI ENTERPRISE</span>
                            <span>•</span>
                            <span className="text-white/60">
                                JAGONYA WEDDING SEJAK 2018
                            </span>
                        </div>
                        <h1 className="text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
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
                                <span className="font-label text-sm font-bold tracking-wider text-blue-300">
                                    1,800+ PASANGAN BERBAHAGIA
                                </span>
                                <p className="text-[11px] text-white/60">
                                    Tersebar di Jabodetabek & Nusantara
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed font-normal text-white/80 md:text-[15px]">
                            Tim pagar ayu profesional & wedding organizer
                            pernikahan karya Maheswari Enterprise. Dipercaya
                            oleh lebih dari 1,800+ pasangan dengan penyambutan
                            tamu yang tertata, protokoler tepat, seragam tegap,
                            dan kepastian momen sakral bebas rasa cemas.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="#portofolio"
                                onClick={(event) =>
                                    handleAnchorClick(event, '#portofolio')
                                }
                                className="inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                            >
                                <span>LIHAT PORTOFOLIO</span>
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

            <div className="relative w-full max-w-[100vw] overflow-x-clip pt-3 pb-3 select-none">
                <div className="relative flex w-full max-w-none items-center justify-center px-0">
                    <h2
                        data-reveal
                        className="w-full max-w-none text-center font-display text-[13vw] leading-[0.82] font-black tracking-[-0.04em] whitespace-nowrap text-[#0A2540] opacity-95"
                    >
                        MAHES AYU
                    </h2>
                </div>
            </div>
        </header>
    );
}
