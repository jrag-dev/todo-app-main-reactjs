import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import { TodoItemComponent } from './TodoItemComponent'

export function ListTodoComponent ({ todos, deleteTodo, completedTodoItem }) {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={`todo-list ${!theme ? 'dark' : 'light'}`}>
      {
        todos.map( todo => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completedTodoItem={completedTodoItem}
          />
        ))
      }
	</div>
  )
}