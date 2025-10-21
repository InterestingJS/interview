import type { Event } from './utils'

const Cell = ({ ...props }) => (
  <div
    style={{
      border: '1px solid',
      display: 'inline-block',
      width: '60px',
      height: '40px',
      padding: '0.25rem',
    }}
    {...props}
  />
)

type LiveTableProps = {
  data: Event[]
}

export const LiveTable = ({ data }: LiveTableProps) => {
  return (
    <div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Index</Cell>
        {data.map((event) => {
          return <Cell key={event.index}>{event.index}</Cell>
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Value 1</Cell>
        {data.map((event) => {
          return <Cell key={event.index}>{event.value1}</Cell>
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Value 2</Cell>
        {data.map((event) => {
          return <Cell key={event.index}>{event.value2}</Cell>
        })}
      </div>
    </div>
  )
}
