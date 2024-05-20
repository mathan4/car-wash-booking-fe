import axios from 'axios'
import React, { useState } from 'react'

const LoginComponent = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault()

    axios
     .post(`http://localhost:3000/api/v1/user/login`,{email,password})
     .then((response)=>{
        alert(`Sucessfully logged ${response.data.name}`)
        window.localStorage.setItem('token',response.data.token)
        
     })
     .catch((error)=>{
        alert(`error ${error.response.data.message}`)
     })

  }


  return (
    <form onSubmit={formSubmitHandler}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input
        type='text'
        placeholder='Enter your email'
        value={email}
        onChange={emailHandler}/>
      </div>
      <div>
        <label>Password</label>
        <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={passwordHandler}/>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export default LoginComponent