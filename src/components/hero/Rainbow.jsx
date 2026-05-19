const ARCS = [
  { color: 'var(--rainbow-1)', size: '100%' },
  { color: 'var(--rainbow-2)', size: '84%' },
  { color: 'var(--rainbow-3)', size: '68%' },
  { color: 'var(--rainbow-4)', size: '52%' },
  { color: 'var(--rainbow-5)', size: '36%' },
  { color: 'var(--rainbow-6)', size: '20%' },
]

function Rainbow() {
  return (
    <div className="rainbow" data-animate="glow" aria-hidden="true">
      <div className="rainbow__inner">
        {ARCS.map((arc, i) => (
          <div
            key={i}
            className="rainbow__arc"
            style={{
              '--arc-color': arc.color,
              width: arc.size,
              height: arc.size,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Rainbow
