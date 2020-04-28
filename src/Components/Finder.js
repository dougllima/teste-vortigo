import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "./../Contexts/UserContext";

const Finder = () => {
  const history = useHistory();
  const { username, favType } = useContext(UserContext);

  if (!username || !favType) {
    history.push("/register");
  }

  return <div> Teste</div>;
};

export default Finder;
