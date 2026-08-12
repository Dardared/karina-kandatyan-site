import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Карина Кандатьян — клинический психолог, КПТ-терапевт";
const description = "Карина Кандатьян — клинический психолог и КПТ-терапевт. Практический курс о тревожности и неопределённости, индивидуальная работа и профессиональные материалы.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "karina-kandatyan-site.pavel9617.workers.dev";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
      images: [{ url: `${origin}/og.png`, width: 1729, height: 910, alt: "Карина Кандатьян — понять себя и действовать" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
