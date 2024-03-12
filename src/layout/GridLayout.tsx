import { ReactNode } from 'react'

type GridLayoutProps = {
  children: ReactNode
  className?: string
}

const GridLayout = ({ children, className }: GridLayoutProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-20 ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export { GridLayout }
