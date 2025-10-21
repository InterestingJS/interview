import type { ReactNode } from 'react'
import { Header } from '../Header'

type ExerciseProps = {
  index: number
  title?: string
  children: ReactNode
  instructions: ReactNode
}

export const Exercise = ({
  index,
  title,
  children,
  instructions,
}: ExerciseProps) => {
  return (
    <div>
      <Header
        title={
          <span>
            Exercise {index} {title && <b>{title}</b>}
          </span>
        }
      >
        {instructions}
      </Header>
      {children}
    </div>
  )
}

Exercise.displayName = 'Exercise'
