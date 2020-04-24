import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Button } from "@material-ui/core";

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
    [theme.breakpoints.down("1241")]: {
      height: "40%",
    },
    [theme.breakpoints.up("1242")]: {
      height: "50%",
    },
  },
  buttonContainer: {
    textAlign: "center",
    [theme.breakpoints.down("1241")]: {
      height: "20%",
    },
  },
  pikachuContainer: {
    position: "relative",
    [theme.breakpoints.down("1241")]: {
      height: "40%",
    },
  },
  pikachu: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  [theme.breakpoints.up("828")]: {
    pikachu: {
      right: theme.spacing(-1),
    },
  },
  button: {
    [theme.breakpoints.up("1242")]: {},
  },
}));

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  //Verifica se o tamanho da tela corresponde aos breakpoints das imagens
  const sm = useMediaQuery(theme.breakpoints.down("827"));
  // Não precisa verificar o MD, pois quando passar do SM ele vai ser sempre verdadeiro (até quando for LG)
  //const md = useMediaQuery(theme.breakpoints.up("828"));
  const lg = useMediaQuery(theme.breakpoints.up("1242"));

  const imgs = {
    logo: sm ? pokemonLogo : lg ? pokemonLogoLg : pokemonLogoMd,
    finder: sm ? finder : lg ? finderLg : finderMd,
    pikachu: sm ? pikachu : lg ? pikachuLg : pikachuMd,
  };

  const renderLogo = () => (
    <Grid item className={classes.logoContainer} direction="column" lg={6}>
      <React.Fragment>
        <img src={imgs.logo} alt="Pokémon Logo" />
        <img src={imgs.finder} alt="Finder" />
      </React.Fragment>
    </Grid>
  );

  const renderButton = () => (
    <Grid item className={classes.buttonContainer} lg={6}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
      >
        Let's Go!
      </Button>
    </Grid>
  );

  const renderPikachu = () => (
    <Grid item className={classes.pikachuContainer} lg={6}>
      <img src={imgs.pikachu} alt="Pikachu" className={classes.pikachu} />
    </Grid>
  );

  return (
    <Grid
      container={true}
      direction={lg ? "row" : "column"}
      alignItems="stretch"
      spacing={4}
      className={classes.rootContainer}
    >
      {renderLogo()}
      {!lg ? (
        <React.Fragment>
          {renderButton()}
          {renderPikachu()}
        </React.Fragment>
      ) : (
        <Grid container lg={12} spacing={0}>
          {renderButton()}
          {renderPikachu()}
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
