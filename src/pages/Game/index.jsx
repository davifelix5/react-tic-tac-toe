import React, { useContext } from 'react'

import {
  Container,
  GameContainer,
  Header,
  GameGrid,
  BottomInfo,
} from './styles'

import { Logo } from '../../components/Logo'
import { Play } from '../../components/Play'

import { FaDotCircle, FaTimes, FaUndo } from 'react-icons/fa'

import { ThemeContext } from 'styled-components'

export function Game() {

  const {
    secondaryBackground,
  } = useContext(ThemeContext)

  return (
    <Container>
      <GameContainer>
        <Header>
          <Logo size={30} />
          <Header.Turn>
              <Play type="X" size={20} color={secondaryBackground} /> <p>turn</p>
          </Header.Turn>
          <Header.BackButton>
            <FaUndo size={19} />
          </Header.BackButton>
        </Header>
        <GameGrid>
          {[...new Array(9)].map((_, index) => (
              <GameGrid.Item>
                <Play size={60} type={index % 2 === 0 ? 'X' : 'O'} />
              </GameGrid.Item>
          ))}
        </GameGrid>
        <BottomInfo>
          <BottomInfo.Item>
            <p><FaTimes size={20} /></p>
            <span>00</span>
          </BottomInfo.Item>
          <BottomInfo.Item>
            <p>Ties</p>
            <span>00</span>
          </BottomInfo.Item>
          <BottomInfo.Item>
            <p><FaDotCircle size={18} /></p>
            <span>00</span>
          </BottomInfo.Item>
        </BottomInfo>
      </GameContainer>
    </Container>
  )
}