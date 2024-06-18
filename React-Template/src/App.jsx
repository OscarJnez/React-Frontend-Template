import { RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'
import router from './router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainContext } from './contexts/mainContext'
import { checkTokenExpiration } from './auxStr/auxStructures'
import { mainTheme } from './themes/mainTheme'
import { darkTheme } from './themes/darkTheme'
import './App.css'

function App() {

  // Consejos para la siguiente App: usar más el CONTEXTO, para evitar useEffects iguales en distintas páginas. 

  // Aqui definimos las variables que contendrá nuestro contexto. 

  const [mainData, setMainData] = useState({

  })

  const data = { mainData, setMainData }

  // esta función nos chequea si el token ha expirado, si se cumple 1 hora desde el logIn
  // hace delete del token de localStorage

  useEffect(() => {
    checkTokenExpiration()
  }, [])

  return (
    <>
      <ThemeProvider theme={mainData.themeMode}>
        <CssBaseline />
        <mainContext.Provider value={data}>
          <RouterProvider router={router} />
        </mainContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
