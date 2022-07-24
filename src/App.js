import Searchbar from "./component/searchbar";
import React from "react";

function App() {
  return (
    <div className="container w-1/3 mx-auto px-4 shadow-lg bg-white rounded-xl">
      <div className="my-52 font-serif">
        <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-teal-300 to-blue-700">
          To Do List
        </h1>
        <h1 className="mt-1 text-2xl">
          My jobs is just remind you to do something !
        </h1>
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
