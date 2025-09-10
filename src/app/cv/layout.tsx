import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Fathan Rohman - Curiculum Vitae",
  description: "Personal web profile fathan rohman, software engineer from indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto w-6/12">
        {children}
      </body>
    </html>
  );
}
