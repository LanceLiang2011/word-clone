import React from "react";

function Banner({ status, answer, times }) {
  const className = (status === "won" ? "happy" : "sad") + " banner";
  return (
    <div className={className}>
      {status === "won" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{times} guesses</strong>.
        </p>
      )}
      {status === "lost" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
