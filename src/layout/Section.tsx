import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return <div className={`grid grid-cols-1 gap-4 ${className}`}>{children}</div>
}

export { Section }
