'use client'

import Image from 'next/image'
import logo from '@/assets/logo-black.png'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Ритм" className="w-6 h-6" />
              <span className="text-lg tracking-tight">Ритм</span>
            </div>
            <p className="text-white/60 text-sm">
              Превратите цифровой самоконтроль в ежедневный ритуал
            </p>
          </div>

          <div>
            <h4 className="mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">
                  Как это работает
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">
                  Функции
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                  Цены
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© 2025 Ритм. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}