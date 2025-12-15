import { Asul, Geist } from "next/font/google";

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

const fonts = [asul, geist];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { asul, fontsVariable, geist };
