import { Play } from 'lucide-react'
import Image from 'next/image'

export default function WatchInAction() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Посмотрите Ритм в действии
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Как только ваш токен Ритм вне досягаемости, так же и ваши отвлечения. Без обходных путей, без оправданий.
          </p>

          <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-video group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80"
              alt="Ритм в действии"
              width={1200}
              height={675}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-black ml-1" fill="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}