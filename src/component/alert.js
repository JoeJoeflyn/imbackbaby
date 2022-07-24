import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

function alert() {
  const { alert, setAlert } = useGlobalContext();
  useEffect(() => {
    let showAlert = setTimeout(
      () => setAlert({ show: false, msg: "", type: "", color: "" }),
      5000
    );
    return () => {
      clearTimeout(showAlert);
    };
  }, [alert.type]);
  return (
    <>
      {alert.show ? (
        <div className={`${alert.type} mt-3 text-center rounded-lg`}>
          <p className={`${alert.color} p-2.5 text-xl`}>{alert.msg}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default alert;
