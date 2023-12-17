import Circle from "../UI_components/Circle";

function Game({ score, circles, clickHandler, endGameHandler, current, setClicked }) {
    return (
        <>
            <div className="wrap">
                <h1>The Clown Killer</h1>
                <h3 className="score">Clowns killed: {score}</h3>
                <div>
                    {circles.map((_, i) =>
                        <Circle
                            key={i}
                            id={i}
                            clickHandler={clickHandler}
                            current={current === i}
                            setClicked={setClicked}
                        />)}
                </div>
                <button className="btn" onClick={endGameHandler}>Please Stop!</button>
            </div>
        </>
    );
}

export default Game