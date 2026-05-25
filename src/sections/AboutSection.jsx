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

/** Minimum gap between fish bounding boxes (px). */
const FISH_MIN_GAP = 5

/** Schools keep their scatter; offsets maintain at least FISH_MIN_GAP. */
function schoolFish({ color, size, x = 0, y = 0 }) {
  return { color, size, x, y }
}

function buildSchool({ top, left, right, fish }) {
  return fish.map(({ color, size, x, y }) => ({
    ...color,
    size,
    top: `calc(${top} + ${y}px)`,
    ...(left != null ? { left: `calc(${left} + ${x}px)` } : {}),
    ...(right != null ? { right: `calc(${right} + ${x}px)` } : {}),
  }))
}

/** Lone fish — absolute position anywhere in the about section */
function loneFish({ color, size, top, left, right }) {
  return { ...color, size, top, left, right }
}

const FISH = [
  // School 1 — main cluster (10 fish, double the original school size)
  ...buildSchool({
    top: '72%',
    left: '5%',
    fish: [
      schoolFish({ color: ORANGE, size: 40 }),
      schoolFish({ color: ORANGE, size: 36, x: 50, y: 12 }),
      schoolFish({ color: ORANGE, size: 34, x: 0, y: 32 }),
      schoolFish({ color: BLUE, size: 32, x: 96, y: 0 }),
      schoolFish({ color: ORANGE, size: 30, x: 52, y: 56 }),
      // Added fish — second loose blob below, not aligned to a grid
      schoolFish({ color: BLUE, size: 32, x: 18, y: 88 }),
      schoolFish({ color: ORANGE, size: 28, x: 70, y: 102 }),
      schoolFish({ color: BLUE, size: 30, x: 8, y: 124 }),
      schoolFish({ color: ORANGE, size: 28, x: 108, y: 112 }),
      schoolFish({ color: BLUE, size: 32, x: 128, y: 78 }),
    ],
  }),

  ...buildSchool({
    top: '3%',
    right: '4%',
    fish: [
      schoolFish({ color: BLUE, size: 38 }),
      schoolFish({ color: BLUE, size: 36, x: 48, y: 12 }),
      schoolFish({ color: BLUE, size: 34, x: 94, y: 5 }),
      schoolFish({ color: ORANGE, size: 32, x: 64, y: 44 }),
    ],
  }),

  ...buildSchool({
    top: '38%',
    right: '1%',
    fish: [
      schoolFish({ color: ORANGE, size: 36 }),
      schoolFish({ color: ORANGE, size: 34, x: 46, y: 44 }),
      schoolFish({ color: BLUE, size: 32, x: 102, y: 46 }),
    ],
  }),

  ...buildSchool({
    top: '91%',
    right: '8%',
    fish: [
      schoolFish({ color: BLUE, size: 36 }),
      schoolFish({ color: BLUE, size: 32, x: 44, y: 16 }),
      schoolFish({ color: ORANGE, size: 30, x: 88, y: 6 }),
    ],
  }),

  // Stragglers — scattered outside the schools
  loneFish({ ...ORANGE, size: 30, top: '16%', left: '6%' }),
  loneFish({ ...BLUE, size: 28, top: '48%', left: '3%' }),
  loneFish({ ...BLUE, size: 30, top: '12%', right: '22%' }),
  loneFish({ ...ORANGE, size: 28, top: '58%', left: '34%' }),
  loneFish({ ...BLUE, size: 26, top: '68%', right: '16%' }),
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
              {...(fish.rotate != null && { rotate: fish.rotate })}
              style={{
                top: fish.top,
                left: fish.left,
                right: fish.right,
                width: fish.size,
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
