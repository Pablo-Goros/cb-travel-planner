import { useEffect, useRef } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { EMAIL_ADDRESS } from '../constants'
import type { LegalDialogId } from '../types'

interface LegalDialogProps {
  id: LegalDialogId
  title: string
  open: boolean
  onRequestClose: () => void
  children: ReactNode
}

function LegalDialog({
  id,
  title,
  open,
  onRequestClose,
  children,
}: LegalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      window.requestAnimationFrame(() => closeButtonRef.current?.focus())
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  const trapFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return

    const dialog = dialogRef.current
    if (!dialog) return

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    )

    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <dialog
      className="legal-dialog"
      id={id}
      ref={dialogRef}
      aria-labelledby={`${id}-title`}
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      onClose={() => {
        if (open) onRequestClose()
      }}
      onKeyDown={trapFocus}
    >
      <div className="legal-dialog-inner">
        <header className="legal-dialog-header">
          <p className="eyebrow">CB Travel Planner</p>
          <button
            className="dialog-close"
            type="button"
            ref={closeButtonRef}
            onClick={onRequestClose}
          >
            <span>Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div
          className="legal-content"
          tabIndex={0}
          aria-label={`${title} content`}
        >
          <h2 id={`${id}-title`}>{title}</h2>
          {children}
        </div>
      </div>
    </dialog>
  )
}

export function PrivacyDialog({
  open,
  onRequestClose,
}: Pick<LegalDialogProps, 'open' | 'onRequestClose'>) {
  return (
    <LegalDialog
      id="privacy"
      title="Privacy Policy"
      open={open}
      onRequestClose={onRequestClose}
    >
      <p className="legal-date">Effective Date: August 2026</p>
      <p>
        CB Travel Planner (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
        respects your privacy and is committed to protecting your personal
        information.
      </p>

      <h3>Information We Collect</h3>
      <p>We may collect personal information that you voluntarily provide, including:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Travel preferences</li>
        <li>Passport information, when required for travel arrangements</li>
        <li>
          Payment information, processed securely through third-party payment
          providers
        </li>
      </ul>

      <h3>How We Use Your Information</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Plan and book travel services</li>
        <li>Communicate with you regarding your trip</li>
        <li>Respond to inquiries</li>
        <li>Process payments</li>
        <li>Improve our services</li>
      </ul>

      <h3>Sharing Information</h3>
      <p>
        We may share your information only when necessary with airlines,
        hotels, tour operators, Destination Management Companies (DMCs),
        insurance providers, and other travel suppliers involved in your
        itinerary.
      </p>
      <p>We do not sell or rent your personal information.</p>

      <h3>Data Security</h3>
      <p>
        We take reasonable measures to protect your personal information.
        However, no method of electronic transmission or storage is completely
        secure.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices.
      </p>

      <h3>Contact</h3>
      <p>CB Travel Planner</p>
      <p>
        Email:{' '}
        <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
      </p>
    </LegalDialog>
  )
}

export function TermsDialog({
  open,
  onRequestClose,
}: Pick<LegalDialogProps, 'open' | 'onRequestClose'>) {
  return (
    <LegalDialog
      id="terms"
      title="Terms & Conditions"
      open={open}
      onRequestClose={onRequestClose}
    >
      <p className="legal-date">Effective Date: August 2026</p>
      <p>Welcome to CB Travel Planner.</p>
      <p>
        By using our services, you agree to the following Terms &amp;
        Conditions.
      </p>

      <h3>Our Services</h3>
      <p>
        CB Travel Planner provides personalized travel planning, itinerary
        design, hotel recommendations, transportation arrangements, and other
        travel-related consulting services.
      </p>
      <p>
        Reservations are made through selected travel suppliers, including
        airlines, hotels, tour operators, cruise companies, and Destination
        Management Companies (DMCs).
      </p>

      <h3>Pricing</h3>
      <p>Prices are subject to change until reservations are confirmed.</p>
      <p>
        Availability cannot be guaranteed until payment has been received and
        confirmed by the travel supplier.
      </p>

      <h3>Payments</h3>
      <p>Payments are processed securely through authorized payment providers.</p>
      <p>
        Additional terms from airlines, hotels, and other travel suppliers may
        apply.
      </p>

      <h3>Cancellations and Refunds</h3>
      <p>Cancellation policies vary depending on each travel supplier.</p>
      <p>
        Refunds, when applicable, are subject to the supplier&apos;s terms and
        conditions.
      </p>
      <p>Service fees charged by CB Travel Planner may be non-refundable.</p>

      <h3>Travel Documents</h3>
      <p>
        Clients are responsible for ensuring they possess valid passports,
        visas, vaccination certificates, and any other documents required for
        their destination.
      </p>

      <h3>Travel Insurance</h3>
      <p>
        We strongly recommend purchasing comprehensive travel insurance for all
        trips.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        CB Travel Planner acts solely as an intermediary between clients and
        travel suppliers.
      </p>
      <p>
        We are not responsible for delays, cancellations, schedule changes,
        weather conditions, strikes, government actions, or any other
        circumstances beyond our control.
      </p>

      <h3>Contact</h3>
      <p>CB Travel Planner</p>
      <p>
        Email:{' '}
        <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
      </p>
    </LegalDialog>
  )
}
