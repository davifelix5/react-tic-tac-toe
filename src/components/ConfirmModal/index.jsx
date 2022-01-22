import React, { useContext } from 'react'
import Modal from 'react-modal'

import { ThemeContext } from 'styled-components'

import { 
  ButtonContainer,
  Button,
  Title
} from './styles'

export function ConfirmModal({ show, onClose, onConfirm }) {

  function acceptModal() {
    onClose()
    onConfirm()
  }

  const {
    itemBackground
  } = useContext(ThemeContext)

  // Custom styles for modal
  const overlay = {
    'width': '100vw',
    'height': '100vh',
    'background-color': 'rgba(0, 0, 0, .3)',

    'display': 'flex',
    'align-items': 'flex-end',
    'justify-content': 'center',
  }

  const content = {
    'position': 'static',
    'border': 'none',

    'width': '100vw',
    'height': '35vh',
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
      isOpen={show}
      style={{content, overlay}}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <Title>Restart Round?</Title>
      <ButtonContainer>
        <Button onClick={onClose}>No, cancel</Button>
        <Button onClick={acceptModal}>Yes, restart</Button>
      </ButtonContainer>
    </Modal>
  )
}