import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

const App = () => {
  //
  //
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  ); // tala button ma tw setIndex garem but we need to reload so use this

  let printUserData = <h3>Loading ............</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  //
  //
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white ">
      {/* mathi var ma image halexam hamle  */}
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>

      {/* yo chai Button ko lagi */}

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          className="bg-amber-400  text-sm cursor-pointer active:scale-95  text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold "
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
