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
  title: "Chetan Bhosale - Full Stack Software Engineer",
  description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, building scalable web applications, AI platforms, and cloud-native solutions.",
  metadataBase: new URL("https://chetan-bhosale.vercel.app"),
  authors: [{ name: "Chetan Bhosale", url: "https://chetan-bhosale.vercel.app" }],
  other: {
    "dateModified": "2025-02-15",
  },
  alternates: {
    canonical: "https://chetan-bhosale.vercel.app",
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
    apple: [
      { url: "/image/gibli.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Chetan Bhosale - Full Stack Software Engineer",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, building scalable web applications, AI platforms, and cloud-native solutions.",
    url: "https://chetan-bhosale.vercel.app",
    siteName: "Chetan Bhosale Portfolio",
    images: [
      {
        url: "/image/og.png",
        width: 1200,
        height: 630,
        alt: "Chetan Bhosale - Full Stack Software Engineer",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Bhosale - Full Stack Software Engineer",
    description: "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, building scalable web applications, AI platforms, and cloud-native solutions.",
    images: ["/image/og.png"],
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
        "description": "Full Stack Software Engineer & DevOps Enthusiast building scalable web applications, AI-powered platforms, and efficient cloud-native solutions.",
        "dateModified": "2025-02-15T00:00:00+00:00",
        "about": [
          { "@id": "https://chetan-bhosale.vercel.app/#person" },
          { "@id": "https://chetan-bhosale.vercel.app/#definedtermset" }
        ]
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
        "dateModified": "2025-02-15T00:00:00+00:00",
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
          },
          "knowsAbout": [
            { "@id": "https://chetan-bhosale.vercel.app/#term-full-stack-engineer" },
            { "@id": "https://chetan-bhosale.vercel.app/#term-devops-enthusiast" },
            { "@id": "https://chetan-bhosale.vercel.app/#term-doviaai" },
            { "@id": "https://chetan-bhosale.vercel.app/#term-trafficmine" },
            { "@id": "https://chetan-bhosale.vercel.app/#term-genchat" }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://chetan-bhosale.vercel.app/#doviaai",
        "name": "DoviaAI",
        "operatingSystem": "All",
        "applicationCategory": "DeveloperApplication",
        "description": "Dovia AI is a no-code/low-code platform that lets you build apps and UI components instantly using prompts. Simply describe what you want, and the AI generates functional apps and components in real time.",
        "url": "https://dovia-delta.vercel.app/",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://chetan-bhosale.vercel.app/#trafficmine",
        "name": "TrafficMine",
        "operatingSystem": "All",
        "applicationCategory": "DeveloperApplication",
        "description": "TrafficMine helps you analyze and optimize website performance by tracking user behavior, traffic flow, and error patterns. It provides actionable insights to debug issues faster and improve overall user experience.",
        "url": "https://github.com/ChetanBhosale/TrafficMine",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://chetan-bhosale.vercel.app/#genchat",
        "name": "GenChat",
        "operatingSystem": "All",
        "applicationCategory": "DeveloperApplication",
        "description": "GenChat allows you to create custom AI-powered chatbots for your website in just a few minutes. These bots engage visitors, explain your products or services, and keep you informed about new leads and interactions.",
        "url": "https://github.com/ChetanBhosale/GenChat",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://chetan-bhosale.vercel.app/#definedtermset",
        "name": "Chetan Bhosale Portfolio Glossary",
        "url": "https://chetan-bhosale.vercel.app/",
        "hasDefinedTerm": [
          { "@id": "https://chetan-bhosale.vercel.app/#term-chetan-bhosale" },
          { "@id": "https://chetan-bhosale.vercel.app/#term-full-stack-engineer" },
          { "@id": "https://chetan-bhosale.vercel.app/#term-devops-enthusiast" },
          { "@id": "https://chetan-bhosale.vercel.app/#term-doviaai" },
          { "@id": "https://chetan-bhosale.vercel.app/#term-trafficmine" },
          { "@id": "https://chetan-bhosale.vercel.app/#term-genchat" }
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-chetan-bhosale",
        "name": "Chetan Bhosale",
        "description": "Full Stack Software Engineer & DevOps Enthusiast from Pune, India, building scalable web applications, AI platforms, and cloud-native solutions.",
        "url": "https://chetan-bhosale.vercel.app/",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset",
        "sameAs": "https://chetan-bhosale.vercel.app/#person"
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-full-stack-engineer",
        "name": "Full Stack Software Engineer",
        "description": "A professional who designs, builds, and maintains both the front-end (user interface) and back-end (server, database, and APIs) of web applications.",
        "url": "https://chetan-bhosale.vercel.app/",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset"
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-devops-enthusiast",
        "name": "DevOps Enthusiast",
        "description": "A professional passionate about automating software delivery, continuous integration, continuous deployment, and cloud-native infrastructure management.",
        "url": "https://chetan-bhosale.vercel.app/",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset"
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-doviaai",
        "name": "DoviaAI",
        "description": "A no-code/low-code platform that lets you build apps and UI components instantly using prompts.",
        "url": "https://dovia-delta.vercel.app/",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset",
        "sameAs": "https://chetan-bhosale.vercel.app/#doviaai"
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-trafficmine",
        "name": "TrafficMine",
        "description": "A website performance analysis and optimization tool that tracks user behavior, traffic flow, and error patterns.",
        "url": "https://github.com/ChetanBhosale/TrafficMine",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset",
        "sameAs": "https://chetan-bhosale.vercel.app/#trafficmine"
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://chetan-bhosale.vercel.app/#term-genchat",
        "name": "GenChat",
        "description": "A custom AI-powered chatbot creation tool that engages visitors and explains products or services.",
        "url": "https://github.com/ChetanBhosale/GenChat",
        "inDefinedTermSet": "https://chetan-bhosale.vercel.app/#definedtermset",
        "sameAs": "https://chetan-bhosale.vercel.app/#genchat"
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
