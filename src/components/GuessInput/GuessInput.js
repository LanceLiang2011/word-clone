import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ times, answer, handleAddToList, endGame }) {
  const [word, setWord] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.length !== 5) {
      alert("Hint: the word has 5 letters.");
      return;
    }
    handleAddToList(word);
    setWord("");
    if (word === answer) endGame("won");
    if (times >= NUM_OF_GUESSES_ALLOWED - 1) endGame("lost");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        minLength={5}
        maxLength={5}
        required
        onChange={(event) => {
          setWord(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
