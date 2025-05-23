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
import { Waves, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function GameDisclaimerModal() {
  const { showGameModal, setShowGameModal, setIsVerified } = useAgeVerification()

  const handleCancel = () => {
    setShowGameModal(false)
  }

  return (
    <Dialog open={showGameModal} onOpenChange={setShowGameModal}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)] mx-4">
        <DialogHeader className="flex flex-col items-center">
          <Waves className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 mb-2" />
          <DialogTitle className="text-lg sm:text-xl text-center">Important Information</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-3 sm:space-y-4 text-sm sm:text-base">
          <div className="text-center font-medium">This is a social free game</div>
          <div className="text-center">
            ZorvaPlex is 100% free to play. There are no real winnings and no investments required.
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-yellow-800">
                <strong>Please note:</strong> All gameplay is virtual with no real-world value. No deposits, no
                payments, just free entertainment.
              </div>
            </div>
          </div>
          <div className="text-center font-medium">Are you 18 years or older?</div>
        </DialogDescription>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleCancel} className="sm:w-1/2 text-sm sm:text-base">
            No, I'm Under 18
          </Button>
          <Link href="/game" className="sm:w-1/2">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-sm sm:text-base"
              onClick={() => {
                setIsVerified(true)
                setShowGameModal(false)
              }}
            >
              Yes, I'm 18+
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
