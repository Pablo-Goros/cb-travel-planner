import { EMAIL_ADDRESS } from '../constants'
import type { OpenLegalDialog } from '../types'
import { Brand } from './Brand'

interface FooterProps {
  onOpenLegal: OpenLegalDialog
}

export function Footer({ onOpenLegal }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <Brand />
        <a className="footer-email" href={`mailto:${EMAIL_ADDRESS}`}>
          {EMAIL_ADDRESS}
        </a>
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
