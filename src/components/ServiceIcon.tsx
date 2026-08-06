import type { ReactNode } from 'react'

export type ServiceIconName =
  | 'itinerary'
  | 'hotel'
  | 'transport'
  | 'experience'
  | 'support'

interface ServiceIconProps {
  name: ServiceIconName
}

export function ServiceIcon({ name }: ServiceIconProps) {
  const paths: Record<ServiceIconName, ReactNode> = {
    itinerary: (
      <>
        <path d="M7 3.5h10a2 2 0 0 1 2 2v15H5v-15a2 2 0 0 1 2-2Z" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </>
    ),
    hotel: (
      <>
        <path d="M4 20V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V20M2.5 20h19" />
        <path d="M8 8h1M12 8h1M8 12h1M12 12h1M16 10h2.5A1.5 1.5 0 0 1 20 11.5V20" />
      </>
    ),
    transport: (
      <>
        <path d="M4.5 17.5h15M7 17.5l-2 3M17 17.5l2 3" />
        <path d="M7 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M5 10h14M8 13h.01M16 13h.01" />
      </>
    ),
    experience: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m14.8 8.7-1.6 4.5-4.5 1.6 1.6-4.5 4.5-1.6Z" />
      </>
    ),
    support: (
      <>
        <path d="M12 21s7-3.2 7-10V5.8L12 3 5 5.8V11c0 6.8 7 10 7 10Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.5" />
      </>
    ),
  }

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  )
}
