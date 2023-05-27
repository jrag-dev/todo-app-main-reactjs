import { useState } from 'react'



const initialStateFilters = {
	all: true,
	active: false,
	completed: false
}

export function useFiltersTodo () {
  	const [filters, setFilters] = useState(initialStateFilters)
	
	const filtersTodo = (option) => {
		setFilters({
			all: option.all,
			active: option.active,
			completed: option.completed
		})
	}
	
	const filteredTodos = (todos) => {
		if (filters.all) {
			return todos
		} else if (filters.completed) {
			return todos.filter( item => item.completed ? item : null)
		} else {
			return todos.filter( item => !item.completed ? item : null)
		}
	}
	
	return {
	  filters,
	  filtersTodo,
	  filteredTodos
	}
}