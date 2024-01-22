import { useState } from "react";
import Instructions from "./Instructions";
import clown from "../assets/images/giphy.webp"

function NewGame({ click }) {

    const [playerName, setPlayerName] = useState('')
    const [modal, setModal] = useState(false)

    // function for setting the player
    const inputHandler = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <>
            <div className="wrap">
                <h1>The Clown Killer</h1>
                <img className="mainclown" src={clown} alt="no img"></img>
                <h2>Enter your name and choose your level</h2>
                <div>
                    <input className="nameInput" id="name" type="text" placeholder="Enter your name" onChange={inputHandler} />
                    <button className="btn instBtn" onClick={() => setModal(true)}>Instructions</button>
                    {modal ? <Instructions setModal={setModal} /> : null}
                </div>
                <div>
                    <button className="btn" onClick={() => { click('easy', playerName) }}>Easy</button>
                    <button className="btn" onClick={() => click('medium', playerName)}>Medium</button>
                    <button className="btn" onClick={() => click('hard', playerName)}>Hard</button>
                </div>
            </div >
        </>
    );
}

export default NewGame