import React from "react";

const card = (props) => {
  return (
    <div className="w-72 bg-gray-900 rounded-lg p-4 shadow-md">
      <div>
        <p className="text-gray-400 text-sm mb-2">{props.elem.id}</p>
        <img
          src={props.elem.image}
          alt="Image is here"
          className="h-48 w-full object-contain bg-white p-2 rounded-md"
        />
      </div>

      <div className="p-4 mb-2 mt-3 bg-gray-700 w-full rounded-xl">
        <h3 className="font-bold text-lg mb-2">{props.elem.title}</h3>
        <h4 className="text-green-400 font-semibold mb-2">
          $ {props.elem.price}
        </h4>

        <p className="text-gray-300 text-sm">{props.elem.description}</p>
      </div>

      <footer className="flex justify-between items-center mt-4">
        <h5 className="text-blue-500 text-sm ">{props.elem.category}</h5>
        <h6 className="text-yellow-400">
          {props.elem.rating ? props.elem.rating.rate : "No Rating"}
        </h6>
      </footer>

      <button
        onClick={() => {
          props.deleteNote(props.elem.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default card;
