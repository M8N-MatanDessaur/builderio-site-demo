/**
 * @file Root Layout Component
 * @description Base layout template for all pages
 * @property {Object} metadata - SEO metadata
 * @property {React.ReactNode} children - Page content
 */

import "./assets/reset.css";
import "./assets/brand.css";
import Header from "@/components/Header/Header";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'ICE - Template',
    template: '%s | ICE - Template'
  },
  description: 'Your site description here - make it compelling for search results',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name/Company',
  publisher: 'Your Company',
  icons: {
    icon: [
      { url: '/assets/logo.svg', type: 'image/svg+xml' }
    ],
    apple: '/assets/logo.svg',
  },
  openGraph: {
    type: 'website',
    title: 'ICE - Template',
    description: 'ICE - Template - a Builder.io Next.js starter template',
    images: [{
      url: '/assets/logo.svg',
      width: 1200,
      height: 630,
      alt: 'ICE - Template'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICE - Template',
    description: 'ICE - Template - a Builder.io Next.js starter template',
    images: ['/assets/logo.svg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
