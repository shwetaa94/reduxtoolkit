import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

// add all reducers here

export  const store = configureStore({
    reducer: todoReducer
})
