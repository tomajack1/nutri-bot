"use client" // Converted to Client Component

import Image from "next/image"
import { useState } from "react" // Import useState
import { useRouter } from "next/navigation" // Import useRouter
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus, ArrowRight, Clock } from "lucide-react"

export default function Component() {
  const [isClicked, setIsClicked] = useState(false) // State to track if button is clicked
  const router = useRouter() // Initialize useRouter

  const handleButtonClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      router.push("/next-funnel-step")
    }, 300) // 300ms delay for effect
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />

      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-6 pb-4 space-y-6">
          {/* Updated icon container for the first page */}
          <div className="flex items-center space-x-2 rounded-full px-4 py-2 mt-4 bg-purple-darker text-accent-gold">
            <Heart className="h-5 w-5" />
            <Plus className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold text-center leading-relaxed text-accent-gold">
            Descubra Seu Presente Divino de São Miguel Arcanjo
          </h1>
          <p className="text-sm text-center leading-relaxed text-accent-gold">
            3 Perguntas. 40 Dias de Fé. Vagas Limitadas.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-6">
          <Image
            src="/images/captura-de-tela-2025-07-11-a-s-14-35-02.png"
            alt="Frei Gilson 40 Dias com São Miguel Arcanjo 2025"
            width={300}
            height={450}
            className="rounded-lg shadow-md object-contain"
            priority // Added priority prop
          />

          <div className="w-full p-4 rounded-xl bg-purple-light text-center space-y-2">
            <p className="text-lg font-semibold text-accent-gold flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5" />
              {"+122.347"} Pessoas já garantiram!
            </p>
            <p className="text-sm text-white flex items-center justify-center gap-2">
              <span role="img" aria-label="fire emoji">
                🔥
              </span>{" "}
              Quaresma começando! Últimas vagas disponíveis.
            </p>
          </div>

          <Button
            onClick={handleButtonClick}
            className={`w-full py-6 text-lg font-bold rounded-xl transition-colors flex items-center justify-center animate-pulse-slow gap-0 ${
              isClicked
                ? "bg-accent-gold text-white hover:bg-accent-gold/90 animate-shake"
                : "bg-accent-gold text-white hover:bg-accent-gold/90"
            } flex-col`} // Added flex-col to stack content vertically
          >
            <div className="flex items-center justify-center gap-2 text-purple-darker">
              <Sparkles className="h-5 w-5 text-purple-darker" />
              QUERO GARANTIR MEU LUGAR
              <ArrowRight className="h-5 w-5 ml-2" />
            </div>
            <span className="text-xs mt-1 text-violet-950">Toque para continuar</span>
          </Button>

          {isClicked && <p className="text-xs text-white text-center mt-2">Avançando para próxima etapa...</p>}

          <p className="text-xs text-white flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Leva apenas 2 minutos
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
