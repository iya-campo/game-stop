import React, { useState } from 'react';
import Game from './Game'

function GameShelf() {

    const [games, setGames] = useState([
        { name: 'Little Big Planet', date: 'December 5, 2012' },
        { name: 'The Sims 3', date: 'January 23, 2015' },
        { name: 'Monster Hunter', date: 'August 17, 2020' },
        { name: 'Cooking Simulator', date: 'October 8, 2020' },
        { name: 'Final Fantasy 14', date: 'March 12, 2019' },
    ])

    return (
        <div>
            <h3>Your Game Shelf contains all the games you own.</h3>
            <div className="games-list mt-5">
                {games.map(game => (
                    <Game name={game.name} date={game.date} />
                ))}
            </div>
        </div>
    );
}

export default GameShelf;
