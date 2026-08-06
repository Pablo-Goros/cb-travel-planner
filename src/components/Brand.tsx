interface BrandProps {
  onClick?: () => void
}

export function Brand({ onClick }: BrandProps) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="CB Travel Planner home">
      <img
        className="brand-logo"
        src="/images/cb-travel-planner-logo.png"
        alt="CB Travel Planner"
        width="669"
        height="660"
      />
    </a>
  )
}
