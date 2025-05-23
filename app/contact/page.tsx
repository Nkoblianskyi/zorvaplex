"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
    if (errors.agreeTerms) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.agreeTerms
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must confirm you are over 18 and agree with the privacy policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send the form data to your backend here
      console.log("Form submitted:", formData)

      // Show confirmation dialog instead of toast
      setShowConfirmation(true)
    }
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
    // Reset form after closing confirmation
    setFormData({
      name: "",
      email: "",
      message: "",
      agreeTerms: false,
    })
  }

  return (
    <div className="container py-8 sm:py-12 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Send Us a Message</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="text-sm sm:text-base"
                />
                {errors.name && <p className="text-xs sm:text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="text-sm sm:text-base"
                />
                {errors.email && <p className="text-xs sm:text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="text-sm sm:text-base"
                />
                {errors.message && <p className="text-xs sm:text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="agreeTerms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="agreeTerms" className="text-xs sm:text-sm font-normal">
                  I am over 18 and agree with the privacy policy
                </Label>
              </div>
              {errors.agreeTerms && <p className="text-xs sm:text-sm text-red-500">{errors.agreeTerms}</p>}

              <Button type="submit" className="w-full text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                You can reach us through the following channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Address</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">ZorvaPlex Inc.</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">31 Sussex Dr, Ottawa, ON, K1N 6Z2</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">write@zorvaplex.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">+1 613 185 9012</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-muted-foreground">
                ZorvaPlex is a free social platform exclusively for entertainment purposes. No real money. No winnings.
                Everything is virtual and has no value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Message Sent Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-lg sm:text-xl">Message Sent!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for contacting us. We've received your message and will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={closeConfirmation}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
