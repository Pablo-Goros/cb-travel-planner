import type { MouseEvent } from 'react'

export type LegalDialogId = 'privacy' | 'terms'

export type OpenLegalDialog = (
  event: MouseEvent<HTMLAnchorElement>,
  dialog: LegalDialogId,
) => void
