import React, { useCallback, useContext, useEffect, useState } from 'react'
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

export function Game() {
  const initialPlays = [...new Array(9)].map(() => '')

  const [plays, setPlays] = useState(initialPlays)
  const [points, setPoints] = useState({'X': 0, 'O': 0, ties: 0})
  const [firstPlayer, setFirstPlayer] = useState('X')
  const [currentPlayer, setCurrentPlayer] = useState(firstPlayer)

  const navigate = useNavigate()

  function handleNavigateHome() {
    if (!window.confirm('Deseja mesmo acabar o jogo?')) return
    navigate('/')
  }

  function handlePlay(position) {
    setPlays(plays => plays.map((play, index) => index === position ? currentPlayer : play))
    setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
  }

  function verifyWinner() {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const position of winningPositions) {
      const [a, b, c] = position
      if (plays[a] === plays[b] && plays[b] === plays[c] && plays[a] !== '') {
        return plays[a]
      }
    }

  }

  function tie() {
    setPoints(points => ({...points, ties: points.ties + 1}))
    resetGame()
  }

  function resetGame() {
    setPlays(initialPlays)
    setCurrentPlayer(firstPlayer)
  }

  function incrementPoints (play) {
    setPoints(points => ({...points, [play]: points[play] + 1}))
  }

  useEffect(() => {

    const gameOver = plays.filter(Boolean).length === 9
    const winner = verifyWinner()

    if (winner) {
      incrementPoints(winner)
      alert(`${winner} ganhou`)
    } else if (gameOver) {
      tie()
    }

    if (gameOver || winner) {
      resetGame()
    }

  }, [plays])


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
          <Header.BackButton onClick={handleNavigateHome}>
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