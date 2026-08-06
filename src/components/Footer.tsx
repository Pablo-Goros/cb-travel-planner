import { EMAIL_ADDRESS, PHONE_NUMBER } from '../constants'
import type { OpenLegalDialog } from '../types'

interface FooterProps {
  onOpenLegal: OpenLegalDialog
}

export function Footer({ onOpenLegal }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-contact">
          <div className="footer-detail footer-email">
            <span>{EMAIL_ADDRESS}</span>
          </div>
          <div className="footer-detail footer-phone">
            <span>{PHONE_NUMBER}</span>
          </div>
        </div>
        <nav className="footer-legal" aria-label="Legal">
          <a href="#privacy" onClick={(event) => onOpenLegal(event, 'privacy')}>
            Privacy Policy
          </a>
          <a href="#terms" onClick={(event) => onOpenLegal(event, 'terms')}>
            Terms &amp; Conditions
          </a>
        </nav>
      </div>
      <div className="section-shell footer-bottom">
        <p>© {year} CB Travel Planner. All rights reserved.</p>
      </div>
    </footer>
  )
}
