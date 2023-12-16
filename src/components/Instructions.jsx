function Instructions({ setModal }) {
    return (
        <div className="modal">
            <div className="modalContent">
                <h2 className="modalHeader">Instructions for the game</h2>
                <p className="instHeader">The rules are simple:</p>
                <p className="instText">When you see a clown, stab it with the knife.</p>
                <p className="instText">Now you have killed a clown, Congratulations.</p>
                <p className="instText">If you fail at stabbing, game over.</p>
                <p className="instText">You get one point per kill.</p>
                <p className="instText">If you kill over 10 clowns, you are the clown killer!</p>
                <button className="btn closeBtn" onClick={() => setModal(false)}> x</button>
            </div>
        </div >
    )
}

export default Instructions