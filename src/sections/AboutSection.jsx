import WaveBackground from '../components/wave/WaveBackground'
import TeamCard from '../components/team/TeamCard'
import Fish from '../components/about/Fish'
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

const ORANGE = { fill: '#fde8d4', stroke: '#f0a060' }
const BLUE = { fill: '#d4ecf8', stroke: '#60b0e0' }

/*
  Fifteen fish in loose schools. Positions sit in open teal around the copy
  block and team-card margins so they stay visible (not buried under cards).
  A few members are nudged away from their group center.
*/
const FISH = [
  // School 1 — orange, lower copy column (open space below text)
  { ...ORANGE, size: 30, top: '72%', left: '5%', rotate: -16 },
  { ...ORANGE, size: 26, top: 'calc(72% + 12px)', left: 'calc(5% + 28px)', rotate: 10 },
  { ...ORANGE, size: 24, top: 'calc(72% + 28px)', left: 'calc(5% + 8px)', rotate: -4 },
  { ...BLUE, size: 22, top: 'calc(72% - 4px)', left: 'calc(5% + 48px)', rotate: 24 },
  { ...ORANGE, size: 20, top: 'calc(72% + 40px)', left: 'calc(5% + 44px)', rotate: -22 },

  // School 2 — blue, upper-right strip above cards
  { ...BLUE, size: 28, top: '3%', right: '4%', rotate: 12 },
  { ...BLUE, size: 26, top: 'calc(3% + 10px)', right: 'calc(4% + 26px)', rotate: -8 },
  { ...BLUE, size: 24, top: 'calc(3% + 6px)', right: 'calc(4% + 50px)', rotate: 20 },
  { ...ORANGE, size: 22, top: 'calc(3% - 6px)', right: 'calc(4% + 38px)', rotate: -18 },

  // School 3 — orange, right margin beside cards
  { ...ORANGE, size: 26, top: '38%', right: '1%', rotate: 8 },
  { ...ORANGE, size: 24, top: 'calc(38% + 14px)', right: 'calc(1% + 18px)', rotate: -12 },
  { ...BLUE, size: 22, top: 'calc(38% + 4px)', right: 'calc(1% + 36px)', rotate: 16 },

  // School 4 — mixed, lower-left copy column
  { ...BLUE, size: 26, top: '88%', left: '12%', rotate: -10 },
  { ...BLUE, size: 22, top: 'calc(88% + 12px)', left: 'calc(12% + 22px)', rotate: 14 },
  { ...ORANGE, size: 20, top: 'calc(88% + 2px)', left: 'calc(12% + 46px)', rotate: -26 },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <WaveBackground />
      <div className="about-section__inner">
        <div className="about-section__fish-school" aria-hidden="true">
          {FISH.map((fish, i) => (
            <Fish
              key={i}
              className="about-section__fish"
              fill={fish.fill}
              stroke={fish.stroke}
              style={{
                top: fish.top,
                left: fish.left,
                right: fish.right,
                width: fish.size,
                transform: `rotate(${fish.rotate}deg)`,
              }}
            />
          ))}
        </div>

        <div className="about-section__copy">
          <h2 id="about-heading" className="about-section__heading">
            About Magical Minis
          </h2>
          <p className="about-section__text">
            Welcome to Magical Minis, a whimsical world of tiny treasures designed with
            love by our creative team.
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection
