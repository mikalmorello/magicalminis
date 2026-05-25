/** First color holds through 50%; remaining colors feather in without hard mid bands. */
function buildStops(colors) {
  if (colors.length === 1) {
    return [
      { offset: '0%', color: colors[0] },
      { offset: '100%', color: colors[0] },
    ]
  }

  const stops = [
    { offset: '0%', color: colors[0] },
    { offset: '50%', color: colors[0] },
  ]

  if (colors.length === 3) {
    const [c1, c2, c3] = colors
    stops.push(
      { offset: '64%', color: `color-mix(in srgb, ${c1} 55%, ${c2} 45%)` },
      { offset: '82%', color: `color-mix(in srgb, ${c2} 35%, ${c3} 65%)` },
      { offset: '100%', color: c3 },
    )
    return stops
  }

  const rest = colors.slice(1)
  rest.forEach((color, i) => {
    const offset = 50 + ((i + 1) / rest.length) * 50
    stops.push({ offset: `${offset}%`, color })
  })

  return stops
}

function palette(colors, stroke) {
  const primary = colors[0]
  return {
    stops: buildStops(colors),
    stroke,
    primary,
    /* Same hue/chroma as the primary stop — just a touch darker. */
    fin: `oklch(from ${primary} calc(l * 0.9) c h)`,
  }
}

/** Named gradient fills for Fish — colors from design tokens. */
export const FISH_PALETTES = {
  'blue-purple-pink': palette(
    ['var(--rainbow-3)', 'var(--rainbow-1)', 'var(--rainbow-7)'],
    'var(--rainbow-1)',
  ),
  'pink-orange': palette(
    ['var(--rainbow-7)', 'var(--rainbow-6)'],
    'var(--pink-primary)',
  ),
  'green-purple-pink': palette(
    ['var(--rainbow-4)', 'var(--rainbow-1)', 'var(--rainbow-7)'],
    'var(--rainbow-1)',
  ),
}
