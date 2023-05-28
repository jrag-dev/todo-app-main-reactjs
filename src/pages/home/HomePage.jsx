import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { HeaderComponent } from '../../components/HeaderComponent'
import { FormComponent } from '../../components/FormComponent'
import { ListTodoComponent } from '../../components/ListTodoComponent'
import { useFiltersTodo } from '../../hooks/useFiltersTodo'
import { useTodo } from '../../hooks/useTodo'
import { useCurrentWidth } from '../../hooks/useCurrentWidth'

import './HomePage.scss';

export function HomePage () {
	const { filters, filtersTodo, filteredTodos } = useFiltersTodo()
	const { todos, createTodo, deleteTodo, completedTodoItem, clearTodoCompleted, updateTodoDragAndDrop } = useTodo()
	const { width } = useCurrentWidth()
	const { theme } = useContext(ThemeContext)
	const [dragTodo, setDragTodo] = useState()
	
	const breakPoints = {
		mobile: 768,
		table: 998
	}
	const todoLength = todos.length
	const filterTodo = filteredTodos(todos)
	
	const handleDragStart = (index) => {
		setDragTodo(index)
	}
	
	const handleDragEnter = (event, index) => {
		const newTodos = [...todos]
		const item = newTodos[dragTodo]
		newTodos.splice(dragTodo, 1)
		newTodos.splice(index, 0, item)
		setDragTodo(index)
		updateTodoDragAndDrop(newTodos)
	}
	

	return (
		<section className="todo">
			<HeaderComponent/>
			<article className="todo-container">
				<FormComponent
					createTodo={createTodo}
				/>
				<ListTodoComponent
					todos={filterTodo}
					deleteTodo={deleteTodo}
					completedTodoItem={completedTodoItem}
					handleDragStart={handleDragStart}
					handleDragEnter={handleDragEnter}
				/>
				
				{
					width <= breakPoints.mobile ? (
					<>
						<div className={`todo-clear ${!theme ? 'dark' : 'light'}`}>
							<p>{todoLength} items left</p>
							<button
								onClick={() => clearTodoCompleted}
							>Clear Completed</button>
						</div>
						<div className={`todo-actions ${!theme ? 'dark' : 'light'}`}>
							<button onClick={() => filtersTodo({ all: true, active: false, completed: false})}>All</button>
							<button onClick={() => filtersTodo({ all: false, active: true, completed: false})}>Active</button>
							<button onClick={() => filtersTodo({ all: false, active: false, completed: true})}>Completed</button>
						</div>
					</>	
					) : (
						<div className={`todo-actions-all ${!theme ? 'dark' : 'light'}`}>
							<p>{todoLength} items left</p>
							<div className={`todo-actions-filters ${!theme ? 'dark' : 'light'}`}>
								<button className={`${filters.all ? 'active' : ''}`} onClick={() => filtersTodo({ all: true, active: false, completed: false})}>All</button>
								<button className={`${filters.active ? 'active' : ''}`} onClick={() => filtersTodo({ all: false, active: true, completed: false})}>Active</button>
								<button className={`${filters.completed ? 'active' : ''}`} onClick={() => filtersTodo({ all: false, active: false, completed: true})}>Completed</button>
							</div>
							<button
								onClick={clearTodoCompleted}
							>Clear Completed</button>
						</div>
					)
				}
			</article>
			
			<p className="message-drag-drop">Drag and drop to recorder list</p>
		</section>
	)
}