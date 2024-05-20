import axios from 'axios'
import React, { useState } from 'react'

const SignUpComponent = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const nameHandler=(event)=>{
    setName(event.target.value)
  }
  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault()

    axios
      .post(`http://localhost:3000/api/v1/user/signup`,{name,email,password})
      .then((response)=>{
        alert(`successfully created account for ${name}`)

      })
      .catch((error)=>{
        alert(`Error ${error.response.data.message}`)
      })

  }
  return (
    <form onSubmit={formSubmitHandler}>
      <h1>Sign up</h1>
      <div className='name_field'>
        <label>Name</label>
        <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={nameHandler}
        />
      </div>
      <div className='email_field'>
        <label>Email</label>
        <input
        type='text'
        placeholder='Enter your email'
        value={email}
        onChange={emailHandler}
        />
      </div>
      <div className='password_field'>
        <label>Password</label>
        <input
        type='text'
        placeholder='Enter your password'
        value={password}
        onChange={passwordHandler}
        />
      </div>
      <div >
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default SignUpComponent