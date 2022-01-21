import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 100vw;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.itemBackground};
  padding: 2rem 0;
`

export const Subtitle = styled.h2`
  color: ${({theme}) => theme.secondaryBackground};
  font-size: 0.8rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
` 

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  margin: 0.2rem 0 1rem;
  svg {
    margin-right: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  border-radius: 8px;
  padding: 0.7rem;
  box-shadow: 0 4px ${props => props.darkColor};
  background: ${props => props.color};
  color: ${({theme}) => theme.background};
  &:first-child {
    margin-right: 0.8rem;
  }
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 0.3s;
`


