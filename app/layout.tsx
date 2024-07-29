import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import React from 'react';

import { cn } from '@/lib/utils';

import './globals.css';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: {
        default: 'Homepage |  DocuLive',
        template: '%s | DocuLive',
    },
    description:
        'DocuLive, an enhanced version of Google Docs. Experience seamless real-time collaboration with millions of users, all within a single platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head />
            <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
                {children}
            </body>
        </html>
    );
}
