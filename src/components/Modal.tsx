'use client'
import { useDialog } from '@/lib/useDialog'
import type { ReactNode } from 'react'
import { FaXmark } from 'react-icons/fa6'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
export default function Modal({
  isOpen,
  onClose,
  children,
  title = 'Document',
  size = 'lg',
}: ModalProps) {
  const ref = useDialog(isOpen)
  if (!isOpen) return null
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-[95vw] max-h-[95vh]',
  }
  return (
    <dialog
      ref={ref}
      aria-label={title}
      aria-modal="true"
      className={`m-auto w-[calc(100%-2rem)] rounded-lg bg-white p-0 shadow-xl backdrop:bg-black/75 ${sizes[size]}`}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="relative p-6">
        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <FaXmark className="w-6 h-6" aria-hidden />
        </button>
        {children}
      </div>
    </dialog>
  )
}
