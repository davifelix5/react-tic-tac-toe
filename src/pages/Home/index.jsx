import React, { useContext } from 'react'
import {  FaDotCircle, FaTimes } from 'react-icons/fa'

import { Logo } from '../../components/Logo'

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

  return (
    <Container>
      <Main>
        <Logo size={30} />
        <FormContainer>
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
            <Button type="submit">New game against player</Button>
            <Button type="submit">New game against CPU</Button>
          </div>
        </FormContainer>
      </Main>
    </Container>
  )
}