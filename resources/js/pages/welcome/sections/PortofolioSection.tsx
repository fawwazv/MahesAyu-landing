import { portfolios } from '../data';

export default function PortofolioSection() {
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
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
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
        </section>
    );
}
