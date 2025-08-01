"use client" // Converted to Client Component

import { useState } from "react" // Import useState
import { useRouter } from "next/navigation" // Import useRouter
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus, ArrowRight, LineChart, Flame, Gem, Gift } from "lucide-react"

export default function FunnelStep3Page() {
  const [isContinuing, setIsContinuing] = useState(false) // State for the "CONTINUAR" button
  const router = useRouter()

  const handleContinueClick = () => {
    setIsContinuing(true)
    setTimeout(() => {
      router.push("/next-funnel-step-4")
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
          <h1 className="text-xl font-bold text-center leading-relaxed mt-4 text-accent-gold">
            POR QUE A QUARESMA DE SÃO MIGUEL É INDISPENSÁVEL AGORA:
          </h1>
          <p className="text-sm text-accent-gold text-center leading-relaxed">
            Descubra os benefícios transformadores da jornada
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-4">
          <Button
            className="w-full py-6 text-sm font-medium rounded-xl bg-purple-light text-white hover:bg-purple-light/90 transition-colors flex items-center justify-start px-3"
            aria-label="Livre-se da culpa que te consome em 7 dias, com rituais guiados"
          >
            <div className="flex items-center gap-3 max-w-full flex-wrap">
              <LineChart className="h-5 w-5 text-accent-gold flex-shrink-0" />
              <span className="text-xs text-left flex-grow leading-tight">
                Livre-se da culpa que te consome em 7 dias,
                <br />
                com rituais guiados
              </span>
            </div>
          </Button>
          <Button
            className="w-full py-6 text-sm font-medium rounded-xl bg-purple-light text-white hover:bg-purple-light/90 transition-colors flex items-center justify-start px-3"
            aria-label="Exploda sua fé: recupere confiança em Deus e sinta a paz interior"
          >
            <div className="flex items-center gap-3 max-w-full flex-wrap">
              <Flame className="h-5 w-5 text-accent-gold flex-shrink-0" />
              <span className="text-xs text-left flex-grow leading-tight">
                Exploda sua fé: recupere confiança em Deus
                <br />e sinta a paz interior
              </span>
            </div>
          </Button>
          <Button
            className="w-full py-6 text-sm font-medium rounded-xl bg-purple-light text-white hover:bg-purple-light/90 transition-colors flex items-center justify-start px-3"
            aria-label="Direção Divina: descubra sua missão em cada etapa da Quaresma"
          >
            <div className="flex items-center gap-3 max-w-full flex-wrap">
              <Gem className="h-5 w-5 text-accent-gold flex-shrink-0" />
              <span className="text-xs text-left flex-grow leading-tight">
                Direção Divina: descubra sua missão
                <br />
                em cada etapa da Quaresma
              </span>
            </div>
          </Button>
          <Button
            className="w-full py-6 text-sm font-medium rounded-xl bg-purple-light text-white hover:bg-purple-light/90 transition-colors flex items-center justify-start px-3"
            aria-label="Proteção Angelical: receba orações exclusivas e invocações poderosas"
          >
            <div className="flex items-center gap-3 max-w-full flex-wrap">
              <Gift className="h-5 w-5 text-accent-gold flex-shrink-0" />
              <span className="text-xs text-left flex-grow leading-tight">
                Proteção Angelical: receba orações
                <br />
                exclusivas e invocações poderosas
              </span>
            </div>
          </Button>

          <Button
            onClick={handleContinueClick}
            className={`w-full py-6 text-lg font-bold rounded-xl transition-colors flex items-center justify-center gap-2 mt-6 ${
              isContinuing
                ? "bg-accent-gold text-white hover:bg-accent-gold/90"
                : "bg-accent-gold text-white hover:bg-accent-gold/90"
            }`}
          >
            <Heart className="h-5 w-5" />
            CONTINUAR
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>

          {isContinuing && <p className="text-xs text-white text-center mt-2">Avançando para próxima etapa...</p>}

          <p className="text-xs text-white text-center mt-2">"Continue respondendo para confirmar sua vaga"</p>
        </CardContent>
      </Card>
    </div>
  )
}
