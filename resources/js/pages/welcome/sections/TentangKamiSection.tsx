import type { LucideIcon } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { about, stats } from '../data';

function AnimatedStat({
    icon: Icon,
    value,
    suffix,
    label,
}: {
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
}) {
    const numberRef = useRef<HTMLSpanElement>(null);
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        const node = numberRef.current;
        if (!node) {
            return;
        }
        const format = (n: number) => n.toLocaleString('id-ID');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(format(value));
            return;
        }
        let frame = 0;
        const duration = 1200;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }
                observer.disconnect();
                const start = performance.now();
                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setDisplay(format(Math.round(value * eased)));
                    if (progress < 1) {
                        frame = requestAnimationFrame(tick);
                    }
                };
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );
        observer.observe(node);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);

    return (
        <div>
            <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-[#2563EB] shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                    ref={numberRef}
                    className="font-display text-3xl font-bold text-[#0A2540] sm:text-4xl"
                >
                    {display}
                    {suffix}
                </span>
            </div>
            <p className="mt-2 text-xs font-medium text-slate-500">{label}</p>
        </div>
    );
}

export default function TentangKamiSection() {
    return (
        <section
            id="tentang-kami"
            className="relative scroll-mt-14 border-t border-slate-200 bg-[#f8fafc] pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div data-reveal>
                        <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                            {about.eyebrow}
                        </span>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">
                            {about.heading}
                        </h2>
                        {about.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph.slice(0, 24)}
                                className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base"
                            >
                                {paragraph}
                            </p>
                        ))}
                        <p className="mt-6 flex items-center gap-2 font-label text-[11px] font-bold tracking-wider text-[#0A2540] uppercase">
                            <BadgeCheck
                                className="h-4 w-4 text-[#2563EB]"
                                aria-hidden="true"
                            />
                            Layanan Resmi Maheswari Enterprise (MHSWR)
                        </p>
                    </div>
                    <div data-reveal data-reveal-delay="150">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                            <img
                                src={about.image}
                                alt={about.imageAlt}
                                className="aspect-[4/3] w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div
                    data-reveal
                    className="mt-10 border-t border-slate-200 pt-10"
                >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:hidden">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                data-reveal
                                data-reveal-delay={String(index * 100)}
                            >
                                <AnimatedStat {...stat} />
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:justify-between">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <AnimatedStat {...stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
