'use client'
import { useEffect, useRef } from 'react'

/** Native dialogs provide Escape handling, focus trapping and inert background content. */
export function useDialog(isOpen: boolean) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (!isOpen || !ref.current) return
    const dialog = ref.current
    const previous =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      if (previous?.isConnected) previous.focus()
    }
  }, [isOpen])
  return ref
}
