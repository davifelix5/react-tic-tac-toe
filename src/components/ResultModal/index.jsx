import React, { useContext } from 'react'
import Modal from 'react-modal'

import {
  ButtonContainer,
  Button,
  Subtitle,
  Title
} from './styles'

import { FaTimes, FaDotCircle } from 'react-icons/fa'

import { ThemeContext } from 'styled-components'

export function ResultModal({isOpen, winner, onQuit, onNextRound}) {

  const {
    colorX,
    darkColorX,
    secondaryBackground,
    darkSecondaryBackground,
    colorO,
    darkColorO,
    itemBackground
  } = useContext(ThemeContext)

  const mainColor = winner === 'X' ? colorX : colorO
  const buttonColor = winner === 'O' ? colorX : colorO
  const darkColor = winner === 'O' ? darkColorX : darkColorO
  const Icon = winner === 'X' ? FaTimes : FaDotCircle

  // Custom styles for modal
  const overlay = {
    'width': '100vw',
    'height': '100vh',
    'background-color': 'rgba(0, 0, 0, .3)',

    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  }

  const content = {
    'position': 'static',
    'border': 'none',

    'width': '100vw',
    'text-transform': 'uppercase',

    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',

    'background-color': itemBackground,
    'padding': '2rem 0',
  }

  return (
    <Modal 
      isOpen={isOpen}
      style={{content, overlay}}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onNextRound}
    >
      <Subtitle color={winner ? secondaryBackground: colorX}>Game Over</Subtitle>
      {winner ? (
        <Title color={mainColor}><Icon size={50} /> <span>takes the round</span></Title>
      ) : (
        <Title color={secondaryBackground}>It was a tie!</Title>
      )}
      <ButtonContainer>
        <Button onClick={onQuit} color={secondaryBackground} darkColor={darkSecondaryBackground}>Quit</Button>
        <Button onClick={onNextRound} color={buttonColor} darkColor={darkColor}>Next Round</Button>
      </ButtonContainer>
    </Modal>
  )
}