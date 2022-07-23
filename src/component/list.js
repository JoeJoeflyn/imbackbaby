import React, { useState } from "react";
import { useGlobalContext } from "../context";
function list() {
  const [done, setDone] = useState(false);
  const { deleteItem, list } = useGlobalContext();

  return (
    <div>
      {list.map((item) => (
        // console.log(deleteItem(item.id)),
        <div key={item.id}>
          <p className={done ? "text-decoration: line-through" : ""}>
            {item.name}
          </p>
          <button onClick={deleteItem(item)}>delete</button>
          <button>edit</button>
          <button onClick={() => setDone(!done)}>done</button>
        </div>
      ))}
    </div>
  );
}

export default list;
