import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const initialStateTodo = {
  id: null,
  title: '',
  completed: false
}

export function FormComponent ({ createTodo }) {
  const [formTodo, setFormTodo] = useState(initialStateTodo)
  const { theme } = useContext(ThemeContext)
  
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
      className={`todo-container-input ${!theme ? 'dark' : 'light'}`}
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