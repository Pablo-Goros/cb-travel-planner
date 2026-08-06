import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { LegalDialogId } from '../types'

const legalDialogFromHash = (): LegalDialogId | null => {
  if (window.location.hash === '#privacy') return 'privacy'
  if (window.location.hash === '#terms') return 'terms'
  return null
}

export function useLegalDialogs() {
  const [activeDialog, setActiveDialog] = useState<LegalDialogId | null>(
    legalDialogFromHash,
  )
  const activeDialogRef = useRef(activeDialog)
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const originScrollRef = useRef(window.scrollY)

  const restoreOrigin = useCallback(() => {
    const scrollTop = originScrollRef.current
    const trigger = triggerRef.current

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollTop, left: 0, behavior: 'auto' })
        trigger?.focus({ preventScroll: true })
      })
    })
  }, [])

  const syncWithUrl = useCallback(() => {
    const nextDialog = legalDialogFromHash()
    const previousDialog = activeDialogRef.current

    if (!previousDialog && nextDialog) {
      const storedScroll = window.history.state?.cbTravelOriginScroll
      originScrollRef.current =
        typeof storedScroll === 'number' ? storedScroll : window.scrollY
    }

    activeDialogRef.current = nextDialog
    setActiveDialog(nextDialog)

    if (previousDialog && !nextDialog) {
      restoreOrigin()
    }
  }, [restoreOrigin])

  useEffect(() => {
    window.addEventListener('popstate', syncWithUrl)
    window.addEventListener('hashchange', syncWithUrl)

    return () => {
      window.removeEventListener('popstate', syncWithUrl)
      window.removeEventListener('hashchange', syncWithUrl)
    }
  }, [syncWithUrl])

  useEffect(() => {
    if (!activeDialog) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const previousScrollRestoration = window.history.scrollRestoration
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    window.history.scrollRestoration = 'manual'

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [activeDialog])

  const openDialog = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, dialog: LegalDialogId) => {
      event.preventDefault()

      if (activeDialogRef.current === dialog) return

      triggerRef.current = event.currentTarget
      originScrollRef.current = window.scrollY

      const currentState =
        window.history.state && typeof window.history.state === 'object'
          ? window.history.state
          : {}

      window.history.pushState(
        {
          ...currentState,
          cbTravelLegalDialog: dialog,
          cbTravelOriginHash: window.location.hash,
          cbTravelOriginScroll: window.scrollY,
        },
        '',
        `#${dialog}`,
      )

      activeDialogRef.current = dialog
      setActiveDialog(dialog)
    },
    [],
  )

  const closeDialog = useCallback(() => {
    const active = activeDialogRef.current
    if (!active) return

    if (window.history.state?.cbTravelLegalDialog === active) {
      window.history.back()
      return
    }

    const cleanUrl = `${window.location.pathname}${window.location.search}`
    window.history.replaceState(window.history.state, '', cleanUrl)
    activeDialogRef.current = null
    setActiveDialog(null)
    restoreOrigin()
  }, [restoreOrigin])

  return { activeDialog, openDialog, closeDialog }
}
