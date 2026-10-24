import { WandSparkles } from 'lucide-react';
import { templates, waLink } from '../data';

export default function KatalogSection() {
    return (
        <section
            id="katalog"
            className="relative scroll-mt-14 bg-white pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal
                    className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                            CURATED ATELIER ARCHIVE
                        </span>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">
                            Katalog Desain Eksklusif
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600 md:text-base">
                        Setiap tema dirancang secara presisi memadukan estetika
                        nusantara, sentuhan modern editorial, serta performa
                        loading ultra-ringan di semua gadget smartphone.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template, index) => (
                        <article
                            key={template.title}
                            data-reveal
                            data-reveal-delay={String(Math.min(index, 5) * 90)}
                            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
                        >
                            <div>
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <img
                                        src={template.image}
                                        alt={template.alt}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <span
                                        className={`absolute top-4 left-4 rounded-full border px-3 py-1 font-label text-xs font-bold ${template.badgeClass}`}
                                    >
                                        {template.badge}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span
                                            className={`font-label text-xs font-bold ${template.codeClass}`}
                                        >
                                            {template.code}
                                        </span>
                                    </div>
                                    <h3 className="font-cond text-xl font-bold text-[#0A2540] transition group-hover:text-[#2563EB]">
                                        {template.title}
                                    </h3>
                                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                                        {template.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {template.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-6 pt-0">
                                <a
                                    href={waLink(template.waText)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full rounded-xl bg-[#2563EB] py-2.5 text-center font-body text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1d4ed8]"
                                >
                                    Pilih Desain Ini
                                </a>
                            </div>
                        </article>
                    ))}
                    <article
                        data-reveal
                        className="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-slate-50 p-8 text-center transition-all duration-500 hover:border-[#2563EB]"
                    >
                        <div className="my-auto">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-2xl text-[#2563EB] shadow-sm">
                                <WandSparkles
                                    className="h-7 w-7"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="mb-2 font-cond text-2xl font-bold text-[#0A2540]">
                                Desain Kustom Eksklusif (Bespoke)
                            </h3>
                            <p className="mx-auto max-w-xs text-xs leading-relaxed text-slate-600">
                                Punya konsep ilustrasi sendiri, layout impian,
                                atau tema adat nusantara spesifik (Batak,
                                Minang, Bali, Bugis)? Tim desainer MHSWR siap
                                mewujudkannya khusus untuk Anda.
                            </p>
                        </div>
                        <a
                            href={waLink(
                                'Halo Admin Mahes Ayu, saya ingin konsultasi pembuatan desain kustom Bespoke',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full rounded-xl border-2 border-[#2563EB] bg-white py-3 text-center font-body text-xs font-bold text-[#2563EB] shadow-sm transition hover:bg-[#2563EB] hover:text-white"
                        >
                            Konsultasikan Konsep Impian
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
