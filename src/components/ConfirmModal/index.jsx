import React, { useContext } from 'react'
import Modal from 'react-modal'

import { 
  ModalContent, 
  ModalOverlay,
  ButtonContainer,
  Button,
  Title
} from './styles'

export function ConfirmModal({ show, onClose, onConfirm }) {

  function acceptModal() {
    onClose()
    onConfirm()
  }

  return (
    <Modal 
      isOpen={show}
      overlayElement={(props, contentElement) => <ModalOverlay>{contentElement}</ModalOverlay>}
      contentElement={(props, children) => <ModalContent>{children}</ModalContent>}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <Title>Restar Game?</Title>
      <ButtonContainer>
        <Button onClick={onClose}>No, cancel</Button>
        <Button onClick={acceptModal}>Yes, restart</Button>
      </ButtonContainer>
    </Modal>
  )
}