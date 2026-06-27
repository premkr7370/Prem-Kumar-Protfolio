import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "Prem Kumar | Full Stack Developer Portfolio",
  description:
    "Portfolio of Prem Kumar — Full Stack Developer, MERN Stack Developer, and Problem Solver. Building scalable full-stack applications with modern web technologies.",
  keywords: [
    "Prem Kumar",
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Bhopal",
  ],
  authors: [{ name: "Prem Kumar" }],
  openGraph: {
    title: "Prem Kumar | Full Stack Developer Portfolio",
    description: "Building scalable full-stack applications with modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
