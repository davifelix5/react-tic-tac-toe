import React, { useContext } from 'react'
import Modal from 'react-modal'

import { 
  ModalContent, 
  ModalOverlay,
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
    darkColorO
  } = useContext(ThemeContext)

  const mainColor = winner === 'X' ? colorX : colorO
  const buttonColor = winner === 'O' ? colorX : colorO
  const darkColor = winner === 'O' ? darkColorX : darkColorO
  const Icon = winner === 'X' ? FaTimes : FaDotCircle
  return (
    <Modal 
      isOpen={isOpen}
      overlayElement={(props, contentElement) => <ModalOverlay>{contentElement}</ModalOverlay>}
      contentElement={(props, children) => <ModalContent>{children}</ModalContent>}
      ariaHideApp={false}
      onRequestClose={onQuit}
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