import { Head } from '@inertiajs/react';
import { useScrollDynamics } from '@/hooks/use-scroll-dynamics';
import { SECTION_IDS } from './welcome/data';
import CaraPesanSection from './welcome/sections/CaraPesanSection';
import Hero from './welcome/sections/Hero';
import KatalogSection from './welcome/sections/KatalogSection';
import PaketSection from './welcome/sections/PaketSection';
import PesanSection from './welcome/sections/PesanSection';
import SiteFooter from './welcome/sections/SiteFooter';
import SiteNav from './welcome/sections/SiteNav';
import TestimoniSection from './welcome/sections/TestimoniSection';

export default function Welcome() {
    const { activeSection, progress, scrolled, navHidden } = useScrollDynamics({
        sectionIds: SECTION_IDS,
    });

    return (
        <>
            <Head title="MAHES AYU by Maheswari Enterprise | Undangan Pernikahan Digital Eksklusif" />
            <div className="scroll-smooth bg-white font-body text-slate-800 antialiased selection:bg-[#2563EB] selection:text-white">
                <SiteNav
                    activeSection={activeSection}
                    progress={progress}
                    scrolled={scrolled}
                    navHidden={navHidden}
                />
                <Hero />
                <KatalogSection />
                <PaketSection />
                <CaraPesanSection />
                <TestimoniSection />
                <PesanSection />
                <SiteFooter />
            </div>
        </>
    );
}
