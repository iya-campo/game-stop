import React from 'react';
import GameShelf from './views/GameShelf'

import './App.css'

function App() {

  return (
    <div className="container d-flex align-items-center">
      <div className="content text-center w-100">
        <h1>Welcome to GameStop!</h1>
        <GameShelf />
      </div>
    </div>
  );
}

export default App;
