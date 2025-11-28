import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cloverbloomLogo from "@/assets/images/cloverbloom.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garrett Nelson",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Link href="https://www.cloverbloom.co" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8">
          <Image
            src={cloverbloomLogo}
            alt="Cloverbloom Logo"
            style={{ width: '35px', height: 'auto' }}
          />
        </Link>
        <div className="container mx-auto p-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home size={16} strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/content">Content</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* <BreadcrumbItem>
                <BreadcrumbLink href="/journaling">Journaling</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator /> */}
              <BreadcrumbItem>
                <BreadcrumbLink href="/check-ins">Check-Ins</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                  <BreadcrumbLink href="https://www.youtube.com/@garrettfnelson" target="_blank" rel="noopener noreferrer">YouTube</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {children}
        </div>
      </body>
    </html>
  );
}
