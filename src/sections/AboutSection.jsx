import WaveBackground from '../components/wave/WaveBackground'
import TeamCard from '../components/team/TeamCard'
import alliePhoto from '../assets/team/allie.png'
import jackPhoto from '../assets/team/jack.png'
import maiaPhoto from '../assets/team/maia.png'
import './sections.scss'

/*
  Per-card data lifted straight from the design:
    - allie  light-pink card, lavender/pink/purple stars on right, purple name
    - jack   coral card, pink halo above the dog's head, white name
    - maia   light-pink card, pink + lavender hearts on right, deep-pink name

  Each card overrides --team-card-bg and --team-card-name-color via inline
  CSS variables; the rest of the card geometry comes from team-card.scss.
*/
const TEAM = [
  {
    id: 'allie',
    name: 'artsy allie',
    photo: alliePhoto,
    style: {
      '--team-card-bg': '#f3c8d8',
      '--team-card-name-color': '#aa6db8',
    },
    decorations: [
      { shape: 'star', color: 'var(--star-lavender)', top: '30%', right: '-2%', size: 28 },
      { shape: 'star', color: 'var(--star-pink)', top: '46%', right: '-6%', size: 22 },
      { shape: 'star', color: 'var(--star-purple)', top: '62%', right: '-2%', size: 28 },
    ],
  },
  {
    id: 'jack',
    name: 'Juxtapose jack',
    photo: jackPhoto,
    style: {
      '--team-card-bg': '#ed94a5',
      '--team-card-name-color': '#ffffff',
    },
    decorations: [
      { shape: 'halo', color: '#f3c8d8', top: '-2%', left: '20%', size: 110, rotate: '-12deg' },
    ],
  },
  {
    id: 'maia',
    name: 'magical maia',
    photo: maiaPhoto,
    style: {
      '--team-card-bg': '#f3c8d8',
      '--team-card-name-color': '#d06088',
    },
    decorations: [
      { shape: 'heart', color: '#f5a8c0', top: '32%', right: '-2%', size: 30 },
      { shape: 'heart', color: '#f3c8d8', top: '50%', right: '-7%', size: 22 },
      { shape: 'heart', color: '#d2bce0', top: '60%', right: '3%', size: 24 },
    ],
  },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <WaveBackground />
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
              <TeamCard
                key={member.id}
                name={member.name}
                photo={member.photo}
                decorations={member.decorations}
                style={member.style}
              />
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
