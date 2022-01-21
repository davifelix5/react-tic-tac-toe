import React from 'react'

import { Play } from '../Play'

import { Container } from './styles'

import {

} from './styles'

export function Logo( { size } ) {
  return (
    <Container>
      <Play type='X' size={size} />
      <Play type='O' size={size} />
    </Container>
  )
}