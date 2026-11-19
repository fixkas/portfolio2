import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Share_Tech_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kasra — Frontend Engineer",
  description: "Personal portfolio of Kasra, a frontend engineer.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full font-sans antialiased [color-scheme:dark]",
        geist.variable,
        shareTechMono.variable,
      )}
    >
      <body className="share flex h-full min-h-full flex-col p-2 sm:p-6 lg:p-10">
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-[url('/back.png')] bg-cover bg-center bg-no-repeat opacity-80"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
