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
      '--team-card-bg': '#f7d5ef',
      '--team-card-name-color': '#b289bd',
    },
    decorations: [
      { shape: 'star', color: '#f7d5ef', top: '32%', right: '7%', size: 28 },
      { shape: 'star', color: '#f9c2cd', top: '46%', right: '3%', size: 22 },
      { shape: 'star', color: '#b289bd', top: '57%', right: '6%', size: 28 },
    ],
  },
  {
    id: 'jack',
    name: 'juxtapose jack',
    photo: jackPhoto,
    style: {
      '--team-card-bg': '#f28197',
      '--team-card-name-color': '#f7d5ef',
    },
    decorations: [
      { shape: 'halo', color: '#f9c2cd', top: '2%', left: '-4%', size: 95, rotate: '-50deg' },
    ],
  },
  {
    id: 'maia',
    name: 'magical maia',
    photo: maiaPhoto,
    style: {
      '--team-card-bg': '#f9c2cd',
      '--team-card-name-color': '#f28197',
    },
    decorations: [
      { shape: 'heart', color: '#9e005d', top: '52%', right: '2%', size: 26, rotate: '-5deg' },
      { shape: 'heart', color: '#f28197', top: '64%', right: '7%', size: 22, rotate: '35deg' },
      { shape: 'heart', color: '#f28197', top: '40%', left: '14%', size: 26, rotate: '-25deg'},
      { shape: 'heart', color: '#f9c2cd', top: '52%', left: '10%', size: 28, rotate: '-45deg' },
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
