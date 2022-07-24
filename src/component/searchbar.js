import React from "react";
import { useGlobalContext } from "../context";
import List from "./list";
import Alert from "./alert";
function searchbar() {
  const { alert, input, setInput, list, handleSubmit } = useGlobalContext();
  return (
    <div>
      {alert.show ? <Alert /> : ""}
      <form className="mt-3 flex">
        <input
          className="mr-auto block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="do household chores..."
        />
        <button
          className="shadow-xl bg-teal-300 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {list.length > 0 ? (
        <List />
      ) : (
        <div>
          <p className="mt-8 p-4 text-center text-xl font-medium ">
            No item left
          </p>
        </div>
      )}
    </div>
  );
}

export default searchbar;
