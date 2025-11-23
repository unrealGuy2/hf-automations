import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HF Automations | Real Estate AI Systems",
  description: "Automate lead qualification, follow-ups, and booking 24/7. Trusted by agencies in UK, UAE, and Nigeria.",
};

// FIX: We added ": { children: React.ReactNode }" below
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}