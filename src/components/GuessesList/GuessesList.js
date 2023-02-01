import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessesList({ guessesList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess answer={answer} key={row} value={guessesList?.[row] ?? null} />
      ))}
    </div>
  );
}

export default GuessesList;
