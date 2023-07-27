import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const myapi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    tagTypes:['student'],
    endpoints:(builder)=>({})
})