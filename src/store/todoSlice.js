import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:1, 
        text:"hello"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // addTodo:()=>{},
        // removeTodo:()=>{}
        addTodo:(state,action)=>{
            const newtodo = {
                id:nanoid(),
                text:action.payload      //=   text:action.payload.text payload object h  
            }
            state.todos.push(newtodo);
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((item)=>item.id!== action.payload)
        }
    }
})
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer