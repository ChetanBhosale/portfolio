import type { Metadata } from "next";
import { Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

  export const metadata: Metadata = {
  title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
  description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${montserrat.variable} ${archivoBlack.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
