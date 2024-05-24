'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {

    const [mounted, setMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <h1>loading...</h1>
        );
    }

    return (
        <div>
            <button className='bg-slate-400 rounded-md py-2 px-1' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                Change Theme
            </button>
        </div>
    );
}
