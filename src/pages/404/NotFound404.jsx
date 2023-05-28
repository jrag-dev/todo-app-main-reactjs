import { useRouteError, Link } from "react-router-dom";

import './NotFound404.scss'


export function NotFound404 () {
	const error = useRouteError();
	
	console.log(error)
	
	return (
    	<div className="error-page">
      		<div className="error-container">
      			<h1>Oops!</h1>
      			<p>Sorry, an unexpected error has occurred.</p>
      			<p>
        			<i>{error.statusText || error.message}</i>
      			</p>
      			<Link to="/">Back to Home</Link>
      		</div>
    	</div>
	)
}