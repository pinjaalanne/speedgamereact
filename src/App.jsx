import { useState } from "react"
import NewGame from "./components/NewGame"
import { levels } from "./levels"
import Game from "./components/Game"

function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setSCore] = useState(0)

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
  }

  return (
    <>
      <h1>New speed game</h1>
      <NewGame click={gameLevelHandler} />
      <Game score={score} circles={circles} />
    </>
  )
}

export default App