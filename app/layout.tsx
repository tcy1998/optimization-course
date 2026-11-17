import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "优化理论与方法 | 2026 秋",
  description: "浪潮人工智能学院研究生课程：优化建模、最优性理论与数值算法。",
  openGraph: { title: "优化理论与方法", description: "从问题建模，到找到最优解。", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
