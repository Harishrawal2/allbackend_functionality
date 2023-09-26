import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:5000/api/createTodos";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      disc,
    };

    // Make a POST request to the Node.js API
    const res = await axios.post(baseURL, newTodo);

    if (res.status === 201) {
      // Todo created successfully
      console.log(res.data.message);
      toast.success("📖Todos Added Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log("Data not added");
    }
    setTitle("");
    setDisc("");
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />{" "}
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900 uppercase">
              Add your Todo Notes
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap" onSubmit={handleSubmit}>
              <div className="p-2 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Write Todo Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    id="disc"
                    name="disc"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Write Todo disc"
                    onChange={(e) => setDisc(e.target.value)}
                    value={disc}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className={`flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none `}
                  type="submit"
                >
                  Add Notes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoInput;
