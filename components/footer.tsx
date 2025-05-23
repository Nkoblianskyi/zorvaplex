import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 sm:py-8">
      <div className="container px-4 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-bold">ZorvaPlex</h3>
            <div className="flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded px-1.5 py-0.5">
              18+
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            ZorvaPlex is a free social gaming platform for entertainment only. No real money. No winnings. 18+ only.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-bold">Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-xs sm:text-sm hover:underline">
              Home
            </Link>
            <Link href="/#about-game" className="text-xs sm:text-sm hover:underline">
              About Game
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-bold">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/privacy-policy" className="text-xs sm:text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs sm:text-sm hover:underline">
              Terms of Use
            </Link>
            <Link href="/cookie-policy" className="text-xs sm:text-sm hover:underline">
              Cookie Policy
            </Link>
          </nav>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-bold">Support</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.gordonmoody.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-blue-200/50 rounded-lg p-2 sm:p-4"
              aria-label="Gordon Moody"
            >
              <Image
                src="/moody.png"
                alt="Gordon Moody Logo"
                width={100}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-blue-200/50 rounded-lg p-2 sm:p-4"
              aria-label="GamCare"
            >
              <Image
                src="/care.png"
                alt="GamCare Logo"
                width={100}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-blue-200/50 rounded-lg p-2 sm:p-4"
              aria-label="BeGambleAware"
            >
              <Image
                src="/aware.png"
                alt="BeGambleAware Logo"
                width={100}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-6 sm:mt-8 border-t pt-4 px-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ZorvaPlex Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
