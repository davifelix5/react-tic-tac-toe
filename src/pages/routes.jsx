import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { Game } from './Game'

export function Router() {
  return (
    <Routes>
      <Route path="/" name="Home" element={<Home />} />
      <Route path="/game" name="Game" element={<Game />} />
    </Routes>
  )
}