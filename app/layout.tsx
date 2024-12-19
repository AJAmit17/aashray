import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import { Navigation } from '@/components/shared/navigations'
import { ThemeProvider } from '@/providers/theme-provider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Disaster Management System',
  description: 'A comprehensive platform for disaster preparedness and response',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <main className="container mx-auto px-4 py-4 md:py-8 min-h-[calc(100vh-4rem)]">
              {children}
            </main>
            <Toaster />
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossOrigin=""
            />
            <Script
              src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
              integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
              crossOrigin=""
              strategy="lazyOnload"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}