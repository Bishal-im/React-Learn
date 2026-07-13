import React from "react";

const App = () => {
  const user = {
    userName: "Bishal",
    age: 22,
    city: "Bhairahawa",
  };

  // SET ITEM BRO with JSON.stringify to set item in string format
  localStorage.setItem("user", JSON.stringify(user));

  //GET Your ITEM -- we need JSON.parse to change string into obj
  const user_me = JSON.parse(localStorage.getItem("user"));

  console.log(user_me);

  return <div>APP</div>;
};

export default App;
