import { createBrowserRouter } from "react-router-dom";

import { LayoutPublic } from '../layouts/LayoutPublic'
import { HomePage } from '../pages/home/HomePage'
import { NotFound404 } from '../pages/404/NotFound404'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPublic/>,
		errorElement: <NotFound404/>,
		children: [
			{
				errorElement: <NotFound404/>,
				children: [
					{
						index: true,
						element: <HomePage/>
					},
				]
			}
		]
	}
])