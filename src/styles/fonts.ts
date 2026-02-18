import { Asul, Geist } from "next/font/google";
import localFont from "next/font/local";

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-sans",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const asul = Asul({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-asul-sans",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const commitMonoVazen = localFont({
  src: [
    {
      path: "../../public/fonts/CommitMonoVazen.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-commitmono-vazen",
  preload: true,
});

const fonts = [asul, geist, commitMonoVazen];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { asul, fontsVariable, geist, commitMonoVazen };
