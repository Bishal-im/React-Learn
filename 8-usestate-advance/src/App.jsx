import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Bishal", age: 22 });

  const btnclicked = () => {
    const copyNum = { ...num }; //just we copied so that it dont affect mai var
    copyNum.user = "Binod";
    copyNum.age = 23;
    setNum(copyNum);

    //     const btnclicked = () => {
    //   setNum((prev) => ({
    //     ...prev,
    //     user: "Binod",
    //     age: 23,
    //   }));
    // };
  };

  return (
    <div>
      <h1>
        {num.user} is {num.age} years OLD
        <br />
        <button onClick={btnclicked}>Click</button>
      </h1>
    </div>
  );
};

export default App;

// const btnclicked = ()=>{
//   setNum (prev=>({...prev,age:50}))
// }
