import { useEffect, useRef, useState } from 'react';
import { benefits } from '../data';

export default function BenefitSection() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const nodes = itemRefs.current.filter(Boolean) as HTMLDivElement[];
        if (nodes.length === 0) {
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        continue;
                    }
                    const index = Number(
                        (entry.target as HTMLElement).dataset.index,
                    );
                    if (!Number.isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
        );
        for (const node of nodes) {
            observer.observe(node);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="benefit"
            className="relative scroll-mt-14 border-t border-slate-200 bg-[#f8fafc] pt-8 pb-24 lg:pt-14"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
                    <div
                        data-reveal
                        className="lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:self-start"
                    >
                        <div className="flex h-full flex-col justify-center">
                            <span className="mb-3 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                                {'( MENGAPA MAHES AYU )'}
                            </span>
                            <h2 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-[#0A2540] sm:text-5xl lg:text-6xl">
                                Keunggulan Memilih Layanan Kami
                            </h2>
                            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                                Lebih dari sekadar hiasan panggung — tim kami
                                adalah investasi rapi untuk kekhidmatan hari
                                paling penting Anda. Saat halaman digulir ke
                                bawah, setiap kelebihan Mahes Ayu akan terungkap
                                satu per satu.
                            </p>
                        </div>
                    </div>
                    <div className="border-b border-slate-200">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                ref={(node) => {
                                    itemRefs.current[index] = node;
                                }}
                                data-index={String(index)}
                                className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-slate-200 py-8 transition-opacity duration-500 sm:gap-x-10 lg:py-10 ${
                                    activeIndex === index
                                        ? 'opacity-100'
                                        : 'opacity-40'
                                }`}
                            >
                                <span className="pt-1.5 font-label text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="font-cond text-2xl font-bold text-[#0A2540] sm:text-3xl">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
