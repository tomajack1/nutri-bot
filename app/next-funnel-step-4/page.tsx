"use client" // This component needs to be a client component for useState and useRouter

import { useState } from "react"
import { useRouter } from "next/navigation" // Import useRouter
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus } from "lucide-react"

export default function FunnelStep4Page() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const router = useRouter()

  const options = [
    "Cura física para mim ou <br /> para um ente querido",
    "Reconciliação amorosa e <br /> restauração de relacionamentos",
    "Libertação de vícios, traumas <br /> ou bloqueios emocionais",
    "Direção para cumprir meu <br /> propósito de vida",
  ]

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    // Delay navigation to show selection effect
    setTimeout(() => {
      router.push("/next-funnel-step-5")
    }, 300) // 300ms delay
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      {/* Decorative circles re-added */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />

      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-6 pb-4 space-y-4">
          <div className="flex items-center space-x-2 rounded-full px-4 py-2 mt-4 bg-purple-darker text-accent-gold">
            <Heart className="h-5 w-5" />
            <Plus className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-accent-gold leading-relaxed">Pergunta 4 de 9</p>
          <div className="w-full h-1 bg-purple-light rounded-full">
            <div className="h-full w-[44.44%] bg-accent-gold rounded-full" /> {/* Progress for 4/9 */}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-4">
          <h2 className="text-xl font-bold text-center mt-4">
            Se pudesse pedir um milagre ao Arcanjo Miguel, qual seria?
          </h2>

          {options.map((text, index) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full py-6 text-sm font-medium rounded-xl transition-colors text-left px-3 flex items-center justify-center animate-pulse-slow ${
                selectedOption === index
                  ? "bg-accent-gold text-white hover:bg-accent-gold/90"
                  : "bg-purple-light text-white hover:bg-purple-light/90"
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: text }} className="text-center" />
            </Button>
          ))}

          {selectedOption !== null && (
            <p className="text-xs text-white text-center mt-2">Avançando para próxima etapa...</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
