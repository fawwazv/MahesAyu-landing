import { usePinnedHorizontalScroll } from '@/hooks/use-scroll-dynamics';
import { orderSteps } from '../data';

export default function CaraPesanSection() {
    usePinnedHorizontalScroll('cara-pesan');

    return (
        <section
            id="cara-pesan"
            data-pinned
            className="relative scroll-mt-14 overflow-clip border-t border-slate-200 bg-white pt-8 pb-24 md:pt-10 md:pb-28"
        >
            <div className="pinned-sticky">
                <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                    <div className="mb-10 md:mb-14">
                        <div className="max-w-2xl text-left">
                            <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                                EASY & PRACTICAL
                            </span>
                            <h2 className="font-display text-4xl leading-tight font-bold text-[#0A2540] sm:text-5xl">
                                6 Langkah Praktis Undangan Jadi
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                                Kami mendampingi Anda melalui alur pemesanan
                                yang jelas dan profesional — scroll ke bawah
                                untuk melihat semua langkah &rarr;
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative mt-2">
                    <div data-pinned-track className="pinned-track relative">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute top-1/2 left-0 h-0.5 w-full bg-[#2563EB]"
                        />
                        {orderSteps.map((step, index) => (
                            <article
                                key={step.title}
                                className="relative flex min-h-[380px] w-[84vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 bg-[#eff6ff] p-8 text-left transition hover:border-blue-300 hover:shadow-lg sm:w-[360px] sm:p-10 lg:min-h-[420px] lg:w-[460px]"
                            >
                                <div className="mb-12 flex items-start justify-between">
                                    <span
                                        aria-hidden="true"
                                        className="number-outline font-display text-8xl leading-none font-black"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md shadow-blue-600/25">
                                        <step.icon
                                            className="h-7 w-7"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-cond text-xl font-bold text-[#0A2540] sm:text-2xl">
                                        {step.title}
                                    </h4>
                                    <p className="mt-2 text-xs leading-relaxed text-slate-600 italic sm:text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mx-6 mt-2 sm:mx-10 lg:mx-48">
                        <div
                            aria-hidden="true"
                            className="h-0.5 w-full overflow-hidden rounded-full bg-slate-200"
                        >
                            <div
                                data-pinned-progress
                                className="h-full rounded-full bg-[#2563EB]"
                                style={{ width: '0%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
