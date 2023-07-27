"use client"
import { useRouter } from 'next/navigation'
import { useSignupMutation } from '@/redux/services/auth/signup';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
const initialState={name:'',email:'',phone:'',password:''}

const page = () => {
    const router = useRouter()
    const[signup,{isSuccess,isError}]=useSignupMutation();
    const[student,setStudent]=useState(initialState)
    const chang=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const click=async(e)=>{
        e.preventDefault();
        try {
            await signup(student)
            setStudent({name:'',email:'',phone:'',password:''})
        } catch (error) {
            console.log('add not fount',error)
        }
    }
    useEffect(()=>{
        if(isSuccess){
           router.push('/signIn')
          }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            toast("your signUp not success !")
        }
    },[isError])
  return (
    <div className='grid items-center justify-center h-screen'>
        <div className='bg-emerald-400 text-black p-5 rounded-md'>
            <p className='text-center text-3xl text-bold pb-4'>Sign Up Here</p>
            <p>Name : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500' 
                name="name" value={student.name} onChange={chang}/>
            <p>Email : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500'
                name="email" value={student.email} onChange={chang}/>
            <p>Phone : </p>
            <input type="number" className='rounded-md ring-2 ring-fuchsia-500' 
              name='phone' value={student.phone} onChange={chang}/>
            <p>Password : </p>
            <input type="password" className='rounded-md ring-2 ring-fuchsia-500' 
                name='password' value={student.password} onChange={chang}/>
            <br/>
            <button className="... ring-2 ring-pink-500 ring-inset my-2 p-1 w-full rounded-md"
                onClick={click} >Sign Up</button>
                 <ToastContainer />
                 <p>Already have account? <Link href='/signIn'>Sign In</Link></p>
        </div>
    </div>
  )
}

export default page