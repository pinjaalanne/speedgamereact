import NewGame from "./components/NewGame"

function App() {

  const gameLevelHandler = (level) => {
    console.log(level);
  }

  return (
    <>
      <h1>New speed game</h1>
      <NewGame onclick={gameLevelHandler} />
    </>
  )
}

export default App