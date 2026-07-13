import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTasks = [...task];
    copyTasks.splice(idx, 1);
    setTask(copyTasks);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6">📝 Add Note</h1>

        <input
          type="text"
          placeholder="Enter Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-5 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-amber-500"
        />

        <textarea
          placeholder="Write your note..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full h-40 p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none resize-none focus:border-amber-500"
        ></textarea>

        <button className="mt-5 w-full bg-amber-600 hover:bg-amber-500 transition rounded-lg py-3 font-semibold">
          Add Note
        </button>
      </form>

      {/* Notes */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6">Your Notes</h2>

        {task.length === 0 ? (
          <p className="text-zinc-400 text-lg">No notes added yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-zinc-900 rounded-xl p-5 shadow-md border border-zinc-800 hover:border-amber-500 transition flex flex-col justify-between h-60"
                >
                  <div>
                    <h3 className="text-xl font-bold">{elem.title}</h3>

                    <p className="mt-3 text-zinc-400 overflow-auto h-28">
                      {elem.details}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteNote(idx)}
                    className="mt-4 bg-red-600 hover:bg-red-500 rounded-lg py-2 font-medium active:scale-95 transition"
                  >
                    Delete Note
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
