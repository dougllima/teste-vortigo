import React, { createContext, useState, useEffect } from "react";
import { getTypes } from "../Service/Service";

export const TypeContext = createContext([]);

export const TypeProvider = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes()
      .then((res) => {
        setTypes(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TypeContext.Provider value={{ types }}>
      {props.children}
    </TypeContext.Provider>
  );
};
