import React from "react";

const UserInput = ({ addGuess, consumeLife, life, setGameStatus, answer }) => {
  const [guess, setGuess] = React.useState("");
  const handleChange = (e) => {
    if (e.target.value.length > 5) return;
    setGuess(e.target.value.toUpperCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length < 5) {
      return alert("Input shoud be 5");
    }
    addGuess(guess);
    setGuess("");
    consumeLife();
    if (guess === answer) {
      setGameStatus("win");
    }
    if (life <= 1) {
      setGameStatus("lose");
    }
  };
  return (
    <form onSubmit={handleSubmit} class="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
};

export default UserInput;
