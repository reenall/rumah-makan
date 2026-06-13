import type { Metadata } from "next";
import { Raleway, Cormorant_Infant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/fragments/navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { useRouter } from "next/navigation";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const bodoniModa = Cormorant_Infant({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Umbrella",
  description: "Rumah Makan Tradisional",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${bodoniModa.variable} antialiased bg-bgPrimary`}
      >
        <SessionProvider session={session}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
