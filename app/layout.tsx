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

const siteUrl = "https://chetan-bhosale.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
  description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
    url: "/",
    siteName: "Chetan Bhosale Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/project_image/dovia.png",
        width: 2814,
        height: 1248,
        alt: "DoviaAI platform - prompt-based functional app generator",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Bhosale - Full Stack Software Engineer & DevOps Enthusiast",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, passionate about building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
    images: ["/project_image/dovia.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Chetan Bhosale",
      "jobTitle": "Full Stack Software Developer & DevOps Engineer",
      "url": `${siteUrl}/`,
      "image": `${siteUrl}/image/gibli.png`,
      "sameAs": [
        "https://github.com/ChetanBhosale",
        "https://www.linkedin.com/in/chetan-bhosale-092868231/"
      ],
      "email": "chetanbhosale810@gmail.com",
      "telephone": "+918857811443",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "St. Xavier's College, Ahmedabad"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": `${siteUrl}/`,
      "name": "Chetan Bhosale - Portfolio",
      "description": "Portfolio of Chetan Bhosale, Founding Engineer @ Linkrunner, and Full Stack Developer.",
      "publisher": {
        "@id": `${siteUrl}/#person`
      }
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      "url": `${siteUrl}/`,
      "name": "Chetan Bhosale Profile",
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "about": {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${archivoBlack.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
