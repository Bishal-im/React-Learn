import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [save, setSave] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copySave = [...save];
    copySave.push({ task: task, complete: false });

    console.log(copySave);

    setSave(copySave);

    setTask("");
  };

  const deleteTodo = (idx) => {
    const copySave = [...save];
    copySave.splice(idx, 1);
    setSave(copySave);
  };

  const Complete = (idx) => {
    const copySave = [...save];

    copySave[idx].complete = !copySave[idx].complete; // true lai false garayo
    setSave(copySave);
  };

  return (
    <div className="min-h-screen bg-gray-700 p-10">
      <h1 className="text-3xl font-bold mb-5">Todo App</h1>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="border p-2"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button
          onClick={submitHandler}
          className="bg-blue-500 text-white p-2 ml-2 active:scale-95"
        >
          Add Task
        </button>
      </div>

      <div className="bg-gray-500 p-4">
        <h2 className="text-xl mb-3">Your Tasks</h2>

        {save.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border p-2 mb-2 flex justify-between items-center"
            >
              <div className="flex gap-3">
                <h4>{idx + 1}.</h4>
                <p>{elem.task}</p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={elem.complete}
                  onChange={() => Complete(idx)}
                  className="w-5 h-5 cursor-pointer"
                />

                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded active:scale-95"
                  onClick={() => deleteTodo(idx)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
