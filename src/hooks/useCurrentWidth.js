import { useState, useEffect } from 'react'


export function useCurrentWidth () {
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    let timeoutId = null
    
    const resizeListener = () => {
      // prevenir la ejecucion del setTimeout previo
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150)
    }
    
    window.addEventListener('resize', resizeListener)
    
    // limpiamos los eventos
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  
  return {
    width
  }
}