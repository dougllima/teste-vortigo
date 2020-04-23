import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [username, setUsername] = useState("");
  const [favType, setFavType] = useState("");

  //Initial load (LocalStorage => Context)
  useEffect(() => {
    if (localStorage.hasOwnProperty("username")) {
      setUsername(localStorage.getItem("username"));
    }
    if (localStorage.hasOwnProperty("favType")) {
      setFavType(localStorage.getItem("favType"));
    }
  }, []);

  //Save to LocalStorage
  useEffect(() => {
    if (username) localStorage.setItem("username", username);
    else localStorage.removeItem("username");
  }, [username]);

  //Save to LocalStorage
  useEffect(() => {
    if (favType) localStorage.setItem("favType", favType);
    else localStorage.removeItem("favType");
  }, [favType]);

  return (
    <UserContext.Provider
      value={{ username, favType, setUsername, setFavType }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
