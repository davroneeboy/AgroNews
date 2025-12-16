'use client'

import { useState, FormEvent } from 'react'
import { Language, getTranslation } from '@/lib/i18n'

type FooterProps = {
  currentLang: Language
}

type FormData = {
  name: string
  email: string
  message: string
}

const Footer = ({ currentLang }: FooterProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = getTranslation(currentLang)

  const contactInfo = {
    address: {
      uz: 'Toshkent shahri, Mustaqillik ko\'chasi, 1',
      ru: 'г. Ташкент, ул. Мустакиллик, 1',
      en: 'Tashkent, Mustaqillik Street, 1',
    },
    phone: '+998 71 123 45 67',
    email: 'info@agrodev.uz',
    workingHours: {
      uz: 'Dushanba - Juma: 09:00 - 18:00',
      ru: 'Понедельник - Пятница: 09:00 - 18:00',
      en: 'Monday - Friday: 09:00 - 18:00',
    },
  }

  const quickLinks = [
    { label: t.nav.news, href: '#news' },
    { label: t.nav.documents, href: '#documents' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.media, href: '#media' },
    { label: t.nav.about, href: '#about' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 0-.363.042-.562.12-.169.063-3.657 1.385-5.853 2.23-.228.096-.42.187-.42.406 0 .169.127.275.275.275.127 0 .254-.042.42-.127 1.775-.78 4.773-1.688 5.853-2.05.127-.042.254-.084.254-.211 0-.127-.127-.169-.127-.169zm-1.562 2.55c-.211 0-.38.042-.59.127L8.74 13.396c-.59.254-1.014.465-1.014 1.014 0 .59.465.844 1.014 1.014.38.127.78.211 1.14.211.38 0 .78-.084 1.14-.211l6.69-2.55c.59-.254.844-.59.844-1.14 0-.59-.254-.844-.844-1.14-.211-.084-.38-.127-.59-.127z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C6.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { submitFeedback } = await import('@/lib/api')
      const response = await submitFeedback(formData)

      if (response.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      const form = e.currentTarget.closest('form')
      if (form) {
        form.requestSubmit()
      }
    }
  }

  return (
    <footer id="contacts" className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contacts}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-primary-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300">{contactInfo.address[currentLang]}</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-primary-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  tabIndex={0}
                  aria-label={`${t.footer.phone}: ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-primary-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  tabIndex={0}
                  aria-label={`${t.footer.email}: ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-primary-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-300">{contactInfo.workingHours[currentLang]}</p>
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    tabIndex={0}
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t.footer.feedbackTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t.footer.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={t.footer.namePlaceholder}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  aria-label={t.footer.name}
                  tabIndex={0}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t.footer.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={t.footer.emailPlaceholder}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  aria-label={t.footer.email}
                  tabIndex={0}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t.footer.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={t.footer.messagePlaceholder}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                  aria-label={t.footer.message}
                  tabIndex={0}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label={t.footer.send}
                tabIndex={0}
              >
                {isSubmitting ? t.footer.sending : t.footer.send}
              </button>
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-600 rounded-lg text-sm">
                  {t.footer.success}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-600 rounded-lg text-sm">
                  {t.footer.error}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="mt-8 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">{t.footer.socialMedia}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={social.name}
                    tabIndex={0}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

