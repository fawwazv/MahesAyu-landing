import { useEffect, useState } from 'react';

interface ScrollDynamicsOptions {
    sectionIds?: string[];
}

interface ScrollDynamicsReturn {
    activeSection: string;
    progress: number;
    scrolled: boolean;
    navHidden: boolean;
}

function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollToSection(targetId: string): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }

    // Pinned sections dock flush at viewport top — no navbar offset.
    // Other sections land just below the ~56px sticky navbar.
    const offset = target.hasAttribute('data-pinned') ? 0 : 56;

    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches;

    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    if (reduceMotion) {
        window.scrollTo(0, Math.max(0, top));
        window.history.replaceState(null, '', `#${targetId}`);
        return;
    }

    const startY = window.scrollY;
    const distance = top - startY;
    const duration = Math.min(1100, Math.max(500, Math.abs(distance) * 0.6));
    let startTime: number | null = null;
    let rafId = 0;

    const step = (now: number) => {
        if (startTime === null) {
            startTime = now;
        }
        const elapsed = Math.min(1, (now - startTime) / duration);
        window.scrollTo(0, startY + distance * easeInOutCubic(elapsed));
        if (elapsed < 1) {
            rafId = window.requestAnimationFrame(step);
        } else {
            window.history.replaceState(null, '', `#${targetId}`);
        }
    };

    rafId = window.requestAnimationFrame(step);

    const cancel = () => window.cancelAnimationFrame(rafId);
    window.addEventListener('wheel', cancel, { once: true, passive: true });
    window.addEventListener('touchmove', cancel, { once: true, passive: true });
}

export function useScrollDynamics(
    options: ScrollDynamicsOptions = {},
): ScrollDynamicsReturn {
    const { sectionIds = [] } = options;
    const [activeSection, setActiveSection] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [navHidden, setNavHidden] = useState<boolean>(false);

    // sectionIds is a static list at the call site; join keeps the dep stable.
    const sectionKey = sectionIds.join('|');

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        const revealTargets = Array.from(
            document.querySelectorAll<HTMLElement>('[data-reveal]'),
        );

        revealTargets.forEach((el) => {
            const delay = el.getAttribute('data-reveal-delay');
            if (delay) {
                el.style.transitionDelay = `${delay}ms`;
            }
            if (reduceMotion) {
                el.classList.add('is-visible');
            }
        });

        let disconnectReveal: (() => void) | undefined;

        if (
            !reduceMotion &&
            revealTargets.length > 0 &&
            'IntersectionObserver' in window
        ) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entry.target.classList.toggle(
                            'is-visible',
                            entry.isIntersecting,
                        );
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
            );

            revealTargets.forEach((el) => observer.observe(el));

            disconnectReveal = () => {
                observer.disconnect();
            };
        } else if (revealTargets.length > 0) {
            revealTargets.forEach((el) => el.classList.add('is-visible'));
        }

        const parallaxEls = Array.from(
            document.querySelectorAll<HTMLElement>('[data-parallax]'),
        );
        const ids = sectionKey ? sectionKey.split('|') : [];
        const lastY = { current: 0 };
        let idleTimer = 0;
        let ticking = false;

        const updateOnScroll = () => {
            ticking = false;
            const scrollY = window.scrollY;
            const max =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(1, scrollY / max) : 0);
            setScrolled(scrollY > 12);

            const last = lastY.current;
            if (scrollY <= 120) {
                window.clearTimeout(idleTimer);
                setNavHidden(false);
            } else if (scrollY > last + 4) {
                setNavHidden(true);
                window.clearTimeout(idleTimer);
                idleTimer = window.setTimeout(() => setNavHidden(false), 200);
            } else if (scrollY < last - 4) {
                window.clearTimeout(idleTimer);
                setNavHidden(false);
            }
            lastY.current = scrollY;

            if (!reduceMotion) {
                parallaxEls.forEach((el) => {
                    const speed = Number(
                        el.getAttribute('data-parallax') ?? '0',
                    );
                    if (!speed) {
                        return;
                    }
                    const rect = el.getBoundingClientRect();
                    const inView =
                        rect.bottom > -200 &&
                        rect.top < window.innerHeight + 200;
                    if (inView) {
                        el.style.transform = `translate3d(0, ${(scrollY * speed).toFixed(1)}px, 0)`;
                    }
                });
            }

            if (ids.length > 0) {
                let current = '';
                ids.forEach((id) => {
                    const section = document.getElementById(id);
                    if (section) {
                        const top =
                            section.getBoundingClientRect().top + scrollY - 140;
                        if (scrollY >= top) {
                            current = id;
                        }
                    }
                });
                setActiveSection((prev) => (prev === current ? prev : current));
            }
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(updateOnScroll);
            }
        };

        updateOnScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            disconnectReveal?.();
            window.clearTimeout(idleTimer);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionKey]);

    return { activeSection, progress, scrolled, navHidden };
}

export function usePinnedHorizontalScroll(sectionId: string): void {
    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        const section = document.getElementById(sectionId);
        const track = section?.querySelector<HTMLElement>(
            '[data-pinned-track]',
        );
        const progressBar = section?.querySelector<HTMLElement>(
            '[data-pinned-progress]',
        );
        if (!section || !track) {
            return;
        }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        section.classList.add('js-pinned');

        let raf = 0;

        const maxX = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const render = (value: number) => {
            track.style.transform = `translate3d(${(-value * maxX()).toFixed(1)}px, 0, 0)`;
            if (progressBar) {
                progressBar.style.width = `${(value * 100).toFixed(1)}%`;
            }
        };

        // Single driver: sticky holds the frame, vertical scroll position
        // maps deterministically to horizontal progress. No body locking,
        // no input hijacking, so the page can never get stuck or jump.
        const update = () => {
            raf = 0;
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            let p: number;
            if (rect.top > 0) {
                p = 0;
            } else if (rect.bottom < vh) {
                p = 1;
            } else {
                const total = section.offsetHeight - vh;
                p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
            }
            render(p);
        };

        const onScroll = () => {
            if (!raf) {
                raf = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            if (raf) {
                window.cancelAnimationFrame(raf);
            }
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            section.classList.remove('js-pinned');
            track.style.transform = '';
        };
    }, [sectionId]);
}
