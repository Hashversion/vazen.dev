import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { Banner } from "fumadocs-ui/components/banner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vazen",
  description: "A production grade monorepo starter to build full-stack applications on cloudflare",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
    ],
  },
  metadataBase: new URL("https://vazen.dev"),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23 }}
          className="flex flex-col min-h-screen"
        >
          <Banner className="bg-black text-red-500">The site is currently under active development.</Banner>
          <RootProvider>{children}</RootProvider>
        </m.body>
      </LazyMotion>
    </html>
  );
}
