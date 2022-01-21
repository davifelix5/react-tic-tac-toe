import React, { useContext, useState } from 'react'
import {  FaDotCircle, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { Logo } from '../../components/Logo'

import { GameContext } from '../../contexts/GameContext'

import {
  Container,
  FormContainer,
  FormFieldset,
  Button,
  Main,
  RadioControl,
  RadioLabel,
  RadiosContainer
} from './styles'

export function Home() {

  const {
    setFirstPlayer, setPlayMode
  } = useContext(GameContext)

  const [mode, setMode] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const { player } = Object.fromEntries(formData.entries())
    console.log(mode)
    setFirstPlayer(player)
    setPlayMode(mode)
    navigate('/game')
  }


  return (
    <Container>
      <Main>
        <Logo size={30} />
        <FormContainer onSubmit={handleSubmit}>
          <FormFieldset>
            <p>Pick Player 1's mark</p>
            <RadiosContainer>
              <RadioControl>
                <input type="radio" value="X" name="player" id="X" defaultChecked />
                <RadioLabel htmlFor="X">
                  <FaTimes size={30} />
                </RadioLabel>
              </RadioControl>
              <RadioControl>
                <input type="radio" value="O" name="player" id="O" />
                <RadioLabel htmlFor="O">
                  <FaDotCircle size={25} />
                </RadioLabel>
              </RadioControl>
            </RadiosContainer>
            <p>Remember X goes first</p>
          </FormFieldset>
          <div>
            <Button onClick={() => setMode('player')} type="submit">New game against player</Button>
            <Button onClick={() => setMode('CPU')} type="submit">New game against CPU</Button>
          </div>
        </FormContainer>
      </Main>
    </Container>
  )
}