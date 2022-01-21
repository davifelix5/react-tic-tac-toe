import { createContext, useState, useEffect } from 'react'

export const GameContext = createContext({})

export function GameContextProvider({ children }) {

  const initialPlays = [...new Array(9)].map(() => '')
  const initialPoints = {'X': 0, 'O': 0, ties: 0}

  const [plays, setPlays] = useState(initialPlays)
  const [points, setPoints] = useState(initialPoints)
  const [firstPlayer, setFirstPlayer] = useState('X')
  const [playMode, setPlayMode] = useState('player') // player || CPU
  const [currentPlayer, setCurrentPlayer] = useState('X')

  const [gameFinished, setGameFinished] = useState(false)
  const [winner, setWinner] = useState(null) // X or O

  function handlePlay(position) {
    if (plays[position]) {
      return;
    }
    setPlays(plays => plays.map((play, index) => index === position ? currentPlayer : play))
    setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
  }

  function tie() {
    setPoints(points => ({...points, ties: points.ties + 1}))
    resetGame()
  }

  function resetGame() {
    resetRound()
    setPoints(initialPoints)
  }

  function incrementPoints (play) {
    setPoints(points => ({...points, [play]: points[play] + 1}))
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

  function resetRound() {
    setPlays(initialPlays)
    setCurrentPlayer('X')
    setGameFinished(false)
    setWinner(null)
  }

  useEffect(() => {
    const agaistCpu = playMode === 'CPU'
    const isCPUTurn = currentPlayer !== firstPlayer
    const cpuPlay = agaistCpu && isCPUTurn
    
    const getRandomIndex = () => Math.floor(Math.random() * 9)
    
    if (cpuPlay) {
      let randomIndex = getRandomIndex()

      while (plays[randomIndex]) {
        randomIndex = getRandomIndex()
      }

      handlePlay(randomIndex)
    }
    
  }, [currentPlayer, playMode, firstPlayer])

  useEffect(() => {

    const gameOver = plays.filter(Boolean).length === 9
    const winner = verifyWinner()

    if (winner) {
      incrementPoints(winner)
      setWinner(winner)
    } else if (gameOver) {
      tie()
    }

    if (gameOver || winner) {
      setGameFinished(true)
    }


  }, [plays])

  return (
    <GameContext.Provider value={{
      plays, points, currentPlayer,
      setFirstPlayer, setPlayMode,
      winner, gameFinished,
      handlePlay, resetGame, resetRound
    }}>
      {children}
    </GameContext.Provider>
  )
}
