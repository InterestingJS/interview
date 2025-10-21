import { useState } from 'react'
import { users } from '../data/users'
import './user-list.css'

export const UserList = () => {
  const [selectedUserIndex, setSelectedUserIndex] = useState(0)

  const [usersList, setUsersList] = useState(users)
  const updateUser = (event) => {
    event.preventDefault()
    console.log('updateUser', event)
    const firstName = event.target[0]
    console.log('lastName', lastName)
    console.log('login', login)
    // const { firstName, lastName, login } = user
    // users[selectedUserIndex] = {
    //   ...users[selectedUserIndex],
    //   firstName,
    //   lastName,
    //   login,
    // }
  }
  console.log('render')

  return (
    <div className="hstack user-list">
      {users.map((user, index) => {
        return (
          <div key={user.login}>
            <div
              className="user-info"
              onClick={() => {
                setSelectedUserIndex(index)
              }}
            >
              {user.firstName} {user.lastName} @{user.login}
            </div>
            {selectedUserIndex === index && (
              <form onSubmit={updateUser}>
                <div className="hstack form-content">
                  <input
                    // value={users[selectedUserIndex].firstName}
                    name="firstName"
                    placeholder="First name"
                  />
                  <input name="lastName" placeholder="Last name" />
                  <input name="login" placeholder="Login" />

                  <button type="submit">Update</button>
                </div>
              </form>
            )}
          </div>
        )
      })}
    </div>
  )
}
