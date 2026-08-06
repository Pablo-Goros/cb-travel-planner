import type { CSSProperties } from 'react'
import { ServiceIcon } from './ServiceIcon'
import type { ServiceIconName } from './ServiceIcon'

const services: Array<{
  title: string
  description: string
  icon: ServiceIconName
}> = [
  {
    title: 'Personalized Itineraries',
    description:
      'Custom travel plans designed around your interests, schedule, preferences, and budget.',
    icon: 'itinerary',
  },
  {
    title: 'Hotels & Accommodations',
    description:
      'Recommendations and reservations selected to match your travel style and destination.',
    icon: 'hotel',
  },
  {
    title: 'Flights & Transportation',
    description:
      'Assistance coordinating flights, transfers, rail travel, rental vehicles, and other transportation needs.',
    icon: 'transport',
  },
  {
    title: 'Tours & Experiences',
    description:
      'Carefully selected activities, tours, cruises, and local experiences.',
    icon: 'experience',
  },
  {
    title: 'Destination Support',
    description:
      'Guidance on travel requirements, logistics, insurance options, and important trip documentation.',
    icon: 'support',
  },
]

export function Services() {
  return (
    <section className="services section-padding" id="services" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">How we can help</p>
          <h2 id="services-title">Travel planning made personal</h2>
          <p>
            Every trip is different. We help organize the details so you can
            focus on the experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 45}ms` } as CSSProperties}
              key={service.title}
            >
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
