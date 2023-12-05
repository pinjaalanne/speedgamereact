import Circle from "../UI_components/Circle";

function Game({ score, circles, clickHandler, endGameHandler, current }) {

    return (
        <>
            <div className="wrap">
                <h3>Score: {score}</h3>
                <div>
                    {circles.map((_, i) =>
                        <Circle
                            key={i}
                            id={i}
                            clickHandler={clickHandler}
                            current={current === i} />)}
                </div>
                <button className="btn" onClick={endGameHandler}>End Game</button>
            </div>
        </>
    );
}

export default Game