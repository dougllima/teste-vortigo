import React, { useContext, useMemo } from "react";
import { Grid, makeStyles } from "@material-ui/core";

import Pokemon from "./Pokemon";

import { PokemonContext } from "./../../Contexts/PokemonContext";

const useStyle = makeStyles((theme) => ({
  listContainer: {
    maxHeight: "500px",
    overflowY: "scroll",
  },
}));

const PokemonList = ({ typeFilter }) => {
  const classes = useStyle();

  const { pokemonsByType } = useContext(PokemonContext);

  var memoList = useMemo(() => {
    if (pokemonsByType) {
      let unsortedList = {};
      typeFilter.forEach((e) => {
        unsortedList = { ...unsortedList, ...pokemonsByType[e] };
      });

      let sortedKeys = Object.keys(unsortedList).sort();

      let result = sortedKeys.reduce(
        (acc, key) => ({
          ...acc,
          [key]: unsortedList[key],
        }),
        {}
      );
      return result;
    }
  }, [typeFilter, pokemonsByType]);

  return (
    <Grid container className={classes.listContainer}>
      {Object.values(memoList).map((pokemon) => {
        return (
          <Grid item xs={6} key={pokemon.name}>
            <Pokemon {...pokemon} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default PokemonList;
