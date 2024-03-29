import ohno from "../assets/sounds/ohno.mp3"
import gameover from "../assets/sounds/gameover.mp3"
import { useState } from "react"

function GameOver({ score, playerName, playerLevel, startAgainHandler }) {
    const [audioFour, setAudioFour] = useState(new Audio(ohno))
    const [audioFive, setAudioFive] = useState(new Audio(gameover))

    const gameOverSounds = () => {
        score >= 2 ? audioFour.play() : audioFive.play();
    };
    gameOverSounds();

    return (
        <div className="modal">
            <div className="modalContent">
                <h2 className="modalHeader">{score >= 10 ? `YOU'RE THE CLOWN KILLER!` : score >= 2 ? `AREN'T YOU SCARED?` : `GAME OVER`}</h2>
                <h3>{score >= 10 ? `Good job! You killed ${score} clowns! You're safe for now...`
                    : score >= 2 ? `You killed only ${score} clowns? You're going to get killed soon if you don't try harder...`
                        : `What was that? You should watch your back!`}</h3>
                <p className="result">Player: {playerName}</p>
                <p className="result">Level: {playerLevel}</p>
                <p className="result">Clowns killed: {score}</p>
                <button className="btn closeBtn" onClick={startAgainHandler}>x</button>
            </div>
        </div>
    );
}

export default GameOver