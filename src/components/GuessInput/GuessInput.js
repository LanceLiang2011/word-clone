import React from "react";

function GuessInput() {
  const [word, setWord] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.length !== 5) {
      alert("Hint: the word has 5 letters.");
      return;
    }
    console.log({ word });
    setWord("");
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
