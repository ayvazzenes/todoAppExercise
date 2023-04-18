import React from 'react'



const ShowList = ({todo,deleted,complated}) => {
  
  
  const deleteTodo = ()=>{
    deleted(todo.id)
  }
  const completedTodo = ()=>{
    
    complated(todo.id)
  }
  
  return (
    <div className='listItems'>
     <div className='listItems_top'>
     <input onChange={completedTodo} checked={todo.isComplated} type="checkbox" />
      <p>{todo.form}</p>
     </div>
      <div className='listItems_bottom'>
      <span onClick={deleteTodo}>x</span>
      </div>
      
    </div>
  )
}

export default ShowList