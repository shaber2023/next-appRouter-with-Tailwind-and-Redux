import { myapi } from "@/redux/api/api";
import { login } from "./authSlice";

export const registration = myapi.injectEndpoints({
    endpoints:(builder)=>({
        signup:builder.mutation({
            query:(data)=>({
                url:'api/registration',
                method:'POST',
                body:data
            })
        }),
        signin:builder.mutation({
            query:(data)=>({
                url:'api/login',
                method:'POST',
                body:data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                    try {
                        const result = await queryFulfilled;
                       localStorage.setItem('auth',JSON.stringify({
                        accessToken:result.data.token,
                        user:result.data.user
                       }));
                       dispatch(login({
                        accessToken:result.data.token,
                        user:result.data.user
                       }))
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

export const {useSignupMutation,useSigninMutation}=registration