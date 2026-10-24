import { benefits } from '../data';

export default function BenefitSection() {
    return (
        <section
            id="benefit"
            className="relative scroll-mt-14 border-t border-slate-200 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-white pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal="lift"
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                        WHY MAHES AYU
                    </span>
                    <h2 className="font-display text-3xl font-bold text-[#0A2540] sm:text-5xl">
                        Keunggulan Memilih Layanan Kami
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Lebih dari sekadar hiasan panggung — tim kami adalah
                        investasi rapi untuk kekhidmatan hari paling penting
                        Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            data-reveal="lift"
                            data-reveal-delay={String(Math.min(index, 5) * 90)}
                            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-[#2563EB] shadow-sm">
                                <benefit.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-cond text-xl font-bold text-[#0A2540]">
                                {benefit.title}
                            </h3>
                            <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
