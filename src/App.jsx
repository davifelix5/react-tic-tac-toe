import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './pages/routes'

import { theme } from './themes/main'

import './global.css'
import { GameContextProvider } from './contexts/GameContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GameContextProvider>
          <Router />
        </GameContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
