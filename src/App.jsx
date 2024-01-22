import { useRef, useState } from "react"
import NewGame from "./components/NewGame"
import Game from "./components/Game"
import GameOver from "./components/GameOver"
import { levels } from "./levels"
import bgSound from "./assets/sounds/background.mp3"
import clownLaugh from "./assets/sounds/clownlaugh.mp3"
import scream from "./assets/sounds/scream.mp3"

const getRandomI = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// have a condition by default show NewGame, after getting data for game, hide NewGame, display Game
function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [game, setGame] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1)
  const [audioOne, setAudioOne] = useState(new Audio(bgSound))
  const [audioTwo, setAudioTwo] = useState(new Audio(clownLaugh))
  const [audioThree, setAudioThree] = useState(new Audio(scream))

  const timeoutIdRef = useRef(null)
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let circleQty;

  // function for setting the game
  const gameSetHandler = (playerLevel, playerName) => {
    audioOne.play();
    audioTwo.play();
    // destructuring and taking qty directly and finding matching level
    const { qty } = levels.find(el => el.name === playerLevel)
    circleQty = qty;
    // array for the circles, with the qty in the object
    const circleArray = Array.from({ length: qty }, (_, i) => i);

    setCircles(circleArray)

    setPlayer(
      {
        playerLevel: playerLevel,
        playerName: playerName
      }
    )

    rounds.current = 0;

    setGame((prevState) => !prevState) // more secure way to check what state is currently and change it
    setGameStart((prevState) => !prevState)
    randomNumb();
  }

  // function for ending the game and game over
  const endGameHandler = () => {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    setGameStart((prevState) => !prevState)
    setGameOver((prevState) => !prevState)
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = null;
  }

  // function for starting the game again and setting score to 0
  const startAgainHandler = () => {
    setGame((prevState) => !prevState)
    setGameOver((prevState) => !prevState)
    setScore(0)
  }

  // function for clicking the clowns, score sets
  const clickHandler = (id) => {
    audioThree.play();
    if (current !== id) {
      endGameHandler()
      return
    }
    setScore(score + 1);
    rounds.current--;
  }

  // function for randomizing the next circle
  const randomNumb = () => {
    if (rounds.current >= 3) {
      endGameHandler()
      return;
    }

    let nextActiveCircle;
    do {
      nextActiveCircle = getRandomI(0, circleQty)
    } while (nextActiveCircle === currentInst.current);

    setCurrent(nextActiveCircle)
    currentInst.current = nextActiveCircle;
    rounds.current++
    // sets the time out and pace
    timeoutIdRef.current = setTimeout(randomNumb, pace)
    pace *= 0.95
  }

  return (
    <>
      {game && <NewGame
        click={gameSetHandler}
      />}
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