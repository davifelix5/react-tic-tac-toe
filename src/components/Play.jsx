import React, { useContext } from 'react'

import { FaDotCircle, FaTimes } from 'react-icons/fa'

import { ThemeContext } from 'styled-components'

export function Play({ size, type, color }) {
  
  const {
    colorO,
    colorX
  }  = useContext(ThemeContext)

  return (
    <>
      {type === 'X' && <FaTimes size={size} color={color || colorX} />}
      {type === 'O' && <FaDotCircle size={size} color={color || colorO} />}
    </>
  )
}