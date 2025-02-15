/**
 * @file Root Layout Component
 * @description Base layout template for all pages
 * @property {Object} metadata - SEO metadata
 * @property {React.ReactNode} children - Page content
 */

import "./assets/reset.css";
import "./assets/brand.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Default Page Title",
  description: "Default description for the page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Manrope:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
