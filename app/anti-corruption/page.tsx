'use client'

import { useState, Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PageHeader from '@/components/PageHeader'
import { getTranslation } from '@/lib/i18n'
import { useLanguage } from '@/lib/useLanguage'
import Link from 'next/link'

export default function AntiCorruptionPage() {
  return (
    <Suspense fallback={null}>
      <AntiCorruptionPageContent />
    </Suspense>
  )
}

function AntiCorruptionPageContent() {
  const { currentLang } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const t = getTranslation(currentLang)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Здесь будет логика отправки формы
    try {
      // await submitAntiCorruptionAppeal(formData)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация отправки
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        currentLang={currentLang}
        title={{
          uz: 'Korrupsiyaga qarshi kurashish bo\'yicha murojaat',
          ru: 'Обращение по противодействию коррупции',
          en: 'Anti-Corruption Appeal'
        }}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />

      {/* Breadcrumbs */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-800">
              {currentLang === 'uz' && 'Bosh sahifa'}
              {currentLang === 'ru' && 'Главная'}
              {currentLang === 'en' && 'Home'}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/digital-gov" className="text-primary-600 hover:text-primary-800">
              {currentLang === 'uz' && 'Raqamli hukumat'}
              {currentLang === 'ru' && 'Цифровое правительство'}
              {currentLang === 'en' && 'Digital Government'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">
              {currentLang === 'uz' && 'Korrupsiyaga qarshi kurashish'}
              {currentLang === 'ru' && 'Противодействие коррупции'}
              {currentLang === 'en' && 'Anti-Corruption'}
            </span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                {currentLang === 'uz' && 'AGROSANOATNI RIVOJLANTIRISH AGENTLIGI DIREKTORI ABDULLAYEV NURALI YUSUFALIVICHNING KORRUPSIYAGA QARSHI KURASHISH BO\'YICHA MUROJAATI'}
                {currentLang === 'ru' && 'ОБРАЩЕНИЕ ДИРЕКТОРА АГЕНТСТВА ПО РАЗВИТИЮ АГРОПРОМЫШЛЕННОСТИ ABDULLAYEV NURALI YUSUFALIVICH ПО ПРОТИВОДЕЙСТВИЮ КОРРУПЦИИ'}
                {currentLang === 'en' && 'APPEAL OF DIRECTOR OF AGENCY FOR AGRO-INDUSTRY DEVELOPMENT ABDULLAYEV NURALI YUSUFALIVICH ON ANTI-CORRUPTION'}
              </h2>
              
              <div className="prose max-w-none text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                {currentLang === 'uz' ? (
                  <>
                    <p>
                      Korrupsiya dunyo miqyosida hal etilishi lozim bo'lgan global muammolardan biri ekanligi, ushbu illat har qanday davlat va jamiyatning siyosiy-iqtisodiy rivojlanishiga jiddiy putur yetkazib, inson huquq va erkinliklarining poymol bo'lishiga olib kelayotganligini yaxshi bilamiz. Shu bois, unga qarshi kurash xalqaro hamjamiyat doirasida ahamiyat kasb etib, jahon siyosatining muhim masalalari qatoridan joy olgani bejiz emas.
                    </p>
                    <p>
                      So'nggi yillarda mamlakatimizda korrupsiyaning oldini olish va unga qarshi kurashish maqsadida barcha sohalarda keng ko'lamli islohotlar izchil amalga oshirilmoqda.
                    </p>
                    <p>
                      Prezidentimiz Sh.M.Mirziyoyev o'z ma'ruzalarida "Jamiyatimizda korrupsiya, turli jinoyatlarni sodir etish va boshqa huquqbuzarlik holatlariga qarshi kurashish, ularga yo'l qo'ymaslik, jinoyatga jazo, albatta, muqarrar ekani to'g'risidagi qonun talablarini amalda ta'minlash bo'yicha qat'iy choralar ko'rishimiz zarur"ligini, qayta-qayta tilga oladilar.
                    </p>
                    <p>
                      Korrupsiya va poraxo'rlik jamiyat barqarorligining muhim asosi bo'lgan ijtimoiy va huquqiy adolatning yo'qolishiga olib keladi. Mamlakatimiz mustaqilligi, xalqimiz farovonligi, yurtmiz rivoji va gullab yashnashi va obod bo'lishi har bir fuqaroda milliy g'ururning qay darajada shakllanganligiga bog'liq. Bu kabi shahslar eng avvalo pora olish va berish illatidan xalos bo'lishi, bir so'z bilan aytganda «halollik vaksinasi» bilan emlanishi zarur.
                    </p>
                    <p>
                      Shu bilan birga, Agentlik tizimi faoliyatida korrupsiya bilan bog'liq huquqbuzarliklarni profilaktika qilish va ularga barham berishga qaratilgan vazifalar va yo'nalishlar belgilab olinib, korrupsiyaviy xavf-xatarlarni aniqlash, baholash, shuningdek, ularni kamaytirish bo'yicha tadbirlar amalga oshirib kelinmoqda. Agentlik tizimida korrupsiyaga nisbatan murosasiz munosabatni shakllantirish, korrupsiyaning oldini olishga doir targ'ibot tadbirlari, vazirlik tizimida faoliyat yuritayotgan xodimlarning huquqiy ongi va madaniyatini yuksaltirish bo'yicha o'quv seminarlari, treninglar, brifinglar va davra suhbatlari tashkil etib borilmoqda.
                    </p>
                    <p>
                      Shu o'rinda, Agentlik tizimida faoliyat yuritayotgan barcha xodimlarga shuni alohida ta'kidlagan bo'lar edim-ki, korrupsiyaga mutlaqo toqatsizlik tamoyiliga tayangan holda korrupsiya bilan bog'liq har qanday xatti-harakatlarda ishtirok etmang, boshqa shaxslarning manfaatlarini ko'zlab harakat qilmang, pora olish yoki g'ayriqonuniy boshqa maqsadlarda o'z xizmat mavqeyingizdan noqonuniy foydalanmang.
                    </p>
                    <p>
                      Sizlar, mehnat faoliyatingizdagi yuridik va jismoniy shaxslar bilan munosabatlarda halol, adolatli va mustaqil xulq-atvor namunasi bo'lishingiz, o'z mansab majburiyatingizni bajarishingiz doirasida, korrupsiyaning barcha shakllari va ko'rinishlariga murosasiz munosabatni shakllantirgan holda korrupsiyaga qarshi kurashish bo'yicha qonunchilik normalari va qabul qilingan ichki hujjatlarga rioya qilishingiz lozim.
                    </p>
                    <p>
                      Biz shuni unutmasligimiz kerakki, korrupsiya ma'lum bir sohaga emas, balki butun jamiyat taraqqiyotining inqiroziga olib keladi, davlatni ich-ichidan yemiradi. Hozirda korrupsiyaga qarshi kurashish maqsadlariga faqat tashkiliy-huquqiy vositalar bilan erishib bo'lmasligini hayotning o'zi ko'rsatmoqda.
                    </p>
                    <p>
                      O'ylaymanki, jamiyat kushandasi bo'lgan ushbu illatga qarshi kurashda nafaqat davlat tashkilotlari, balki, jamiyat va umuman barcha fuqarolarimiz mas'uldir. Biz korrupsiyaning oqibatlari bilan kurashishdan uning barvaqt oldini olishga o'tishimiz lozim. Shunday ekan, davlat va jamoat tashkilotlari bu illatni oldini olishi va unga qarshi kurashda hamjihat bo'lishi samarali natijalarga erishishning eng maqbul yo'li bo'lib hisoblanadi.
                    </p>
                    <p>
                      Shuningdek, Agentlik tizimida ishlayotgan xodimlarning qonunchilikka zid xatti-harakatlari yoki harakatsizliklarining guvohi bo'lsangiz yoki xodimlarning korrupsiya va boshqa huquqbuzarlik holatlariga aloqadorligi yuzasidan ma'lumotlarga ega bo'lsangiz, Agentlikning quyida keltirilgan aloqa kanallari orqali Korrupsiyaga qarshi ichki nazorat bo'limini xabardor qilishlari lozim.
                    </p>
                    <p className="font-semibold">
                      Sodir etilgan har qanday korrupsiyaviy jinoyat sirligicha qolmaydi, albatta oshkor bo'ladi. Shuning uchun, men sizlarni ogohlantirmoqchiman, har qanday jinoyat uchun jazo muqarrar, buni har birimiz teran his qilishimiz zarur.
                    </p>
                    <p className="font-semibold text-primary-600 text-lg">
                      Sizu biz, xammamiz birgalikda korrupsiyaga qarshi murosasiz kurash olib boraylik!
                    </p>
                    <p className="text-right font-semibold">
                      E'tiboringiz uchun tashakkur!
                    </p>
                  </>
                ) : currentLang === 'ru' ? (
                  <>
                    <p>
                      Мы хорошо знаем, что коррупция является одной из глобальных проблем, которые необходимо решать в мировом масштабе, и что этот недуг наносит серьезный ущерб политико-экономическому развитию любого государства и общества, приводя к нарушению прав и свобод человека. Поэтому борьба с ней приобрела важное значение в рамках международного сообщества и заняла место среди важных вопросов мировой политики.
                    </p>
                    <p>
                      В последние годы в нашей стране последовательно проводятся широкомасштабные реформы во всех сферах с целью предотвращения и борьбы с коррупцией.
                    </p>
                    <p>
                      Наш Президент Ш.М.Мирзиёев в своих выступлениях неоднократно подчеркивает необходимость "принятия решительных мер по обеспечению на практике требований закона о борьбе с коррупцией, различными преступлениями и другими правонарушениями в нашем обществе, недопущению их, о том, что за преступление обязательно последует наказание".
                    </p>
                    <p>
                      Коррупция и взяточничество приводят к утрате социальной и правовой справедливости, которая является важной основой стабильности общества. Независимость нашей страны, благополучие нашего народа, развитие и процветание нашей родины зависят от того, насколько сформирована национальная гордость у каждого гражданина. Такие лица должны прежде всего освободиться от недуга получения и дачи взяток, одним словом, быть "привиты вакциной честности".
                    </p>
                    <p>
                      Вместе с тем, в деятельности системы Агентства определены задачи и направления, направленные на профилактику и пресечение правонарушений, связанных с коррупцией, проводятся мероприятия по выявлению, оценке, а также снижению коррупционных рисков. В системе Агентства формируется непримиримое отношение к коррупции, проводятся пропагандистские мероприятия по предотвращению коррупции, организуются учебные семинары, тренинги, брифинги и круглые столы по повышению правового сознания и культуры сотрудников, работающих в системе министерства.
                    </p>
                    <p>
                      На этом месте я хотел бы особо подчеркнуть всем сотрудникам, работающим в системе Агентства, что, опираясь на принцип абсолютной нетерпимости к коррупции, не участвуйте в любых действиях, связанных с коррупцией, не действуйте в интересах других лиц, не используйте незаконно свое служебное положение для получения взяток или других незаконных целей.
                    </p>
                    <p>
                      Вы должны быть примером честного, справедливого и независимого поведения в отношениях с юридическими и физическими лицами в вашей трудовой деятельности, в рамках выполнения своих должностных обязанностей, формируя непримиримое отношение ко всем формам и проявлениям коррупции, соблюдая нормы законодательства и принятые внутренние документы по борьбе с коррупцией.
                    </p>
                    <p>
                      Мы не должны забывать, что коррупция приводит не к кризису в определенной сфере, а к кризису развития всего общества, разъедает государство изнутри. Сама жизнь показывает, что в настоящее время целей борьбы с коррупцией нельзя достичь только организационно-правовыми средствами.
                    </p>
                    <p>
                      Я думаю, что в борьбе с этим недугом, который является язвой общества, ответственны не только государственные организации, но и общество и все наши граждане в целом. Мы должны перейти от борьбы с последствиями коррупции к ее своевременному предотвращению. Таким образом, совместная работа государственных и общественных организаций по предотвращению этого недуга и борьбе с ним считается наиболее приемлемым путем достижения эффективных результатов.
                    </p>
                    <p>
                      Кроме того, если вы стали свидетелем противоправных действий или бездействия сотрудников, работающих в системе Агентства, или имеете информацию о причастности сотрудников к коррупции и другим правонарушениям, необходимо информировать отдел внутреннего контроля по борьбе с коррупцией через указанные ниже каналы связи Агентства.
                    </p>
                    <p className="font-semibold">
                      Любое совершенное коррупционное преступление не останется в тайне, оно обязательно будет раскрыто. Поэтому я хочу предупредить вас, что за любое преступление обязательно последует наказание, и каждый из нас должен глубоко это осознавать.
                    </p>
                    <p className="font-semibold text-primary-600 text-lg">
                      Давайте мы, все вместе, ведем непримиримую борьбу с коррупцией!
                    </p>
                    <p className="text-right font-semibold">
                      Спасибо за внимание!
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We are well aware that corruption is one of the global problems that must be solved on a global scale, and that this evil causes serious damage to the political and economic development of any state and society, leading to the violation of human rights and freedoms. Therefore, the fight against it has gained importance within the international community and has taken its place among the important issues of world politics.
                    </p>
                    <p>
                      In recent years, large-scale reforms have been consistently implemented in all areas in our country to prevent and combat corruption.
                    </p>
                    <p>
                      Our President Sh.M.Mirziyoyev repeatedly emphasizes in his speeches the need to "take decisive measures to ensure in practice the requirements of the law on combating corruption, various crimes and other offenses in our society, not to allow them, that punishment for crime is certainly inevitable".
                    </p>
                    <p>
                      Corruption and bribery lead to the loss of social and legal justice, which is an important basis for the stability of society. The independence of our country, the well-being of our people, the development and prosperity of our homeland depend on how much national pride is formed in every citizen. Such persons must first of all be freed from the evil of taking and giving bribes, in a word, be "vaccinated with the vaccine of honesty".
                    </p>
                    <p>
                      At the same time, tasks and directions aimed at preventing and suppressing offenses related to corruption in the activities of the Agency system have been determined, and measures are being taken to identify, assess, and reduce corruption risks. In the Agency system, an intolerant attitude towards corruption is being formed, propaganda events on corruption prevention are being held, training seminars, trainings, briefings and round tables are being organized to improve the legal awareness and culture of employees working in the ministry system.
                    </p>
                    <p>
                      On this occasion, I would like to especially emphasize to all employees working in the Agency system that, based on the principle of absolute intolerance to corruption, do not participate in any actions related to corruption, do not act in the interests of other persons, do not illegally use your official position to take bribes or other illegal purposes.
                    </p>
                    <p>
                      You must be an example of honest, fair and independent behavior in relations with legal and physical persons in your work activities, within the framework of performing your official duties, forming an intolerant attitude towards all forms and manifestations of corruption, observing the norms of legislation and adopted internal documents on combating corruption.
                    </p>
                    <p>
                      We must not forget that corruption leads not to a crisis in a certain area, but to a crisis in the development of the entire society, eating away at the state from within. Life itself shows that at present the goals of combating corruption cannot be achieved only by organizational and legal means.
                    </p>
                    <p>
                      I think that in the fight against this evil, which is a scourge of society, not only state organizations, but also society and all our citizens in general are responsible. We must move from fighting the consequences of corruption to its timely prevention. Thus, the joint work of state and public organizations to prevent this evil and fight it is considered the most acceptable way to achieve effective results.
                    </p>
                    <p>
                      Also, if you have witnessed illegal actions or inaction of employees working in the Agency system, or have information about the involvement of employees in corruption and other offenses, it is necessary to inform the internal control department for combating corruption through the Agency's contact channels listed below.
                    </p>
                    <p className="font-semibold">
                      Any committed corruption crime will not remain secret, it will certainly be revealed. Therefore, I want to warn you that punishment for any crime is inevitable, and each of us must deeply realize this.
                    </p>
                    <p className="font-semibold text-primary-600 text-lg">
                      Let us, all together, wage an uncompromising fight against corruption!
                    </p>
                    <p className="text-right font-semibold">
                      Thank you for your attention!
                    </p>
                  </>
                )}
              </div>

              {/* Контактная информация */}
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {currentLang === 'uz' && 'Aloqa kanallari'}
                  {currentLang === 'ru' && 'Каналы связи'}
                  {currentLang === 'en' && 'Contact Channels'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentLang === 'uz' && 'Ishonch telefoni'}
                        {currentLang === 'ru' && 'Телефон доверия'}
                        {currentLang === 'en' && 'Hotline'}
                      </p>
                      <a href="tel:+998954505950" className="text-primary-600 hover:text-primary-800">+998 (95) 450-59-50</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentLang === 'uz' && 'Call-markazi'}
                        {currentLang === 'ru' && 'Колл-центр'}
                        {currentLang === 'en' && 'Call Center'}
                      </p>
                      <a href="tel:1342" className="text-primary-600 hover:text-primary-800">1342</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentLang === 'uz' && 'Telegram-bot'}
                        {currentLang === 'ru' && 'Telegram-бот'}
                        {currentLang === 'en' && 'Telegram Bot'}
                      </p>
                      <a href="https://t.me/ARA_antikor_bot" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">@ARA_antikor_bot</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentLang === 'uz' && 'Rasmiy veb-sayt'}
                        {currentLang === 'ru' && 'Официальный веб-сайт'}
                        {currentLang === 'en' && 'Official Website'}
                      </p>
                      <a href="https://gov.uz/oz/agrosanoat" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">gov.uz/oz/agrosanoat</a>
                    </div>
                  </div>
                  <div className="flex items-center md:col-span-2">
                    <span className="text-2xl mr-3">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentLang === 'uz' && 'Elektron pochta manzili'}
                        {currentLang === 'ru' && 'Электронный адрес'}
                        {currentLang === 'en' && 'Email Address'}
                      </p>
                      <a href="mailto:garden@agro.uz" className="text-primary-600 hover:text-primary-800">garden@agro.uz</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-2xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {currentLang === 'uz' && 'Murojaat yuborish'}
                {currentLang === 'ru' && 'Отправить обращение'}
                {currentLang === 'en' && 'Submit Appeal'}
              </h3>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  {currentLang === 'uz' && 'Murojaatingiz muvaffaqiyatli yuborildi!'}
                  {currentLang === 'ru' && 'Ваше обращение успешно отправлено!'}
                  {currentLang === 'en' && 'Your appeal has been successfully submitted!'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  {currentLang === 'uz' && 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.'}
                  {currentLang === 'ru' && 'Произошла ошибка. Пожалуйста, попробуйте еще раз.'}
                  {currentLang === 'en' && 'An error occurred. Please try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      {currentLang === 'uz' && 'Ism Familiya'}
                      {currentLang === 'ru' && 'Имя Фамилия'}
                      {currentLang === 'en' && 'Full Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                    {currentLang === 'uz' && 'Telefon'}
                    {currentLang === 'ru' && 'Телефон'}
                    {currentLang === 'en' && 'Phone'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                    {currentLang === 'uz' && 'Mavzu'}
                    {currentLang === 'ru' && 'Тема'}
                    {currentLang === 'en' && 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                    {currentLang === 'uz' && 'Xabar'}
                    {currentLang === 'ru' && 'Сообщение'}
                    {currentLang === 'en' && 'Message'}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {currentLang === 'uz' && 'Yuborilmoqda...'}
                      {currentLang === 'ru' && 'Отправка...'}
                      {currentLang === 'en' && 'Submitting...'}
                    </>
                  ) : (
                    <>
                      {currentLang === 'uz' && 'Yuborish'}
                      {currentLang === 'ru' && 'Отправить'}
                      {currentLang === 'en' && 'Submit'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}

