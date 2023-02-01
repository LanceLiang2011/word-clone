import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Restart from "../Restart/Restart";

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
    const nextGuessesList = [...guessesList, word];
    setGuessesList(nextGuessesList);
    if (word.toUpperCase() === answer.toUpperCase()) endGame("won");
    if (nextGuessesList.length >= NUM_OF_GUESSES_ALLOWED) endGame("lost");
  };
  const handleRestart = () => {
    setGuessesList([]);
    setStatus("running");
  };
  return (
    <>
      {status !== "running" && <Restart handleRestart={handleRestart} />}
      <GuessesList answer={answer} guessesList={guessesList} />
      {status === "running" && <GuessInput handleAddToList={handleAddToList} />}
      {status !== "running" && (
        <Banner status={status} answer={answer} times={guessesList.length} />
      )}
    </>
  );
}

export default Game;
