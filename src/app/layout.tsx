import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathan Rohman - Web Developer",
  description: "Personal web profile fathan rohman, software engineer, frontend web developer from indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
