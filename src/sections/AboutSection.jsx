import './sections.scss'

const TEAM = [
  { name: 'artsy allie', id: 'allie' },
  { name: 'Juxtapose jack', id: 'jack' },
  { name: 'magical maia', id: 'maia' },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-section__inner">
        <div className="about-section__copy">
          <h2 id="about-heading" className="about-section__heading">
            ABOUT MAGICAL Minis
          </h2>
          <p className="about-section__text">
            Welcome to Magical Minis — a whimsical world of tiny treasures designed with
            love by our creative team. Every miniature is crafted to spark imagination and
            bring a little magic to your day.
          </p>
        </div>

        <div className="about-section__team" id="team">
          <div className="about-section__ribbon">Meet the design team</div>
          <div className="about-section__cards">
            {TEAM.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-card__frame">
                  <div className="team-card__photo" aria-label={`Photo of ${member.name}`} />
                </div>
                <p className="team-card__name">{member.name}</p>
              </article>
            ))}
          </div>
          <div className="about-section__fish about-section__fish--1" aria-hidden="true" />
          <div className="about-section__fish about-section__fish--2" aria-hidden="true" />
          <div className="about-section__fish about-section__fish--3" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
