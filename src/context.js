import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name: input, id: Date.now().toString() };
    try {
      if (newItem.name.trim() === "") {
        setAlert(true);
        setTimeout(() => setAlert(false), 3000);
      } else {
        setList([...list, newItem]);
      }
    } catch (err) {
      console.log(err);
    }
    setInput("");
  };
  const deleteItem = (i) => {
    const afterRemove = list.filter((item) => item.id !== i.id);
  };

  return (
    <AppContext.Provider
      value={{
        alert,
        handleSubmit,
        input,
        setInput,
        list,
        setList,
        deleteItem,
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
