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

export function ResultModal() {

  const winner = 'O'

  const {
    colorX,
    darkColorX,
    secondaryBackground,
    darkSecondaryBackground,
    colorO,
    darkColorO
  } = useContext(ThemeContext)

  const mainColor = winner === 'X' ? colorX : colorO
  const buttonColor = winner === 'X' ? colorO : colorX
  const darkColor = winner === 'X' ? darkColorO : darkColorX
  const Icon = winner === 'X' ? FaTimes : FaDotCircle

  return (
    <Modal 
      isOpen={true}
      overlayElement={(props, contentElement) => <ModalOverlay>{contentElement}</ModalOverlay>}
      contentElement={(props, children) => <ModalContent>{children}</ModalContent>}
    >
      <Subtitle>You won</Subtitle>
      <Title color={mainColor}><Icon size={50} /> <span>takes the round</span></Title>
      <ButtonContainer>
        <Button color={secondaryBackground} darkColor={darkSecondaryBackground}>Quit</Button>
        <Button color={buttonColor} darkColor={darkColor}>Next Round</Button>
      </ButtonContainer>
    </Modal>
  )
}