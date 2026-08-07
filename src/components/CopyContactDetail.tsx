import { useState } from 'react'

interface CopyContactDetailProps {
  value: string
  label: string
  heading: string
}

export function CopyContactDetail({ value, label, heading }: CopyContactDetailProps) {
  const [copied, setCopied] = useState(false)

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleCopyButtonClick = () => {
    void copyValue()
  }

  return (
    <div className="contact-copy-detail">
      <span className="contact-copy-copy">
        <span className="contact-copy-label">{heading}</span>
        <span className="contact-copy-value">{value}</span>
      </span>
      <button
        className="contact-copy-action"
        type="button"
        aria-label={`Copy ${label}`}
        onClick={handleCopyButtonClick}
      >
        {copied ? 'Copied' : 'Copy'}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="11" height="11" rx="1.5" />
          <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" />
        </svg>
      </button>
    </div>
  )
}
