"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Plus, Sparkles, Star, Quote, ArrowRight } from "lucide-react"

interface TestimonialProps {
  stars: number
  quote: string
  author: string
  age: number
  likes: number
}

const testimonials = [
  { stars: 5, quote: "A transformação foi incrível!", author: "João", age: 30, likes: 120 },
  { stars: 4, quote: "Estou muito feliz com o resultado.", author: "Maria", age: 25, likes: 95 },
  { stars: 5, quote: "Minha vida mudou para melhor.", author: "Carlos", age: 40, likes: 150 },
]

function TestimonialCard({ stars, quote, author, age, likes }: TestimonialProps) {
  return (
    <div className="relative w-full p-4 rounded-xl bg-purple-light text-white shadow-md">
      <div className="flex justify-between items-start mb-2">
        <div className="flex">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
          ))}
        </div>
        <Quote className="h-6 w-6 text-white/50 absolute top-2 right-2" />
      </div>
      <p className="text-sm italic mb-2 leading-snug">"{quote}"</p>
      <p className="text-sm font-semibold text-accent-gold">
        {author}, {age} anos
      </p>
      <p className="text-xs text-white flex items-center gap-1">
        <Heart className="h-3 w-3 fill-accent-gold text-accent-gold" />
        {likes.toLocaleString("pt-BR")} curtidas
      </p>
    </div>
  )
}

export default function FunnelStep5Page() {
  const [isContinuing, setIsContinuing] = useState(false)
  const router = useRouter()

  const handleContinueClick = () => {
    setIsContinuing(true)
    setTimeout(() => {
      // Navigate to the next step, e.g., /next-funnel-step-6
      router.push("/next-funnel-step-6")
    }, 300) // 300ms delay for effect
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-purple-circle-light opacity-70 blur-md" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-purple-circle-dark opacity-70 blur-md" />
      <Card className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-purple-medium to-purple-darker text-white shadow-lg">
        <CardHeader className="relative flex flex-col items-center p-6 pb-4 space-y-4">
          <div className="flex items-center space-x-2 rounded-full px-4 py-2 mt-4 bg-purple-darker">
            <Heart className="h-5 w-5 text-accent-gold" />
            <Plus className="h-5 w-5 text-accent-gold" />
            <Sparkles className="h-5 w-5 text-accent-gold" />
          </div>
          <h1 className="text-xl font-bold text-center leading-relaxed mt-4 uppercase text-accent-gold">
            VEJA O QUE ESSAS PESSOAS ESTÃO <br /> VIVENCIANDO...
          </h1>
          <p className="text-sm text-accent-gold text-center leading-relaxed">
            Depoimentos reais de pessoas transformadas
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}

          <Button
            onClick={handleContinueClick}
            className={`w-full py-6 text-lg font-bold rounded-xl transition-colors flex items-center justify-center gap-2 animate-pulse-slow ${
              isContinuing
                ? "bg-accent-gold text-purple-darker hover:bg-accent-gold/90" // Changed text color to purple-darker
                : "bg-accent-gold text-purple-darker hover:bg-accent-gold/90" // Changed text color to purple-darker
            }`}
          >
            <Heart className="h-5 w-5 text-purple-darker" /> {/* Changed icon color to purple-darker */}
            CONTINUAR
            <ArrowRight className="h-5 w-5 ml-2 text-purple-darker" /> {/* Changed icon color to purple-darker */}
          </Button>

          {isContinuing && <p className="text-xs text-white text-center mt-2">Avançando para próxima etapa...</p>}
          <p className="text-xs text-white text-center mt-2">"Você também pode ter essa transformação"</p>
        </CardContent>
      </Card>
    </div>
  )
}
