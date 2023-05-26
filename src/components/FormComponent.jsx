import { useState } from 'react'


const initialStateTodo = {
  id: null,
  title: '',
  completed: false
}

export function FormComponent ({ createTodo }) {
  const [formTodo, setFormTodo] = useState(initialStateTodo)
  
  const handleChangeFormtodo = (event) => {
    setFormTodo({
      ...formTodo,
      title: event.target.value
    })
  }
  
  const handleSubmitFormTodo = (event) => {
    event.preventDefault()
    
    if (formTodo.title === '') return 
    
    createTodo(formTodo)
    
    setFormTodo(initialStateTodo)
  }
  
  return (
    <form 
      className="todo-container-input"
      onSubmit={handleSubmitFormTodo}
    >
      <div className="checkbox-container">
	   <input type="checkbox" className="checkbox"/>
      </div>
	  <input
        name="todo"
	    type="text"
	    id="title"
	    placeholder="Create a new todo..."
	    onChange={handleChangeFormtodo}
	    value={formTodo.title}
	  />	
	</form>
  )
}