import {
    Building2,
    Clock,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    ShieldCheck,
} from 'lucide-react';
import { handleAnchorClick, waLink } from '../data';

const footerNavLinks = [
    { href: '#tentang-kami', label: 'Tentang Kami' },
    { href: '#crew', label: 'Crew' },
    { href: '#benefit', label: 'Benefit' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#faq', label: 'FAQ' },
];

export default function SiteFooter() {
    return (
        <footer className="border-t border-blue-900/60 bg-[#0A2540] pt-16 pb-12 text-slate-300">
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
                    <div className="space-y-4 md:col-span-5">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo/mhs-ayu-logo.png"
                                alt="Logo MHS Ayu — Maheswari Enterprise"
                                className="h-10 w-auto rounded-lg"
                            />
                            <div>
                                <span className="block font-display text-lg font-bold tracking-wider text-white">
                                    MAHES AYU
                                </span>
                                <span className="block font-label text-[10px] font-semibold tracking-widest text-sky-400 uppercase">
                                    by Maheswari Enterprise
                                </span>
                            </div>
                        </div>
                        <p className="max-w-sm text-xs leading-relaxed text-slate-300">
                            Layanan resmi penyambut tamu (pagar ayu) di bawah
                            naungan Maheswari Enterprise (MHSWR). Kami menjaga
                            kehormatan acara keluarga Anda dari pintu masuk
                            hingga tamu terakhir pulang — dengan busana tertata,
                            protokoler tepat, dan pelayanan hangat.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                aria-label="Instagram Maheswari Enterprise"
                                href="https://instagram.com/maheswari.enterprise"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white transition hover:bg-[#2563EB] hover:text-white"
                            >
                                <Instagram
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                            <a
                                aria-label="WhatsApp Mahes Ayu"
                                href={waLink(
                                    'Halo Mahes Ayu Maheswari, saya ingin konsultasi layanan pagar ayu',
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white transition hover:bg-emerald-500 hover:text-white"
                            >
                                <MessageCircle
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                            <a
                                aria-label="Email Maheswari"
                                href="mailto:info@maheswarienterprise.com"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white transition hover:bg-[#2563EB] hover:text-white"
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3 md:col-span-3">
                        <h5 className="font-label text-xs font-bold tracking-wider text-white uppercase">
                            Jelajahi Halaman
                        </h5>
                        <ul className="space-y-2.5 text-xs">
                            {footerNavLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(event) =>
                                            handleAnchorClick(event, link.href)
                                        }
                                        className="transition hover:text-sky-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3 md:col-span-4">
                        <h5 className="font-label text-xs font-bold tracking-wider text-white uppercase">
                            Atelier & Kontak Resmi
                        </h5>
                        <div className="space-y-2 text-xs text-slate-300">
                            <p>
                                <MapPin
                                    className="mr-2 inline h-3.5 w-3.5 text-sky-400"
                                    aria-hidden="true"
                                />
                                <strong>Atelier Jakarta:</strong> Menara
                                Kuningan Lt. 15, Jl. H.R. Rasuna Said, Jakarta
                                Selatan
                            </p>
                            <p>
                                <Building2
                                    className="mr-2 inline h-3.5 w-3.5 text-sky-400"
                                    aria-hidden="true"
                                />
                                <strong>Atelier Jawa Barat:</strong> Pajajaran
                                Park Residence, Kota Bogor
                            </p>
                            <p>
                                <Phone
                                    className="mr-2 inline h-3.5 w-3.5 text-sky-400"
                                    aria-hidden="true"
                                />
                                <strong>Hotline Pemesanan:</strong> +62
                                819-0107-3574
                            </p>
                            <p>
                                <Clock
                                    className="mr-2 inline h-3.5 w-3.5 text-sky-400"
                                    aria-hidden="true"
                                />
                                <strong>Jam Operasional:</strong> Setiap Hari
                                (08.00 - 22.00 WIB)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-slate-400 sm:flex-row">
                    <p>
                        © 2026 MAHES AYU by Maheswari Enterprise (MHSWR).
                        Seluruh hak cipta dilindungi undang-undang.
                    </p>
                    <div className="flex items-center gap-4 font-label text-[10px]">
                        <span className="text-emerald-400">
                            <ShieldCheck
                                className="mr-1 inline h-3.5 w-3.5"
                                aria-hidden="true"
                            />
                            SSL 256-Bit Encrypted
                        </span>
                        <span>•</span>
                        <span>Bogor & Jakarta, Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
