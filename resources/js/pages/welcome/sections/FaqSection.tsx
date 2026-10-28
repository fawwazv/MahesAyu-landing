import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqs, waLink } from '../data';

export default function FaqSection() {
    const half = Math.ceil(faqs.length / 2);
    const columns = [faqs.slice(0, half), faqs.slice(half)];

    return (
        <section
            id="faq"
            className="relative scroll-mt-14 border-t border-slate-200 bg-[#f8fafc] pt-8 pb-16"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal="lift"
                    className="mx-auto mb-8 max-w-3xl text-center"
                >
                    <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                        GUIDEBOOK & FAQ
                    </span>
                    <h2 className="font-display text-3xl font-bold text-[#0A2540] sm:text-5xl">
                        Pertanyaan Umum
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Hal-hal yang paling sering ditanyakan keluarga sebelum
                        mengunci jadwal. Belum terjawab? Silakan chat tim kami.
                    </p>
                </div>
                <div
                    data-reveal
                    className="grid grid-cols-1 items-start gap-4 md:grid-cols-2"
                >
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-4">
                            {column.map((faq) => (
                                <details
                                    key={faq.question}
                                    className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-all open:border-[#2563EB]/40 open:shadow-md hover:border-blue-200"
                                >
                                    <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                                        <h3 className="font-cond text-base font-bold text-[#0A2540]">
                                            {faq.question}
                                        </h3>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#2563EB] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-open:rotate-180">
                                            <ChevronDown
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-4 group-open:animate-[faq-reveal_0.3s_ease-out]">
                                        <p className="text-xs leading-relaxed text-slate-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    ))}
                </div>
                <div
                    data-reveal="pop"
                    className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:flex-row"
                >
                    <div className="text-center sm:text-left">
                        <h4 className="font-cond text-lg font-bold text-[#0A2540]">
                            Masih ada pertanyaan lain?
                        </h4>
                        <p className="mt-1 text-xs text-slate-600">
                            Tim Mahes Ayu siap membantu Anda setiap hari (08.00
                            - 22.00 WIB).
                        </p>
                    </div>
                    <a
                        href={waLink(
                            'Halo Mahes Ayu, saya ingin bertanya seputar layanan pagar ayu dan wedding organizer',
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1d4ed8]"
                    >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <span>Tanya via WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
