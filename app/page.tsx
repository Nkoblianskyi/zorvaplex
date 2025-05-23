"use client"
import { useAgeVerification } from "@/context/age-verification-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Users, Ban, GamepadIcon as GameController, Lock, Brain } from "lucide-react"

export default function Home() {
  const { setShowGameModal } = useAgeVerification()

  const handlePlayClick = () => {
    setShowGameModal(true)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-digital-game-background.png"
            alt="ZorvaPlex Game Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 max-w-4xl">
            Welcome to ZorvaPlex – A Free Social Game Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 px-2">
            Experience the thrill of virtual gaming without any real-world stakes. Pure entertainment, completely free,
            designed for adults.
          </p>
        </div>
      </section>

      {/* About Game Section */}
      <section id="about-game" className="py-12 sm:py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What is ZorvaPlex?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2">
              ZorvaPlex is a free-to-play social platform where you can enjoy engaging virtual games. No payments, no
              winnings, just pure entertainment. Everything is simulated — no real-world value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className="bg-card rounded-lg p-4 sm:p-6 text-center shadow-sm">
              <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <GameController className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Play For Free</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Enjoy our games without spending a penny. No deposits, no payments, just free entertainment.
              </p>
            </div>

            <div className="bg-card rounded-lg p-4 sm:p-6 text-center shadow-sm">
              <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Social Interaction</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connect with other players, share experiences, and enjoy the social aspects of gaming.
              </p>
            </div>

            <div className="bg-card rounded-lg p-4 sm:p-6 text-center shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Ban className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">No Bets or Winnings</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Everything is virtual with no real-world value. Play for fun, not for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Description Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-500/10 to-cyan-500/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ride the Virtual Waves</h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg">
                  ZorvaPlex features an exciting surfing game where you control a virtual surfer riding endless waves.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Navigate through challenging ocean currents, perform impressive tricks, and compete for the highest
                  score on our virtual leaderboard.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  With intuitive controls and increasing difficulty levels, our surfing simulator provides hours of
                  entertainment without any real-world stakes.
                </p>
                <div className="pt-3 sm:pt-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Game Features:</h3>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li>Dynamic wave patterns that change with each game</li>
                    <li>Unlock virtual surfboards with different abilities</li>
                    <li>Perform tricks to multiply your score</li>
                    <li>Dodge obstacles and collect power-ups</li>
                    <li>Compare your high scores with other players</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/surfer-game.png"
                      alt="Surfer Game Screenshot"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center px-4">
                      <Button
                        onClick={handlePlayClick}
                        size="lg"
                        className="bg-blue-500 hover:bg-blue-600 text-sm sm:text-base"
                      >
                        Try Surf Challenge
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Play With Us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center p-4 sm:p-6">
              <Lock className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">100% Safe</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our platform is designed with your safety in mind. No real money means no financial risks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4">
                <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl text-primary">
                  🆓
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Absolutely Free</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                No hidden costs, no subscriptions, no in-app purchases. Just free entertainment.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Smart Entertainment for Adults</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Engaging games designed for adult entertainment that challenge your mind and provide hours of fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Play?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Join thousands of players enjoying our free virtual gaming experience. No strings attached.
          </p>
        </div>
      </section>
    </div>
  )
}
