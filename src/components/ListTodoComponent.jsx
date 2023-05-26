import { TodoItemComponent } from './TodoItemComponent'

export function ListTodoComponent ({ todos, deleteTodo, completedTodoItem }) {
  
  return (
    <div className="todo-list">
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