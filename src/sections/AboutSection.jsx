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

const ORANGE = 'pink-orange'
const BLUE = 'blue-purple-pink'
const GREEN = 'green-purple-pink'

/** Minimum gap between fish bounding boxes (px). */
const FISH_MIN_GAP = 5

/** Extra width applied to every fish; positions are nudged so gaps stay the same. */
const FISH_SIZE_BONUS = 5
const FISH_ASPECT = 150 / 293

/** Offset within a school group; maintain at least FISH_MIN_GAP between fish. */
function schoolFish({ id, palette, size, x = 0, y = 0, rotate }) {
  return {
    id,
    palette,
    size: size + FISH_SIZE_BONUS,
    x: x + (x > 0 ? FISH_SIZE_BONUS : 0),
    y: y + (y > 0 ? FISH_SIZE_BONUS * FISH_ASPECT : 0),
    ...(rotate != null && { rotate }),
  }
}

const FISH_SCHOOLS = [
  {
    id: 'bottom-left',
    top: '75%',
    left: '30%',
    fish: [
      schoolFish({ id: 'bottom-left-1', palette: ORANGE, size: 40 }),
      schoolFish({ id: 'bottom-left-2', palette: ORANGE, size: 36, x: 50, y: 12 }),
      schoolFish({ id: 'bottom-left-3', palette: GREEN, size: 34, x: 0, y: 32 }),
      schoolFish({ id: 'bottom-left-4', palette: BLUE, size: 32, x: 96, y: 0 }),
      schoolFish({ id: 'bottom-left-5', palette: ORANGE, size: 30, x: -40, y: 65 }),
      schoolFish({ id: 'bottom-left-6', palette: BLUE, size: 32, x: 18, y: 88 }),
      schoolFish({ id: 'bottom-left-7', palette: GREEN, size: 28, x: 70, y: 102 }),
      schoolFish({ id: 'bottom-left-8', palette: BLUE, size: 30, x: 8, y: 124 }),
      schoolFish({ id: 'bottom-left-9', palette: GREEN, size: 28, x: 108, y: 112 }),
      schoolFish({ id: 'bottom-left-10', palette: BLUE, size: 32, x: 60, y: 60 }),
    ],
  },
  {
    id: 'top-right',
    top: '3%',
    right: '10%',
    fish: [
      schoolFish({ id: 'top-right-1', palette: BLUE, size: 38 }),
      schoolFish({ id: 'top-right-2', palette: BLUE, size: 36, x: 48, y: 12 }),
      schoolFish({ id: 'top-right-3', palette: BLUE, size: 34, x: 94, y: 5 }),
      schoolFish({ id: 'top-right-4', palette: ORANGE, size: 32, x: 64, y: 44 }),
      schoolFish({ id: 'top-right-5', palette: ORANGE, size: 32, x: 0, y: 30 }),
    ],
  },
  {
    id: 'mid-right',
    top: '25%',
    right: '5%',
    fish: [
      schoolFish({ id: 'mid-right-1', palette: GREEN, size: 36 }),
      schoolFish({ id: 'mid-right-2', palette: ORANGE, size: 34, x: 46, y: 44 }),
      schoolFish({ id: 'mid-right-3', palette: BLUE, size: 32, x: 102, y: 46 }),
    ],
  },
  {
    id: 'bottom-right',
    top: '91%',
    right: '2%',
    fish: [
      schoolFish({ id: 'bottom-right-1', palette: BLUE, size: 36 }),
      schoolFish({ id: 'bottom-right-2', palette: BLUE, size: 32, x: 44, y: 16 }),
      schoolFish({ id: 'bottom-right-3', palette: ORANGE, size: 30, x: 88, y: 6 }),
    ],
  },
]

/** Lone fish — absolute position anywhere in the about section */
const FISH_STRAGGLERS = [
  { id: 'upper-left', palette: ORANGE, size: 30, top: '12%', left: '-10%' },
  { id: 'mid-left', palette: GREEN, size: 28, top: '58%', left: '34%' },
  { id: 'lower-right', palette: BLUE, size: 26, top: '68%', right: '16%' },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <WaveBackground />
      <div className="about-section__fish-school" aria-hidden="true">
        <div className="about-section__fish-stage">
          {FISH_SCHOOLS.map((school) => (
          <div
            key={school.id}
            className={[
              'about-section__fish-group',
              `about-section__fish-group-${school.id}`,
            ].join(' ')}
            style={{
              top: school.top,
              left: school.left,
              right: school.right,
            }}
          >
            {school.fish.map((fish) => (
              <Fish
                key={fish.id}
                id={fish.id}
                className="about-section__fish"
                instanceClassName={`about-section__fish-${fish.id}`}
                palette={fish.palette}
                {...(fish.rotate != null && { rotate: fish.rotate })}
                style={{
                  top: `${fish.y}px`,
                  left: `${fish.x}px`,
                  width: fish.size,
                }}
              />
            ))}
          </div>
        ))}

        {FISH_STRAGGLERS.map((fish) => (
          <Fish
            key={fish.id}
            id={fish.id}
            className="about-section__fish about-section__fish--lone"
            instanceClassName={`about-section__fish-${fish.id}`}
            palette={fish.palette}
            {...(fish.rotate != null && { rotate: fish.rotate })}
            style={{
              top: fish.top,
              left: fish.left,
              right: fish.right,
              width: fish.size + FISH_SIZE_BONUS,
            }}
          />
        ))}
        </div>
      </div>

      <div className="about-section__inner">
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
