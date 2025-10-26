'use client'

import { Button } from './ui/button'
import Image from 'next/image'
import logo from '@/assets/logo-black.png'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Ритм" className="w-8 h-8" />
          <span className="text-xl tracking-tight">Ритм</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-white/70 hover:text-white transition-colors">
            Как это работает
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm text-white/70 hover:text-white transition-colors">
            Цены
          </button>
          <button onClick={() => scrollToSection('features')} className="text-sm text-white/70 hover:text-white transition-colors">
            Функции
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-sm text-white/70 hover:text-white transition-colors">
            FAQ
          </button>
        </nav>

        <Button variant="default" className="bg-white text-black hover:bg-white/90 rounded-full px-6">
          Купить
        </Button>
      </div>
    </header>
  )
}