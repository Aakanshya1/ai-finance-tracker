import React from 'react'
import Button from '../components/UI/Button'
import google from '../assets/images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
   <section className=' w-full h-screen bg-linear-to-b from-primary/50 via-white to-white '>
    <div className='w-[80%]  flex flex-row items-center mx-auto h-full gap-6'>
     <div className='w-full '>
        <h1 className='text-3xl font-bold inter'>Fast,Efficient and Productive</h1>
        <p className='text-xl  inter  text-muted'>Track your finances with ease and efficiency</p>
    </div>
    <div className=' w-full gap-2 flex flex-col p-10 rounded-lg bg-background shadow-2xl'>
    <h1 className='text-2xl font-bold inter'>Login</h1>
    <p className='text-sm text-muted'>Your account details are secure with us.</p>
    <form action="" method="post" className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-sm inter font-bold'>Email</label>
            <input type="email" name="email" id="email" className='border rounded-md p-1 text-muted border-gray-300'/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="password"  className='text-sm inter font-bold'>Password</label>
            <input type="password" name="password" id="password" className='border rounded-md p-1 text-muted border-gray-300'/>
        </div>
      
            <p className='text-sm text-muted inter hover:underline cursor-pointer text-right'>Forgot Password?</p>
           
        <div className='flex flex-row w-full text-center items-center gap-4 '>
            <span className='grow border-t border-gray-400 '></span>
            <p className='text-sm font-medium inter'>Or with</p>
            <span className='grow border-t border-gray-400 '></span>
        </div>
        <div className='flex flex-col w-full gap-4'>
        <button className='flex items-center justify-center gap-2 border rounded-md p-2 text-muted hover:bg-primary/20'>
            <img src={google} alt="Google Logo" className='w-5 h-5'/>
            <span>Login with Google</span>
        </button>
            <Button text="Login" isPrimary={true}/>
        </div>
          <p className='text-sm text-muted inter text-right'>Don't have an account? <span className='font-bold text-primary cursor-pointer'><Link to="/signup">Sign Up</Link></span></p>
    </form>
    </div>
    </div>
   
   </section>

    </>
  )
}

export default Login