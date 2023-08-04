import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const myapi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000',
    prepareHeaders:(headers,{getState,endpoint})=>{
        const token = getState()?.authSlice?.accessToken
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }
    }
}),
    tagTypes:['student'],
    endpoints:(builder)=>({})
})