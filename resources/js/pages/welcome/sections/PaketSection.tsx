import { BadgeCheck, Check, X } from 'lucide-react';
import { waLink } from '../data';

export default function PaketSection() {
    return (
        <section
            id="paket"
            className="relative scroll-mt-14 border-t border-slate-200 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-white pt-8 pb-24"
        >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div
                    data-reveal="lift"
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                        INVESTASI MOMEN SEKALI SEUMUR HIDUP
                    </span>
                    <h2 className="font-display text-3xl font-bold text-[#0A2540] sm:text-5xl">
                        Pilihan Paket Investasi
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Transparan, tanpa biaya tersembunyi, dengan jaminan
                        kepuasan dan pelayanan sepenuh hati.
                    </p>
                </div>
                <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
                    <div
                        data-reveal="lift"
                        className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                    >
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-cond text-xl font-bold text-[#0A2540]">
                                    Paket Silver
                                </h3>
                                <span className="rounded-md bg-slate-100 px-2.5 py-1 font-label text-[10px] font-bold text-slate-700">
                                    STARTER
                                </span>
                            </div>
                            <p className="mb-6 text-xs text-slate-500">
                                Pilihan ringkas & elegan untuk resepsi
                                pernikahan sederhana atau syukuran intim.
                            </p>
                            <div className="mb-6 border-b border-slate-100 pb-6">
                                <span className="block text-xs text-slate-400 line-through">
                                    Rp 249.000
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-semibold text-[#2563EB]">
                                        Rp
                                    </span>
                                    <span className="text-4xl font-extrabold text-[#0A2540]">
                                        149.000
                                    </span>
                                </div>
                                <span className="text-[11px] text-slate-500">
                                    Sekali bayar untuk 1 acara
                                </span>
                            </div>
                            <ul className="mb-8 space-y-3.5 text-xs text-slate-700">
                                {[
                                    'Pilihan 1 Template Pilihan',
                                    'Nama Tamu Tanpa Batas (Unlimited)',
                                    'Navigasi Peta Google Maps',
                                    'Countdown Waktu Acara',
                                    'Musik Backsound Standar',
                                    'Rekening Amplop Digital',
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <Check
                                            className="h-4 w-4 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                                {[
                                    'QR Code Check-in Tamu',
                                    'Custom Domain (.com)',
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-slate-400 line-through"
                                    >
                                        <X
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={waLink(
                                'Halo Admin Mahes Ayu, saya ingin memesan Paket Silver (Rp 149.000)',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-xl border-2 border-slate-300 py-3.5 text-center text-xs font-bold tracking-wider text-[#0A2540] uppercase transition hover:border-[#0A2540] hover:bg-slate-50"
                        >
                            Pilih Paket Silver
                        </a>
                    </div>

                    <div
                        data-reveal="lift"
                        data-reveal-delay="150"
                        className="relative flex flex-col justify-between rounded-3xl border-2 border-[#2563EB] bg-[#0A2540] p-8 text-white shadow-2xl transition-all lg:-translate-y-4"
                    >
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2563EB] px-4 py-1 text-[10px] font-bold tracking-widest uppercase shadow-md">
                            PALING BANYAK DIPILIH (RECOMMENDED)
                        </div>
                        <div>
                            <div className="mt-2 mb-4 flex items-center justify-between">
                                <h3 className="font-cond text-2xl font-bold text-white">
                                    Paket Royal Gold
                                </h3>
                                <span className="rounded-md border border-blue-400/30 bg-blue-500/20 px-2.5 py-1 font-label text-[10px] font-bold text-sky-300">
                                    AKTIF SELAMANYA
                                </span>
                            </div>
                            <p className="mb-6 text-xs text-slate-300">
                                Pilihan terlengkap & terfavorit calon mempelai
                                dengan fitur interaktif penuh tanpa kompromi.
                            </p>
                            <div className="mb-6 border-b border-white/15 pb-6">
                                <span className="block text-xs text-slate-400 line-through">
                                    Rp 399.000
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-semibold text-sky-400">
                                        Rp
                                    </span>
                                    <span className="text-4xl font-black text-white">
                                        249.000
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-sky-300">
                                    Masa Aktif Selamanya (Lifetime Record)
                                </span>
                            </div>
                            <ul className="mb-8 space-y-3.5 text-xs text-slate-200">
                                {[
                                    'Bebas Pilih Seluruh Tema Premium',
                                    'Nama Tamu Tanpa Batas + Format Pesan WA',
                                    'Galeri Foto HD (Hingga 20 Foto + 1 Video)',
                                    'Musik Bebas Request (Lagu Custom Anda)',
                                    'Buku Ucapan & Konfirmasi RSVP Real-time',
                                    'Integrasi Live Streaming YouTube / IG',
                                    'Cerita Cinta (Love Story Milestone)',
                                    'Revisi Prioritas Cepat Sampai Puas',
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <BadgeCheck
                                            className="h-4 w-4 shrink-0 text-sky-400"
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={waLink(
                                'Halo Admin Mahes Ayu, saya ingin memesan Paket Royal Gold (Rp 249.000)',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-xl bg-[#2563EB] py-4 text-center text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/40 transition hover:bg-[#1d4ed8]"
                        >
                            Pesan Paket Royal Gold Sekarang
                        </a>
                    </div>

                    <div
                        data-reveal="lift"
                        data-reveal-delay="300"
                        className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-400 hover:shadow-md"
                    >
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-cond text-xl font-bold text-[#0A2540]">
                                    Paket Diamond VIP
                                </h3>
                                <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-label text-[10px] font-bold text-[#2563EB]">
                                    ALL-IN VIP
                                </span>
                            </div>
                            <p className="mb-6 text-xs text-slate-500">
                                Solusi eksklusif VVIP dengan domain nama
                                mempelai, filter Instagram, & sistem QR penerima
                                tamu.
                            </p>
                            <div className="mb-6 border-b border-slate-100 pb-6">
                                <span className="block text-xs text-slate-400 line-through">
                                    Rp 699.000
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-semibold text-[#2563EB]">
                                        Rp
                                    </span>
                                    <span className="text-4xl font-extrabold text-[#0A2540]">
                                        399.000
                                    </span>
                                </div>
                                <span className="text-[11px] text-slate-500">
                                    Termasuk Domain .com / .site 1 Tahun
                                </span>
                            </div>
                            <ul className="mb-8 space-y-3.5 text-xs text-slate-700">
                                {[
                                    'Seluruh Fitur Paket Royal Gold',
                                    'Domain Custom (romeo-juliet.com)',
                                    'Sistem QR Code Check-In Tamu Undangan',
                                    'Dashboard Buku Tamu Digital Resepsi',
                                    'Filter Instagram Story Wedding Kustom',
                                    'Dedicated Account Manager MHSWR',
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <Check
                                            className="h-4 w-4 shrink-0 text-[#2563EB]"
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={waLink(
                                'Halo Admin Mahes Ayu, saya ingin memesan Paket Diamond VIP (Rp 399.000)',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-xl border-2 border-[#2563EB] py-3.5 text-center text-xs font-bold tracking-wider text-[#2563EB] uppercase transition hover:bg-blue-50"
                        >
                            Pilih Paket Diamond VIP
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
