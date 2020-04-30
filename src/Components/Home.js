import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../Contexts/UserContext";

import { Grid, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import pokemonLogo from "../assets/img/pokemon-logo.png";
import pokemonLogoMd from "../assets/img/pokemon-logo@2x.png";
import pokemonLogoLg from "../assets/img/pokemon-logo@3x.png";

import finder from "../assets/img/finder.png";
import finderMd from "../assets/img/finder@2x.png";
import finderLg from "../assets/img/finder@3x.png";

import pikachu from "../assets/img/pikachu.png";
import pikachuMd from "../assets/img/pikachu@2x.png";
import pikachuLg from "../assets/img/pikachu@3x.png";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: "100%",
  },
  logoContainer: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      height: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50%",
    },
  },
  buttonContainer: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      height: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50%",
    },
  },
  pikachuContainer: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100%",
    },
  },
  pikachu: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  [theme.breakpoints.up("sm")]: {
    pikachu: {
      right: theme.spacing(-1),
    },
  },
  button: {
    [theme.breakpoints.up("lg")]: {
      //TODO: Aumentar Botão
    },
  },
}));

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { username, favType } = useContext(UserContext);

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const imgs = {
    logo: isSm ? pokemonLogo : isLg ? pokemonLogoLg : pokemonLogoMd,
    finder: isSm ? finder : isLg ? finderLg : finderMd,
    pikachu: isSm ? pikachu : isLg ? pikachuLg : pikachuMd,
  };

  const renderLogo = () => (
    <Grid item className={classes.logoContainer} lg={6}>
      <React.Fragment>
        <img src={imgs.logo} alt="Pokémon Logo" />
        <img src={imgs.finder} alt="Finder" />
      </React.Fragment>
    </Grid>
  );

  const renderButton = () => (
    <Grid item className={classes.buttonContainer} lg={6}>
      <Link to={!username || !favType ? "/register" : "/finder"}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
        >
          Let's Go!
        </Button>
      </Link>
    </Grid>
  );

  const renderPikachu = () => (
    <Grid item className={classes.pikachuContainer} lg={6}>
      <img src={imgs.pikachu} alt="Pikachu" className={classes.pikachu} />
    </Grid>
  );

  return (
    <Grid
      className={classes.rootContainer}
      direction={isLg ? "row" : "column"}
      alignItems="stretch"
      spacing={4}
      container
    >
      {renderLogo()}
      {!isLg ? (
        <React.Fragment>
          {renderButton()}
          {renderPikachu()}
        </React.Fragment>
      ) : (
        <Grid container spacing={0}>
          {renderButton()}
          {renderPikachu()}
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
