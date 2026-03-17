import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tofu — Synthetic PM interviews",
  description:
    "Generate PM personas, interview them in chat, and capture insights at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

