interface BrandProps {
  onClick?: () => void
}

export function Brand({ onClick }: BrandProps) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="CB Travel Planner home">
      <span className="brand-mark" aria-hidden="true">
        CB
      </span>
      <span className="brand-name">
        <span>CB Travel</span>
        <span>Planner</span>
      </span>
    </a>
  )
}
