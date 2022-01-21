import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 100vw;
  height: 35vh;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.itemBackground};
  padding: 2rem 0;
`

export const Title = styled.h1`
  color: ${({theme}) => theme.secondaryBackground};
  margin-bottom: 1rem;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  border-radius: 8px;
  padding: 0.7rem;
  
  color: ${({theme}) => theme.background};

  &:first-child {
    background: ${({theme}) => theme.secondaryBackground};
    box-shadow: 0 4px ${({theme}) => theme.darkSecondaryBackground};
    margin-right: 0.8rem;
  }
  &:last-child {
    background: ${({theme}) => theme.colorO};
    box-shadow: 0 4px ${({theme}) => theme.darkColorO};
  }
  
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 0.3s;
`


