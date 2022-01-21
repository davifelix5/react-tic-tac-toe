import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameContainer = styled.main``

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Header.Turn = styled.div`
  background-color: ${({theme}) => theme.itemBackground};
  box-shadow: 0 3px ${({theme}) => theme.darkItemBackground};
  color: ${({theme}) => theme.secondaryBackground};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 5px;
  font-weight: bold;
  svg {
    margin-right: 0.3rem;
  }
  p {
    font-size: 0.6rem;
  }
  @media (max-width: 900px) {
    p {
      font-size: 0.8rem;
    }
  }
`

Header.BackButton = styled.button`
  background-color:  ${({theme}) => theme.secondaryBackground};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 3px ${({theme}) => theme.darkSecondaryBackground};
  svg {
    color: ${({theme}) => theme.background};
  }
  &:hover {
    box-shadow: none;
    transform: translateY(3px);
  }
  transition: all 0.3s;
`

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 5.8rem);
  grid-template-rows: repeat(3, 6rem);
  grid-gap: 2rem;
  margin: 2.2rem 0;
`

GameGrid.Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({theme, highlight, color}) => highlight ? color : theme.itemBackground};
  box-shadow: 0 5px ${({theme}) => theme.darkItemBackground};
  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }
  transition: all 0.3s;
`

export const BottomInfo = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

BottomInfo.Item = styled.li`
  background-color: ${({theme}) => theme.secondaryBackground};
  padding: 0.4rem 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.background};
  p {
    margin-bottom: 0.4rem;
  }
  span {
    font-weight: bold;
    font-size: 1.3rem;
  }

  &:first-child { background-color: ${({theme}) => theme.colorX}; }
  &:last-child { background-color: ${({theme}) => theme.colorO}; }
`
