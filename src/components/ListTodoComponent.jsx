import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TodoItemComponent } from './TodoItemComponent'
import { useTodo } from '../hooks/useTodo'

export function ListTodoComponent ({ todos, deleteTodo, completedTodoItem, handleDragStart, handleDragEnter }) {
  const { theme } = useContext(ThemeContext)
  const { updateTodoDragAndDrop } = useTodo()
  
  return (
    <div className={`todo-list ${!theme ? 'dark' : 'light'}`}>
      {
        todos.map( (todo, index) => (
          <TodoItemComponent
            key={todo.id}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            completedTodoItem={completedTodoItem}
		    handleDragStart={handleDragStart}
		    handleDragEnter={handleDragEnter}
          />
        ))
      }
	</div>
  )
}