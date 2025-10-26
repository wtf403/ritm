import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      question: '❓ Зачем нужен физический токен?',
      answer: 'Мы обнаружили, что физическое расстояние от телефона — лучший способ не поддаться отвлечениям. Программные решения вроде "Экранного времени" можно легко обойти. NFC-токен создаёт осознанный барьер: без касания у вас нет "ключа" к вашим приложениям — и внимание остаётся с вами.'
    },
    {
      question: '❓ Можно ли начать фокус-сессию без токена?',
      answer: 'Да, можно активировать сессию вручную через кнопку «Начать без токена» — но токен нужен, чтобы вернуть доступ к приложениям. Это часть ритуала и дисциплины, формирующей привычку фокусироваться.'
    },
    {
      question: '❓ Работает ли приложение на Android?',
      answer: 'Да. Мы поддерживаем Android и iOS — всё, что имеет NFC-модуль.'
    },
    {
      question: '❓ Что делать, если я потерял токен?',
      answer: 'В таком случае лучше обратиться в поддержку. Для доступа к текущейу можно потратить одну из 3 экстренных разблокировок.'
    },
    {
      question: '❓ Можно ли блокировать сайты?',
      answer: 'Да. Мы автоматически блокируем популярные сайты-отвлечения, а также веб-версии заблокированных приложений. Например, блокировка Instagram закроет доступ и к instagram.com.'
    },
    {
      question: '❓ Куда класть токен, когда я в фокусе?',
      answer: 'Оставьте токен дома — на рабочем столе, в сумке или в машине. Главное — чтобы он был вне досягаемости. Так вы сохраняете физическую дистанцию от соблазнов.'
    },
    {
      question: '❓ А если удалить приложение?',
      answer: 'Можно, но тогда все ограничения снимаются. Для максимальной дисциплины включите режим "Жёсткой блокировки", который предотвращает удаление приложений во время сессии (доступно на iOS, скоро — на Android).'
   },
  ]

  return (
    <section id="faq" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Всё, что вам нужно знать о Ритм
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}