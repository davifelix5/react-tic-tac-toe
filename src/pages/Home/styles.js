import styled from 'styled-components'



export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 30vw;
  margin-top: 1rem;
  @media (max-width: 900px) {
    width: 60vw;
  }
`

export const FormFieldset = styled.fieldset`
  padding: 1rem;
  background-color: ${({theme}) => theme.itemBackground};
  box-shadow: 0 5px ${({theme}) => theme.darkItemBackground};
  border-radius: 16px;
  border: none;
  margin-bottom: 1.3rem;
  p {
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
  }  
  p:first-child {
    color: ${({theme}) => theme.secondaryBackground};
  }
  p:last-child {
    font-size: 0.7rem;
    font-weight: bold;
    color: ${({theme}) => theme.darkSecondaryBackground};
  }
`

export const RadiosContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  background-color: ${({theme}) => theme.darkItemBackground};
  border-radius: 0.5rem;
`

export const RadioControl = styled.div`
  width: 50%;
  
  input {
    display: none
  }
  `

export const RadioLabel = styled.label`
  cursor: pointer;

  width: 100%;
  height: 100%;
  display: block;

  padding: 0.3rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.secondaryBackground};

  input:checked + svg {
    color: red;
  }

  input:checked + & {
    background-color: ${({theme}) => theme.secondaryBackground};
    color: ${({theme}) => theme.background};
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${({theme}) => theme.darkText};
  & + & {
    margin-top: 1rem;
  }
  &:first-child {
    background-color: ${({theme}) => theme.colorO};
    border-bottom: 1px solid ${({theme}) => theme.darkColorO};
    box-shadow: 0 3px ${({theme}) => theme.darkColorO};
  }
  &:last-child {
    background-color: ${({theme}) => theme.colorX};
    border-bottom: 1px solid ${({theme}) => theme.darkColorX};
    box-shadow: 0 3px ${({theme}) => theme.darkColorX};
  }
  &:hover {
    box-shadow: none;
    transform: translateY(3px);
  }
  transition: all 0.1s
`

