import { crews } from '../data';

export default function CrewSection() {
    return (
        <section
            id="crew"
            className="relative scroll-mt-14 border-t border-slate-200 bg-white pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal
                    className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                            THE FACES BEHIND THE WARMTH
                        </span>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">
                            Crew Profesional Kami
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600 md:text-base">
                        Setiap personel Mahes Ayu terlatih dalam protokoler
                        penyambutan dan tampil seragam — rapi, ramah, dan siap
                        menjaga kekhidmatan acara keluarga Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {crews.map((crew, index) => (
                        <article
                            key={crew.name}
                            data-reveal
                            data-reveal-delay={String(Math.min(index, 5) * 90)}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <img
                                    src={crew.image}
                                    alt={crew.alt}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                {crew.badge && (
                                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#0A2540]/90 px-3 py-1 font-label text-xs font-bold text-white">
                                        {crew.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-cond text-xl font-bold text-[#0A2540] transition group-hover:text-[#2563EB]">
                                    {crew.name}
                                </h3>
                                <p className="mt-1 font-label text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                                    {crew.role}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
