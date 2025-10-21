import { Link } from 'react-router'
import type { ReactNode } from 'react'

type HeaderProps = {
  title: ReactNode
  children: ReactNode
}

export const Header = ({ title, children }: HeaderProps) => (
  <div style={{ padding: '1rem' }}>
    <Link to="/">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginLeft: '1rem' }}>Home page</h1>
      </div>
    </Link>
    <h2 style={{ margin: '2.5rem' }}>{title}</h2>
    <div>{children}</div>
  </div>
)
