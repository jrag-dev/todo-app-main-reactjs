import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


export function useTodo () {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [])
  
  const todoLength = todos.length
	
  const createTodo = todo => {
	const newTodo = {
	  id: uuidv4(),
	  title: todo.title,
	  completed: todo.completed
	}
		
	setTodos(prevState => ([
		newTodo,
		...prevState
	]))
  }
  
  const deleteTodo = (id) => {
	const newTodos = todos.filter( item => item.id !== id)
	setTodos(newTodos)
  }
	
  const completedTodoItem = (event) => {
	const id = event.target.getAttribute('data-id')
	const newTodos = todos.map( item => item.id === id ? {...item, completed: !item.completed} : item)
	setTodos(newTodos)
  }
	
  const clearTodoCompleted = () => {
    const newTodos = todos.filter(item => !item.completed && item)
    setTodos(newTodos)
  }
  
  const updateTodoDragAndDrop = (ListTodosDrag) => {
    setTodos(ListTodosDrag)
  }
  
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return {
    todos,
    createTodo,
    deleteTodo,
    completedTodoItem,
    clearTodoCompleted,
    updateTodoDragAndDrop
  }
}