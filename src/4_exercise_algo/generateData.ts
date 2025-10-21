import { now } from './utils'
import type { Insurance, User, Car } from './types'

const firstNames = [
  'Abraham',
  'Madeleine',
  'Irwin',
  'Cora',
  'Gwenael',
  'Roberta',
  'Roderick',
  'Lua',
  'Yves',
  'Mado',
  'Tommy',
  'Sidoine',
]

const lastNames = [
  'Beaumont',
  'Bissonnette',
  'Montgomery',
  'De la Croix',
  'Monteil',
  'Rigal',
  'Barbet',
  'Lucy',
  'Pichard',
  'Brochard',
]

const companies = [
  'gg.com',
  'gmail.com',
  'toto.xd',
  'masson.paris',
  'picard.zero',
]

const cars = [
  'Renalut',
  'Peugeto',
  'Nissna',
  'Skdoa',
  'Toyoat',
  'Beta-Juliette',
  'Frod',
  'Prosche',
  'Adui',
  'WMB',
  'Cadiccal',
  'Chevorlet',
  'Ironarri',
  'Hando',
  'Merdeces',
  'Voksvaguenne',
  'Vovlo',
  'Bagutti',
  'Telsa',
  'Suziku',
]

const range = (n: number) => [...Array(n)]
const randInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min) + min)
const randChoice = <T>(arr: T[]) => arr[randInt(arr.length)]
const DAY_IN_MILLISECONDS = 86400000
const randDate = (startDate: Date, endDate = now) =>
  new Date(
    randInt(endDate.getTime() - startDate.getTime()) + startDate.getTime()
  )
const addDays = (date: Date, n: number) =>
  new Date(date.getTime() + n * DAY_IN_MILLISECONDS)

let nextUserId = 0
const generateUser = (): User => {
  const firstName = randChoice(firstNames)
  const lastName = randChoice(lastNames)
  const company = randChoice(companies)
  const createdAt = randDate(addDays(now, -365 * 2)).toISOString()
  return {
    id: nextUserId++,
    firstName,
    lastName,
    email: `${firstName}.${lastName}@${company}`,
    createdAt,
  }
}

let nextCarId = 0
const generateCar = (): Car => ({
  id: nextCarId++,
  name: cars[nextCarId % 20],
  createdAt: randDate(addDays(now, -365 * 2)).toISOString(),
})

const combination = <T>(arr: T[], k: number) => {
  const copy = arr.slice()
  const elements: T[] = []
  for (let i = 0; i < k; i++) {
    const idx = randInt(copy.length)
    elements.push(copy.splice(idx, 1)[0])
  }
  return elements
}

let nextInsuranceId = 0
const generateInsurances = (users: User[], cars: Car[]) => {
  const insurances: Insurance[] = []
  users.forEach((user) => {
    const n_insurances = randInt(4)
    const owner_of = combination(cars, n_insurances)
    owner_of.forEach((car) => {
      insurances.push({
        id: nextInsuranceId++,
        car: car.id,
        user: user.id,
        expiration: randDate(
          addDays(now, -365),
          addDays(now, 365)
        ).toISOString(),
      })
    })
  })
  return insurances
}

const N_USERS = 500
const N_CARS = 20

export const generateData = () => {
  const users = range(N_USERS).map(generateUser)
  const cars = range(N_CARS).map(generateCar)
  const insurances = generateInsurances(users, cars)

  return {
    users,
    cars,
    insurances,
  }
}
