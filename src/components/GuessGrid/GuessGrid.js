import React from "react";

const GuessGrid = ({ guesses, correct }) => {
  const testIsCorrect = (l, i) => {
    if (correct[i] === l) return "correct";
    if (correct.includes(l)) return "misplaced";
    return "incorrect";
  };
  return (
    <div>
      <div className="guess-results">
        {guesses.map((g, i) => (
          <p key={i} className="guess">
            {g.split("").map((l, i) => (
              <span className={`cell ${testIsCorrect(l, i)}`} key={i}>
                {l}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GuessGrid;
