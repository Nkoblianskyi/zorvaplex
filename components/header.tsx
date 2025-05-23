"use client"

import { useState } from "react"
import Link from "next/link"
import { useAgeVerification } from "@/context/age-verification-context"
import { Menu, X, Gamepad2 } from "lucide-react"
import GameDisclaimerModal from "./game-disclaimer-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const useAgeVerificationResult = useAgeVerification()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <GameDisclaimerModal />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-lg sm:text-xl font-bold">ZorvaPlex</span>
              </span>
            </Link>
            <nav className="hidden md:flex gap-4 lg:gap-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/#about-game" className="text-sm font-medium transition-colors hover:text-primary">
                About Game
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <button className="md:hidden p-2" onClick={toggleMenu}>
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-14 sm:h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <span className="text-lg sm:text-xl font-bold">ZorvaPlex</span>
                </span>
              </Link>
              <button onClick={toggleMenu} className="p-2">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="container grid gap-4 sm:gap-6 p-4 sm:p-6">
              <Link
                href="/"
                className="text-base sm:text-lg font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/#about-game"
                className="text-base sm:text-lg font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                About Game
              </Link>
              <Link
                href="/contact"
                className="text-base sm:text-lg font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
