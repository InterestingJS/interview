import { roundDecimals, computeMetrics } from './utils'
import data from './data.json'
import type { Data } from './types'

export const Metrics = () => {
  const { users, cars, insurances } = data as Data

  const t0 = performance.now()

  const {
    uniqueAccounts,
    usersWithOutdatedInsurance,
    usersWithManyCars,
    accountsAverageAge,
    mostOwnedCarAccountsCount,
  } = computeMetrics({
    users,
    cars,
    insurances,
  })

  const t1 = performance.now()

  return (
    <ul>
      <li>
        The total number of unique accounts: <b>{uniqueAccounts}</b>
      </li>
      <li>
        The number of users with at least 1 outdated insurance:{' '}
        <b>{usersWithOutdatedInsurance}</b>
      </li>
      <li>
        The number of users with more than 2 cars: <b>{usersWithManyCars}</b>
      </li>
      <li>
        The Average age of the oldest user of each account:{' '}
        <b>{accountsAverageAge}</b>
      </li>
      <li>
        The number of accounts for the most owned car:{' '}
        <b>{mostOwnedCarAccountsCount}</b>
      </li>
      <li>
        The call to <code>computeMetrics</code> took{' '}
        <b>{roundDecimals(t1 - t0)} milliseconds</b>
      </li>
    </ul>
  )
}
