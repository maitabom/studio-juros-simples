import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from 'next-themes';
import {useEffect, useState} from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Juros Simples',
  description: 'Calculadora de Juros Simples e Compostos',
};

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
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark' | 'system'>(
    'system'
  );

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'system'
      | null;

    if (storedTheme) {
      setResolvedTheme(storedTheme);
    }
  }, []);

  const isDarkMode = resolvedTheme === 'dark';

  return (
        <ThemeProvider enableSystem={true} attribute="class" value={resolvedTheme}>
          {children}
        </ThemeProvider>
  );
}
