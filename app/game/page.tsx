"use client"

import React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useAgeVerification } from "@/context/age-verification-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Waves, Trophy, Star, Anchor, Shell, Fish, Droplet, Sun } from "lucide-react"
import confetti from "canvas-confetti"

// Game symbols with their point values
const SYMBOLS = [
  { icon: Star, color: "text-yellow-400", points: 10, name: "Star" },
  { icon: Anchor, color: "text-blue-500", points: 5, name: "Anchor" },
  { icon: Shell, color: "text-pink-400", points: 15, name: "Shell" },
  { icon: Fish, color: "text-green-400", points: -5, name: "Fish" },
  { icon: Droplet, color: "text-cyan-400", points: 8, name: "Droplet" },
  { icon: Sun, color: "text-orange-400", points: 12, name: "Sun" },
]

// Pattern types for scoring
const PATTERNS = [
  { name: "Horizontal Line (3)", points: 50, description: "3 symbols in a row horizontally" },
  { name: "Vertical Line (3)", points: 75, description: "3 symbols in a row vertically" },
  { name: "Diagonal Line (3)", points: 100, description: "3 symbols in a diagonal" },
  { name: "Full Horizontal (4)", points: 100, description: "4 symbols in a row horizontally" },
  { name: "Full Vertical (4)", points: 125, description: "4 symbols in a row vertically" },
  { name: "Full Diagonal (4)", points: 150, description: "4 symbols in a diagonal" },
  { name: "Square Pattern", points: 80, description: "2x2 square of same symbols" },
  { name: "Four Corners", points: 200, description: "All 4 corner symbols match" },
  { name: "Center Cross", points: 120, description: "Center 2x2 cross pattern" },
]

export default function GamePage() {
  const { isVerified } = useAgeVerification()
  const router = useRouter()
  const [gameBoard, setGameBoard] = useState<Array<Array<number | null>>>([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ])
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [lastWin, setLastWin] = useState<{ pattern: string; points: number } | null>(null)
  const [playsLeft, setPlaysLeft] = useState(10)
  const [highlightCells, setHighlightCells] = useState<Array<[number, number]>>([])
  const confettiRef = useRef<HTMLDivElement>(null)

  // Function to trigger the game action
  const handlePlay = () => {
    if (isPlaying || playsLeft <= 0) return

    setIsPlaying(true)
    setLastWin(null)
    setHighlightCells([]) // Clear previous highlights

    // Generate new random board
    const newBoard = gameBoard.map((row) => row.map(() => Math.floor(Math.random() * SYMBOLS.length)))

    // Animate the action
    setTimeout(() => {
      setGameBoard(newBoard)
      const result = checkForWinningPatterns(newBoard)
      setPlaysLeft((prev) => prev - 1)

      if (result.points > 0) {
        setLastWin({ pattern: result.pattern, points: result.points })
        setHighlightCells(result.winningCells || [])

        // Trigger special effects based on pattern type
        if (confettiRef.current && result.points >= 50) {
          const rect = confettiRef.current.getBoundingClientRect()
          const centerX = (rect.left + rect.width / 2) / window.innerWidth
          const centerY = (rect.top + rect.height / 2) / window.innerHeight

          // Different effects for different patterns
          switch (result.patternType) {
            case "full_horizontal":
            case "full_vertical":
              // Linear burst effect
              confetti({
                particleCount: 100,
                spread: 180,
                origin: { x: centerX, y: centerY },
                colors: ["#3b82f6", "#06b6d4", "#8b5cf6"],
                shapes: ["square"],
                scalar: 1.2,
              })
              break

            case "full_diagonal":
              // Diagonal burst effect
              confetti({
                particleCount: 150,
                spread: 45,
                angle: result.pattern.includes("Anti") ? 135 : 45,
                origin: { x: centerX, y: centerY },
                colors: ["#f59e0b", "#eab308", "#f97316"],
                shapes: ["star"],
                scalar: 1.5,
              })
              break

            case "four_corners":
              // Explosive corner effect
              const corners = [
                { x: 0.2, y: 0.2 },
                { x: 0.8, y: 0.2 },
                { x: 0.2, y: 0.8 },
                { x: 0.8, y: 0.8 },
              ]
              corners.forEach((corner, index) => {
                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: corner,
                    colors: ["#dc2626", "#ef4444", "#f87171"],
                    shapes: ["circle"],
                    scalar: 2,
                  })
                }, index * 100)
              })
              break

            case "square_pattern":
              // Compact square burst
              confetti({
                particleCount: 80,
                spread: 90,
                origin: { x: centerX, y: centerY },
                colors: ["#10b981", "#34d399", "#6ee7b7"],
                shapes: ["square"],
                scalar: 1,
                drift: 0,
              })
              break

            case "center_cross":
              // Cross-shaped effect
              confetti({
                particleCount: 60,
                spread: 30,
                angle: 0,
                origin: { x: centerX, y: centerY },
                colors: ["#8b5cf6", "#a78bfa", "#c4b5fd"],
              })
              setTimeout(() => {
                confetti({
                  particleCount: 60,
                  spread: 30,
                  angle: 90,
                  origin: { x: centerX, y: centerY },
                  colors: ["#8b5cf6", "#a78bfa", "#c4b5fd"],
                })
              }, 100)
              break

            case "horizontal_line":
            case "vertical_line":
              // Medium line effect
              confetti({
                particleCount: 60,
                spread: 120,
                origin: { x: centerX, y: centerY },
                colors: ["#06b6d4", "#0891b2", "#0e7490"],
                scalar: 0.8,
              })
              break

            case "diagonal_line":
              // Small diagonal effect
              confetti({
                particleCount: 40,
                spread: 60,
                angle: 45,
                origin: { x: centerX, y: centerY },
                colors: ["#f59e0b", "#d97706", "#b45309"],
                scalar: 0.6,
              })
              break

            default:
              // Default effect for other patterns
              confetti({
                particleCount: result.points / 2,
                spread: 70,
                origin: { x: centerX, y: centerY },
                colors: ["#3b82f6", "#06b6d4", "#10b981"],
              })
          }

          // Add screen shake effect for high-value wins
          if (result.points >= 150) {
            const gameElement = confettiRef.current.parentElement
            if (gameElement) {
              gameElement.style.animation = "shake 0.5s ease-in-out"
              setTimeout(() => {
                gameElement.style.animation = ""
              }, 500)
            }
          }
        }
      }

      setScore((prev) => prev + result.points)
      setIsPlaying(false)
    }, 1000)
  }

  // Check for winning patterns
  const checkForWinningPatterns = (board: Array<Array<number>>) => {
    let totalPoints = 0
    let winningPattern = ""
    let patternType = ""
    let winningCells: Array<[number, number]> = []

    // Check for horizontal lines (4 in a row)
    for (let row = 0; row < 4; row++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][2] === board[row][3]) {
        totalPoints += 100 + SYMBOLS[board[row][0]].points * 4
        winningPattern = "Full Horizontal Line"
        patternType = "full_horizontal"
        winningCells = [
          [row, 0],
          [row, 1],
          [row, 2],
          [row, 3],
        ]
      }
      // Check for 3 in a row horizontally
      for (let col = 0; col < 2; col++) {
        if (board[row][col] === board[row][col + 1] && board[row][col + 1] === board[row][col + 2]) {
          totalPoints += 50 + SYMBOLS[board[row][col]].points * 3
          if (!winningPattern) {
            winningPattern = "Horizontal Line"
            patternType = "horizontal_line"
            winningCells = [
              [row, col],
              [row, col + 1],
              [row, col + 2],
            ]
          } else {
            winningPattern = "Multiple Patterns"
            // Add to existing winning cells
            winningCells = [...winningCells, [row, col], [row, col + 1], [row, col + 2]]
          }
        }
      }
    }

    // Check for vertical lines (4 in a row)
    for (let col = 0; col < 4; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[2][col] === board[3][col]) {
        totalPoints += 125 + SYMBOLS[board[0][col]].points * 4
        if (!winningPattern) {
          winningPattern = "Full Vertical Line"
          patternType = "full_vertical"
          winningCells = [
            [0, col],
            [1, col],
            [2, col],
            [3, col],
          ]
        } else {
          winningPattern = "Multiple Patterns"
          // Add to existing winning cells
          winningCells = [...winningCells, [0, col], [1, col], [2, col], [3, col]]
        }
      }
      // Check for 3 in a row vertically
      for (let row = 0; row < 2; row++) {
        if (board[row][col] === board[row + 1][col] && board[row + 1][col] === board[row + 2][col]) {
          totalPoints += 75 + SYMBOLS[board[row][col]].points * 3
          if (!winningPattern) {
            winningPattern = "Vertical Line"
            patternType = "vertical_line"
            winningCells = [
              [row, col],
              [row + 1, col],
              [row + 2, col],
            ]
          } else {
            winningPattern = "Multiple Patterns"
            // Add to existing winning cells
            winningCells = [...winningCells, [row, col], [row + 1, col], [row + 2, col]]
          }
        }
      }
    }

    // Check for main diagonal (4 in a row)
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === board[3][3]) {
      totalPoints += 150 + SYMBOLS[board[0][0]].points * 4
      if (!winningPattern) {
        winningPattern = "Full Diagonal"
        patternType = "full_diagonal"
        winningCells = [
          [0, 0],
          [1, 1],
          [2, 2],
          [3, 3],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [0, 0], [1, 1], [2, 2], [3, 3]]
      }
    }

    // Check for anti-diagonal (4 in a row)
    if (board[0][3] === board[1][2] && board[1][2] === board[2][1] && board[2][1] === board[3][0]) {
      totalPoints += 150 + SYMBOLS[board[0][3]].points * 4
      if (!winningPattern) {
        winningPattern = "Full Anti-Diagonal"
        patternType = "full_diagonal"
        winningCells = [
          [0, 3],
          [1, 2],
          [2, 1],
          [3, 0],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [0, 3], [1, 2], [2, 1], [3, 0]]
      }
    }

    // Check for 3 in a row diagonally
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      totalPoints += 100 + SYMBOLS[board[0][0]].points * 3
      if (!winningPattern) {
        winningPattern = "Diagonal Line"
        patternType = "diagonal_line"
        winningCells = [
          [0, 0],
          [1, 1],
          [2, 2],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [0, 0], [1, 1], [2, 2]]
      }
    }
    if (board[1][1] === board[2][2] && board[2][2] === board[3][3]) {
      totalPoints += 100 + SYMBOLS[board[1][1]].points * 3
      if (!winningPattern) {
        winningPattern = "Diagonal Line"
        patternType = "diagonal_line"
        winningCells = [
          [1, 1],
          [2, 2],
          [3, 3],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [1, 1], [2, 2], [3, 3]]
      }
    }
    if (board[0][3] === board[1][2] && board[1][2] === board[2][1]) {
      totalPoints += 100 + SYMBOLS[board[0][3]].points * 3
      if (!winningPattern) {
        winningPattern = "Anti-Diagonal Line"
        patternType = "diagonal_line"
        winningCells = [
          [0, 3],
          [1, 2],
          [2, 1],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [0, 3], [1, 2], [2, 1]]
      }
    }
    if (board[1][2] === board[2][1] && board[2][1] === board[3][0]) {
      totalPoints += 100 + SYMBOLS[board[1][2]].points * 3
      if (!winningPattern) {
        winningPattern = "Anti-Diagonal Line"
        patternType = "diagonal_line"
        winningCells = [
          [1, 2],
          [2, 1],
          [3, 0],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [1, 2], [2, 1], [3, 0]]
      }
    }

    // Check for square patterns (2x2)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 1][col + 1]
        ) {
          totalPoints += 80 + SYMBOLS[board[row][col]].points * 4
          if (!winningPattern) {
            winningPattern = "Square Pattern"
            patternType = "square_pattern"
            winningCells = [
              [row, col],
              [row, col + 1],
              [row + 1, col],
              [row + 1, col + 1],
            ]
          } else {
            winningPattern = "Multiple Patterns"
            // Add to existing winning cells
            winningCells = [...winningCells, [row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1]]
          }
        }
      }
    }

    // Check for corner pattern (all 4 corners the same)
    if (board[0][0] === board[0][3] && board[0][0] === board[3][0] && board[0][0] === board[3][3]) {
      totalPoints += 200 + SYMBOLS[board[0][0]].points * 4
      if (!winningPattern) {
        winningPattern = "Four Corners"
        patternType = "four_corners"
        winningCells = [
          [0, 0],
          [0, 3],
          [3, 0],
          [3, 3],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [0, 0], [0, 3], [3, 0], [3, 3]]
      }
    }

    // Check for cross pattern (center cross)
    if (board[1][1] === board[1][2] && board[1][1] === board[2][1] && board[1][1] === board[2][2]) {
      totalPoints += 120 + SYMBOLS[board[1][1]].points * 4
      if (!winningPattern) {
        winningPattern = "Center Cross"
        patternType = "center_cross"
        winningCells = [
          [1, 1],
          [1, 2],
          [2, 1],
          [2, 2],
        ]
      } else {
        winningPattern = "Multiple Patterns"
        // Add to existing winning cells
        winningCells = [...winningCells, [1, 1], [1, 2], [2, 1], [2, 2]]
      }
    }

    // If no patterns, just add the individual symbol points
    if (totalPoints === 0) {
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          totalPoints += SYMBOLS[board[row][col]].points
        }
      }
    }

    // Remove duplicate cells from winningCells
    const uniqueCells = Array.from(new Set(winningCells.map((cell) => `${cell[0]},${cell[1]}`))).map((cellStr) => {
      const [row, col] = cellStr.split(",").map(Number)
      return [row, col] as [number, number]
    })

    return {
      points: totalPoints,
      pattern: winningPattern || "No Pattern",
      patternType,
      winningCells: uniqueCells,
    }
  }

  // Reset the game
  const resetGame = () => {
    setGameBoard([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ])
    setScore(0)
    setLastWin(null)
    setPlaysLeft(10)
    setHighlightCells([])
  }

  // Helper function to check if a cell is part of a winning pattern
  const isHighlightedCell = (rowIndex: number, colIndex: number) => {
    return highlightCells.some(([row, col]) => row === rowIndex && col === colIndex)
  }

  // Helper function to get highlight color based on pattern type
  const getHighlightColor = () => {
    if (!lastWin) return ""

    switch (lastWin.pattern) {
      case "Full Horizontal Line":
      case "Horizontal Line":
        return "from-blue-500/50 to-cyan-500/50"
      case "Full Vertical Line":
      case "Vertical Line":
        return "from-indigo-500/50 to-purple-500/50"
      case "Full Diagonal":
      case "Diagonal Line":
      case "Full Anti-Diagonal":
      case "Anti-Diagonal Line":
        return "from-amber-500/50 to-orange-500/50"
      case "Square Pattern":
        return "from-emerald-500/50 to-green-500/50"
      case "Four Corners":
        return "from-red-500/50 to-rose-500/50"
      case "Center Cross":
        return "from-violet-500/50 to-purple-500/50"
      case "Multiple Patterns":
        return "from-fuchsia-500/50 to-pink-500/50"
      default:
        return "from-blue-500/30 to-cyan-500/30"
    }
  }

  return (
    <div className="container py-4 sm:py-6 px-4">
      {/* Disclaimer */}
      <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs sm:text-sm font-medium mb-0.5">Important Notice:</h2>
            <p className="text-xs text-muted-foreground">
              This is a social platform. The game is completely free. Everything is virtual and has no value. No real
              currency is involved, and there are no prizes or rewards of any kind.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-3 sm:mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-center flex items-center gap-2">
          <Waves className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
          Wave Rider Surf Challenge
        </h1>
        <p className="text-xs sm:text-sm text-center text-muted-foreground max-w-md">
          Catch the perfect wave! Play to match symbols and earn points with different patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Game background with wave animation */}
              <div className="relative bg-gradient-to-b from-blue-500/10 to-cyan-500/20 p-6 sm:p-8">
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full h-20 sm:h-24 bg-gradient-to-t from-blue-500/30 to-transparent animate-pulse"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute bottom-0 w-full h-16 sm:h-20 bg-gradient-to-t from-blue-600/30 to-transparent animate-pulse"
                    style={{ animationDuration: "2.5s", animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute bottom-0 w-full h-12 sm:h-14 bg-gradient-to-t from-blue-700/30 to-transparent animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.4s" }}
                  ></div>
                </div>

                {/* Game board */}
                <div className="relative z-10">
                  <div
                    ref={confettiRef}
                    className="grid grid-cols-4 gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 max-w-md mx-auto"
                  >
                    {gameBoard.map((row, rowIndex) =>
                      row.map((symbolIndex, colIndex) => {
                        const isHighlighted = isHighlightedCell(rowIndex, colIndex)
                        return (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`aspect-square flex items-center justify-center rounded-md p-1 sm:p-2 relative overflow-hidden
                              ${isPlaying ? "animate-pulse bg-white/20" : "bg-white/20"}
                              ${isHighlighted ? "ring-2 ring-white/70 z-10" : ""}`}
                          >
                            {isHighlighted && (
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${getHighlightColor()} animate-pulse-slow`}
                              ></div>
                            )}
                            {symbolIndex !== null && (
                              <div
                                className={`text-xl sm:text-2xl ${SYMBOLS[symbolIndex].color} relative z-10 ${
                                  isHighlighted ? "animate-bounce-subtle" : ""
                                }`}
                              >
                                {React.createElement(SYMBOLS[symbolIndex].icon, {
                                  className: "h-6 w-6 sm:h-8 sm:w-8",
                                })}
                              </div>
                            )}
                          </div>
                        )
                      }),
                    )}
                  </div>

                  {/* Game controls */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                        <div className="text-xs text-muted-foreground">Score</div>
                        <div className="text-lg sm:text-xl font-bold flex items-center gap-1">
                          <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                          {score}
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                        <div className="text-xs text-muted-foreground">Plays Left</div>
                        <div className="text-lg sm:text-xl font-bold">{playsLeft}</div>
                      </div>
                    </div>

                    {lastWin && (
                      <div className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                        {lastWin.pattern}: +{lastWin.points} points!
                      </div>
                    )}

                    {playsLeft > 0 ? (
                      <Button
                        size="sm"
                        onClick={handlePlay}
                        disabled={isPlaying}
                        className="bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm px-4 sm:px-6 py-1 sm:py-2"
                      >
                        {isPlaying ? "Playing..." : "Catch the Waves"}
                      </Button>
                    ) : (
                      <div className="space-y-2 text-center">
                        <p className="text-xs sm:text-sm font-medium">Game Over!</p>
                        <Button onClick={resetGame} variant="outline" size="sm" className="text-xs sm:text-sm">
                          Play Again
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <Card>
            <CardContent className="p-2 sm:p-3">
              <h2 className="text-sm sm:text-base font-bold mb-2">Symbols</h2>
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                {SYMBOLS.map((symbol) => (
                  <div key={symbol.name} className="flex items-center gap-1">
                    <div className={`${symbol.color}`}>
                      {React.createElement(symbol.icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
                    </div>
                    <div>
                      <div className="text-xs">{symbol.name}</div>
                      <div className={`text-xs font-medium ${symbol.points >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {symbol.points >= 0 ? `+${symbol.points}` : symbol.points}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-2 sm:p-3">
              <h2 className="text-sm sm:text-base font-bold mb-1">Remember</h2>
              <p className="text-xs text-muted-foreground">
                This is a virtual game with no real-world value. All points and rewards are fictional and cannot be
                exchanged for anything. Play responsibly and for entertainment only.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  )
}
