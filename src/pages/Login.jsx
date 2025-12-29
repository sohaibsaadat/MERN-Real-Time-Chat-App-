import React, { useState } from 'react'
import assets from '../assets/assets.js'
import { useForm } from "react-hook-form"

const Login = () => {

  const [currentState,setCurrentState]=useState("Sign Up")
  const [isDataSubmitted,setIsDataSubmitted] = useState(false)
  const {register, handleSubmit,watch,formState: { errors },} = useForm()
  const onSubmit = (data) => {
    if (currentState === 'Sign Up' && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    }
    console.log(data);
    reset();
  };
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
{/* left */}
<img src={assets.logo_big } alt="" className='w-[min(30vw,250px)]' />
{/* right */}

<form onSubmit={handleSubmit(onSubmit)} className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">

<h2 className='font-medium text-2xl flex justify-between items-center'>
  {currentState}  
  {isDataSubmitted&&  <img  onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' /> }
 
  </h2>
{
  currentState === "Sign Up" && !isDataSubmitted &&(
   <>
    <input
      type="text"
      {...register("fullName", { required: "Full name is required" })}
      className="p-2 border border-gray-500 rounded-md focus:outline-none"
      placeholder="Full Name"
    />
    {errors.fullName && <p>{errors.fullName.message}</p>}
  </>

  
  )
}
{
  !isDataSubmitted &&(
      <>
    <input
      type="email"
      {...register("email", { required: "Email is required" })}
      className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Email Address"
    />
    {errors.email && <p>{errors.email.message}</p>}
    <input
      type="password"
      {...register("password", { required: "Password is required" })}
      className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Password"
    />
    {errors.password && <p>{errors.password.message}</p>}
  </>
  )
}
{
  currentState === "Sign Up" && isDataSubmitted &&(
<>
<textarea rows={4} {...register("bio", {
          required: "Bio is required",
          minLength: {
            value: 10,
            message: "Bio must be at least 10 characters"
          }
        })}  className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder='Bio Description'></textarea>
      {errors.bio && <p>{errors.bio.message}</p>}

</>
    
  )
}
<button className='py-3 bg-linear-to-r  from-purple-400  to-violet-600 text-white rounded-md cursor-pointer'>
  {currentState === 'Sign Up'?'Create Account':'Login'}
</button>


<div className='flex items-center gap-2 text-sm text-gray-500'>
  <input type="checkbox" />
  <p>Agree to the terms of use & privacy policy</p>
</div>

<div className='flex flex-col gap-2'>
{
  currentState === "Sign Up"?(
  <p className='text-sm text-gray-600'>
    Already have an account <span onClick={()=>{setCurrentState("Login"); setIsDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'>Login</span>
  </p>
  ):
  (
  <p className='text-sm text-gray-600'>
    Create an account <span onClick={()=>{setCurrentState("Sign Up")}}  className='font-medium text-violet-500 cursor-pointer'>Click here</span>
  </p>
)
}
</div>

</form>

    </div>
  )
}

export default Login
