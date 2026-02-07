import React from 'react'
import Button from '../components/UI/Button'
import google from '../assets/images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom'
import {IoMdMail} from 'react-icons/io'
import {IoMdEye,IoMdEyeOff} from 'react-icons/io'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'

function Login() {
    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:"",
    });
    const [isVisible,setIsVisible]=useState(false);
    const [errors,setErrors]=useState(null);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginInfo({
            ...loginInfo,
            [name]:value,
        });
        setErrors({...errors,[name]:""});
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {email,password}=loginInfo;
        let newErrors={};
        if(!email){
            newErrors.email="Email is required";
        }
        if(!password){
            newErrors.password="Password is required";
        }
        if(Object.keys(newErrors).length>0){
 setErrors(newErrors);
 return;
        }
        try {
            const res = await loginUser(loginInfo);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("user",JSON.stringify(res.data.name));
            navigate("/dashboard");
        } catch (error) {
            setErrors("Login failed. Please try again.")
        }
 
    }

    const handleVisibility=()=>{
        setIsVisible(!isVisible);
    }
  return (
    <>
   <section className=' w-full h-screen bg-linear-to-b from-primary/50 via-white to-white '>
    <div className='w-[80%]  flex flex-row items-center mx-auto h-full gap-6'>
     <div className='w-full hidden lg:block'>
        <h1 className='text-3xl font-bold inter'>Fast,Efficient and Productive</h1>
        <p className='text-xl  inter  text-muted'>Track your finances with ease and efficiency</p>
    </div>
    <div className=' w-full gap-2 flex flex-col p-10 rounded-lg bg-background shadow-2xl'>
    <h1 className='text-2xl font-bold inter'>Login</h1>
    <p className='text-sm text-muted'>Your account details are secure with us.</p>
    <form action="" method="post" className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1 relative'>
          
            <label htmlFor="email" className='text-sm inter font-bold'>Email</label>
            <IoMdMail className=" mt-8 text-muted absolute z-10 right-2" />
            <input type="email" value={loginInfo.email} onChange={handleChange} name="email" placeholder='login@email.com' id="email" className='  inter border rounded-md p-1 text-muted border-gray-300'/>
            {errors && <p className='text-sm text-red-500'>{errors.email}</p>}
        </div>
        <div className='flex flex-col gap-1 relative'>
            <label htmlFor="password"  className='text-sm inter font-bold'>Password</label>
            <button className='mt-8 text-muted absolute z-10 right-2' onClick={handleVisibility} type='button'>
                {isVisible?<IoMdEye/>:<IoMdEyeOff/>}
            </button>
            <input type={isVisible?"text":"password"} value={loginInfo.password} onChange={handleChange} name="password" id="password" className='border rounded-md p-1 text-muted border-gray-300'/>
            {errors && <p className='text-sm text-red-500'>{errors.password}</p>}
        </div>
      
            <p className='text-sm text-muted inter hover:underline cursor-pointer text-center lg:text-right'>Forgot Password?</p>
        
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
          <p className='text-sm text-muted inter text-center lg:text-right'>Don't have an account? <span className='font-bold text-primary cursor-pointer'><Link to="/signup">Sign Up</Link></span></p>
 
    </form>
    </div>
    </div>
   
   </section>

    </>
  )
}

export default Login