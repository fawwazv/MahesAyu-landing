import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function TestimoniSection() {
    return (
        <section
            id="testimoni"
            className="relative scroll-mt-14 border-t border-slate-200 bg-[#f8fafc] pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal="lift"
                    className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                            TESTIMONI REAL MEMPELAI
                        </span>
                        <h2 className="font-display text-3xl font-bold text-[#0A2540] sm:text-4xl">
                            Bahagia Bersama Mahes Ayu
                        </h2>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4 fill-amber-400"
                                aria-hidden="true"
                            />
                        ))}
                        <span className="ml-2 font-label text-sm font-bold text-[#0A2540]">
                            5.0 / 5.0 (1,800+ Pasangan)
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            data-reveal="pop"
                            data-reveal-delay={String(Math.min(index, 5) * 120)}
                            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow-md transition"
                        >
                            <div>
                                <div className="mb-4 flex gap-1 text-xs text-amber-400">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-3.5 w-3.5 fill-amber-400"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="mb-6 text-xs leading-relaxed text-slate-600 italic sm:text-sm">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-cond font-bold text-[#2563EB]">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-[#0A2540]">
                                        {testimonial.name}
                                    </h5>
                                    <p className="text-[10px] text-slate-500">
                                        {testimonial.venue}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
