import { useState } from "react";
import clown from '../assets/images/giphy.webp'

function NewGame({ click }) {

    const [playerName, setPlayerName] = useState('')

    const inputHandler = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <>
            <div className="wrap">
                <h1>The Clown Killer</h1>
                <img className="mainclown" src={clown} alt="no img"></img>
                <h2>Start by entering your name below</h2>
                <input className="nameInput" id="name" type="text" placeholder="Enter your name" onChange={inputHandler} />
                <div>
                    <button className="btn" onClick={() => click('easy', playerName)}>Easy</button>
                    <button className="btn" onClick={() => click('medium', playerName)}>Medium</button>
                    <button className="btn" onClick={() => click('hard', playerName)}>Hard</button>
                </div>
            </div>
        </>
    );
}

export default NewGame