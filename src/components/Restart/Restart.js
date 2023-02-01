import React from "react";

function Restart({ handleRestart }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

export default Restart;
