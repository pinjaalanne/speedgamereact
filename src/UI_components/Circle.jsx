function Circle({ clickHandler, id, current, clicked, setClicked }) {
    return (
        <>
            <div
                className={`circle ${current ? 'active' : ''}${clicked ? 'blood' : ''}`}
                onClick={() => { clickHandler(id); setClicked(true); }}></div >
        </>
    );
}

export default Circle;