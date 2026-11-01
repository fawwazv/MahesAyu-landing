import type { LucideIcon } from 'lucide-react';
import { Clock, Heart, MapPin, Users } from 'lucide-react';
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
    schedule: string;
    badge?: string;
}

export interface TeamPhoto {
    image: string;
    alt: string;
}

export interface Benefit {
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
    navLinks,
    testimonials,
    about,
    teamPhotos,
    crews,
    benefits,
    portfolios,
    faqs,
    stats,
};

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
    image: '/images/tentang-kami/about.jpg',
    imageAlt:
        'Tim pagar ayu Mahes Ayu berseragam kuning emas di hadapan Candi Prambanan',
};

const teamPhotos: TeamPhoto[] = [
    {
        image: '/images/crew/tim-1.jpg',
        alt: 'Tim pagar ayu dan wedding organizer Mahes Ayu',
    },
    {
        image: '/images/crew/tim-2.jpg',
        alt: 'Registrasi dan koordinasi tim Mahes Ayu di lokasi acara',
    },
];

const crews: CrewMember[] = [
    {
        image: '/images/crew/personel-1.jpg',
        alt: 'Foto Rifa Nurfalah, personel Mahes Ayu',
        name: 'Rifa Nurfalah, S.Kom.',
        schedule: "Jum'at - Selasa",
    },
    {
        image: '/images/crew/personel-2.jpg',
        alt: 'Foto Dedi Wardul Qoryah, personel Mahes Ayu',
        name: 'Dedi Wardul Qoryah, S.P.',
        schedule: "Senin - Jum'at",
    },
    {
        image: '/images/crew/personel-3.jpg',
        alt: 'Foto Agung Tamrin, personel Mahes Ayu',
        name: 'Agung Tamrin, S.Ap.',
        schedule: 'Rabu - Sabtu',
    },
    {
        image: '/images/crew/personel-4.jpg',
        alt: 'Foto Arki Aji Pangestu, personel Mahes Ayu',
        name: 'Arki Aji Pangestu, S.T., M.T.',
        schedule: 'Senin, Rabu & Jumat',
    },
    {
        image: '/images/crew/personel-5.jpg',
        alt: 'Foto Didit Hardiyanto, personel Mahes Ayu',
        name: 'Didit Hardiyanto, S.Pd.',
        schedule: 'Selasa-Minggu',
    },
];

const benefits: Benefit[] = [
    {
        title: 'Penyambutan Hangat & Terkoordinasi',
        description:
            'Tim pagar ayu menyambut setiap tamu dengan tata sapa yang ramah dan posisi foto yang tertata rapi, menjaga suasana akad maupun resepsi tetap hening dan bermartabat.',
    },
    {
        title: 'Meningkatkan Estetika Acara',
        description:
            'Busana adat semi-formal yang serasi dengan tema pernikahan membuat momen sambut tamu dan foto keluarga besar tampak jauh lebih berkelas.',
    },
    {
        title: 'Alur Tamu Lebih Rapi',
        description:
            'Petugas greeter memandu arus kedatangan agar tamu tidak menumpuk di pintu, dijalankan sepenuhnya sesuai run-down acara yang telah disepakati bersama.',
    },
    {
        title: 'Seragam Tegap Sepanjang Acara',
        description:
            'Seluruh crew tampil seragam, rapi, dan siap sedia selama shift acara berlangsung, termasuk saat ikut berfoto bersama keluarga inti.',
    },
    {
        title: 'Beban Panitia Berkurang',
        description:
            'Koordinasi pos, jadwal shift, dan penempatan lokasi kami petakan sendiri — keluarga cukup fokus menikmati hari bahagia tanpa drama dadakan.',
    },
    {
        title: 'Tepat Jadwal Hingga Tamu Terakhir',
        description:
            'Crew hadir 30 menit sebelum pembukaan dan bertahan hingga tamu terakhir terurus, sepenuhnya mengikuti run-down yang Anda susun.',
    },
    {
        title: 'Zero Blunder Protocol — Garansi Ketepatan',
        description:
            'Detail brief, jadwal shift, dan penempatan pos kami cek berlapis. Jika ada personel yang tidak sesuai standar, penggantian dilakukan tanpa biaya tambahan hingga acara selesai.',
    },
];

const portfolios: PortfolioItem[] = [
    {
        image: '/images/portofolio/galeri-1.jpg',
        alt: 'Portofolio resepsi adat Jawa Mahes Ayu',
        caption: 'Resepsi Adat Jawa — Gedung Sasana Kriya, Jakarta',
    },
    {
        image: '/images/portofolio/galeri-2.jpg',
        alt: 'Portofolio resepsi modern editorial Mahes Ayu',
        caption: 'Resepsi Modern Editorial — The Glass House, Jakarta',
    },
    {
        image: '/images/portofolio/galeri-3.jpg',
        alt: 'Portofolio akad nikah intim Mahes Ayu',
        caption: 'Akad Intim Ballroom — Hotel Mulia Senayan, Jakarta',
    },
    {
        image: '/images/portofolio/galeri-4.jpg',
        alt: 'Portofolio pernikahan adat Sunda Mahes Ayu',
        caption: 'Pernikahan Adat Sunda — Puri Begawan, Bogor',
    },
    {
        image: '/images/portofolio/galeri-5.jpg',
        alt: 'Portofolio garden party Mahes Ayu',
        caption: 'Garden Party Intimate — Boutique Chapel, Bogor',
    },
    {
        image: '/images/portofolio/galeri-6.jpg',
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
        question: 'Apakah bisa untuk acara adat tertentu?',
        answer: 'Bisa. Jawa, Sunda, Minang, dan adat lainnya kami sambut dengan tata sapa dan gestur yang sesuai, termasuk protokol khusus untuk panggih, siraman, maupun seserahan.',
    },
    {
        question: 'Berapa jumlah personel minimal yang direkomendasikan?',
        answer: 'Untuk resepsi hingga 500 tamu kami merekomendasikan 4-6 personel. Untuk gedung berkapasitas besar atau dua pintu masuk, 8-10 personel lebih ideal.',
    },
    {
        question: 'Apakah layanan tersedia di luar kota-kota utama?',
        answer: 'Area utama kami mencakup Majalengka, Kuningan, Cirebon, dan Sumedang tanpa biaya tambahan. Di luar area tersebut dikenakan biaya transportasi dan akomodasi yang disepakati saat konsultasi.',
    },
    {
        question: 'Bagaimana kebijakan pembatalan atau reschedule?',
        answer: 'Reschedule dapat dilakukan 1 kali tanpa biaya tambahan selama dikonfirmasi minimal 7 hari sebelum hari-H. DP yang sudah dibayarkan otomatis dialihkan ke jadwal baru Anda.',
    },
    {
        question: 'Apakah ada paket bundling pagar ayu dan wedding organizer?',
        answer: 'Ada. Paket gabungan pagar ayu dan wedding organizer memakai satu koordinator tunggal, satu run-down terpadu, dan harga gabungan yang lebih hemat dari pesanan terpisah.',
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
