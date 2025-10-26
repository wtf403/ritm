import { Badge } from './ui/badge'
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      title: 'Выберите свои отвлечения',
      description: 'Выберите приложения и веб‑сайты, которые крадут ваше время'
    },
    {
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80',
      title: 'Приложите токен Ритм',
      description: 'Физически приложите ваш токен Ритм к телефону'
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      title: 'Живите без отвлечений',
      description: 'Пока вы не приложите токен снова...'
    }
  ]

  return (
    <section id="how-it-works" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-white/20 text-white rounded-full px-4 py-2">
            Фокус Переосмыслен
          </Badge>
          <h2 className="text-5xl md:text-6xl mb-6">Как работает Ритм</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[9/16] flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={533}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-2xl mb-3">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}