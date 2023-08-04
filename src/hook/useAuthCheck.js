import { login } from '@/redux/services/auth/authSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const useAuthCheck = () => {
    const[authCheck,setAuthCheck]=useState(false)
    const dispatch = useDispatch();
    useEffect(()=>{
        const localAuth = localStorage.getItem('auth');
        if(localAuth){
            const auth = JSON.parse(localAuth);
            if(auth?.accessToken && auth?.user){
                dispatch(login({
                    accessToken:auth.accessToken,
                    user:auth.user
                }))
            }
        }
        setAuthCheck(true)
    },[])
    return authCheck
}

export default useAuthCheck