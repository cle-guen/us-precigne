'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { sports } from '../data/sports'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
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
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            US Précigné
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Accueil
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
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
              
              {/* Menu déroulant */}
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {sport.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Actualités
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}