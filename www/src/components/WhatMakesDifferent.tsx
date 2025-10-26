import Image from 'next/image'

export default function WhatMakesDifferent() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8">
              Чем Ритм отличается?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-6">
              Другие приложения для блокировки легко проигнорировать — один тап, и вы вернулись к отвлечениям.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Ритм требует физического действия. Пока ваш токен вне досягаемости, нет соблазна отключить блокировку. Это настоящий барьер между вами и вашими плохими привычками.
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[9/16] mx-auto max-w-sm">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                alt="Заблокированный экран"
                width={300}
                height={533}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-lg">Приложение заблокировано</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}