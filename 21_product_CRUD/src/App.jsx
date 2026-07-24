import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

const App = () => {
  // Store all products
  const [userData, setUserData] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // Fetch data from API
  const getData = async () => {
    setLoading(true); // Show loading every time API is called
    setError(false); // Reset previous error (good practice)

    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setUserData(response.data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false); // Hide loading whether success or fail
    }
  };

  const deleteNote = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setUserData(userData.filter((elem) => elem.id !== id));
  };

  // Runs only once when component mounts
  useEffect(() => {
    getData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title,
        price,
        description,
        image,
        category,
      });

      setUserData([...userData, response.data]);    //copy data na gari direct gareko so 

      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");
      setCategory("");
    } catch (err) {
      console.log(err);
    }
  };
  // If data is loading
  if (loading) {
    return (
      <div className="bg-black h-screen flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  // If API failed
  if (error) {
    return (
      <div className="bg-black h-screen flex justify-center items-center text-red-500 text-2xl">
        Something went wrong!
      </div>
    );
  }

  // Normal UI
  return (
    <div>
      <form
        className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mb-8"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          Add Product
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Product Title"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none focus:border-blue-500 text-white"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="number"
            placeholder="Enter Product Price"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none focus:border-blue-500 text-white"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <textarea
            rows="4"
            placeholder="Enter Product Description"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none resize-none focus:border-blue-500 text-white"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <input
            type="url"
            placeholder="Enter Image URL"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none focus:border-blue-500 text-white"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter Product Category"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none focus:border-blue-500 text-white"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold transition"
          >
            Add Product
          </button>
        </div>
      </form>

      <div className="bg-black text-white min-h-screen overflow-auto p-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {userData.map((elem, idx) => (
            <div key={idx}>
              <Card elem={elem} deleteNote={deleteNote} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
