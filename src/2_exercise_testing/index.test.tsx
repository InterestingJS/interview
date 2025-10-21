import { ExerciseTesting } from '.'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

test('it renders', async () => {
  render(
    <MemoryRouter>
      <ExerciseTesting />
    </MemoryRouter>
  )

  expect(
    screen.getByText(
      'Write a simple test to confirm that everything works fine.'
    )
  ).toBeInTheDocument()
})
