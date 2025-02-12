import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";

//Cinzel, Orbitron,
const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safwan portfolio",
  description: 'My awesome portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} antialiased`}
      >
        <div className="bg-gradient-to-tr from-[#3e2f39] via-[#3e2f39] to-[#030303]">
          {children}
        </div>
      </body>
    </html>
  );
}
