

export function TodoItemComponent ({ todo, deleteTodo, completedTodoItem}) {
  
  return (
    <div className="todo-item">
      <div className={`checkbox-container ${todo.completed ? 'checkbox-completed' : 'checkbox-none'}`}>
	    <input type="checkbox" className='checkbox' onClick={() => console.log('click en ckeckbox')} data-id={todo.id} onClick={completedTodoItem}/>
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