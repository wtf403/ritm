import { Star, Apple, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  const focusedUsers = 533;
  const savedHours = 8125;


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Decorative diamond */}
      <div className="absolute right-1/4 top-1/3 w-64 h-64 border border-white/10 transform rotate-45"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <span className="text-white/70">4.8/5 (200+ отзывов)</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight max-w-6xl mx-auto">
          Верните себе время
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
          Ритм – откажись от соцсетей одним касанием
        </p>


        {/* App Store Buttons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            <Apple className="w-5 h-5" />
            <span className="text-sm">App Store</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm">Google Play</span>
          </button>
        </div>

        {/* CTA Button */}
        <Button className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-6 text-xl mb-4">
          Купить
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="text-5xl mb-2">{focusedUsers.toLocaleString('ru-RU')}</div>
            <div className="text-sm text-white/50">Пользователя присоединились</div>
          </div>
          <div>
            <div className="text-5xl mb-2">{savedHours.toLocaleString('ru-RU')}</div>
            <div className="text-sm text-white/50">Сэкономлено часов</div>
          </div>
        </div>
      </div>
    </section>
  );
}
