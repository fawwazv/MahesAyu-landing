import { crews, teamPhotos } from '../data';

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
                {teamPhotos[0] && (
                    <div
                        data-reveal
                        className="mb-8 flex flex-col gap-4 md:h-[60vh] md:flex-row lg:gap-6"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 md:h-[60vh] md:min-w-0 md:flex-1">
                            <img
                                src={teamPhotos[0].image}
                                alt={teamPhotos[0].alt}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        {teamPhotos[1] && (
                            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 md:h-[60vh] md:w-[45vh]">
                                <img
                                    src={teamPhotos[1].image}
                                    alt={teamPhotos[1].alt}
                                    className="absolute inset-0 h-full w-full origin-top scale-105 object-cover object-top"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                    {crews.map((crew, index) => (
                        <article
                            key={crew.name}
                            data-reveal
                            data-reveal-delay={String(Math.min(index, 5) * 90)}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <img
                                    src={crew.image}
                                    alt={crew.alt}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {crew.badge && (
                                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#0A2540]/90 px-3 py-1 font-label text-xs font-bold text-white">
                                        {crew.badge}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="font-cond text-lg font-bold text-[#0A2540] transition group-hover:text-[#2563EB]">
                                    {crew.name}
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">
                                    {crew.schedule}
                                </p>
                                <p className="mt-3 font-label text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                                    {crew.role}
                                </p>
                                <p className="mt-1 text-xs text-slate-600 italic">
                                    Spesialisasi: {crew.specialty}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
