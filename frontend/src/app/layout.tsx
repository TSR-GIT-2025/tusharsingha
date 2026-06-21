'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { enableContentProtection } from './contentProtection'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    enableContentProtection();
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>TushAr</title>
        <meta name="title" content="TushAr" />
        <meta property="og:title" content="TushAr" />
        <meta name="twitter:title" content="TushAr" />
        <link rel="icon" href="/images/profile.png" type="image/png" />
        <meta property="og:image" content="/images/profile.png" />
        <meta name="twitter:image" content="/images/profile.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-gray-100 antialiased selection:bg-indigo-500/90 selection:text-white`}>
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
