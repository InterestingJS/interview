export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  createdAt: string
}

export type Car = {
  id: number
  name: string
  createdAt: string
}

export type Insurance = {
  id: number
  car: number
  user: number
  expiration: string
}

export type Data = {
  users: User[]
  cars: Car[]
  insurances: Insurance[]
}
