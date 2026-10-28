import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { portfolios } from '../data';

export default function PortofolioSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [visible, setVisible] = useState(false);
    const closeRef = useRef<HTMLButtonElement | null>(null);
    const isOpen = activeIndex !== null;
    const total = portfolios.length;

    useEffect(() => {
        if (!isOpen) {
            setVisible(false);
            return;
        }
        const frame = requestAnimationFrame(() => setVisible(true));
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        return () => {
            cancelAnimationFrame(frame);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveIndex(null);
            } else if (event.key === 'ArrowLeft') {
                setActiveIndex((current) =>
                    current !== null ? (current - 1 + total) % total : current,
                );
            } else if (event.key === 'ArrowRight') {
                setActiveIndex((current) =>
                    current !== null ? (current + 1) % total : current,
                );
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, total]);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section
            id="portofolio"
            className="relative scroll-mt-14 border-t border-slate-200 bg-white pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal
                    className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                            A COLLECTION OF MOMENTS WE GUARDED
                        </span>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">
                            Portofolio Acara
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600 md:text-base">
                        Potret berbagai momen pernikahan yang telah kami sambut
                        dan jaga — dari akad intim hingga resepsi keluarga besar
                        di seluruh Jabodetabek.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolios.map((portfolio, index) => (
                        <figure
                            key={portfolio.image}
                            data-reveal
                            data-reveal-delay={String(Math.min(index, 5) * 90)}
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox(index)}
                            onKeyDown={(event) => {
                                if (
                                    event.key === 'Enter' ||
                                    event.key === ' '
                                ) {
                                    event.preventDefault();
                                    openLightbox(index);
                                }
                            }}
                            className="group relative cursor-zoom-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
                        >
                            <img
                                src={portfolio.image}
                                alt={portfolio.alt}
                                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                            <figcaption className="absolute bottom-0 left-0 w-full p-5">
                                <p className="font-cond text-sm font-bold text-white sm:text-base">
                                    {portfolio.caption}
                                </p>
                                <p className="font-label text-[10px] font-bold tracking-widest text-sky-300 uppercase">
                                    MHSWR PROTECTED EVENT
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            {isOpen && activeIndex !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setActiveIndex(null)}
                    className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-200 ${
                        visible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <button
                        type="button"
                        ref={closeRef}
                        aria-label="Tutup"
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <button
                        type="button"
                        aria-label="Foto sebelumnya"
                        onClick={(event) => {
                            event.stopPropagation();
                            setActiveIndex((activeIndex - 1 + total) % total);
                        }}
                        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        type="button"
                        aria-label="Foto berikutnya"
                        onClick={(event) => {
                            event.stopPropagation();
                            setActiveIndex((activeIndex + 1) % total);
                        }}
                        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                    <img
                        src={portfolios[activeIndex].image}
                        alt={portfolios[activeIndex].alt}
                        onClick={(event) => event.stopPropagation()}
                        className={`h-[80vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl transition-all duration-200 ${
                            visible
                                ? 'scale-100 opacity-100'
                                : 'scale-95 opacity-0'
                        }`}
                    />
                </div>
            )}
        </section>
    );
}
