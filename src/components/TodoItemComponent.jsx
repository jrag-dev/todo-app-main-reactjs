import { useRef } from 'react'


export function TodoItemComponent ({ index, todo, deleteTodo, completedTodoItem, handleDragStart, handleDragEnter }) {
  
  return (
    <div 
      className="todo-item" 
      draggable
      onDragStart={() => handleDragStart(index)}
      onDragEnter={(event) => handleDragEnter(event, index)}
    >
      <div className={`checkbox-container ${todo.completed ? 'checkbox-completed' : 'checkbox-none'}`}>
	    <input type="checkbox" className='checkbox' data-id={todo.id} onClick={(event) => completedTodoItem(event)}/>
      </div>
      <div className="todo-content">
		<p className={`${todo.completed ? 'todo-completed' : ''}`}>{todo.title}</p>
	  <button onClick={() => deleteTodo(todo.id)}>
	    <img src="images/icon-cross.svg" alt="delete todo icon"/>
	  </button>
	</div>
    </div>
  )
}