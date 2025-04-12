'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from 'next-themes';
import {useEffect, useState} from 'react';
import {metadata} from './metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ThemeProviderComponent>{children}</ThemeProviderComponent>
      </body>
    </html>
  );
}

function ThemeProviderComponent({children}: {children: React.ReactNode}) {
  'use client';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
  );
}


