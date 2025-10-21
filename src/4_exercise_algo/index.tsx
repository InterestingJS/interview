import { Exercise } from '../components/Exercise'

import { Metrics } from './Metrics'

export const ExerciseAlgo = () => {
  return (
    <Exercise
      index={4}
      instructions={
        <>
          <p>
            We have a lot of data from which we want to extract meaningful
            metrics. The data, which associates users and cars, is composed of
            accounts, users, cars and insurances which is an associative table
            between users and cars. An account is uniquely identified by an
            email address, allowing multiple users to be associated to the same
            email. Example: if 3 users share the same email then it is a single
            account linked to 3 users.
            <br />
            You should implement the <code>computeMetrics</code> function
            without modifying the rest of the code.
            <br />
            The fixtures in data.json have a fixed date. Use the provided{' '}
            <code>now</code> variable as the current date (instead of the real
            current date).
            <br />
            Keep in mind this exercise is testing algorithmic, so the time
            complexity of your code will be evaluated.
          </p>
          <ul style={{ padding: 2 }}>
            <li>The total number of accounts.</li>
            <li>
              The number of users with at least one outdated insurance (their
              insurance expires before the fixed <code>now</code> date defined
              in the code).
            </li>
            <li>The number of accounts with more than 2 cars.</li>
            <li>
              The average age of the oldest user of each account (using the user
              createdAt field) in days.
            </li>
            <li>The number of accounts for the car owned by the most users.</li>
          </ul>
        </>
      }
    >
      <Metrics />
    </Exercise>
  )
}
