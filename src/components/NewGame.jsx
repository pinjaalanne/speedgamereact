function NewGame({ onclick }) {
    return (
        <>
            <h2> Start the game by choosing the difficulty and entering your name</h2>
            <input type="text" />
            <div>
                <button onClick={() => onclick('easy')}>Easy</button>
                <button onClick={() => onclick('medium')}>Medium</button>
                <button onClick={() => onclick('hard')}>Hard</button>
            </div>
        </>
    );
}

export default NewGame