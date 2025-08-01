"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus } from "lucide-react"

export default function FunnelStep7Page() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const router = useRouter()

  const options = [
    "Sim, quero meu Lugar de Fé AGORA",
    "Sim, mas preciso de orientação passo-a-passo",
    "Estou insegura, mas disposta a tentar",
  ]

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setTimeout(() => {
      router.push("/next-funnel-step-8") // Navigate to the next step
    }, 300) // 300ms delay for effect
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />

      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-6 pb-4 space-y-4">
          <div className="flex items-center space-x-2 rounded-full px-4 py-2 mt-4 bg-purple-darker text-accent-gold">
            <Heart className="h-5 w-5" />
            <Plus className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-accent-gold leading-relaxed">Pergunta 7 de 9</p>
          <div className="w-full h-1 bg-purple-light rounded-full">
            <div className="h-full w-[77.77%] bg-accent-gold rounded-full" /> {/* Progress for 7/9 */}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-4">
          <h2 className="text-xl font-bold text-center mt-4">
            Você está pronta para aceitar o <br /> chamado de São Miguel Arcanjo?
          </h2>

          {options.map((text, index) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full py-4 text-sm font-medium rounded-xl transition-colors flex items-center justify-center ${
                // Changed text-base to text-sm and added justify-center
                selectedOption === index
                  ? "bg-accent-gold text-white hover:bg-accent-gold/90"
                  : "bg-purple-light text-white hover:bg-purple-light/90"
              }`}
            >
              {text}
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
