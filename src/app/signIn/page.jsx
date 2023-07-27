"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { useSigninMutation } from '@/redux/services/auth/signup';
const initialState={email:'',password:''}

const page = () => {
    const router = useRouter()
    const[signin,{isSuccess,isError}]=useSigninMutation();
    const[student,setStudent]=useState(initialState)
    const chang=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const click=async(e)=>{
        e.preventDefault();
        try {
            await signin(student)
            setStudent({email:'',password:''})
        } catch (error) {
            console.log('add not fount',error)
        }
    }
    useEffect(()=>{
        if(isSuccess){
           router.push('/')
          }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            toast("your signIn not success !")
        }
    },[isError])
  return (
    <div className='grid items-center justify-center h-screen'>
        <div className='bg-fuchsia-200 text-black p-5 rounded-md'>
            <p className='text-center text-3xl text-bold pb-4'>Interested to join?</p>
            <p>Email : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500'
                name="email" value={student.email} onChange={chang}/>
            <p>Password : </p>
            <input type="password" className='rounded-md ring-2 ring-fuchsia-500' 
                name='password' value={student.password} onChange={chang}/>
            <br/>
            <button className="... ring-2 ring-pink-500 ring-inset my-2 p-1 w-full rounded-md"
                onClick={click} >Sign In</button>
                 <ToastContainer />
                 <p>Don’t have account?<Link href='/signIn'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default page