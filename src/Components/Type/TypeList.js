import React, { useContext } from "react";
import { TypeContext } from "./../../Contexts/TypeContext";
import Type from "./Type";
import { Grid, GridList, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: `calc(414px - ${theme.spacing(4)}px)`,
  },
  gridList: {
    flexWrap: "nowrap",
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
}));

const TypeList = ({
  showSelect,
  selectedTypes,
  handleTypeSelect,
  direction,
}) => {
  console.log(selectedTypes);
  const context = useContext(TypeContext);
  const classes = useStyle();

  return direction === "column" ? (
    <Grid container direction={direction} spacing={2}>
      {context.types.map((type) => (
        <Grid
          item
          key={type.name}
          onClick={() => handleTypeSelect(type)}
          xs={direction === "row" ? 3 : null}
        >
          <Type
            {...{ ...type, showSelect, direction }}
            selected={selectedTypes.includes(type.name)}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {context.types.map((type) => (
          <Type
            onClick={() => handleTypeSelect(type)}
            {...{ ...type, showSelect, direction }}
            key={type.name}
            selected={selectedTypes.includes(type.name)}
          />
        ))}
      </GridList>
    </div>
  );
};

export default TypeList;
