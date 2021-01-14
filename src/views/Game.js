import React, { useState } from 'react';

function Game(props) {

    const [isPlaying, setPlaying] = useState(false);

    const play = () => {
        setPlaying(!isPlaying);
    }

    return (
        <div className={'game-cover' + (isPlaying ? ' game-cover-current' : '')}>
            <h5>{props.name}</h5>
            <p>{props.date}</p>
            <button onClick={play} className="btn btn-primary mt-3">{isPlaying ? 'Currently Playing' : 'Play!'}</button>
        </div>
    );
}

export default Game;
