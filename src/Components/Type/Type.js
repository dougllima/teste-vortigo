import React, { useContext } from "react";
import { TypeContext } from "./../../Contexts/TypeContext";

export const Type = () => {
  const types = useContext(TypeContext);
  console.log(types);

  return <div>Teste</div>;
};
