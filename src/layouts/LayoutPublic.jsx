import { Outlet } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function LayoutPublic () {
	const { theme } = useContext(ThemeContext)
	
	return (
		<main className={`main ${!theme ? 'dark' : 'light'}`}>
			<div className="bg-image"></div>
			<Outlet/>
		</main>
	)
}