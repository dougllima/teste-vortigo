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
  [theme.breakpoints.down("827")]: {
    logoContainer: {
      textAlign: "center",
      height: "40vh",
    },
    buttonContainer: {
      textAlign: "center",
      height: "20vh",
    },
    footerContainer: {
      position: "relative",
      height: "40vh",
    },
    pikachu: {
      position: "absolute",
      bottom: 0,
      right: 0,
    },
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

  return (
    <Grid
      container={true}
      direction={sm ? "column" : "row"}
      alignItems="stretch"
      spacing={4}
    >
      <Grid item className={classes.logoContainer}>
        <img src={imgs.logo} alt="Pokémon Logo" />
        <img src={imgs.finder} alt="Finder" />
      </Grid>
      <Grid item className={classes.buttonContainer}>
        {/* Não deixei o botão tão largo por opção pessoal mesmo, prefiro assim */}
        <Button variant="contained" color="primary" disableElevation>
          Let's Go!
        </Button>
      </Grid>
      <Grid item className={classes.footerContainer}>
        <img src={imgs.pikachu} alt="Pikachu" className={classes.pikachu} />
      </Grid>
    </Grid>
  );
};

export default Home;
