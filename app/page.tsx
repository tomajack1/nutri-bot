"use client" // Converted to Client Component

import Image from "next/image"
import { useRouter } from "next/navigation" // Import useRouter
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus, ArrowRight, Clock, BookOpen } from "lucide-react"

export default function Component() {
  const router = useRouter() // Initialize useRouter

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />

      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-5 pb-3 space-y-4">
          {/* Selo "ÚLTIMOS DIAS" movido para dentro do CardHeader */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg z-10 whitespace-now-wrap">
            Faltam 23 horas para acabar as inscrições
          </div>{" "}
          {/* Reduced p and space-y */}
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
        <CardContent className="flex flex-col items-center p-5 pt-0 space-y-4 pb-20">
          {" "}
          {/* Reduced p and space-y */}
          <Image
            src="/images/captura-de-tela-2025-07-11-a-s-14-35-02.png"
            alt="Frei Gilson 40 Dias com São Miguel Arcanjo 2025"
            width={250} // Adjusted width
            height={undefined} // Removed fixed height
            className="rounded-lg shadow-md object-contain h-auto" // Added h-auto
            priority // Added priority prop
          />
          <div className="w-full p-3 rounded-xl bg-accent-gold text-purple-darker text-center animate-pulse-slow shadow-lg">
            <p className="text-base font-bold">Eu prometo que você não vai se arrepender!</p>
          </div>
          <div className="w-full p-3 rounded-xl bg-purple-light text-center space-y-2">
            {" "}
            {/* Reduced p */}
            <p className="text-lg font-semibold text-accent-gold animate-pulse-slow">
              Mais de 122 mil pessoas já receberam milagres através desta oração.
            </p>
            <p className="text-sm text-white flex items-center justify-center gap-2">
              <span role="img" aria-label="fire emoji">
                🔥
              </span>{" "}
              Quaresma começando! Últimas vagas disponíveis.
            </p>
          </div>
          <Button
            onClick={() => router.push("/next-funnel-step")}
            className={`fixed bottom-4 left-4 right-4 py-5 text-lg font-bold rounded-xl transition-colors flex items-center justify-center gap-2 animate-pulse-slow bg-accent-gold text-purple-darker hover:bg-accent-gold/90 z-50`}
          >
            <Sparkles className="h-5 w-5 text-purple-darker" />
            QUERO GARANTIR MEU LUGAR
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <p className="text-xs text-white flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Leva apenas 2 minutos
          </p>
          <p className="text-xs text-white flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            Você receberá o roteiro diário da oração + áudio especial para participar de onde estiver.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
