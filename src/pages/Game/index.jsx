import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { ConfirmModal } from '../../components/ConfirmModal'
import { ResultModal } from '../../components/ResultModal'

export function Game() {

  const {
    plays, points, currentPlayer, winningIndexes,
    handlePlay, resetGame, winner, gameFinished,
    resetRound
  } = useContext(GameContext) 
  
  const [confirmig, setConfirming] = useState(false)

  const navigate = useNavigate()

  function handleRestart() {
    setConfirming(true)
  }

  useEffect(resetGame, [])

  const {
    secondaryBackground,
    darkColorO,
    darkColorX,
    itemBackground
  } = useContext(ThemeContext)

  return (
    <Container>
      <ConfirmModal 
        show={confirmig} 
        onClose={() => setConfirming(false)} 
        onConfirm={resetRound}
      />
      <ResultModal
        isOpen={gameFinished} 
        winner={winner}
        onQuit={() => navigate("/")}
        onNextRound={resetRound}
      />
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
          {plays.map((play, index) => {
              const highlight = winningIndexes.includes(index)
              return (
                <GameGrid.Item 
                  highlight={highlight} 
                  color={play === 'X' ? darkColorX : darkColorO}
                  key={`${index}_${play}`} 
                  onClick={() => handlePlay(index)}
                >
                  <Play size={60} type={play} color={highlight ? itemBackground : ''} />
                </GameGrid.Item>
              )
          })}
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