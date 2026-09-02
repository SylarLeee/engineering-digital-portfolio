import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/layout/PageShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${siteUrl.replace(/\/$/, "")}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Engineering Digital Portfolio",
    template: "%s · Engineering Digital Portfolio",
  },
  description: "面向工程数字化产品岗位的可扩展产品案例展示系统。",
  openGraph: {
    type: "website",
    title: "Engineering Digital Portfolio",
    description: "Engineering × Product × AI — 面向工程数字化岗位的产品案例展示系统。",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Engineering Digital Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Digital Portfolio",
    description: "Engineering × Product × AI — 面向工程数字化岗位的产品案例展示系统。",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><PageShell>{children}</PageShell></body></html>;
}
