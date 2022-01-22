import styled from 'styled-components'

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


