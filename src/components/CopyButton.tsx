import { useState } from 'react'

interface CopyButtonProps {
  value: string
  label: string
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      className="copy-button"
      type="button"
      aria-label={`Copy ${label}`}
      title={copied ? 'Copied' : `Copy ${label}`}
      onClick={copyValue}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8" y="8" width="11" height="11" rx="1.5" />
        <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" />
      </svg>
      <span className="sr-only">{copied ? 'Copied' : `Copy ${label}`}</span>
    </button>
  )
}
