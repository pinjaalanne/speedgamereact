import { useRef, useState } from "react"
import NewGame from "./components/NewGame"
import Game from "./components/Game"
import GameOver from "./components/GameOver"
import { levels } from "./levels"

const getRandomI = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// have a condition by default show NewGame, after getting data for game, hide NewGame, display Game
function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [game, setGame] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(0)

  const timeoutIdRef = useRef(null)
  const rounds = useRef(0)
  const currentInst = useRef(0);

  let pace = 1000;
  let circleQty;

  const gameSetHandler = (playerLevel, playerName) => {
    // const levelIndex = levels.findIndex(el => el.name === playerLevel); // find the matcing object from levels array
    // const circleQuantity = levels[levelIndex].qty; returning index to find qty
    const { qty } = levels.find(el => el.name === playerLevel) // destruncturing and taking qty directly and finding matching level
    circleQty = qty;
    const circleArray = Array.from({ length: qty }, (_, i) => i);     // array for the circles, with the qty in the object

    setCircles(circleArray)

    console.log('circleArray', circleArray);

    setPlayer(
      {
        playerLevel: playerLevel,
        playerName: playerName
      }
    )

    rounds.current--;

    setGame((prevState) => !prevState) // more secure way to check what state is currently aand change it
    setGameStart((prevState) => !prevState)
    randomNumb();
  }

  const endGameHandler = () => {
    setGameStart((prevState) => !prevState)
    setGameOver((prevState) => !prevState)
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = null;
  }

  const startAgainHandler = () => {
    setGame((prevState) => !prevState)
    setGameOver((prevState) => !prevState)
    setScore(0)
  }

  const clickHandler = (id) => {
    if (current !== id) {
      endGameHandler();
      return;
    }
    setScore(score + 15);
    rounds.current--;
  }

  const randomNumb = () => {
    if (rounds.current >= 3) {
      endGameHandler();
      return;
    }
    let nextActiveCircle;
    do {
      nextActiveCircle = getRandomI(0, circleQty)
    } while (nextActiveCircle === currentInst.current);

    setCurrent(nextActiveCircle)
    currentInst.current = nextActiveCircle;
    rounds.current++
    timeoutIdRef.current = setTimeout(randomNumb, pace)
    pace *= 0.95
  }

  return (
    <>
      {game && <NewGame click={gameSetHandler} />}
      {gameStart && <Game
        score={score}
        circles={circles}
        clickHandler={clickHandler}
        endGameHandler={endGameHandler}
        current={current} />}
      {gameOver && <GameOver
        playerName={player.playerName}
        playerLevel={player.playerLevel}
        score={score}
        startAgainHandler={startAgainHandler} />}
    </>
  );
}

export default App