import { useState } from "react";

function NewGame({ click }) {

    const [playerName, setPlayerName] = useState('')

    const inputHandler = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <>
            <h2> Start the game by choosing the difficulty and entering your name</h2>
            <input type="text" onChange={inputHandler} />
            <div>
                <button onClick={() => click('easy', playerName)}>Easy</button>
                <button onClick={() => click('medium', playerName)}>Medium</button>
                <button onClick={() => click('hard', playerName)}>Hard</button>
            </div>
        </>
    );
}

export default NewGame