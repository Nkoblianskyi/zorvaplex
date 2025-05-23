"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-sm sm:text-base font-medium mb-1">We use cookies</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              This site uses cookies to improve your experience. They help us understand how you interact with the site
              and save your preferences. Learn more in our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
            <Button variant="outline" size="sm" onClick={declineCookies} className="text-xs sm:text-sm h-8 sm:h-9">
              Decline
            </Button>
            <Button size="sm" onClick={acceptCookies} className="text-xs sm:text-sm h-8 sm:h-9">
              Accept All
            </Button>
            <button
              onClick={declineCookies}
              className="p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
