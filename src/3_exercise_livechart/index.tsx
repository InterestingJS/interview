import { useLiveChartReducer } from './reducer'
import { LiveTable } from './LiveTable'
import { LiveChart } from './LiveChart'
import { Container } from './Container'

import type { Event } from './utils'
import type { Dispatch, State } from './reducer'
import { useRef, useState } from 'react'

type ExerciseProps = {
  dispatch: Dispatch
  state: State
}

const Exercise = ({ dispatch, state }: ExerciseProps) => {
  console.log('state.events.length', state.events.length)
  const [currentIndex, setCurrentIndex] = useState(null)

  let data
  if (currentIndex) {
    data = state.events.slice(currentIndex - 20, currentIndex)
  } else {
    data = state.events.slice(state.events.length - 20)
  }

  // target : 140
  // 150 - 20   => 130 -> 150
  // const parsedData = state.events.slice(currentSize - 20)
  // pause :

  return (
    <div style={{ padding: '2rem', width: '1400px' }}>
      <button>previous</button>
      <button>next</button>
      <button
        onClick={() => {
          if (currentIndex === null) {
            setCurrentIndex(state.events.length)
          } else {
            setCurrentIndex(null)
          }
        }}
      >
        {currentIndex === null ? 'Pause' : 'Play'}
      </button>
      <LiveChart
        data={data}
        onChartClick={(selectedEvent: Event) =>
          dispatch({
            type: 'select_event',
            selectedEvent,
          })
        }
        style={{ marginBottom: '2rem' }}
      />
      <LiveTable data={data} />
    </div>
  )
}

export const ExerciseLiveChart = () => {
  const [state, dispatch] = useLiveChartReducer()

  return (
    <Container dispatch={dispatch}>
      <Exercise dispatch={dispatch} state={state} />
    </Container>
  )
}
