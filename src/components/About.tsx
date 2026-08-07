const principles = [
  'Personalized recommendations',
  'Clear communication',
  'Attention to every detail',
]

export function About() {
  return (
    <section className="about section-padding" id="about" aria-labelledby="about-title">
      <div className="section-shell about-grid">
        <div className="about-heading" data-reveal>
          <p className="eyebrow">Our approach</p>
          <h2 id="about-title">Travel should feel exciting, not overwhelming.</h2>
        </div>

        <div className="about-copy" data-reveal>
          <p>
            CB Travel Planner provides personalized travel planning and
            itinerary design for travelers looking for a more thoughtful and
            organized experience. We work with selected airlines, hotels, tour
            operators, cruise companies, Destination Management Companies, and
            other travel suppliers to coordinate the details of each journey.
          </p>
          <p>
            Our role is to understand what matters to you, present suitable
            options, and help turn your travel ideas into a clear and carefully
            planned itinerary.
          </p>

          <div className="principles" aria-label="Our planning principles">
            {principles.map((principle) => (
              <div className="principle" key={principle}>
                <span aria-hidden="true">✓</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
