export const User = (props) => {
  const { avatar, bio, company, firstName, lastName, login } = props
  return (
    <div>
      <img src={avatar} style={{ width: '100px', height: '100px' }} />
      <div>Login: {login}</div>
      <div>First name: {firstName}</div>
      <div>Last name: {lastName}</div>
      <div>Company: {company}</div>
      <div>Bio: {bio}</div>
    </div>
  )
}
