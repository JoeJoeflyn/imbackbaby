import React from "react";
import { useGlobalContext } from "../context";
import List from "./list";
function searchbar() {
  const {
    alert,
    input,
    setInput,
    list,
    setList,
    handleSubmit,
  } = useGlobalContext();
  return (
    <div>
      {alert ? <h1>Type something pls !!</h1> : ""}
      <form className="form-searchbar">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="do household chores..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {list.length > 0 ? <List /> : <h1>No item left</h1>}
    </div>
  );
}

export default searchbar;
