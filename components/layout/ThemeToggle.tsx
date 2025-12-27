'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <button
            aria-label="Toggle theme"
            className="btn btn-outline h-9 w-9 p-0"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            title="Toggle theme"
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
}
