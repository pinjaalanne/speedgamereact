function Circle({ clickHandler, id, current, clicked }) {
    return (
        <>
            <div
                className={`circle ${current ? 'active' : ''}${clicked ? 'blood' : ''}`}
                onClick={() => { clickHandler(id) }}></div >
        </>
    );
}

export default Circle;