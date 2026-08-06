import { EMAIL_ADDRESS, PHONE_NUMBER } from '../constants'
import { CopyButton } from './CopyButton'

export function ContactSection() {
  return (
    <section className="contact section-padding" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-panel" data-reveal>
          <p className="eyebrow">Your next journey</p>
          <h2 id="contact-title">Where would you like to go next?</h2>
          <p>
            Tell us what you have in mind, and let’s begin designing your next
            journey.
          </p>
          <div className="contact-detail contact-email">
            <span>{EMAIL_ADDRESS}</span>
            <CopyButton value={EMAIL_ADDRESS} label="email address" />
          </div>
          <div className="contact-detail contact-phone">
            <span>{PHONE_NUMBER}</span>
            <CopyButton value={PHONE_NUMBER} label="phone number" />
          </div>
        </div>
      </div>
    </section>
  )
}
