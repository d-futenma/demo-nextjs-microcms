import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import Loader from "@/components/ui/Loader";
import SvgSprites from "@/components/ui/SvgSprites";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo-nextjs-microcms-orcin.vercel.app/"),
  title: {
    template: "%s | FUTENMA STUDIO",
    default: "FUTENMA STUDIO",
  },
  description: "架空のブランディング企業をテーマに制作したデモサイトです。",
  openGraph: {
    images: ["/assets/img/og/ogp.jpg"],
  },
  icons: {
    icon: "/assets/img/favicon/favicon.svg",
  },
  alternates: {
    canonical: "https://demo-nextjs-microcms-orcin.vercel.app/",
  },
};

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} ${poppins.variable} xxxl:bg-[#3a3a3a]`}
      >
        <SvgSprites />
        <Loader />
        <div className="xxxl:max-w-480 xxxl:mx-auto relative grid min-h-screen grid-cols-[100%] grid-rows-[1fr_auto] overflow-hidden bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
