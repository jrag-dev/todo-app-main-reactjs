import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const HeaderComponent = () => {
  
  const { theme, changeTheme } = useContext(ThemeContext)
    
  return (
     <header className="todo-header">
		<h1>TODO</h1>
		<button onClick={changeTheme}>
		{
		  theme ? (
		    <img src="images/icon-moon.svg" alt="dark theme icon"/>
		  ) : (
		    <img src="images/icon-sun.svg" alt="ligth theme icon"/>
		  )
		}
      </button>
    </header>
  )
}