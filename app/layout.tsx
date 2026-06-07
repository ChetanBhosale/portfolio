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
  metadataBase: new URL("https://chetan-bhosale.vercel.app"),
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": [
        {
          url: "/index.md",
          title: "Markdown Twin",
        },
      ],
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/image/gibli.png",
  },
  openGraph: {
    title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
    url: "https://chetan-bhosale.vercel.app",
    siteName: "Chetan Bhosale Portfolio",
    images: [
      {
        url: "/image/gibli.png",
        width: 1024,
        height: 1536,
        alt: "Chetan Bhosale Profile picture",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
    images: ["/image/gibli.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://chetan-bhosale.vercel.app/#website",
        "url": "https://chetan-bhosale.vercel.app/",
        "name": "Chetan Bhosale Portfolio",
        "description": "Full Stack Software Engineer & DevOps Enthusiast building scalable web applications, AI-powered platforms, and efficient cloud-native solutions."
      },
      {
        "@type": "Organization",
        "@id": "https://chetan-bhosale.vercel.app/#organization",
        "name": "Chetan Bhosale",
        "url": "https://chetan-bhosale.vercel.app/",
        "logo": "https://chetan-bhosale.vercel.app/image/gibli.png",
        "image": "https://chetan-bhosale.vercel.app/image/gibli.png",
        "sameAs": [
          "https://github.com/ChetanBhosale",
          "https://www.linkedin.com/in/chetan-bhosale-092868231/"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://chetan-bhosale.vercel.app/#profilepage",
        "url": "https://chetan-bhosale.vercel.app/",
        "name": "Chetan Bhosale Portfolio",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://chetan-bhosale.vercel.app/#person",
          "name": "Chetan Bhosale",
          "jobTitle": "Full Stack Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Linkrunner"
          },
          "description": "Full Stack Software Engineer & DevOps Enthusiast from Pune, India.",
          "image": "https://chetan-bhosale.vercel.app/image/gibli.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "India"
          }
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${montserrat.variable} ${archivoBlack.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
