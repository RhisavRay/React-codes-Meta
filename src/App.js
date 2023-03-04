import "./App.css"
import { useState } from "react"

function App()
{
  const [form, setForm] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'email@email.com'
  })

  function firstNameHandler(e)
  {
    setForm({form, firstName: e.target.value})
  }
  function lastNameHandler(e)
  {
    setForm({form, lastName: e.target.value})
  }
  function emailHandler(e)
  {
    setForm({form, email: e.target.value})
  }
  function reset()
  {
    setForm({
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'email@email.com'
    })
  }
  function submit()
  {
    return(
      <div>
        <br></br><br></br>
        <p>Greetings</p>
      </div>
    )
  }

  return(
    <div>
      <label for = "firstName">First Name: </label>
      <input id = "firstName" value = {form.firstName} onChange = {firstNameHandler}></input>
      <br></br>
      <label for = "lastName">Last Name: </label>
      <input id = "lastName" value = {form.lastName} onChange = {lastNameHandler}></input>
      <br></br>
      <label for = "email">Email: </label>
      <input id = "email" value = {form.email} onChange = {emailHandler}></input>
      <br></br>
      <button onClick = {reset}>
        Reset
      </button>
      <button onClick={submit}>
        Submit
      </button>
      
    </div>
  )
}

export default App