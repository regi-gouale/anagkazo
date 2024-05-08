import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/src/theme/theme-provider";
import { Header } from "@/src/features/layout/header";
import Footer from "@/src/features/layout/footer";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Profil Missionnaire",
  description: "Découvrez votre profil missionnaire afin de mieux servir Dieu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={clsx(popins.className, "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-2xl m-auto py-8 w-full">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
