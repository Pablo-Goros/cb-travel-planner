import type { SyntheticEvent } from 'react'

const images = [
  {
    src: '/images/mediterranean-coast.webp',
    alt: 'A quiet Mediterranean cove framed by limestone terraces and olive branches.',
    className: 'collage-coast',
  },
  {
    src: '/images/european-architecture.webp',
    alt: 'An elegant European stone passage opening into a sunlit historic courtyard.',
    className: 'collage-architecture',
  },
  {
    src: '/images/boutique-hotel-detail.webp',
    alt: 'A refined boutique-hotel room with linen bedding and a carved wood bedside table.',
    className: 'collage-hotel',
  },
]

function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.classList.add('image-error')
}

export function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">Personalized Travel Planning</p>
        <h1 id="hero-title">Thoughtful travel, planned around you.</h1>
        <p className="hero-intro">
          From the first idea to the final itinerary, CB Travel Planner creates
          personalized travel experiences shaped around your interests,
          preferences, and pace.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Start Planning Your Trip
          </a>
          <a className="text-link" href="#services">
            Explore Our Services
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="trust-note">
          Personalized itineraries <span aria-hidden="true">·</span> Carefully
          selected travel partners <span aria-hidden="true">·</span> Dedicated
          guidance
        </p>
      </div>

      <div className="hero-collage" aria-label="Travel inspiration" data-reveal>
        {images.map((image, index) => (
          <figure className={`collage-card ${image.className}`} key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              width="864"
              height="1080"
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              onError={handleImageError}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
