import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [status, setStatus] = React.useState("running");
  const handleAddToList = (word) => {
    const endGame = (result) => {
      setStatus(result);
    };
    setGuessesList((prev) => [...prev, word]);
    if (word === answer) endGame("won");
    if (times >= NUM_OF_GUESSES_ALLOWED - 1) endGame("lost");
  };
  const times = guessesList.length;
  return (
    <>
      <GuessesList answer={answer} guessesList={guessesList} />
      {status === "running" && (
        <GuessInput
          times={times}
          answer={answer}
          handleAddToList={handleAddToList}
        />
      )}
      {status !== "running" && (
        <Banner status={status} answer={answer} times={times} />
      )}
    </>
  );
}

export default Game;
