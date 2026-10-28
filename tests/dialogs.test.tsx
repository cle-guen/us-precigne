import ImageModal from '@/components/ImageModal'
import Modal from '@/components/Modal'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { afterEach, beforeAll, expect, it, vi } from 'vitest'
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) =>
    React.createElement('img', { src, alt }),
}))
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true
    this.querySelector<HTMLElement>('button')?.focus()
  }
  HTMLDialogElement.prototype.close = function () {
    this.open = false
  }
})
afterEach(cleanup)
it('nomme la fenêtre, traite Échap, conserve le scroll et rend le focus au déclencheur', () => {
  const trigger = document.createElement('button')
  document.body.append(trigger)
  trigger.focus()
  document.body.style.overflow = 'auto'
  const close = vi.fn()
  const { rerender } = render(
    <Modal isOpen onClose={close} title="Inscription">
      <a href="/document.pdf">Document</a>
    </Modal>,
  )
  const dialog = screen.getByRole('dialog', { name: 'Inscription' })
  expect(dialog.hasAttribute('open')).toBe(true)
  expect(document.body.style.overflow).toBe('hidden')
  fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }))
  expect(close).toHaveBeenCalledOnce()
  rerender(
    <Modal isOpen={false} onClose={close}>
      Document
    </Modal>,
  )
  expect(document.activeElement).toBe(trigger)
  expect(document.body.style.overflow).toBe('auto')
  trigger.remove()
})
it('la galerie ne dépasse pas ses bornes et ignore un index invalide', () => {
  const navigate = vi.fn(),
    close = vi.fn()
  const { rerender } = render(
    <ImageModal
      images={['/a.png', '/b.png']}
      currentIndex={0}
      isOpen
      onClose={close}
      onNavigate={navigate}
    />,
  )
  const dialog = screen.getByRole('dialog', { name: 'Image 1 sur 2' })
  fireEvent.keyDown(dialog, { key: 'ArrowLeft' })
  expect(navigate).not.toHaveBeenCalled()
  fireEvent.keyDown(dialog, { key: 'ArrowRight' })
  expect(navigate).toHaveBeenCalledWith(1)
  rerender(
    <ImageModal
      images={[]}
      currentIndex={-1}
      isOpen
      onClose={close}
      onNavigate={navigate}
    />,
  )
  expect(screen.queryByRole('dialog')).toBeNull()
})
