import { configureStore } from '@reduxjs/toolkit'
import { studentapi } from './services/student/studentApi'
import authSlice from './services/auth/authSlice'

export const store = configureStore({
  reducer: {
    [studentapi.reducerPath]:studentapi.reducer,
    authSlice:authSlice
  },
  middleware:(myMiddleware)=>
  myMiddleware().concat(studentapi.middleware)
})