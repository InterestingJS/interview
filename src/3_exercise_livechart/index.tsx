import { useLiveChartReducer } from './reducer'
import { LiveTable } from './LiveTable'
import { LiveChart } from './LiveChart'
import { Container } from './Container'

import type { Event } from './utils'
import type { Dispatch, State } from './reducer'

type ExerciseProps = {
  dispatch: Dispatch
  state: State
}

const Exercise = ({ dispatch, state }: ExerciseProps) => {
  console.log('state', state)
  const data = state.events.slice(state.events.length - 20)
  return (
    <div style={{ padding: '2rem', width: '1400px' }}>
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
