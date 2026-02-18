import { RootProvider } from "fumadocs-ui/provider/next";
import "@/styles/global.css";
import { type Metadata, type Viewport } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { fontsVariable } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s :: Vazen",
    default: "Vazen",
  },
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

const isProduction = process.env.NODE_ENV === "production";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontsVariable} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23 }}
          className="flex flex-col min-h-screen font-geist antialiased"
        >
          <RootProvider>{children}</RootProvider>
        </m.body>
      </LazyMotion>
    </html>
  );
}
