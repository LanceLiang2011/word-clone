import React from "react";

function GuessesList({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((word, index) => (
        <p key={index} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
