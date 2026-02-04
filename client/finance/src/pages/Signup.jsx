import React from 'react'
import Button from '../components/UI/Button'
import google from '../assets/images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom'
import {IoMdMail} from 'react-icons/io'
import {IoMdEye,IoMdEyeOff} from 'react-icons/io'
import { useState } from 'react'
function Signup() {
    const [signupInfo,setSignupInfo]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const [isVisible,setIsVisible]=useState(false);
    const [errors,setErrors]=useState(null);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setSignupInfo({
            ...signupInfo,
            [name]:value,
        });
        setErrors({...errors,[name]:""});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {name,email,password,confirmPassword}=signupInfo;

        let newErrors={};
        if(!name){
            newErrors.name="Name is required";
        }
        if(!email){
            newErrors.email="Email is required";
        }
        if(!password){
            newErrors.password="Password is required";
        }
        if(password!==confirmPassword){
            newErrors.confirmPassword="Passwords do not match";
        }
        if(Object.keys(newErrors).length>0){
 setErrors(newErrors);
        }
        if(!newErrors.email && !newErrors.password && !newErrors.name && !newErrors.confirmPassword){
            alert('signup successful')
        }
 
    }
    const handleVisibility=()=>{
        setIsVisible(!isVisible);
    }
    
  return (
    <>
    <section className=' w-full h-screen bg-linear-to-b from-primary/50 via-white to-white '>
    <div className='w-[80%]  flex flex-row items-center mx-auto h-full gap-6'>
     <div className='w-full hidden lg:block '>
        <h1 className='text-3xl font-bold inter'>Fast,Efficient and Productive</h1>
        <p className='text-xl  inter  text-muted'>Track your finances with ease and efficiency</p>
    </div>
    <div className=' w-full gap-2 flex flex-col p-10 rounded-lg bg-background shadow-2xl'>
    <h1 className='text-2xl font-bold inter'>Signup</h1>
    <p className='text-sm text-muted'>Create an account to get started</p>
    <form action="" method="post" className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <label htmlFor="Name" className='text-sm inter font-bold'>Name</label>
            <input type="text" value={signupInfo.name} onChange={handleChange} name="name" placeholder='John Doe' id="Name" className='  inter border rounded-md p-1 text-muted border-gray-300'/>
            {errors && errors.name && <p className='text-red-500 text-xs'>{errors.name}</p>}
        </div>
        <div className='flex flex-col gap-1 relative'>
            <label htmlFor="email" className='text-sm inter font-bold'>Email</label>
               <IoMdMail className=" mt-8 text-muted absolute z-10 right-2" />
            <input type="email" value={signupInfo.email} onChange={handleChange} name="email" placeholder='signup@email.com' id="email" className='  inter border rounded-md p-1 text-muted border-gray-300'/>
            {errors && errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
        </div>
        <div className='flex flex-col gap-1 relative'>
            <label htmlFor="password"  className='text-sm inter font-bold'>Password</label>
            <button className='mt-8 text-muted absolute z-10 right-2' onClick={handleVisibility} type='button'>
                {isVisible?<IoMdEye/>:<IoMdEyeOff/>}
            </button>
            <input type={isVisible?"text":"password"} value={signupInfo.password} onChange={handleChange}  name="password" id="password" className='border rounded-md p-1 text-muted border-gray-300'/>
                {errors && errors.password && <p className='text-red-500 text-xs  bottom-0 left-0'>{errors.password}</p>}
        </div>
        <div className='flex flex-col gap-1 relative'>
            <label htmlFor="confirmPassword"  className='text-sm inter font-bold'>Confirm Password</label>
            <button className='mt-8 text-muted absolute z-10 right-2' onClick={handleVisibility} type='button'>
                {isVisible?<IoMdEye/>:<IoMdEyeOff/>}
            </button>
            <input type={isVisible?"text":"password"} value={signupInfo.confirmPassword} onChange={handleChange}  name="confirmPassword" id="confirmPassword" className='border rounded-md p-1 text-muted border-gray-300'/>
             {errors && errors.confirmPassword && <p className='text-red-500 text-xs  bottom-0 left-0'>{errors.confirmPassword}</p>}
        </div>
           
        <div className='flex flex-row w-full text-center items-center gap-4 '>
            <span className='grow border-t border-gray-400 '></span>
            <p className='text-sm font-medium inter'>Or with</p>
            <span className='grow border-t border-gray-400 '></span>
        </div>
        <div className='flex flex-col w-full gap-4'>
        <button className='flex items-center justify-center gap-2 border rounded-md p-2 text-muted hover:bg-primary/20'>
            <img src={google} alt="Google Logo" className='w-5 h-5'/>
            <span>Signup with Google</span>
        </button>
            <Button text="Signup" isPrimary={true}/>
        </div>
          <p className='text-sm text-muted inter text-center lg:text-right'>Already have an account? <span className='font-bold text-primary cursor-pointer'><Link to="/login">Login</Link></span></p>
    </form>
    </div>
    </div>
   
   </section>
    </>
  )
}

export default Signup