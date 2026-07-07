import React from "react";

const App = () => {
  function btnclicked() {
    console.log("HEHEHE");
  }

  function inputchanging(elem) {
    console.log(elem);
  }

  return (
    <div className="Parent">
      <button onClick={btnclicked}>Click here</button>

      <br />
      <button onDoubleClick={btnclicked}>Double Click here</button>

      <br />
      <button
        onMouseEnter={() => {
          console.log("mouse aayo");
        }}
      >
        Mouse Enter{" "}
      </button>

      <br />
      <input
        type="text"
        placeholder="Name Lekh"
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
      ></input>

      <br />
      <input
        type="text"
        placeholder="Name Lekh"
        onChange={(elem) => {
          inputchanging(elem.target.value);
        }}
      ></input>
    </div>
  );
};

export default App;
