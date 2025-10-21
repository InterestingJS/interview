export const now = new Date('Jan 23, 2023 00:00:00')

/**
 * Round up numbers.
 */
export const roundDecimals = (nb: number, nbDecimals = 3) =>
  Math.round(nb * 10 ** nbDecimals) / 10 ** nbDecimals

// TODO: implement this function
export const computeMetrics = ({ users, cars, insurances }) => {
  return {
    uniqueAccounts: 0,
    usersWithOutdatedInsurance: 0,
    usersWithManyCars: 0,
    accountsAverageAge: 0,
    mostOwnedCarAccountsCount: 0,
  }
}
