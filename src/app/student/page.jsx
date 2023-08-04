"use client"
import { useAddStudentMutation } from '@/redux/services/student/studentApi'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const initialState={name:'',email:'',home:'',taka:''}

const page = () => {
    const thisUser = useSelector((state)=>state.authSlice.user?.name)
    const [addStudent,{isSuccess,isError}]=useAddStudentMutation();
    const[student,setStudent]=useState(initialState)
    const chang=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const click=async(e)=>{
        e.preventDefault();
        try {
            const data = {name:student.name,email:student.email,home:student.home,
                                                    taka:student.taka,author:thisUser}
             await addStudent(data)
            setStudent({name:'',email:'',home:'',taka:''})
        } catch (error) {
            console.log('add not fount',error)
        }
    }
    useEffect(()=>{
        if(isSuccess){
            toast("Success student added !")
          }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            toast("your student not added !")
        }
    },[isError])
  return (
    <div className='grid items-center justify-center h-screen'>
        <div className='bg-emerald-400 text-black p-5 rounded-md'>
            <p className='text-center text-3xl text-bold pb-4'>Add student</p>
            <p>Name : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500' 
                name="name" value={student.name} onChange={chang}/>
            <p>Email : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500'
                name="email" value={student.email} onChange={chang}/>
            <p>Home : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500' 
              name='home' value={student.home} onChange={chang}/>
            <p>Taka : </p>
            <input type="text" className='rounded-md ring-2 ring-fuchsia-500' 
                name='taka' value={student.taka} onChange={chang}/>
            <br/>
            <button className="... ring-2 ring-pink-500 ring-inset my-2 p-1 w-full rounded-md"
                onClick={click} >Student add</button>
                 <ToastContainer />
        </div>
    </div>
  )
}

export default page