import { Head } from '@inertiajs/react';
import {
    ArrowUpRight,
    BadgeCheck,
    BellRing,
    Building2,
    Check,
    Clock,
    FileUp,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Music,
    Palette,
    Phone,
    QrCode,
    Send,
    ShieldCheck,
    Star,
    WandSparkles,
    X,
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState, type FormEventHandler, type MouseEvent } from 'react';
import {
    useScrollDynamics,
    smoothScrollToSection,
    usePinnedHorizontalScroll,
} from '@/hooks/use-scroll-dynamics';

const SECTION_IDS = ['katalog', 'paket', 'cara-pesan', 'testimoni', 'pesan'];

const WA_NUMBER = '6281901073574';
const HERO_WA_MESSAGE =
    'Halo Mahes Ayu Maheswari, saya ingin konsultasi undangan digital dan wedding organizer';
const waLink = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const heroCards = [
    {
        animation: 'animate-float-1',
        badge: 'ROYAL SIKEP',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-jawa.jpg',
        alt: 'Pernikahan Adat Jawa Mahes Ayu',
        couple: 'Raden & Dyah Ayu',
        venue: 'Gedung Sasana Kriya',
        footerLeft: '1.2k RSVP',
        footerIcon: 'badge' as const,
        offset: '',
    },
    {
        animation: 'animate-float-2',
        badge: 'EDITORIAL LUXE',
        badgeClass: 'bg-blue-600/90 text-white border-white/20',
        image: '/images/stitch/hero-editorial.jpg',
        alt: 'Resepsi Modern Editorial MHSWR',
        couple: 'Vito & Gabriella',
        venue: 'The Glass House Bunga',
        footerLeft: 'LIVE STREAMING',
        footerIcon: 'heart' as const,
        offset: '-mt-4 lg:-mt-8',
    },
    {
        animation: 'animate-float-3',
        badge: 'PREMIUM REELS',
        badgeClass: 'bg-[#2563EB] text-white',
        image: '/images/stitch/hero-akad.jpg',
        alt: 'Akad Nikah Suci Maheswari',
        couple: 'Sacred Vow & Intimate Ballroom',
        venue: 'Hotel Mulia Senayan',
        footerLeft: 'QR PASS VVIP',
        footerIcon: 'seamless' as const,
        offset: '',
        featured: true,
    },
    {
        animation: 'animate-float-4',
        badge: 'TRADISI AGUNG',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-sunda.jpg',
        alt: 'Pernikahan Tradisional Elegan',
        couple: 'Dimas & Anindita',
        venue: 'Puri Begawan Bogor',
        footerLeft: 'Audio HD Stereo',
        footerIcon: 'music' as const,
        offset: '-mt-4 lg:-mt-8',
    },
    {
        animation: 'animate-float-1',
        badge: 'MHSWR CREW',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-crew.jpg',
        alt: 'Maheswari Wedding Organizer Crew',
        couple: 'MHSWR Certified Team',
        venue: 'Zero Blunder Protocol',
        footerLeft: 'On Time Guaranteed',
        footerIcon: 'shield' as const,
        offset: 'hidden sm:block',
    },
];

const templates = [
    {
        image: '/images/stitch/katalog-jawa.jpg',
        alt: 'Template Royal Javanese Gold',
        badge: 'BEST SELLER ADAT',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        code: '01 // ADAT TRADISIONAL',
        codeClass: 'text-[#2563EB]',
        title: 'Royal Javanese Gold (Kraton Edition)',
        description:
            'Nuansa ukiran prada emas keraton, font aksara estetis, ornamen gunungan wayang halus dengan pemutar gending siraman & panggih sakral.',
        tags: ['Gending Jawa', 'Peta Google Maps', 'Live Streaming'],
        waText: 'Halo Admin Mahes Ayu, saya tertarik dengan Template Royal Javanese Gold',
    },
    {
        image: '/images/stitch/katalog-editorial.jpg',
        alt: 'Template Modern Minimalist Editorial',
        badge: 'MODERN CONTEMPORARY',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        code: '02 // EDITORIAL VOGUE',
        codeClass: 'text-slate-700',
        title: 'Seraphic Minimalist Editorial',
        description:
            'Tipografi majalah mode Eropa yang bersih, layout monokromatis mewah, galeri polaroid interaktif, dan animasi smooth scroll modern.',
        tags: ['Audio Romantic Pop', 'Countdown Timer', 'Wishes Book'],
        waText: 'Halo Admin Mahes Ayu, saya tertarik dengan Template Seraphic Minimalist',
    },
    {
        image: '/images/stitch/katalog-botanica.jpg',
        alt: 'Template Botanica Sage Garden',
        badge: 'OUTDOOR & GARDEN',
        badgeClass: 'bg-emerald-800/90 text-emerald-100 border-emerald-500/30',
        code: '03 // BOTANICAL ROMANCE',
        codeClass: 'text-emerald-600',
        title: 'Serenade Botanica Sage & Rose',
        description:
            'Sentuhan rona sage green dan dedaunan eucalyptus elegan, sangat ideal untuk konsep garden party, rustic glam, dan intimate chapel.',
        tags: ['Gift Amplop Digital', 'Galeri Video 4K', 'Love Story Timeline'],
        waText: 'Halo Admin Mahes Ayu, saya tertarik dengan Template Serenade Botanica',
    },
    {
        image: '/images/stitch/katalog-islamic.jpg',
        alt: 'Template Islamic Modern Elegance',
        badge: 'ISLAMIC SERIES',
        badgeClass: 'bg-[#0A2540]/90 text-sky-200 border-sky-400/30',
        code: '04 // ISLAMIC SACRED',
        codeClass: 'text-sky-700',
        title: 'Al-Barakah Medina Emerald',
        description:
            "Kutipan ayat suci Ar-Rum khat kufi elegan, kaligrafi nama mempelai, tata krama kehadiran syar'i, dan jadwal akad terpisah yang rapi.",
        tags: ['Murottal / Instrumental', "RSVP Syar'i", 'Doa Berjamaah'],
        waText: 'Halo Admin Mahes Ayu, saya tertarik dengan Template Al-Barakah Medina',
    },
    {
        image: '/images/stitch/katalog-midnight.jpg',
        alt: 'Template Luxury Midnight Monogram',
        badge: 'ULTRA LUXURY',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        code: '05 // BLACK TIE EVENT',
        codeClass: 'text-[#2563EB]',
        title: 'Midnight Grand Monogram & Champagne',
        description:
            'Estetika grand ballroom dengan inisial wax stamp 3D berputar elegan, dark mode eksklusif, serta integrasi pemindai QR penerima tamu.',
        tags: ['Custom Monogram 3D', 'QR Check-in', 'VIP Guest Badge'],
        waText: 'Halo Admin Mahes Ayu, saya tertarik dengan Template Midnight Grand Monogram',
    },
];

const navLinks = [
    { href: '#katalog', label: 'Katalog' },
    { href: '#paket', label: 'Paket' },
    { href: '#cara-pesan', label: 'Cara Pesan' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#pesan', label: 'Pesan' },
];

const orderSteps = [
    {
        icon: Palette,
        title: 'Pilih Desain & Paket',
        description:
            'Pilih konsep visual kesukaan Anda dan tentukan paket yang sesuai dengan agenda acara Anda.',
    },
    {
        icon: FileUp,
        title: 'Isi Data & Unggah Foto',
        description:
            'Kirimkan nama kedua mempelai, orang tua, rincian waktu, lokasi acara, serta foto prewedding favorit.',
    },
    {
        icon: WandSparkles,
        title: 'Produksi & Review (24-48 Jam)',
        description:
            'Tim kreatif MHSWR memproses website Anda dengan cepat. Anda dapat meninjau dan merevisi teks jika ada perubahan.',
    },
    {
        icon: Send,
        title: 'Sebar Undangan Personal',
        description:
            'Gunakan generator nama otomatis di dashboard untuk membagikan tautan undangan personal ke seluruh kerabat via WhatsApp.',
    },
    {
        icon: BellRing,
        title: 'Pantau RSVP Real-time',
        description:
            'Pantau konfirmasi kehadiran, ucapan, dan amplop digital yang masuk secara real-time dari dashboard.',
    },
    {
        icon: QrCode,
        title: 'Hari-H & Arsip Abadi',
        description:
            'Check-in tamu dengan QR di hari-H, dan tautan undangan tetap aktif selamanya sebagai kenangan.',
    },
];

const testimonials = [
    {
        initials: 'DA',
        quote: '"Bener-bener gak salah pilih Mahes Ayu & MHSWR! Desain adat Jawanya mewah banget, gak norak. Musik gendingnya pas dibuka langsung bikin merinding khidmat. Pas disebar ke keluarga besar di Solo & Jakarta pada muji karena praktis langsung nyambung Maps!"',
        name: 'dr. Dimas & Anindya, S.Ked',
        venue: 'Resepsi di Sasana Modern Tangerang',
    },
    {
        initials: 'RN',
        quote: '"Fitur QR Code check-in di Paket Diamond nolong banget pas hari H! Resepsi 1,200 undangan gak pake antre berjubel di meja registrasi. Laporan tamu yang hadir langsung tercatat rapi. Admin MHSWR juga responsif parah pas ada revisi jam akad dadakan!"',
        name: 'Briptu D. Adji & Brigpol Nola',
        venue: 'Balai Kartini Exhibition Hall Jakarta',
    },
    {
        initials: 'FR',
        quote: '"Template Minimalist Editorial nya bener-bener kayak majalah luar negeri! Tampilannya estetik, foto prewed kami kelihatan jernih tanpa pecah. Amplop digital QRIS nya juga lancar banget buat teman-teman kantor yang berhalangan hadir."',
        name: 'Ferdian, S.T. & Rachel, M.B.A',
        venue: 'Plataran Dharmawangsa Jakarta',
    },
];

const PACKAGE_OPTIONS = [
    {
        value: 'Paket Royal Gold (Rp 249.000) - Recommended',
        label: 'Paket Royal Gold (Rp 249.000) - Recommended',
    },
    {
        value: 'Paket Silver (Rp 149.000)',
        label: 'Paket Silver (Rp 149.000)',
    },
    {
        value: 'Paket Diamond VIP (Rp 399.000)',
        label: 'Paket Diamond VIP (Rp 399.000)',
    },
    {
        value: 'Custom Bespoke Design',
        label: 'Desain Kustom Spesial (Bespoke)',
    },
];

const THEME_OPTIONS = [
    {
        value: 'Royal Javanese Gold',
        label: 'Royal Javanese Gold (Kraton)',
    },
    {
        value: 'Seraphic Minimalist Editorial',
        label: 'Seraphic Minimalist Editorial',
    },
    {
        value: 'Serenade Botanica Sage',
        label: 'Serenade Botanica Sage & Rose',
    },
    {
        value: 'Al-Barakah Medina Emerald',
        label: "Al-Barakah Medina Emerald (Syar'i)",
    },
    {
        value: 'Midnight Grand Monogram',
        label: 'Midnight Grand Monogram (VIP Black)',
    },
    {
        value: 'Konsultasi Tema Lainnya',
        label: 'Saya Ingin Konsultasi Tema Lain',
    },
];

export default function Welcome() {
    const { activeSection, progress, scrolled, navHidden } = useScrollDynamics({
        sectionIds: SECTION_IDS,
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [coupleName, setCoupleName] = useState('');
    const [waPhone, setWaPhone] = useState('');
    const [packageChoice, setPackageChoice] = useState(
        'Paket Royal Gold (Rp 249.000) - Recommended',
    );
    const [themeChoice, setThemeChoice] = useState('Royal Javanese Gold');
    const [eventDate, setEventDate] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [notes, setNotes] = useState('');

    const handleAnchorClick = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (!href.startsWith('#')) {
            return;
        }
        event.preventDefault();
        setIsMenuOpen(false);
        smoothScrollToSection(href.slice(1));
    };

    usePinnedHorizontalScroll('cara-pesan');

    const submitOrder: FormEventHandler = (e) => {
        e.preventDefault();
        const textMessage = `Halo Tim Mahes Ayu (Maheswari Enterprise),\n\nSaya ingin memesan Undangan Pernikahan Digital:\n- Nama Mempelai: ${coupleName}\n- No. WhatsApp: ${waPhone}\n- Pilihan Paket: ${packageChoice}\n- Pilihan Tema: ${themeChoice}\n- Tanggal Acara: ${eventDate}\n- Kota: ${eventCity || '-'}\n- Catatan: ${notes || 'Tidak ada catatan tambahan'}\n\nMohon informasi ketersediaan slot dan proses pembuatan selanjutnya. Terima kasih!`;
        window.open(waLink(textMessage), '_blank');
    };

    return (
        <>
            <Head title="MAHES AYU by Maheswari Enterprise | Undangan Pernikahan Digital Eksklusif" />
            <div className="scroll-smooth bg-white font-body text-slate-800 antialiased selection:bg-[#2563EB] selection:text-white">
                {/* Slim auth bar — preserves login/register/dashboard */}
                <div
                    aria-hidden="true"
                    className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#2563EB]"
                    style={{ transform: `scaleX(${progress})` }}
                />
                <div
                    className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-transform duration-300 ${navHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'shadow-lg shadow-slate-900/5' : ''}`}
                >
                    <div className="flex w-full items-center justify-between px-6 py-2.5 sm:px-10 lg:px-16">
                        <a
                            href="#beranda"
                            onClick={(event) =>
                                handleAnchorClick(event, '#beranda')
                            }
                            className="font-display text-sm font-bold tracking-wider text-[#0A2540]"
                        >
                            MAHES AYU
                            <span className="ml-2 hidden font-body text-[10px] font-semibold tracking-widest text-slate-500 sm:inline">
                                BY MAHESWARI ENTERPRISE
                            </span>
                        </a>
                        <nav className="hidden items-center gap-1 text-xs font-semibold md:flex">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(event) =>
                                        handleAnchorClick(event, link.href)
                                    }
                                    aria-current={
                                        activeSection === link.href.slice(1)
                                            ? 'true'
                                            : undefined
                                    }
                                    className={`rounded-full px-3.5 py-2 transition hover:bg-slate-100 hover:text-[#0A2540] ${activeSection === link.href.slice(1) ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-600'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2">
                            <nav className="hidden items-center gap-2 text-xs font-semibold sm:flex">
                                <a
                                    href={waLink(HERO_WA_MESSAGE)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-[#0A2540] px-4 py-2 text-white transition hover:bg-[#0f365d]"
                                >
                                    Pesan Sekarang
                                </a>
                            </nav>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={
                                    isMenuOpen
                                        ? 'Tutup menu navigasi'
                                        : 'Buka menu navigasi'
                                }
                                aria-expanded={isMenuOpen}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0A2540] transition hover:bg-slate-100 md:hidden"
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <Menu
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md md:hidden">
                            <nav className="flex w-full max-w-none flex-col px-6 py-3 sm:px-10 lg:px-16">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(event) => {
                                            handleAnchorClick(event, link.href);
                                        }}
                                        className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 hover:text-[#0A2540] ${activeSection === link.href.slice(1) ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-700'}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={waLink(HERO_WA_MESSAGE)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full rounded-full bg-[#0A2540] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#0f365d]"
                                >
                                    Pesan Sekarang
                                </a>
                            </nav>
                        </div>
                    )}
                </div>

                {/* BEGIN: Hero */}
                <header
                    id="beranda"
                    className="relative flex min-h-screen w-full scroll-mt-14 flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white pt-8 pb-0 md:pt-14"
                >
                    <div
                        data-parallax="0.1"
                        className="pointer-events-none absolute inset-0 overflow-hidden"
                    >
                        <div className="animate-glow absolute -top-32 left-1/2 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[160px]" />
                        <div className="absolute top-1/3 left-10 h-[450px] w-[450px] rounded-full bg-sky-300/15 blur-[130px]" />
                        <div className="absolute right-8 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#0A2540]/5 blur-[140px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
                    </div>

                    <div className="relative z-10 mb-8 w-full max-w-none px-6 sm:px-10 md:mb-14 lg:px-16">
                        <div
                            data-parallax="0.05"
                            className="grid grid-cols-2 items-center justify-items-center gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6"
                        >
                            {heroCards.map((card) => (
                                <div
                                    key={card.image}
                                    className={`${card.animation} ${card.offset} ${card.featured ? 'z-20 col-span-2 w-full max-w-[230px] rounded-2xl border-2 border-[#2563EB] bg-white p-3 shadow-[0_15px_35px_rgba(37,99,235,0.18)] transition duration-500 sm:col-span-1' : 'hero-card-shadow w-full max-w-[215px] rounded-2xl border border-slate-200/80 bg-white p-2.5 transition duration-500 hover:border-blue-500'}`}
                                >
                                    <div className="relative mb-2.5 aspect-[4/5] overflow-hidden rounded-xl">
                                        <img
                                            src={card.image}
                                            alt={card.alt}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            loading="eager"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                                        {card.featured ? (
                                            <>
                                                <div className="absolute top-2 right-2 left-2 flex items-center justify-between">
                                                    <span className="rounded-full bg-[#2563EB] px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase shadow">
                                                        PREMIUM REELS
                                                    </span>
                                                    <span className="h-2.5 w-2.5 animate-ping rounded-full bg-blue-400" />
                                                </div>
                                                <div className="absolute right-3 bottom-3 left-3 text-left">
                                                    <span className="block font-label text-[10px] text-sky-300">
                                                        #MHSWRWedding2026
                                                    </span>
                                                    <h4 className="font-cond text-sm leading-tight font-bold text-white">
                                                        {card.couple}
                                                    </h4>
                                                    <p className="mt-0.5 text-[10px] text-slate-300">
                                                        {card.venue}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span
                                                    className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-md ${card.badgeClass} border`}
                                                >
                                                    {card.badge}
                                                </span>
                                                <div className="absolute right-2 bottom-2 left-2 text-left">
                                                    <p className="truncate text-[11px] font-semibold text-white">
                                                        {card.couple}
                                                    </p>
                                                    <p className="text-[9px] text-slate-300">
                                                        {card.venue}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {card.featured ? (
                                        <div className="flex items-center justify-between px-1 pt-1 text-[11px]">
                                            <span className="font-label text-xs font-bold text-[#2563EB]">
                                                QR PASS VVIP
                                            </span>
                                            <span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                                                100% Seamless
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between px-1 text-[10px] text-slate-600">
                                            <span className="flex items-center gap-1 font-semibold text-emerald-600">
                                                {card.footerLeft ===
                                                'LIVE STREAMING' ? (
                                                    <span className="font-label text-[9px] font-bold text-[#2563EB]">
                                                        LIVE STREAMING
                                                    </span>
                                                ) : (
                                                    <>
                                                        {card.footerLeft.includes(
                                                            'RSVP',
                                                        ) && (
                                                            <BadgeCheck
                                                                className="h-3 w-3"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        {card.footerLeft}
                                                    </>
                                                )}
                                            </span>
                                            {card.footerIcon === 'heart' ? (
                                                <Heart
                                                    className="h-3.5 w-3.5 text-[#2563EB]"
                                                    aria-hidden="true"
                                                />
                                            ) : card.footerIcon === 'shield' ? (
                                                <ShieldCheck
                                                    className="h-3.5 w-3.5 text-[#2563EB]"
                                                    aria-hidden="true"
                                                />
                                            ) : card.footerIcon === 'music' ? (
                                                <Music
                                                    className="h-3.5 w-3.5 text-[#2563EB]"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Instagram
                                                    className="h-3.5 w-3.5 text-[#2563EB]"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 mt-2 w-full max-w-none px-6 sm:px-10 md:mt-4 lg:px-16">
                        <div className="grid grid-cols-1 items-end gap-8 pb-8 lg:grid-cols-12">
                            <div
                                data-reveal
                                className="text-left lg:col-span-7"
                            >
                                <div className="mb-2 flex items-center gap-2 font-label text-xs tracking-widest text-slate-500 uppercase md:text-sm">
                                    <span>JAKARTA & JAWA BARAT</span>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                                    <span>6.2088° S, 106.8456° E</span>
                                </div>
                                <div className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#2563EB] uppercase md:text-xs">
                                    <span>MAHESWARI ENTERPRISE</span>
                                    <span>•</span>
                                    <span className="text-slate-500">
                                        JAGONYA WEDDING SEJAK 2018
                                    </span>
                                </div>
                                <h1 className="text-3xl leading-[1.08] font-bold tracking-tight text-[#0A2540] sm:text-5xl lg:text-[3.5rem]">
                                    Bringing the Elegance of Sacred Wedding
                                    Moments to The World!
                                </h1>
                            </div>
                            <div
                                data-reveal
                                data-reveal-delay="120"
                                className="flex flex-col justify-end space-y-5 text-left lg:col-span-5"
                            >
                                <div className="mb-1 flex justify-start lg:justify-end">
                                    <div className="text-left lg:text-right">
                                        <span className="font-label text-sm font-bold tracking-wider text-[#2563EB]">
                                            1,800+ PASANGAN BERBAHAGIA
                                        </span>
                                        <p className="text-[11px] text-slate-500">
                                            Tersebar di Jabodetabek & Nusantara
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed font-normal text-slate-600 md:text-[15px]">
                                    Sistem ekosistem undangan digital & event
                                    organizer pernikahan terintegrasi karya
                                    Maheswari Enterprise. Dipercaya oleh lebih
                                    dari 1,800+ pasangan pengantin dengan sistem
                                    RSVP tamu cerdas, QR check-in instan, audio
                                    visual sinematik, dan kepastian momen sakral
                                    bebas rasa cemas.
                                </p>
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <a
                                        href="#katalog"
                                        onClick={(event) =>
                                            handleAnchorClick(event, '#katalog')
                                        }
                                        className="inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                    >
                                        <span>LIHAT PAKET 2026</span>
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] text-[#2563EB]">
                                            <ArrowUpRight
                                                className="h-3.5 w-3.5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </a>
                                    <a
                                        href={waLink(
                                            'Halo Mahes Ayu Maheswari, saya ingin konsultasi undangan digital dan wedding organizer',
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0A2540] bg-white px-6 py-3.5 text-xs font-semibold tracking-wider text-[#0A2540] uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                                    >
                                        <span>KONSULTASI WHATSAPP</span>
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] text-[#0A2540]">
                                            <ArrowUpRight
                                                className="h-3.5 w-3.5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-w-[100vw] overflow-x-clip border-t border-slate-200 bg-gradient-to-b from-[#f8fafc] to-white pt-6 pb-6 select-none md:pb-8">
                        <div className="relative flex w-full max-w-none items-center justify-center px-0">
                            <h2
                                data-reveal
                                className="w-full max-w-none pb-2 text-center font-display text-[13vw] leading-[0.9] font-black tracking-[-0.04em] whitespace-nowrap text-[#0A2540] opacity-95"
                            >
                                MAHES AYU
                            </h2>
                        </div>
                    </div>
                </header>

                {/* Catalog */}
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
                                Setiap tema dirancang secara presisi memadukan
                                estetika nusantara, sentuhan modern editorial,
                                serta performa loading ultra-ringan di semua
                                gadget smartphone.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {templates.map((template, index) => (
                                <article
                                    key={template.title}
                                    data-reveal
                                    data-reveal-delay={String(
                                        Math.min(index, 5) * 90,
                                    )}
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
                                        Punya konsep ilustrasi sendiri, layout
                                        impian, atau tema adat nusantara
                                        spesifik (Batak, Minang, Bali, Bugis)?
                                        Tim desainer MHSWR siap mewujudkannya
                                        khusus untuk Anda.
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

                {/* Pricing */}
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
                                Transparan, tanpa biaya tersembunyi, dengan
                                jaminan kepuasan dan pelayanan sepenuh hati.
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
                                        pernikahan sederhana atau syukuran
                                        intim.
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
                                        Pilihan terlengkap & terfavorit calon
                                        mempelai dengan fitur interaktif penuh
                                        tanpa kompromi.
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
                                            Masa Aktif Selamanya (Lifetime
                                            Record)
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
                                        mempelai, filter Instagram, & sistem QR
                                        penerima tamu.
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

                {/* Process */}
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
                                        Kami mendampingi Anda melalui alur
                                        pemesanan yang jelas dan profesional —
                                        scroll ke bawah untuk melihat semua
                                        langkah &rarr;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <div
                                data-pinned-track
                                className="pinned-track relative"
                            >
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
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
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

                {/* Testimonials */}
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
                                    data-reveal-delay={String(
                                        Math.min(index, 5) * 120,
                                    )}
                                    className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow-md transition"
                                >
                                    <div>
                                        <div className="mb-4 flex gap-1 text-xs text-amber-400">
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-3.5 w-3.5 fill-amber-400"
                                                        aria-hidden="true"
                                                    />
                                                ),
                                            )}
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

                {/* Reservation form */}
                <section
                    id="pesan"
                    className="relative scroll-mt-14 border-t border-slate-200 bg-white pt-8 pb-24"
                >
                    <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                        <div
                            data-reveal
                            className="relative overflow-hidden rounded-3xl border border-blue-200 bg-[#f8fafc] p-8 shadow-xl sm:p-12"
                        >
                            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />
                            <div className="mx-auto mb-10 max-w-xl text-center">
                                <span className="mb-2 block font-label text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                                    RESERVASI DIGITAL CEPAT
                                </span>
                                <h2 className="font-display text-3xl font-bold text-[#0A2540]">
                                    Mulai Buat Undangan Impian
                                </h2>
                                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                                    Isi formulir ringkas di bawah ini, sistem
                                    kami akan langsung menyusun draft pemesanan
                                    ke WhatsApp resmi Mahes Ayu.
                                </p>
                            </div>
                            <form onSubmit={submitOrder} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="brideGroomName"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Nama Kedua Calon Mempelai *
                                        </label>
                                        <input
                                            id="brideGroomName"
                                            type="text"
                                            required
                                            value={coupleName}
                                            onChange={(e) =>
                                                setCoupleName(e.target.value)
                                            }
                                            placeholder="Contoh: Raden & Dyah Ayu"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="waPhone"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Nomor WhatsApp Aktif *
                                        </label>
                                        <input
                                            id="waPhone"
                                            type="tel"
                                            required
                                            value={waPhone}
                                            onChange={(e) =>
                                                setWaPhone(e.target.value)
                                            }
                                            placeholder="Contoh: 081234567890"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="packageChoice"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Pilihan Paket *
                                        </label>
                                        <Select
                                            value={packageChoice}
                                            onValueChange={setPackageChoice}
                                            required
                                            name="packageChoice"
                                        >
                                            <SelectTrigger
                                                id="packageChoice"
                                                className="w-full rounded-xl border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none data-[placeholder]:text-slate-400 data-[size=default]:h-auto dark:border-slate-300 dark:bg-white dark:text-slate-900 dark:data-[placeholder]:text-slate-400 [&_svg]:opacity-100 [&_svg]:transition-transform [&_svg]:duration-300 data-[state=open]:[&_svg]:rotate-180"
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-200 bg-white text-slate-900 shadow-xl dark:border-slate-200 dark:bg-white dark:text-slate-900">
                                                {PACKAGE_OPTIONS.map(
                                                    (option) => (
                                                        <SelectItem
                                                            key={option.value}
                                                            value={option.value}
                                                            className="text-slate-700 focus:bg-blue-50 focus:text-[#0A2540] dark:text-slate-700"
                                                        >
                                                            {option.label}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="themeChoice"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Pilihan Tema Undangan *
                                        </label>
                                        <Select
                                            value={themeChoice}
                                            onValueChange={setThemeChoice}
                                            required
                                            name="themeChoice"
                                        >
                                            <SelectTrigger
                                                id="themeChoice"
                                                className="w-full rounded-xl border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none data-[placeholder]:text-slate-400 data-[size=default]:h-auto dark:border-slate-300 dark:bg-white dark:text-slate-900 dark:data-[placeholder]:text-slate-400 [&_svg]:opacity-100 [&_svg]:transition-transform [&_svg]:duration-300 data-[state=open]:[&_svg]:rotate-180"
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-200 bg-white text-slate-900 shadow-xl dark:border-slate-200 dark:bg-white dark:text-slate-900">
                                                {THEME_OPTIONS.map((option) => (
                                                    <SelectItem
                                                        key={option.value}
                                                        value={option.value}
                                                        className="text-slate-700 focus:bg-blue-50 focus:text-[#0A2540] dark:text-slate-700"
                                                    >
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="eventDate"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Estimasi Tanggal Acara *
                                        </label>
                                        <input
                                            id="eventDate"
                                            type="date"
                                            required
                                            value={eventDate}
                                            onChange={(e) =>
                                                setEventDate(e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="eventCity"
                                            className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                        >
                                            Kota Penyelenggaraan Acara
                                        </label>
                                        <input
                                            id="eventCity"
                                            type="text"
                                            value={eventCity}
                                            onChange={(e) =>
                                                setEventCity(e.target.value)
                                            }
                                            placeholder="Contoh: Jakarta Selatan / Bogor"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="additionalNotes"
                                        className="mb-2 block text-xs font-semibold tracking-wider text-[#0A2540] uppercase"
                                    >
                                        Catatan Tambahan / Request Lagu Khusus
                                        (Opsional)
                                    </label>
                                    <textarea
                                        id="additionalNotes"
                                        rows={3}
                                        value={notes}
                                        onChange={(e) =>
                                            setNotes(e.target.value)
                                        }
                                        placeholder="Tuliskan jika ada kebutuhan khusus, request lagu pengiring, atau jumlah tamu..."
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#2563EB] py-4 text-sm font-bold tracking-wider text-white uppercase shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                >
                                    <MessageCircle
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        Kirim Formulir ke WhatsApp Resmi Mahes
                                        Ayu
                                    </span>
                                </button>
                                <p className="text-center text-[11px] text-slate-500">
                                    Data Anda dijamin aman & langsung ditangani
                                    oleh tim representatif resmi Maheswari
                                    Enterprise.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-blue-900/60 bg-[#0A2540] pt-16 pb-12 text-slate-300">
                    <div className="w-full max-w-none px-6 sm:px-10 lg:px-48">
                        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
                            <div className="space-y-4 md:col-span-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-cond text-lg font-bold text-white">
                                        M
                                    </div>
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
                                    Atelier inovasi undangan pernikahan digital,
                                    platform RSVP cerdas, dan wedding organizer
                                    berdedikasi tinggi di bawah naungan PT
                                    Maheswari Kreasi Mahakarya. Menghadirkan
                                    ketenangan dan kemewahan sejati dalam setiap
                                    helai perayaan sakral Anda.
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
                                            'Halo Mahes Ayu Maheswari, saya ingin konsultasi undangan digital',
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
                                        <Mail
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-3 md:col-span-3">
                                <h5 className="font-label text-xs font-bold tracking-wider text-white uppercase">
                                    Katalog & Tema
                                </h5>
                                <ul className="space-y-2.5 text-xs">
                                    {[
                                        'Royal Javanese Gold',
                                        'Seraphic Minimalist Editorial',
                                        'Serenade Botanica Sage',
                                        "Al-Barakah Medina Syar'i",
                                        'Midnight Grand Monogram',
                                        'Custom Domain .COM VIP',
                                    ].map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#katalog"
                                                onClick={(event) =>
                                                    handleAnchorClick(
                                                        event,
                                                        '#katalog',
                                                    )
                                                }
                                                className="transition hover:text-sky-300"
                                            >
                                                {item}
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
                                        Kuningan Lt. 15, Jl. H.R. Rasuna Said,
                                        Jakarta Selatan
                                    </p>
                                    <p>
                                        <Building2
                                            className="mr-2 inline h-3.5 w-3.5 text-sky-400"
                                            aria-hidden="true"
                                        />
                                        <strong>Atelier Jawa Barat:</strong>{' '}
                                        Pajajaran Park Residence, Kota Bogor
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
                                        <strong>Jam Operasional:</strong> Setiap
                                        Hari (08.00 - 22.00 WIB)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-slate-400 sm:flex-row">
                            <p>
                                © 2026 MAHES AYU by Maheswari Enterprise
                                (MHSWR). Seluruh hak cipta dilindungi
                                undang-undang.
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
            </div>
        </>
    );
}
