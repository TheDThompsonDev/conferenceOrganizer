import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conference Scheduler",
  description: "Drag and drop conference talk scheduler",
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
