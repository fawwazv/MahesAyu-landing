import { Head } from '@inertiajs/react';
import { useScrollDynamics } from '@/hooks/use-scroll-dynamics';
import { SECTION_IDS } from './welcome/data';
import BenefitSection from './welcome/sections/BenefitSection';
import CrewSection from './welcome/sections/CrewSection';
import FaqSection from './welcome/sections/FaqSection';
import Hero from './welcome/sections/Hero';
import PortofolioSection from './welcome/sections/PortofolioSection';
import SiteFooter from './welcome/sections/SiteFooter';
import SiteNav from './welcome/sections/SiteNav';
import TentangKamiSection from './welcome/sections/TentangKamiSection';
import TestimoniSection from './welcome/sections/TestimoniSection';

export default function Welcome() {
    const { activeSection, progress, scrolled, navHidden } = useScrollDynamics({
        sectionIds: SECTION_IDS,
    });

    return (
        <>
            <Head title="MAHES AYU by Maheswari Enterprise | Layanan Pagar Ayu & Wedding Organizer Profesional" />
            <div className="scroll-smooth bg-white font-body text-slate-800 antialiased selection:bg-[#2563EB] selection:text-white">
                <SiteNav
                    activeSection={activeSection}
                    progress={progress}
                    scrolled={scrolled}
                    navHidden={navHidden}
                />
                <Hero />
                <TentangKamiSection />
                <CrewSection />
                <BenefitSection />
                <PortofolioSection />
                <TestimoniSection />
                <FaqSection />
                <SiteFooter />
            </div>
        </>
    );
}
