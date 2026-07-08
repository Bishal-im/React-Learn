import React, { useState } from "react";

const App = () => {
  const [a, seta] = useState(10);

  const Decrease = () => {
    seta(a - 1);
  };

  const Jump = () => {
    seta(a + 5);
  };

  return (
    <div className="parent">
      <h1>{a}</h1>
      {/* Increase by one fuction */}
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        Increase by 1
      </button>

      <button onClick={Decrease}>Decrease by 1</button>

      <br />

      <button onClick={Jump}>JUMP by 5</button>
    </div>
  );
};

export default App;
