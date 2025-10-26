import {
  Calendar,
  Coffee,
  AlertCircle,
  Baby,
  Globe,
  BatteryCharging,
  Lock,
  ShieldAlert
} from 'lucide-react'

export default function KeyFeatures() {
  const features = [
    {
      icon: Calendar,
      title: 'Расписания',
      description: 'Задавайте автоматические периоды фокуса на каждый день недели'
    },
    {
      icon: Coffee,
      title: 'Перерывы',
      description: 'До трёх пятиминутных пауз в каждой фокус‑сессии'
    },
    {
      icon: AlertCircle,
      title: 'Аварийные выходы',
      description: 'Разблокировка всех приложений до трёх раз в день для срочных случаев'
    },
    {
      icon: Baby,
      title: 'Детский режим',
      description: 'Блокируйте приложения вашего ребёнка, доступ только с вашего токена Ритм'
    },
    {
      icon: Globe,
      title: 'Блокировка веб‑сайтов',
      description: 'Блокируйте отвлекающие веб‑сайты в Safari и Chrome'
    },
    {
      icon: BatteryCharging,
      title: 'Нет зарядки',
      description: 'Карта использует NFC — не требует батареи или зарядки'
    },
    {
      icon: Lock,
      title: 'Строгий режим',
      description: 'Предотвращает удаление приложения Ритм во время фокус‑сессии'
    },
    {
      icon: ShieldAlert,
      title: 'Особая блокировка',
      description: 'Блокировка контента 18+, покупок внутри приложений и установки программ'
    }
  ]

  return (
    <section id="features" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ключевые функции Ритм
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Разработано, чтобы ломать плохие привычки, а не облегчать их
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}