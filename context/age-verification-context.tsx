"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type AgeVerificationContextType = {
  isVerified: boolean
  setIsVerified: (value: boolean) => void
  showModal: boolean
  setShowModal: (value: boolean) => void
  showGameModal: boolean
  setShowGameModal: (value: boolean) => void
}

const AgeVerificationContext = createContext<AgeVerificationContextType | undefined>(undefined)

export function AgeVerificationProvider({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [showGameModal, setShowGameModal] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("is18Confirmed") === "true"
    setIsVerified(verified)
    setShowModal(!verified)
  }, [])

  useEffect(() => {
    if (isVerified) {
      localStorage.setItem("is18Confirmed", "true")
    }
  }, [isVerified])

  return (
    <AgeVerificationContext.Provider
      value={{
        isVerified,
        setIsVerified,
        showModal,
        setShowModal,
        showGameModal,
        setShowGameModal,
      }}
    >
      {children}
    </AgeVerificationContext.Provider>
  )
}

export function useAgeVerification() {
  const context = useContext(AgeVerificationContext)
  if (context === undefined) {
    throw new Error("useAgeVerification must be used within an AgeVerificationProvider")
  }
  return context
}
