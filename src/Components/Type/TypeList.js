import React, { useContext } from "react";
import { TypeContext } from "./../../Contexts/TypeContext";
import Type from "./Type";
import { Grid } from "@material-ui/core";

const TypeList = ({ showSelect, selectedType }) => {
  const context = useContext(TypeContext);

  return (
    <Grid container direction="column" spacing={2}>
      {context.types.map((type) => (
        <Grid item>
          <Type
            {...type}
            key={type.name}
            showSelect
            selected={selectedType === type.name}
          ></Type>
        </Grid>
      ))}
    </Grid>
  );
};

export default TypeList;
