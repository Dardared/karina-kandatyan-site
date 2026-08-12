import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Карина Кандатьян — клинический психолог, КПТ-терапевт",
  description: "Психологическая помощь без воды: доказательный подход, практические инструменты и курс по работе с тревогой.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
