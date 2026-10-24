import { MessageCircle } from 'lucide-react';
import type { FormEventHandler } from 'react';
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PACKAGE_OPTIONS, THEME_OPTIONS, waLink } from '../data';

export default function PesanSection() {
    const [coupleName, setCoupleName] = useState('');
    const [waPhone, setWaPhone] = useState('');
    const [packageChoice, setPackageChoice] = useState(
        'Paket Royal Gold (Rp 249.000) - Recommended',
    );
    const [themeChoice, setThemeChoice] = useState('Royal Javanese Gold');
    const [eventDate, setEventDate] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [notes, setNotes] = useState('');

    const submitOrder: FormEventHandler = (e) => {
        e.preventDefault();
        const textMessage = `Halo Tim Mahes Ayu (Maheswari Enterprise),\n\nSaya ingin memesan Undangan Pernikahan Digital:\n- Nama Mempelai: ${coupleName}\n- No. WhatsApp: ${waPhone}\n- Pilihan Paket: ${packageChoice}\n- Pilihan Tema: ${themeChoice}\n- Tanggal Acara: ${eventDate}\n- Kota: ${eventCity || '-'}\n- Catatan: ${notes || 'Tidak ada catatan tambahan'}\n\nMohon informasi ketersediaan slot dan proses pembuatan selanjutnya. Terima kasih!`;
        window.open(waLink(textMessage), '_blank');
    };

    return (
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
                            Isi formulir ringkas di bawah ini, sistem kami akan
                            langsung menyusun draft pemesanan ke WhatsApp resmi
                            Mahes Ayu.
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
                                    onChange={(e) => setWaPhone(e.target.value)}
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
                                        {PACKAGE_OPTIONS.map((option) => (
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
                                onChange={(e) => setNotes(e.target.value)}
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
                                Kirim Formulir ke WhatsApp Resmi Mahes Ayu
                            </span>
                        </button>
                        <p className="text-center text-[11px] text-slate-500">
                            Data Anda dijamin aman & langsung ditangani oleh tim
                            representatif resmi Maheswari Enterprise.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
