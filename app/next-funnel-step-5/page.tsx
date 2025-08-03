"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Plus, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function FunnelStep5Page() {
  const [isContinuing, setIsContinuing] = useState(false)
  const router = useRouter()

  const handleContinueClick = () => {
    setIsContinuing(true)
    setTimeout(() => {
      router.push("/next-funnel-step-6")
    }, 300)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />
      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-6 pb-4 space-y-4">
          <div className="flex items-center space-x-2 rounded-full px-4 py-2 mt-4 bg-purple-darker">
            <Heart className="h-5 w-5 text-accent-gold" />
            <Plus className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-bold text-center leading-relaxed mt-4 uppercase text-accent-gold">
            VEJA O QUE ESSAS PESSOAS ESTÃO <br /> VIVENCIANDO...
          </h1>
          <p className="text-sm text-accent-gold text-center leading-relaxed">
            Depoimentos reais de pessoas transformadas
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-4 pb-20">
          {/* Testimonial Images */}
          <Image
            src="/images/comentario-de-gratidao.png"
            alt="Depoimento de Lucas Ferreira: A Quaresma de São Miguel Arcanjo me salvou da ansiedade e do desespero."
            width={300} // Reduced width
            height={150} // Reduced height
            className="w-full h-auto rounded-xl object-contain"
          />
          <Image
            src="/images/testemunho-de-fe.png"
            alt="Depoimento de Fernanda Souza: Fiz a Quaresma de São Miguel Arcanjo com fé... e minha vida mudou completamente."
            width={300} // Reduced width
            height={150} // Reduced height
            className="w-full h-auto rounded-xl object-contain"
          />

          <Button
            onClick={handleContinueClick}
            className={`fixed bottom-4 left-4 right-4 py-6 text-lg font-bold rounded-xl transition-colors flex items-center justify-center gap-2 animate-pulse-slow ${
              isContinuing
                ? "bg-accent-gold text-purple-darker hover:bg-accent-gold/90"
                : "bg-accent-gold text-purple-darker hover:bg-accent-gold/90"
            } z-50`}
          >
            <Heart className="h-5 w-5 text-purple-darker" />
            CONTINUAR
            <ArrowRight className="h-5 w-5 ml-2 text-purple-darker" />
          </Button>

          {isContinuing && <p className="text-xs text-white text-center mt-2">Avançando para próxima etapa...</p>}
          <p className="text-xs text-white text-center mt-2">"Você também pode ter essa transformação"</p>
        </CardContent>
      </Card>
    </div>
  )
}
