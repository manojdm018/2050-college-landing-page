import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Education 2050",
  description: "Immersive AI-driven college landing page from the future.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="holo-grid" />
        {children}
      </body>
    </html>
  );
}
