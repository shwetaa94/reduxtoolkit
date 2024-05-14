import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './store/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <AddTodo />
      <br />
      <br />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
