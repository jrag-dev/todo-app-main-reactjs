import { useState, createContext } from 'react';


export const ThemeContext = createContext()

const initialThemeState = false

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(initialThemeState)
  
  const changeTheme = (event) => {
    setTheme(!theme)
  }
  
  const data = {
    theme: theme,
    changeTheme
  }
  
  return (
    <ThemeContext.Provider value={data}>
      { children }
    </ThemeContext.Provider>
  )
}