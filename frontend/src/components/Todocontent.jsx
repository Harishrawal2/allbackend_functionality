import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:5000/api/todos";

const Todocontent = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const fetchTodos = async () => {
    const res = await axios.get(baseURL);
    setTodos(res.data.message);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Pagination controls
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTodos = todos.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-gray-900 uppercase">
              All Notes
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 uppercase">
              Add your unique and Amazing Notes
            </p>
          </div>
          <div>
            {todos.length === 0 ? (
              <div className="text-lg text-red-500 capitalize text-center">
                <p className="text-4xl">!</p>
                Todos are empty. Please add a new todo.
              </div>
            ) : (
              <div>
                {currentTodos.map((todo) => {
                  return (
                    <div key={todo.id}>
                      <div className="flex items-center justify-between mb-10 border">
                        <div className="flex flex-col capitalize">
                          <h1 className="font-bold text-xl">{todo.title}</h1>
                          <p className="font-medium">{todo.disc}</p>
                        </div>
                        <div className="text-white font-bold gap-2 flex items-center justify-between">
                          <button className="bg-red-500 rounded-lg px-4 py-2">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex items-center justify-between mt-5 text-lg">
              <div className="flex items-center justify-center gap-10">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-between p-1 bg-blue-500 text-white px-4 py-2 rounded-md mr-2 ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Previous
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md ml-2 ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="flex text-xl border-1 border-slate-600">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todocontent;
