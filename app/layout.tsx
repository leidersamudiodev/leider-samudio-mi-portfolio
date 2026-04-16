import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leider-samudio-mi-portfolio.vercel.app"

export const metadata: Metadata = {
  title: {
    default: 'Leider Jose Samudio Arrieta | Front-End Developer',
    template: '%s | Leider Samudio - Portfolio',
  },
  description: 'Portafolio profesional de Leider Jose Samudio Arrieta, desarrollador Front-End y estudiante de Ingenieria de Sistemas en la Corporacion Universitaria Antonio Jose de Sucre (UAJS). Especializado en React, JavaScript, TypeScript, Next.js y diseno UI/UX. Sincelejo, Colombia.',
  keywords: [
    'Leider Jose Samudio Arrieta',
    'Leider Samudio',
    'Front-End Developer',
    'Desarrollador Front-End',
    'Desarrollador Web',
    'React Developer',
    'JavaScript Developer',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'UI/UX',
    'Ingenieria de Sistemas',
    'UAJS',
    'Corporacion Universitaria Antonio Jose de Sucre',
    'Sincelejo',
    'Colombia',
    'Portfolio',
    'Portafolio',
    'Web Developer Colombia',
    'Desarrollador Colombia',
  ],
  authors: [{ name: 'Leider Jose Samudio Arrieta', url: siteUrl }],
  creator: 'Leider Jose Samudio Arrieta',
  publisher: 'Leider Jose Samudio Arrieta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Leider Jose Samudio Arrieta - Portfolio',
    title: 'Leider Jose Samudio Arrieta | Front-End Developer',
    description: 'Portafolio profesional de Leider Jose Samudio Arrieta, desarrollador Front-End especializado en React, JavaScript, TypeScript y diseno UI/UX. Estudiante de Ingenieria de Sistemas en UAJS, Sincelejo, Colombia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Leider Jose Samudio Arrieta - Front-End Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leider Jose Samudio Arrieta | Front-End Developer',
    description: 'Portafolio profesional de Leider Jose Samudio Arrieta, desarrollador Front-End especializado en React, JavaScript, TypeScript y diseno UI/UX.',
    images: ['/og-image.png'],
    creator: '@leidersamudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d1117' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leider Jose Samudio Arrieta',
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    sameAs: [
      'https://github.com/leidersamudiodev',
      'https://linkedin.com/in/leidersamudio',
    ],
    jobTitle: 'Front-End Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Corporacion Universitaria Antonio Jose de Sucre (UAJS)',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sincelejo',
      addressRegion: 'Sucre',
      addressCountry: 'Colombia',
    },
    description: 'Desarrollador Front-End especializado en React, JavaScript, TypeScript y diseno UI/UX. Estudiante de Ingenieria de Sistemas.',
    knowsAbout: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'UI/UX Design', 'Web Development'],
  }

  return (
    <html lang="es" className="bg-background scroll-smooth">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
