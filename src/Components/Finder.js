import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";

import { UserContext } from "./../Contexts/UserContext";

import BackHeader from "./BackHeader";
import TypeList from "./Type/TypeList";
import PokemonList from "./Pokemon/PokemonList";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      height: "60px",
      textAlign: "center",
      paddingTop: theme.spacing(2),
    },
  },
  contentContainer: {
    [theme.breakpoints.down("md")]: {
      height: "590px",
    },
  },
}));

const Finder = () => {
  const classes = useStyles();
  const history = useHistory();

  const { username, favType } = useContext(UserContext);

  const [typeFilter, setTypeFilter] = useState([favType]);

  if (!username || !favType) {
    history.push("/register");
  }

  const handleTypeSelect = (type) => {
    if (typeFilter.includes(type.name))
      setTypeFilter((state) => state.filter((e) => e !== type.name));
    else setTypeFilter((state) => [...state, type.name]);
  };

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Grid container direction="column">
      <BackHeader {...{ handleBack }} />
      <Grid item className={classes.titleContainer}>
        <Typography variant="h4">Pokemon Finder</Typography>
      </Grid>
      <Grid item>
        <Paper className={classes.contentContainer}>
          <TypeList
            showSelect={true}
            direction="row"
            selectedTypes={typeFilter}
            handleTypeSelect={handleTypeSelect}
          />
          <PokemonList typeFilter={typeFilter} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Finder;
