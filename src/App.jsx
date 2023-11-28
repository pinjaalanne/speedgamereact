import { useState } from "react"
import NewGame from "./components/NewGame"
import { levels } from "./levels"
import Game from "./components/Game"
import GameOver from "./components/GameOver"

// have a condition by default show NewGame, after getting data for game, hide NewGame, display Game
function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [game, setGame] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const gameLevelHandler = (playerLevel, playerName) => {
    // based on level,
    // we find the matcing object from levels array, 
    //and then make a array for the circles, with the qty in the object.
    const levelIndex = levels.findIndex(el => el.
      name === playerLevel);
    const circleQuantity = levels[levelIndex].qty;
    const circleArray = Array.from({ length: circleQuantity }, (x, i) => i);

    setCircles(circleArray)

    console.log('circleArray', circleArray);

    setPlayer(
      {
        playerLevel: playerLevel,
        playerName: playerName
      }
    )
    setGame(!game)
    setGameStart(!gameStart)
  }

  const endGameHandler = () => {
    setGameStart(!gameStart)
    setGameOver(!gameOver)
  }

  return (
    <>
      <h1>New speed game</h1>
      {game && <NewGame click={gameLevelHandler} />}
      {gameStart && <Game score={score} circles={circles} endGameHandler={endGameHandler} />}
      {gameOver && <GameOver />}
    </>
  );
}

export default App