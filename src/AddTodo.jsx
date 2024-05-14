import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';
const AddTodo = () => {
    const [input,setInput] = useState("")

    //dispactch to send some event 
    const dispatch = useDispatch(); 
  
    const addtodoHandler=(e)=>{
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("");
    }
  return (
    <div>
      <h2>todo</h2>
      
      <form onSubmit={addtodoHandler}>
        <label htmlFor="addtodo"> Enter your Todo</label>
        
        <input type="text" name="addtodo" id="addtodo" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type="submit">Add todo </button>
      </form>
      <br />
      <hr />
    </div>
  )
}

export default AddTodo;