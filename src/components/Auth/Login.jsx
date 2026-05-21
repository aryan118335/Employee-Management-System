import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('email is',email)
    console.log('password is',password)

    setEmail('')
    setPassword('')
  }
  
  return (
    <div className=' flex h-screen w-screen items-center justify-center '>
      <div className=' rounded-xl border-2 border-emerald-600 p-20'>

        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className='flex flex-col items-center justify-centre'>

          <input 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}
          }
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full'  type="email" placeholder='Enter your email' 
          />

          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}
          }
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3'  type="password" placeholder='Enter your password'
          />
          <button className='w-full outline-none border-none hover:bg-emerald-700 bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5'>LogIn</button>
        </form>
      </div>

    </div>
  )
}

export default Login

