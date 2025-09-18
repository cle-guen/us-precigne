'use client'
import UspLogo from '@/components/UspLogo'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { sports } from '../data/sports'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Fermer le menu avec la touche Escape
  useEffect(() => {
    setIsMounted(true)
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    const root = document.documentElement
    if (isMobileMenuOpen) {
      root.classList.add('overflow-hidden')
    } else {
      root.classList.remove('overflow-hidden')
    }
    return () => root.classList.remove('overflow-hidden')
  }, [isMobileMenuOpen])

  // Fermer le menu mobile quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!isMobileMenuOpen) return
      const targetNode = event.target as Node
      const clickedInsidePanel =
        mobileMenuPanelRef.current?.contains(targetNode) ?? false
      const clickedOnButton =
        mobileMenuButtonRef.current?.contains(targetNode) ?? false
      if (!clickedInsidePanel && !clickedOnButton) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/95 supports-[backdrop-filter]:bg-white/60 backdrop-blur shadow-sm border-b border-gray-200">
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-red-700 hover:text-red-800 transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <UspLogo bottomText="OMNISPORTS" />
            </div>
            <span className="hidden sm:inline">US Précigné</span>
            <span className="sm:hidden">USP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Accueil
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-red-700 transition-colors font-medium flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Sports
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {sports.map((sport) => (
                      <Link
                        key={sport.slug}
                        href={`/sports/${sport.slug}`}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {sport.logo && (
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <Image
                              src={sport.logo}
                              alt={`Logo ${sport.name}`}
                              width={20}
                              height={20}
                              className="object-contain"
                              style={{ filter: 'brightness(0) saturate(100%)' }}
                            />
                          </div>
                        )}
                        {sport.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/actualites"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Actualités
            </Link>
            <div className="flex items-center">
              <a
                href="https://www.ffco.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logo-ffco-new.png"
                  alt="Logo FFCO"
                  width={40}
                  height={28}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu de navigation"
              ref={mobileMenuButtonRef}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (overlay + animated panel) via portal */}
        {isMounted &&
          createPortal(
            <>
              <div
                className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 ${
                  isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'pointer-events-none opacity-0'
                } transition-opacity duration-200`}
                aria-hidden={!isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              </div>

              <div
                className={`md:hidden fixed inset-x-0 top-16 z-50 transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                ref={mobileMenuPanelRef}
              >
                <div className="px-2 pt-2 pb-3 space-y-3 bg-white border-b border-gray-200 shadow-lg">
                  {/* Mobile Pages Section */}
                  <div className="px-3 py-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      Pages
                    </p>
                    <div className="space-y-1 pl-3">
                      <Link
                        href="/"
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>Accueil</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>

                      <Link
                        href="/actualites"
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>Actualités</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Sports Section */}
                  <div className="px-3 py-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      Sports
                    </p>
                    <div className="space-y-1 pl-3">
                      {sports.map((sport) => (
                        <Link
                          key={sport.slug}
                          href={`/sports/${sport.slug}`}
                          className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex items-center gap-3">
                            {sport.logo && (
                              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                <Image
                                  src={sport.logo}
                                  alt={`Logo ${sport.name}`}
                                  width={20}
                                  height={20}
                                  className="object-contain"
                                  style={{
                                    filter: 'brightness(0) saturate(100%)',
                                  }}
                                />
                              </span>
                            )}
                            <span>{sport.name}</span>
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body,
          )}
      </nav>
    </header>
  )
}
