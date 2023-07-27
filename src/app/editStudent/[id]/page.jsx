"use client"
import React, { useEffect, useState } from 'react'
const initialState={name:'',email:'',home:'',taka:''}
import { useParams } from 'next/navigation'
import { useGetOneStudentQuery, useUpdateStudentMutation } from '@/redux/services/student/studentApi'
const page = () => {
    const {id}= useParams();
    const {data,isLoading,isError} = useGetOneStudentQuery(id)
    const [updatedata] = useUpdateStudentMutation();
    const[student,setStudent]=useState(initialState)
    const chang=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    useEffect(() => {
        if (data) {
          setStudent({name:data.singaldata.name,email:data.singaldata.email,home:data.singaldata.home,taka:data.singaldata.taka,})
        } else {
          setStudent({ name: '', email: '',home:'',taka:'' });
        }
      }, [data]);
    const click=async(e)=>{
        e.preventDefault();
        try {
          const mydata = await updatedata({id,student})
          console.log(mydata)
        } catch (error) {
            console.log('add not fount',error)
        }
    }
  return (
    <div className='grid items-center justify-center h-screen'>
        <div className='bg-emerald-400 text-black p-5 rounded-md'>
            <p className='text-center text-3xl text-bold pb-4'>Edit student</p>
            {isLoading && <p className='text-center'>loading....</p>}
            {isError && <p>something wrong</p>}
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
                onClick={click} >Student Update</button>
        </div>
    </div>
  )
}

export default page