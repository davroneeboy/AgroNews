'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Language, getTranslation } from '@/lib/i18n'
import TopBar from './TopBar'
import Image from 'next/image'

type HeaderProps = {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

type DropdownItem = {
  label: string
  href: string
}

type MenuItem = {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const t = getTranslation(currentLang)

  const menuItems: MenuItem[] = [
    {
      label: t.nav.news,
      href: '#news',
    },
    {
      label: t.nav.documents,
      href: '#documents',
      dropdown: [
        { label: t.dropdown.documents.title, href: '#documents' },
        { label: t.dropdown.documents.laws, href: '#documents/laws' },
        { label: t.dropdown.documents.decrees, href: '#documents/decrees' },
        { label: t.dropdown.documents.regulations, href: '#documents/regulations' },
        { label: t.dropdown.documents.orders, href: '#documents/orders' },
      ],
    },
    {
      label: t.nav.projects,
      href: '#projects',
      dropdown: [
        { label: t.dropdown.projects.title, href: '#projects' },
        { label: t.dropdown.projects.current, href: '#projects/current' },
        { label: t.dropdown.projects.completed, href: '#projects/completed' },
        { label: t.dropdown.projects.planned, href: '#projects/planned' },
      ],
    },
    {
      label: t.nav.media,
      href: '#media',
    },
    {
      label: t.nav.about,
      href: '/about',
      dropdown: [
        { label: t.dropdown.about.title, href: '/about' },
        { label: t.dropdown.about.structure, href: '/about/structure' },
        { label: t.dropdown.about.management, href: '/about/management' },
        { label: t.dropdown.about.central, href: '/about/central' },
        { label: t.dropdown.about.territorial, href: '/about/territorial' },
      ],
    },
    {
      label: t.nav.contacts,
      href: '#contacts',
    },
  ]

  const languages: Language[] = ['uz', 'ru', 'en']
  const languageLabels: { [key in Language]: string } = {
    uz: 'UZ',
    ru: 'RU',
    en: 'EN',
  }

  const handleMouseEnter = (itemLabel: string) => {
    if (menuItems.find((item) => item.label === itemLabel)?.dropdown) {
      setActiveDropdown(itemLabel)
    }
  }

  const handleMouseLeave = (itemLabel: string) => {
    setActiveDropdown(null)
  }

  const handleClick = (itemLabel: string) => {
    const item = menuItems.find((item) => item.label === itemLabel)
    if (item?.dropdown) {
      setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel)
    } else {
      setActiveDropdown(null)
      setIsMobileMenuOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, itemLabel: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(itemLabel)
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const dropdownElement = dropdownRefs.current[activeDropdown]
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar currentLang={currentLang} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="Герб Узбекистана"
              width={52}
              height={52}
              className="flex-shrink-0 object-contain hover:scale-110 transition-transform duration-300"
              priority
            />
            <span className="ml-3 text-lg font-semibold text-gray-800 hidden sm:block">
              {currentLang === 'uz' && "Qishloq xo'jaligi vazirligi huzuridagi Agrosanoatni rivojlantirish agentligi"}
              {currentLang === 'ru' && 'Агентство по развитию агропромышленности при Министерстве сельского хозяйства'}
              {currentLang === 'en' && 'Agency for the Development of Agro-Industry under the Ministry of Agriculture'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
              >
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeDropdown === item.label
                      ? 'bg-primary-700 text-white'
                      : 'text-gray-700 hover:bg-primary-100'
                  }`}
                  onClick={() => handleClick(item.label)}
                  onKeyDown={(e) => handleKeyDown(e, item.label)}
                  aria-label={item.label}
                  aria-expanded={activeDropdown === item.label}
                  tabIndex={0}
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-1 inline-block">▾</span>
                  )}
                </button>

                {item.dropdown && activeDropdown === item.label && (
                  <div
                    ref={(el) => (dropdownRefs.current[item.label] = el)}
                    className="absolute top-full left-0 mt-1 w-64 bg-primary-700 rounded-lg shadow-xl py-2 z-50"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:bg-primary-600 transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-3 py-1 rounded transition-colors ${
                  currentLang === lang
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-primary-100'
                }`}
                aria-label={`Switch to ${lang.toUpperCase()}`}
                tabIndex={0}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            tabIndex={0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-100 transition-colors flex items-center justify-between"
                    onClick={() => handleClick(item.label)}
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    aria-label={item.label}
                    aria-expanded={activeDropdown === item.label}
                    tabIndex={0}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <span className="text-primary-600">▾</span>
                    )}
                  </button>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="mt-1 ml-4 bg-primary-50 rounded-lg py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-100 rounded transition-colors"
                          onClick={() => {
                            setActiveDropdown(null)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-2 pt-2 border-t">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`px-3 py-1 rounded transition-colors ${
                      currentLang === lang
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 hover:bg-primary-100'
                    }`}
                    aria-label={`Switch to ${lang.toUpperCase()}`}
                    tabIndex={0}
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

