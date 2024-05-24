'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export default function Providers({children} : {children: React.ReactNode}) {
    return (
        <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    );
}
