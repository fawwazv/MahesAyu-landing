import type { LucideIcon } from 'lucide-react';
import {
    Clock,
    Heart,
    ListChecks,
    MapPin,
    Shirt,
    Sparkles,
    Users,
} from 'lucide-react';
import type { MouseEvent } from 'react';
import { smoothScrollToSection } from '@/hooks/use-scroll-dynamics';

const SECTION_IDS = [
    'tentang-kami',
    'crew',
    'benefit',
    'portofolio',
    'testimoni',
    'faq',
];

const WA_NUMBER = '6281901073574';
const HERO_WA_MESSAGE =
    'Halo Mahes Ayu Maheswari, saya ingin konsultasi layanan pagar ayu dan wedding organizer';
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
    footerIcon: 'heart' | 'shield' | 'shirt' | 'users';
    offset: string;
    featured?: boolean;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface Testimonial {
    initials: string;
    quote: string;
    name: string;
    venue: string;
}

export interface AboutContent {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
}

export interface CrewMember {
    image: string;
    alt: string;
    name: string;
    role: string;
    badge?: string;
}

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface PortfolioItem {
    image: string;
    alt: string;
    caption: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface StatItem {
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
}

export {
    SECTION_IDS,
    WA_NUMBER,
    HERO_WA_MESSAGE,
    waLink,
    heroCards,
    navLinks,
    testimonials,
    about,
    crews,
    benefits,
    portfolios,
    faqs,
    stats,
};

const heroCards: HeroCard[] = [
    {
        animation: 'animate-float-1',
        badge: 'PAGAR AYU ADAT',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-jawa.jpg',
        alt: 'Pernikahan Adat Jawa Mahes Ayu',
        couple: 'Raden & Dyah Ayu',
        venue: 'Gedung Sasana Kriya',
        footerLeft: 'PENYAMPAI TATA KRAMA',
        footerIcon: 'shield',
        offset: '',
    },
    {
        animation: 'animate-float-2',
        badge: 'GREETER KELAS EDITORIAL',
        badgeClass: 'bg-blue-600/90 text-white border-white/20',
        image: '/images/stitch/hero-editorial.jpg',
        alt: 'Resepsi Modern Editorial MHSWR',
        couple: 'Vito & Gabriella',
        venue: 'The Glass House Bunga',
        footerLeft: 'FLOW GUIDE TAMU',
        footerIcon: 'users',
        offset: '-mt-4 lg:-mt-8',
    },
    {
        animation: 'animate-float-3',
        badge: 'PROTOKOLER VIP',
        badgeClass: 'bg-[#2563EB] text-white',
        image: '/images/stitch/hero-akad.jpg',
        alt: 'Akad Nikah Suci Maheswari',
        couple: 'Sacred Vow & Intimate Ballroom',
        venue: 'Hotel Mulia Senayan',
        footerLeft: 'SERAGAM TEGAP & SINKRON',
        footerIcon: 'shirt',
        offset: '',
        featured: true,
    },
    {
        animation: 'animate-float-4',
        badge: 'BUSANA SEMI-FORMAL',
        badgeClass: 'bg-[#0A2540]/90 text-white border-white/20',
        image: '/images/stitch/hero-sunda.jpg',
        alt: 'Pernikahan Adat Sunda Elegan',
        couple: 'Dimas & Anindita',
        venue: 'Puri Begawan Bogor',
        footerLeft: 'TATA KRAMA SUNDA',
        footerIcon: 'heart',
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

const navLinks: NavLink[] = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang-kami', label: 'Tentang Kami' },
    { href: '#crew', label: 'Crew' },
    { href: '#benefit', label: 'Benefit' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#faq', label: 'FAQ' },
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

const about: AboutContent = {
    eyebrow: 'COMPANY PROFILE',
    heading: 'Tentang Kami',
    paragraphs: [
        'Mahes Ayu adalah penyedia layanan pagar ayu profesional di bawah naungan Maheswari Enterprise (MHSWR). Kami menghadirkan tim penyambut tamu yang terlatih, tertata, dan indah budi — menjaga kehormatan acara keluarga Anda dari pintu masuk hingga tamu terakhir pulang.',
        'Nama Mahes Ayu kami ambil dari filosofi keelokan yang merendah: keanggunan busana, tata krama nusantara, dan kerelaan melayani bertemu dalam satu pelayanan. Setiap personel kami melalui pelatihan protokoler penyambutan, penataan pos foto, serta penanganan tamu VIP dan tamu istimewa.',
    ],
    image: '/images/stitch/hero-jawa.jpg',
    imageAlt:
        'Tim pagar ayu Mahes Ayu menyambut keluarga besar mempelai adat Jawa',
};

const crews: CrewMember[] = [
    {
        image: '/images/stitch/hero-crew.jpg',
        alt: 'Tim inti Maheswari Wedding Organizer',
        name: 'Tim Inti MHSWR',
        role: 'Lead Captain & Koordinator',
        badge: 'TIM INTI',
    },
    {
        image: '/images/stitch/hero-editorial.jpg',
        alt: 'Greeter Mahes Ayu resepsi modern editorial',
        name: 'Ayu Lestari',
        role: 'Greeter Utama',
    },
    {
        image: '/images/stitch/hero-sunda.jpg',
        alt: 'Crew Mahes Ayu pernikahan tradisional Sunda',
        name: 'Sari Wulandari',
        role: 'Flow Guide Tamu',
    },
    {
        image: '/images/stitch/hero-akad.jpg',
        alt: 'Crew Mahes Ayu akad nikah intim',
        name: 'Dimas Pratama',
        role: 'Registrar Buku Tamu',
    },
    {
        image: '/images/stitch/hero-jawa.jpg',
        alt: 'Usher VIP Mahes Ayu resepsi adat Jawa',
        name: 'Nadia Safitri',
        role: 'Usher VIP Keluarga',
    },
    {
        image: '/images/stitch/katalog-botanica.jpg',
        alt: 'Crew Mahes Ayu garden party resepsi',
        name: 'Raka Aditya',
        role: 'Pos Foto & Estetika',
    },
];

const benefits: Benefit[] = [
    {
        icon: Heart,
        title: 'Penyambutan Hangat & Terkoordinasi',
        description:
            'Tim pagar ayu menyambut setiap tamu dengan tata sapa yang ramah dan posisi foto yang tertata rapi, menjaga suasana akad maupun resepsi tetap hening dan bermartabat.',
    },
    {
        icon: Sparkles,
        title: 'Meningkatkan Estetika Acara',
        description:
            'Busana adat semi-formal yang serasi dengan tema pernikahan membuat momen sambut tamu dan foto keluarga besar tampak jauh lebih berkelas.',
    },
    {
        icon: Users,
        title: 'Alur Tamu Lebih Rapi',
        description:
            'Petugas greeter memandu arus kedatangan agar tamu tidak menumpuk di pintu, dijalankan sepenuhnya sesuai run-down acara yang telah disepakati bersama.',
    },
    {
        icon: Shirt,
        title: 'Seragam Tegap Sepanjang Acara',
        description:
            'Seluruh crew tampil seragam, rapi, dan siap sedia selama shift acara berlangsung, termasuk saat ikut berfoto bersama keluarga inti.',
    },
    {
        icon: ListChecks,
        title: 'Beban Panitia Berkurang',
        description:
            'Koordinasi pos, jadwal shift, dan penempatan lokasi kami petakan sendiri — keluarga cukup fokus menikmati hari bahagia tanpa drama dadakan.',
    },
    {
        icon: Clock,
        title: 'Tepat Jadwal Hingga Tamu Terakhir',
        description:
            'Crew hadir 30 menit sebelum pembukaan dan bertahan hingga tamu terakhir terurus, sepenuhnya mengikuti run-down yang Anda susun.',
    },
];

const portfolios: PortfolioItem[] = [
    {
        image: '/images/stitch/hero-jawa.jpg',
        alt: 'Portofolio resepsi adat Jawa Mahes Ayu',
        caption: 'Resepsi Adat Jawa — Gedung Sasana Kriya, Jakarta',
    },
    {
        image: '/images/stitch/hero-editorial.jpg',
        alt: 'Portofolio resepsi modern editorial Mahes Ayu',
        caption: 'Resepsi Modern Editorial — The Glass House, Jakarta',
    },
    {
        image: '/images/stitch/hero-akad.jpg',
        alt: 'Portofolio akad nikah intim Mahes Ayu',
        caption: 'Akad Intim Ballroom — Hotel Mulia Senayan, Jakarta',
    },
    {
        image: '/images/stitch/hero-sunda.jpg',
        alt: 'Portofolio pernikahan adat Sunda Mahes Ayu',
        caption: 'Pernikahan Adat Sunda — Puri Begawan, Bogor',
    },
    {
        image: '/images/stitch/katalog-botanica.jpg',
        alt: 'Portofolio garden party Mahes Ayu',
        caption: 'Garden Party Intimate — Boutique Chapel, Bogor',
    },
    {
        image: '/images/stitch/hero-crew.jpg',
        alt: 'Portofolio tim Mahes Ayu di lokasi resepsi',
        caption: 'Tim Teregistrasi MHSWR — On Time Guaranteed',
    },
];

const faqs: FaqItem[] = [
    {
        question: 'Apakah seragam disediakan oleh Mahes Ayu?',
        answer: 'Ya. Seluruh tim tampil dengan seragam busana adat semi-formal milik Mahes Ayu yang serasi dengan warna dan tema dekorasi acara Anda — tanpa biaya sewa tambahan.',
    },
    {
        question: 'Bagaimana sistem booking layanannya?',
        answer: 'Konfirmasi tanggal dan lokasi acara melalui WhatsApp resmi, lalu lakukan DP 30% untuk mengunci jadwal. Pelunasan dapat dilakukan maksimal 3 hari sebelum hari-H.',
    },
    {
        question: 'Berapa lama shift kerja tim pagar ayu?',
        answer: 'Standar 1 shift penuh (hingga 6 jam) mengikuti run-down acara Anda. Kebutuhan lebih lama, shift ganda, atau kombinasi shift pagi dan siang dapat diatur saat konsultasi.',
    },
    {
        question:
            'Apakah bisa untuk acara adat tertentu (Jawa, Sunda, Minang, dan lainnya)?',
        answer: 'Bisa. Kami menyiapkan tata sapa dan gestur yang sesuai dengan adat masing-masing, termasuk protokol khusus untuk panggih, siraman, maupun seserahan.',
    },
    {
        question: 'Berapa jumlah personel minimal yang direkomendasikan?',
        answer: 'Untuk resepsi hingga 500 tamu kami merekomendasikan 4-6 personel. Untuk gedung berkapasitas besar atau dua pintu masuk, 8-10 personel lebih ideal.',
    },
    {
        question: 'Apakah layanan tersedia di luar Jakarta dan Bogor?',
        answer: 'Tersedia untuk seluruh area Jabodetabek tanpa biaya tambahan. Di luar Jabodetabek dikenakan biaya transportasi dan akomodasi yang disepakati saat konsultasi.',
    },
];

const stats: StatItem[] = [
    {
        icon: Heart,
        value: 1800,
        suffix: '+',
        label: 'Pasangan Terlayani sejak 2019',
    },
    {
        icon: Users,
        value: 250,
        suffix: '+',
        label: 'Crew Profesional Terlatih',
    },
    {
        icon: Clock,
        value: 7,
        suffix: '+',
        label: 'Tahun Pengalaman',
    },
    {
        icon: MapPin,
        value: 4,
        suffix: '',
        label: 'Kota Atelier Layanan',
    },
];
