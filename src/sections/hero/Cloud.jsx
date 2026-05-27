function Cloud({ className = '', style = {} }) {
  return (
    <div className={`cloud ${className}`.trim()} style={style}>
      <div className="cloud__drift" data-animate="drift" aria-hidden="true">
        <span className="cloud__puff cloud__puff--1" />
        <span className="cloud__puff cloud__puff--2" />
        <span className="cloud__puff cloud__puff--3" />
        <span className="cloud__puff cloud__puff--4" />
        <span className="cloud__puff cloud__puff--5" />
      </div>
    </div>
  )
}

export default Cloud
