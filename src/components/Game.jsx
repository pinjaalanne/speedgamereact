import Circle from "../UI_components/Circle";

function Game({ score, circles, clickHandler, endGameHandler, current, clicked }) {
    return (
        <>
            <div className="wrap">
                <h3 className="score">Clowns killed: {score}</h3>
                <div>
                    {circles.map((_, i) =>
                        <Circle
                            key={i}
                            id={i}
                            clickHandler={clickHandler}
                            current={current === i}
                            clicked={i === clicked}
                        />)}
                </div>
                <button className="btn" onClick={endGameHandler}>End Game</button>
            </div>
        </>
    );
}

export default Game