import logo from './logo.svg';
import './App.css';
import Nav from "./navbar/nav";
import CreateBox from './item/item';
import { useState } from 'react';

function App(NoItem) {

  const [todo,setTodo] =useState(Array(NoItem).fill("Click Edit to mark your first task"))
  const [editInfo,setEditInfo] = useState(Array(todo.length).fill(true))

  return (
    <>
      <Nav/>
      {todo.map((item,idx)=> <CreateBox edit={editInfo[idx]} text={item} editInfo={editInfo} index={idx} setEditInfo={setEditInfo} setTodo={setTodo} todo={todo}/>)}
      <button onClick={()=>{;setTodo([...todo,"Click Edit to mark your first task"])}}>Add a new task</button>
    </>
  );
}

export default App;
