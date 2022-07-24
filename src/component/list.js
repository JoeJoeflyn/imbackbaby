import React from "react";
import { useGlobalContext } from "../context";
function list() {
  const { deleteItem, list, makeDone, takeId, clearAll, setAlert } =
    useGlobalContext();
  return (
    <>
      <div className="mt-14">
        {list.map((item, index) => (
          <div className=" mt-6 flex rounded-lg p-2 bg-emerald-50" key={index}>
            <button
              className="rounded-full text-green-500 bg-teal-100 hover:opacity-60"
              onClick={() => makeDone(item)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <p
              className={`${
                item?.Completed ? "line-through" : ""
              } ml-3 w-full break-words text-xl`}
            >
              {item?.name}
            </p>
            <button
              className="rounded-full text-red-600 bg-red-200 hover:opacity-60"
              onClick={() => deleteItem(item)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button
              className="mx-2 rounded-full text-yellow-500 bg-yellow-100 hover:opacity-60"
              onClick={() => takeId(item)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="text-center my-6">
        <button
          className=" mb-3 shadow-md text-xl bg-red-100 text-red-700 rounded-lg py-1 px-4 hover:opacity-60"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </>
  );
}

export default list;
