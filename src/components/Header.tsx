'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sports } from '../data/sports'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navigation principale">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold text-red-700 hover:text-red-800 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo-us-precigne.png"
                alt="Logo US Précigné"
                width={40}
                height={40}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="hidden sm:inline">US Précigné</span>
            <span className="sm:hidden">USP</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-700 transition-colors font-medium">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                            <Image
                              src={sport.logo}
                              alt={`Logo ${sport.name}`}
                              width={24}
                              height={24}
                              className="object-contain"
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
            <Link href="/actualites" className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              Actualités
            </Link>
            <div className="flex items-center">
              <Image
                src="/images/logo-ffco.avif"
                alt="Logo FFCO"
                width={40}
                height={28}
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center">
              <Image
                src="/images/logo-ffco.avif"
                alt="Logo FFCO"
                width={32}
                height={22}
                className="object-contain"
              />
            </div>
            <button
              className="text-gray-700 hover:text-red-700 focus:outline-none focus:text-red-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu de navigation"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              
              {/* Mobile Sports Section */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">Sports</p>
                <div className="space-y-1 pl-3">
                  {sports.map((sport) => (
                    <Link
                      key={sport.slug}
                      href={`/sports/${sport.slug}`}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sport.logo && (
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={sport.logo}
                            alt={`Logo ${sport.name}`}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      )}
                      {sport.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/actualites"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}