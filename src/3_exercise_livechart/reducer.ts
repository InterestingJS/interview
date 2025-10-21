import { useReducer, type Dispatch as ReactDispatch } from 'react'

import { createRandomEvent, type Event } from './utils'

export type State = {
  events: Event[]
  selectedEvent: Event | null
}

export type Action =
  | { type: 'new_event'; event: Event }
  | {
      type: 'select_event'
      selectedEvent: Event | null
    }

export type Dispatch = ReactDispatch<Action>

const initialState = {
  events: Array.from(Array(50)).map((_, ix) => createRandomEvent(ix)),
  selectedEvent: null,
} satisfies State

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'new_event':
      return {
        ...state,
        events: [...state.events, action.event],
      }
    case 'select_event':
      return {
        ...state,
        selectedEvent: action.selectedEvent,
      }
    case 'edit_value':
      // slice mon tableau cu
      return {}
    default:
      return state
  }
}

export const useLiveChartReducer = () =>
  useReducer<State, [Action]>(reducer, initialState)
