"use client"

import { useAgeVerification } from "@/context/age-verification-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function AgeVerificationModal() {
  const { isVerified, setIsVerified, showModal, setShowModal } = useAgeVerification()

  const handleConfirm = () => {
    setIsVerified(true)
    setShowModal(false)
  }

  const handleDisagree = () => {
    // Redirect to a blank page or show a message that the site cannot be accessed
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)] mx-4">
        <DialogHeader className="flex flex-col items-center">
          <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500 mb-2" />
          <DialogTitle className="text-lg sm:text-xl text-center">Important Notice:</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-3 sm:space-y-4 text-sm sm:text-base">
          <div className="text-center">This is a free social platform exclusively for entertainment purposes.</div>
          <div className="text-center font-medium">
            No real money. No winnings. Everything is virtual and has no value.
          </div>
          <div className="text-center">Completely free to use. For users 18+ only.</div>
          <div className="text-center text-xs sm:text-sm">
            If the fun stops, take a step back. You can also visit:{" "}
            <a
              href="https://www.gordonmoody.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Gordon Moody
            </a>
            ,{" "}
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GamCare
            </a>
            , or{" "}
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              BeGambleAware
            </a>{" "}
            for support.
          </div>
        </DialogDescription>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleDisagree} className="sm:w-1/2 text-sm sm:text-base">
            I Don't Agree
          </Button>
          <Button onClick={handleConfirm} className="sm:w-1/2 text-sm sm:text-base">
            I Confirm I&apos;m 18+
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
