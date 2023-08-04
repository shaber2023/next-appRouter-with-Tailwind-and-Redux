"use client"
import useAuthCheck from '@/hook/useAuthCheck'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const authCheck = useAuthCheck();
  return !authCheck ? <div>checking auth shaber</div>:
    <div>
           <div className='grid grid-cols-2 p-4 bg-sky-700'>
        <div>
            <p>NEXT WITH REDUX RTK QUERY</p>
        </div>
        <div className='flex justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/student'>Student</Link>
        <Link href='/signIn'>Sign In</Link>
        </div>
    </div>
    </div>
  
}

export default Header