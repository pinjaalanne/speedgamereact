function GameOver({ score, playerName, playerLevel, startAgainHandler }) {
    return (
        <>
            <div className="modal">
                <div className="modalcontent">
                    <h2>GAME OVER</h2>
                    <h3>Player: {playerName}</h3>
                    <h3>Level: {playerLevel}</h3>
                    <p>Score: {score}</p>
                    <button className="btn closeBtn" onClick={startAgainHandler}>x</button>
                </div>
            </div>
        </>
    );
}

export default GameOver