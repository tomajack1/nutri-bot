"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus, Shield, Zap } from "lucide-react"

export default function FunnelStep8Page() {
  const [progress, setProgress] = useState(0)
  const [progressMessage, setProgressMessage] = useState("") // New state for progress messages
  const router = useRouter()

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1
        if (newProgress <= 100) {
          // Ensure progress doesn't exceed 100
          // Update progress message based on percentage
          if (newProgress < 25) {
            setProgressMessage("Confirmando sua vaga...")
          } else if (newProgress < 50) {
            setProgressMessage("Consultando os anjos...")
          } else if (newProgress < 75) {
            setProgressMessage("Bênção quase pronta...")
          } else if (newProgress <= 100) {
            // Changed to <= 100 to ensure final message
            setProgressMessage("Mensagem encontrada!")
          }
          return newProgress
        }
        clearInterval(interval)
        return prev
      })
    }, 30) // Update every 30ms for faster progress

    // Simulate loading and navigate after a delay
    const timer = setTimeout(() => {
      router.push("/next-funnel-step-9")
    }, 3500) // Navigate after 3.5 seconds (adjusted for faster progress)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [router])

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
            Reservando seu lugar na Corrente de Oração...
          </h1>
          <p className="text-sm text-accent-gold text-center leading-relaxed">
            Preparando a mensagem que São Miguel tem para você
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-6">
          <div className="flex items-center justify-center space-x-6 mt-4">
            <Shield className="h-8 w-8 text-accent-gold animate-pulse-slow" /> {/* Added animation */}
            <Heart className="h-8 w-8 text-accent-gold animate-pulse-slow" /> {/* Added animation */}
            <Zap className="h-8 w-8 text-accent-gold animate-pulse-slow" /> {/* Added animation */}
          </div>
          <div className="w-full h-2 bg-purple-light rounded-full mt-4">
            <div
              className="h-full bg-accent-gold rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-lg font-bold text-accent-gold">{progress}%</p>
          <p className="text-sm text-white text-center">{progressMessage}</p> {/* Display dynamic message */}
          <Button
            className="w-full py-4 text-sm font-medium rounded-xl bg-purple-light text-white hover:bg-purple-light/90 transition-colors flex items-center justify-center gap-2 animate-pulse-slow"
            disabled // Disable button as it's a loading screen
          >
            <Sparkles className="h-4 w-4 text-accent-gold" />
            Estamos criando algo especial para você <br /> baseado em suas respostas
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
