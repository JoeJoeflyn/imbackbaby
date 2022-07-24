import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
    color: "",
  });
  const [id, setId] = useState("");
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setAlert({
        show: true,
        msg: "You should type something, your input is very empty !",
        type: "bg-red-50",
        color: "text-red-700",
      });
    } else if (editing) {
      setList(
        list.map((item) => {
          if (item.id === id) {
            return { ...item, name: input };
          }
          return item;
        })
      );
      setId("");
      setEditing(false);
      setAlert({
        show: true,
        msg: "Your work has been up to date",
        type: "bg-yellow-50",
        color: "text-yellow-700",
      });
    } else {
      setList([
        ...list,
        {
          name: input,
          id: (Date.now() + Math.random()).toString(),
          Completed: false,
        },
      ]);
      setAlert({
        show: true,
        msg: "One item has been added successfully",
        type: "bg-green-50",
        color: "text-green-700",
      });
    }
    setInput("");
  };
  const deleteItem = (i) => {
    const deleted = list.filter((item) => item.id !== i.id);
    setList(deleted);
    setAlert({
      show: true,
      msg: "Delete successfully one item",
      type: "bg-red-50",
      color: "text-red-700",
    });
  };
  const makeDone = (i) => {
    setList(
      list.map((item) => {
        if (item.id === i.id) {
          return { ...i, Completed: !i.Completed };
        }
        return item;
      })
    );
  };
  const takeId = (id) => {
    setId(id.id);
    setInput(id.name);
    setEditing(true);
  };
  const clearAll = (e) => {
    e.preventDefault;
    setList([]);
    setAlert({
      show: true,
      msg: "All items have been cleared",
      type: "bg-red-50",
      color: "text-red-700",
    });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <AppContext.Provider
      value={{
        takeId,
        alert,
        handleSubmit,
        input,
        setInput,
        list,
        setList,
        deleteItem,
        makeDone,
        clearAll,
        setAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
