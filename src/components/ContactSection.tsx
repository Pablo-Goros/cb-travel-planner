import { EMAIL_ADDRESS, EMAIL_LINK } from '../constants'

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
          <a className="button button-light" href={EMAIL_LINK}>
            Contact CB Travel Planner
          </a>
          <a className="contact-email" href={`mailto:${EMAIL_ADDRESS}`}>
            {EMAIL_ADDRESS}
          </a>
        </div>
      </div>
    </section>
  )
}
