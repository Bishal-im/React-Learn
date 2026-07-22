import React, { useEffect, useState } from "react";
import Card from "./components/card";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [save, setSave] = useState(() => {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const copySave = [...save];
    copySave.push({ title: title, details: details });
    setSave(copySave);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copySave = [...save];

    copySave.splice(idx, 1);
    setSave(copySave);
  };

  useEffect(
    function () {
      console.log("save");
      localStorage.setItem("notes", JSON.stringify(save));
    },
    [save],
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start gap-8 p-10">
      {/* Add Note Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">📝 Add Notes</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter the Title"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Content here"
            rows="6"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none resize-none focus:border-blue-500"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>

          <button
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold transition"
            onClick={submitHandler}
          >
            Add Note
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">📒 Your Notes</h2>

        {save.map((elem, idx) => {
          return <Card elem={elem} idx={idx} deleteNote={deleteNote} />;
        })}
      </div>
    </div>
  );
};

export default App;
