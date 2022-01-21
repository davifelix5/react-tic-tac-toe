import React, { useContext } from 'react'
import Modal from 'react-modal'

import { 
  ModalContent, 
  ModalOverlay,
  ButtonContainer,
  Button,
  Title
} from './styles'

export function ConfirmModal() {

  return (
    <Modal 
      isOpen={true}
      overlayElement={(props, contentElement) => <ModalOverlay>{contentElement}</ModalOverlay>}
      contentElement={(props, children) => <ModalContent>{children}</ModalContent>}
    >
      <Title>Restar Game?</Title>
      <ButtonContainer>
        <Button>No, cancel</Button>
        <Button>Yes, restart</Button>
      </ButtonContainer>
    </Modal>
  )
}