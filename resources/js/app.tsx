import { createInertiaApp } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'MAHES AYU';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;
            default:
                return null;
        }
    },
    strictMode: true,
    progress: {
        color: '#2563EB',
    },
});
