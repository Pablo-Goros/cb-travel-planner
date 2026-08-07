import { EMAIL_ADDRESS, PHONE_NUMBER } from '../constants'
import { CopyContactDetail } from './CopyContactDetail'

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
          <div className="contact-details">
            <CopyContactDetail
              value={EMAIL_ADDRESS}
              label="email address"
              heading="Email Cecilia"
            />
            <CopyContactDetail
              value={PHONE_NUMBER}
              label="phone number"
              heading="Phone"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
