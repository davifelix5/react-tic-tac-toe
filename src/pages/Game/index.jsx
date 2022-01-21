import React, { useContext, useEffect } from 'react'

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
import { GameContext } from '../../contexts/GameContext'

export function Game() {

  const {
    plays, points, currentPlayer,
    handlePlay, resetGame
  } = useContext(GameContext) 
  

  function handleRestart() {
    if (!window.confirm('Deseja mesmo acabar o jogo?')) return
    resetGame()
  }

  useEffect(resetGame, [])

  const {
    secondaryBackground,
  } = useContext(ThemeContext)

  return (
    <Container>
      <GameContainer>
        <Header>
          <Logo size={30} />
          <Header.Turn>
              <Play type={currentPlayer} size={20} color={secondaryBackground} /> <p>turn</p>
          </Header.Turn>
          <Header.BackButton onClick={handleRestart}>
            <FaUndo size={19} />
          </Header.BackButton>
        </Header>
        <GameGrid>
          {plays.map((play, index) => (
              <GameGrid.Item key={`${index}_${play}`} onClick={() => handlePlay(index)}>
                <Play size={60} type={play} />
              </GameGrid.Item>
          ))}
        </GameGrid>
        <BottomInfo>
          <BottomInfo.Item>
            <p><FaTimes size={20} /></p>
            <span>{points['X']}</span>
          </BottomInfo.Item>
          <BottomInfo.Item>
            <p>Ties</p>
            <span>{points.ties}</span>
          </BottomInfo.Item>
          <BottomInfo.Item>
            <p><FaDotCircle size={18} /></p>
            <span>{points['O']}</span>
          </BottomInfo.Item>
        </BottomInfo>
      </GameContainer>
    </Container>
  )
}