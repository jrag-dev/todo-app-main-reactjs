import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

import { router } from './router'
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>,
)
