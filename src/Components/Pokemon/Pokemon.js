import React from "react";
import { Card, CardHeader, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  img: {
    height: "50px",
    width: "50px",
  },
}));

const Pokemon = (pokemon) => {
  const classes = useStyle();
  return (
    <Card>
      <CardHeader
        avatar={
          <img
            src={pokemon.thumbnailImage}
            alt={pokemon.name}
            className={classes.img}
          />
        }
        title={pokemon.name}
        subheader={pokemon.number}
      />
    </Card>
  );
};

export default Pokemon;
