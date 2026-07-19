import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Hafiz Adjei",
    default: "Hafiz Adjei | Electrical & Computer Engineering Researcher",
  },
  description: "Personal website & research portfolio of Hafiz Adjei, Graduate Student in Electrical & Computer Engineering at Carnegie Mellon University Africa. Specializing in embedded systems, IoT, and low-power wireless solutions.",
  keywords: [
    "Hafiz Adjei",
    "Carnegie Mellon University Africa",
    "Ashesi University",
    "Electrical Engineering",
    "Computer Engineering",
    "Embedded Systems",
    "IoT",
    "Low-power wireless",
    "Speech AI evaluation",
    "SEED Journal",
    "Research Portfolio",
    "PhD Candidate",
  ],
  authors: [{ name: "Hafiz Adjei" }],
  openGraph: {
    title: "Hafiz Adjei | Electrical & Computer Engineering Portfolio",
    description: "Graduate researcher specializing in sustainable technology, embedded systems, and IoT.",
    url: "https://hafizadjei.com", // Placeholder domain or user's future domain
    siteName: "Hafiz Adjei Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafiz Adjei | ECE Researcher",
    description: "Graduate student at CMU-Africa. Research in embedded hardware, IoT, and sustainable technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col selection:bg-accent-gold selection:text-white dark:selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
