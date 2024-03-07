import React, { useState } from "react";

import UserInput from "../UserInput/UserInput";
import GuessGrid from "../GuessGrid/GuessGrid";

// Pick a random word on every pageload.
const answer = "ABOUT";
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = React.useState([]);
  const [life, setLife] = React.useState(5);
  const [gameStatus, setGameStatus] = useState("play");
  const consumeLife = () => setLife(life - 1);
  const addGuess = (guess) => {
    if (guesses.length >= 5) return;
    setGuesses([...guesses, guess]);
  };
  return (
    <>
      <GuessGrid correct={answer} guesses={guesses} />
      {gameStatus === "play" && (
        <UserInput
          addGuess={addGuess}
          life={life}
          consumeLife={consumeLife}
          answer={answer}
          setGameStatus={setGameStatus}
        />
      )}
      {gameStatus === "win" && <HappyBanner />}
      {gameStatus === "lose" && <SadBanner />}
    </>
  );
};

const HappyBanner = () => (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>3 guesses</strong>.
    </p>
  </div>
);

const SadBanner = () => (
  <div className="sad banner">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  </div>
);

export default Game;
