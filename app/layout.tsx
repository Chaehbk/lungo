import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lungo — Form-first housing prescreening",
  description: "A reusable prescreening copilot for small-scale shared housing.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-linen text-ink antialiased">
        <div className="min-h-screen">
          <header className="border-b border-ink/10 bg-linen/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Lungo
              </Link>
              <div className="flex items-center gap-3 text-sm font-medium text-moss">
                <Link href="/intake" className="rounded-full px-3 py-2 transition hover:bg-white hover:text-ink">
                  Intake form
                </Link>
                <Link href="/dashboard" className="rounded-full bg-ink px-4 py-2 text-white transition hover:bg-moss">
                  Dashboard
                </Link>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
