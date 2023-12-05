import { useState } from "react";
// import clown from '../assets/clown1.png'

function NewGame({ click }) {

    const [playerName, setPlayerName] = useState('')

    const inputHandler = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <>
            <div className="wrap">
                <h1>Catch the Clown</h1>
                {/* <img className="mainclown" src={clown} alt="no img"></img> */}
                <h2>Catch the sad clown and give it some love</h2>
                <h3>Start by entering your name below</h3>
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