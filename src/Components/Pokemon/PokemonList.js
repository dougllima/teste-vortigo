import React, { useContext, useMemo, useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import Pokemon from "./Pokemon";

import { PokemonContext } from "./../../Contexts/PokemonContext";

const useStyle = makeStyles((theme) => ({
  listContainer: {
    [theme.breakpoints.down("sm")]: {
      height: "440px",
    },
    [theme.breakpoints.up("md")]: {
      height: "1205px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "1024px",
    },
    overflowY: "scroll",
  },
}));

const PokemonList = ({ typeFilter }) => {
  const classes = useStyle();

  const [search, setSearch] = useState("");
  const [displayList, setDisplayList] = useState([]);

  const { pokemonsByType } = useContext(PokemonContext);

  // Memoise nas listas por filtros de tipo, pra facilitar o load depois
  let memoListByFilter = useMemo(() => {
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

  //Transforma a lista de tipo na lista de exibição
  // (para poder buscar sem afetar a lista já memoizada e não afetar performance)
  useEffect(() => {
    setDisplayList(memoListByFilter);
    if (search !== "") doSearch();
  }, [memoListByFilter]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const doSearch = () => {
    if (search !== "") {
      setDisplayList((state) => {
        let matchs = Object.keys(state).filter((name) =>
          name.toLowerCase().startsWith(search.toLowerCase())
        );

        console.log(matchs);
        return matchs.reduce(
          (acc, key) => ({
            ...acc,
            [key]: state[key],
          }),
          {}
        );
      });
    } else {
      setDisplayList(memoListByFilter);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={doSearch}>
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Grid container className={classes.listContainer}>
        {Object.values(displayList).map((pokemon) => {
          return (
            <Grid item sm={6} md={3} lg={2} key={pokemon.name}>
              <Pokemon {...pokemon} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default PokemonList;
