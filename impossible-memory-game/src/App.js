import React, { useState } from "react";
import "./App.css";
import Gamedata from "./components/data";
import "./images/carrot.png";

function App() {
  let turn = 1;
  let guess1 = null;
  let guess2 = null;
  let gameActive = false;
  let clickCounter = 0;
  const [gameStatus, SetGameStatus] = useState("Ready To Win!!!");
  const [isclicked, Setisclicked] = useState("flipcard");

  function startGame() {
    gameActive = true;
    Gamedata.forEach((d) => {
      d.clicked = false;
      console.log(d.clicked);
    });
    clickCounter = 0;
    turn = 1;
    SetGameStatus("Ready To Win!!!");
    console.log("game active", gameActive);
  }

  function runMatch(guess) {
    console.log("running match", guess.clicked);
    if (gameActive === true && guess.clicked === false) {
      if (turn === 1) {
        guess1 = guess.number;
        console.log("turn", turn);
        turn = 2;
      } else {
        guess2 = guess.number;
        console.log("turn", turn);
        turn = 1;
        if (guess1 !== guess2) {
          gameActive = false;
          SetGameStatus("WRONG!!! YOU HAVE LOST:(");
          console.log("You Have lost");
        }
      }
      clickCounter++;
      guess.clicked = true;
      if (guess.clicked === true) {
        Setisclicked("flipcard");
        console.log(guess.clicked, isclicked);
      }

      if (clickCounter === 10) {
        console.log("YOU HAVE WON!!!");
        SetGameStatus("YOU HAVE WON!!!");
      }
      console.log(clickCounter);
      console.log(gameActive);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Impossible Memory Card Game.</p>
        <p>
          The cards only flip once so make sure to remember what the cards look
          like.
        </p>
      </header>

      <div className="game-status">
        <button className="start" onClick={() => startGame()}>
          Start Game
        </button>
        <p>Game Status: {gameStatus}</p>
      </div>
      <section className="gameboard">
        {Gamedata.map((d) => (
          <div
            onClick={() => {
              runMatch(d);
            }}
            className={`flip-card ${isclicked}`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>Impossible Memory Card Game</h1>
                <img
                  className="frontimg"
                  src="https://ih1.redbubble.net/image.310166659.4641/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u2.jpg"
                  alt="froggie"
                />
              </div>
              <div className="flip-card-back">
                <img className="cardimg" src={d.image} alt={d.image} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

/*<div
            className="gameimage"
            onClick={() => {
              runMatch(d.id);
            }}
          >
            <img src={d.image} alt={d.image} />
          </div> */
