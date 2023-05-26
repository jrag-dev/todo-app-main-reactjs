import { Outlet } from 'react-router-dom';


export function LayoutPublic () {
	
	return (
		<main className="main">
			<div className="bg-image"></div>
			<Outlet/>
		</main>
	)
}