import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ result: { status, letter } }) {
  return <span className={"cell " + status}>{letter}</span>;
}

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((col) => (
        <Cell key={col} result={results?.[col] ?? { status: "", letter: "" }} />
      ))}
    </p>
  );
}

export default Guess;
