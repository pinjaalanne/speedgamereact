import Circle from "../UI_components/Circle";

function Game({ score, circles, endGameHandler }) {

    return (
        <>
            <p>Score: {score}</p>
            <div>{circles.map((el, i) => <Circle key={i} />)}</div>
            <button onClick={endGameHandler}>End Game</button>
        </>
    );
}

export default Game