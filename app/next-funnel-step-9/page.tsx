"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Plus, Check, Gift, Flame, ArrowRight } from "lucide-react"
import { useRef } from "react" // Import useRef

export default function FunnelStep9Page() {
  const mainCtaRef = useRef<HTMLButtonElement>(null) // Create a ref for the main CTA button

  const scrollToMainCta = () => {
    if (mainCtaRef.current) {
      mainCtaRef.current.scrollIntoView({ behavior: "smooth", block: "center" }) // Scroll to the main CTA
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-purple-dark p-4 overflow-hidden">
      {/* Decorative circles */}
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
            Últimas Vagas Para a Corrente de Oração da Quaresma
          </h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 pt-0 space-y-6">
          {/* Novo botão adicionado aqui */}
          <Button
            onClick={scrollToMainCta}
            className="w-full py-4 text-lg font-bold rounded-xl bg-accent-gold hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2 animate-pulse-slow text-purple-darker"
          >
            <Sparkles className="h-5 w-5" />
            QUERO RECEBER ESSA BENÇÃO
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>

          {/* Welcome/Context Section */}
          <div className="w-full p-4 rounded-xl bg-purple-light text-center space-y-2 text-sm">
            <p className="text-left">
              Eu entendo que você está cansada de carregar a{" "}
              <span className="font-semibold text-accent-gold">solidão no casamento e na família</span> no coração e que
              hoje sente <span className="font-semibold text-accent-gold">não ter um guia espiritual</span> te
              bloqueando.
            </p>
            <p className="text-left">
              Por isso não há um segundo a perder: reserve já seu lugar na Quaresma com São Miguel Arcanjo e garanta a{" "}
              <span className="font-semibold text-accent-gold">cura física completa</span> que você tanto deseja!
            </p>
            <p className="text-left font-semibold mt-4 text-accent-gold">Em 40 dias você vai:</p>
            <ul className="list-none pl-0 text-left space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✅</span>
                <span>Reconstruir laços no casamento e na família com rituais que unem corações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✅</span>
                <span>Quebrar de vez os bloqueios que te afastam da presença de Deus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✅</span>
                <span className="">Receber a bênção da cura física e espiritual que transforma vidas</span>
              </li>
            </ul>
          </div>

          {/* Video Embed */}
          <div className="w-full rounded-xl overflow-hidden shadow-md bg-purple-light">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/INS_Ww1q46U?autoplay=1&playsinline=1" // Removed mute=1
                title="Explanation of the 40 Days with Saint Michael the Archangel 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-3 text-center text-white text-sm">
              <p className="text-xs text-accent-gold mt-2 flex items-center justify-center gap-1">
                <Sparkles className="h-3 w-3" />O Frei tem uma mensagem para você!
              </p>
            </div>
          </div>

          <Button
            onClick={scrollToMainCta}
            className="w-full py-4 text-lg font-bold rounded-xl bg-accent-gold hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2 animate-pulse-slow text-purple-darker"
          >
            <Sparkles className="h-5 w-5" />
            QUERO RECEBER ESSA BENÇÃO
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>

          {/* Product/Book Section */}
          <div className="w-full p-4 rounded-xl bg-purple-light text-center space-y-3">
            <Image
              src="/images/design-sem-nome-55.png"
              alt="Frei Gilson Som do Monte 40 Dias São Miguel Arcanjo com livros A Fé Explicada, Itinerário 40 Dias e Nossa Senhora de Guadalupe"
              width={300} // Adjusted width to fit the new image content
              height={300} // Adjusted height
              className="mx-auto object-contain" // Use object-contain to ensure the full image is visible
              priority // Added priority prop
            />
            <p className="text-xs text-accent-gold flex items-center justify-center gap-1">
              <Sparkles className="h-3 w-3" />
              Receberá os 3 Livros para usar na Quaresma!
            </p>
          </div>

          {/* O QUE INCLUI NO COMBO Section */}
          <div className="w-full p-4 rounded-xl bg-purple-light text-white space-y-2">
            <h3 className="text-lg font-bold text-center text-accent-gold mb-3">O QUE INCLUI NO COMBO:</h3>
            <ul className="list-none pl-0 space-y-2">
              {[
                "Vídeos e missa para os 40 dias com São Miguel Arcanjo",
                "Orações específicas para sua situação",
                "Livro - Itinerário 40 dias com São Miguel",
                "Livro - Caminho para encontrar Deus",
                "Livro - Devocionário Nossa Senhora de Guadalupe",
                "Acompanhamento por WhatsApp",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={scrollToMainCta}
            className="w-full py-4 text-lg font-bold rounded-xl bg-accent-gold hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2 animate-pulse-slow text-purple-darker"
          >
            <Sparkles className="h-5 w-5" />
            QUERO RECEBER ESSA BENÇÃO
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>

          {/* BÔNUS EXCLUSIVOS Section */}
          <div className="w-full p-4 rounded-xl bg-purple-light text-white space-y-3">
            <h3 className="text-lg font-bold text-center text-accent-gold mb-3">BÔNUS EXCLUSIVOS</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold">Bônus 1: Aplicativo Único de São Miguel</p>
                  <p className="text-xs">Exclusivo para acompanhar e te ajudar a seguir os 40 dias</p>
                </div>
                <p className="text-accent-gold font-bold text-right">
                  <span className="line-through text-red-500">R$ 97</span> <br />{" "}
                  <span className="text-green-500">GRÁTIS</span>
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold">Bônus 2: Novena da Prosperidade</p>
                  <p className="text-xs">Novena de São José para atrair benção financeira</p>
                </div>
                <p className="text-accent-gold font-bold text-right">
                  <span className="line-through text-red-500">R$ 59</span> <br />{" "}
                  <span className="text-green-500">GRÁTIS</span>
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold">Bônus 3: Grupo VIP no WhatsApp</p>
                  <p className="text-xs">Comunidade exclusiva com suporte diário</p>
                </div>
                <p className="text-accent-gold font-bold text-right">
                  <span className="line-through text-red-500">R$ 67</span> <br />{" "}
                  <span className="text-green-500">GRÁTIS</span>
                </p>
              </div>
            </div>
          </div>

          {/* OFERTA ESPECIAL Section */}
          <Link href="https://go.disruptybr.com.br/oiuxh" passHref legacyBehavior>
            <div className="w-full p-4 rounded-xl bg-accent-gold text-purple-darker text-center space-y-2 cursor-pointer animate-pulse-slow">
              <p className="text-sm font-semibold flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" /> OFERTA ESPECIAL <Sparkles className="h-4 w-4" />
              </p>
              <p className="text-xs">Valor total se comprado separadamente:</p>
              <p className="text-xl font-bold line-through text-gray-600">R$ 207,00</p>
              <p className="text-sm">Oferta especial para você:</p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-4xl font-bold">R$ 29,90</p>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">-86%</span>
              </div>
              <p className="text-xs">ou 12x de R$ 2,99</p>
              <p className="text-xs text-white flex items-center justify-center gap-1 mt-2 bg-red-500 px-2 py-1 rounded-md font-bold">
                <Flame className="h-3 w-3" /> Apenas 13 vagas com este preço — encerra hoje!
              </p>
            </div>
          </Link>

          {/* Main Call-to-Action Button */}
          <Link href="https://go.disruptybr.com.br/oiuxh" passHref legacyBehavior>
            <Button
              ref={mainCtaRef} // Attach the ref here
              className="w-full py-6 text-lg font-bold rounded-xl bg-accent-gold hover:bg-accent-gold/90 transition-colors flex flex-col items-center justify-center gap-1 animate-pulse-slow text-purple-darker"
            >
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <Flame className="h-5 w-5" />
                <span>SIM! QUERO GARANTIR MEU LUGAR</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
              <span className="text-sm">NA CORRENTE DE FÉ</span>
            </Button>
          </Link>
          <p className="text-xs text-white text-center flex items-center justify-center gap-1">
            <Sparkles className="h-3 w-3 text-accent-gold" /> Ajude nossa missão e receba agora tudo que precisa!
          </p>

          {/* Guarantee Section */}
          <div className="w-full p-4 rounded-xl bg-purple-light text-white text-center space-y-2">
            <Gift className="h-6 w-6 text-accent-gold mx-auto" />
            <h3 className="text-base font-bold text-accent-gold">Garantia Incondicional de 7 Dias</h3>
            <p className="text-xs">
              Sem riscos, sem perguntas. Se você não sentir uma transformação real em sua vida espiritual, devolvemos
              100% do seu investimento.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
