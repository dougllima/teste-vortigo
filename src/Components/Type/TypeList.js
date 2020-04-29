import React, { useContext } from "react";
import { TypeContext } from "./../../Contexts/TypeContext";
import Type from "./Type";
import { Grid } from "@material-ui/core";

const TypeList = ({ showSelect, handleTypeSelect }) => {
  const context = useContext(TypeContext);

  const renderType = (type) => (
    <Grid item key={type.name} onClick={() => handleTypeSelect(type)}>
      <Type {...type} showSelect />
    </Grid>
  );

  return (
    <Grid container direction="column" spacing={2}>
      {context.types.map(renderType)}
    </Grid>
  );
};

export default TypeList;
