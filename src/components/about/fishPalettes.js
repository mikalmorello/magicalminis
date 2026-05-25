/** First color holds through 50%; remaining colors split the second half evenly. */
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
