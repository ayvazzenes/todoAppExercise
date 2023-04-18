import React from "react";
import AddTodo from "./AddTodo";
import List from "./List";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  
  const handleDelete = (id) => {
    setTodos(todos.filter((todo)=>id!==todo.id))
  };
  const handleComplated = (id)=>{
    
    const complateItems = todos.map((todo)=>{
      if(todo.id===id){
        return {...todo,isComplated:true}
      }
      return todo;
    })
    setTodos(complateItems)

  }

  return (
    <div className="todos-main">
      <h1>My Todos</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <List todos={todos} deleted={handleDelete} complated={handleComplated}/>
    </div>
  );
};

export default Todos;
