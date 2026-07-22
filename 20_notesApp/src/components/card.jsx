import React from "react";

const card = (props) => {
  return (
    <div key={props.idx} className="bg-gray-700 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{props.elem.title}</h3>

      <p className="text-gray-300">{props.elem.details}</p>

      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded active:scale-95"
        onClick={() => props.deleteNote(props.idx)}
      >
        Delete
      </button>
    </div>
  );
};

export default card;
