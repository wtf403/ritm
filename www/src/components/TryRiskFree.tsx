'use client'

import { Star, Minus, Plus } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useState } from 'react'
import logo from '@/assets/logo-black.png'
import ozonLogo from '@/assets/ozon.png'
import wbLogo from '@/assets/wb.png'

export default function TryRiskFree() {
  const [selectedOption, setSelectedOption] = useState(1)

  const options = [
    { activations: 7, discount: 0, price: 2990, label: '7 активаций' },
    { activations: 15, discount: 25, price: 3360, label: '15 активаций — скидка 25%' },
    { activations: 35, discount: 35, price: 6475, label: '35+ активаций — скидка 35%, бесплатная доставка' }
  ]

  return (
    <section id="pricing" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6">
            Попробуйте Ритм без риска
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Если вам не понравится, у вас есть 30 дней, чтобы получить полный возврат — без вопросов
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="p-12 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&q=80"
                  alt="Ритм Токен"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={logo}
                    alt="Ритм"
                    width={64}
                    height={64}
                    className="w-16 h-16 bg-white/90 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm text-white/70">4.8 (2 000+)</span>
              </div>

              <h3 className="text-3xl mb-2">Ритм Токен</h3>
              <div className="text-4xl mb-8">{options[selectedOption].price.toLocaleString('ru-RU')} ₽</div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedOption === index
                        ? 'border-white bg-white/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {option.discount > 0 && (
                        <span className="text-sm text-green-400">-{option.discount}%</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Store Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 text-lg flex items-center justify-center gap-3">
                  <Image src={ozonLogo} alt="Ozon" width={24} height={24} />
                  Купить на Ozon
                </Button>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 text-lg flex items-center justify-center gap-3">
                  <Image src={wbLogo} alt="Wildberries" width={24} height={24} />
                  Купить на Wildberries
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}