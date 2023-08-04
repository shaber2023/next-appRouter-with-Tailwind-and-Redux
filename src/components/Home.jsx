"use client"
import { useDeleteStudentMutation, useGetStudentQuery } from '@/redux/services/student/studentApi'
import Link from 'next/link';
import { HashLoader } from 'react-spinners';

const Home = () => {
  
  const[deleteStudent]=useDeleteStudentMutation();
  const {data,isLoading,isError} = useGetStudentQuery();
  const studentDelete=async(id)=>{
    try {
      await deleteStudent(id)
    } catch (error) {
      console.log('delete student error',error )
    }
  }
  return (
    <div>
        {/* {isLoading && <p className='grid items-center justify-center h-screen'>loading...</p>}  */}
        {isLoading ?  <div  className='grid items-center justify-center h-screen'>
        <HashLoader loading={isLoading} color={'red'} size={100}/>
        </div>
       : 
       
        <section className='grid grid-cols-3 bg-black p-2'>
            {data?.fulldata?.map((info)=>(
                <article key={info._id} className='bg-white text-black text-center m-2 p-2 rounded-md'>
                    <p>Name : {info.name}</p>
                    <p>Email : {info.email}</p>
                    <p>Home : {info.home}</p>
                    <p> Author : {info.author}</p>
                    <button className='bg-green-400 p-2 m-2 rounded-md'><Link href={`/editStudent/${info._id}`}>
                    Edit Student
                    </Link></button>
                    <button className='bg-red-900 text-white p-2 m-2 rounded-md' 
                                      onClick={()=>studentDelete(info._id)}>Student Delete</button>
                </article>
            ))}     
        </section>  
        } 
        {isError && <p>something wrong</p>}                                                                                                  
    </div>
  )
}

export default Home