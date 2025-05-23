import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AgeVerificationProvider } from "@/context/age-verification-context"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import AgeVerificationModal from "@/components/age-verification-modal"
import { Inter } from "next/font/google"
import "./globals.css"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ZorvaPlex - Free Social Gaming Platform",
  description:
    "A free social platform exclusively for entertainment purposes. No real money. No winnings. Everything is virtual.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AgeVerificationProvider>
            <AgeVerificationModal />
            <div className="flex min-h-screen flex-col">
              <DisclaimerBanner />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AgeVerificationProvider>
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
