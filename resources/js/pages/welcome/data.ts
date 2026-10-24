import type { LucideIcon } from 'lucide-react';
import {
    BellRing,
    FileUp,
    Palette,
    QrCode,
    Send,
    WandSparkles,
} from 'lucide-react';
import type { MouseEvent } from 'react';
import { smoothScrollToSection } from '@/hooks/use-scroll-dynamics';

const SECTION_IDS = ['katalog', 'paket', 'cara-pesan', 'testimoni', 'pesan'];

const WA_NUMBER = '6281901073574';
const HERO_WA_MESSAGE =
    'Halo Mahes Ayu Maheswari, saya ingin konsultasi undangan digital dan wedding organizer';
const waLink = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    afterNavigate?: () => void,
): void {
    if (!href.startsWith('#')) {
        return;
    }
    event.preventDefault();
    afterNavigate?.();
    smoothScrollToSection(href.slice(1));
}

export interface HeroCard {
    animation: string;
    badge: string;
    badgeClass: string;
    image: string;
    alt: string;
    couple: string;
    venue: string;
    footerLeft: string;
    footerIcon: 'badge' | 'heart' | 'seamless' | 'shield' | 'music';
    offset: string;
    featured?: boolean;
}

export interface TemplateCard {
    image: string;
    alt: string;
    badge: string;
    badgeClass: string;
    code: string;
    codeClass: string;
    title: string;
    description: string;
    tags: string[];
    waText: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface OrderStep {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Testimonial {
    initials: string;
    quote: string;
    name: string;
    venue: string;
}

export interface SelectOption {
    value: string;
    label: string;
}

export {
    SECTION_IDS,
    WA_NUMBER,
    HERO_WA_MESSAGE,
    waLink,
    heroCards,
    templates,
    navLinks,
    orderSteps,
    testimonials,
    PACKAGE_OPTIONS,
    THEME_OPTIONS,
};

const heroCards: HeroCard[] = [
    {
        animation: 'animate-float-1',
        badge: 'ROYAL SIKEP',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-jawa.jpg',
        alt: 'Pernikahan Adat Jawa Mahes Ayu',
        couple: 'Raden & Dyah Ayu',
        venue: 'Gedung Sasana Kriya',
        footerLeft: '1.2k RSVP',
        footerIcon: 'badge',
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
        footerIcon: 'heart',
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
        footerIcon: 'seamless',
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
        footerIcon: 'music',
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
        footerIcon: 'shield',
        offset: 'hidden sm:block',
    },
];

const templates: TemplateCard[] = [
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

const navLinks: NavLink[] = [
    { href: '#katalog', label: 'Katalog' },
    { href: '#paket', label: 'Paket' },
    { href: '#cara-pesan', label: 'Cara Pesan' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#pesan', label: 'Pesan' },
];

const orderSteps: OrderStep[] = [
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

const testimonials: Testimonial[] = [
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

const PACKAGE_OPTIONS: SelectOption[] = [
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

const THEME_OPTIONS: SelectOption[] = [
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
