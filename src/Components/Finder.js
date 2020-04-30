import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";

import { UserContext } from "./../Contexts/UserContext";
import { PokemonContext } from "./../Contexts/PokemonContext";

import BackHeader from "./BackHeader";
import TypeList from "./Type/TypeList";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    [theme.breakpoints.down("827")]: {
      height: "60px",
      textAlign: "center",
      paddingTop: theme.spacing(2),
    },
  },
  contentContainer: {
    [theme.breakpoints.down("827")]: {
      height: "590px",
    },
  },
}));

const Finder = () => {
  const classes = useStyles();
  const history = useHistory();

  const { username, favType } = useContext(UserContext);
  const { currentList, filterByType, findByName, sort } = useContext(
    PokemonContext
  );

  const [typeFilter, setTypeFilter] = useState([favType]);

  useEffect(() => {
    filterByType(typeFilter);
  }, [typeFilter]);

  if (!username || !favType) {
    history.push("/register");
  }

  const handleTypeSelect = (type) => {
    if (typeFilter.includes(type))
      setTypeFilter((state) => state.filter((e) => e !== type));
    else setTypeFilter((state) => [...state, type]);
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
          <Grid container></Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Finder;
