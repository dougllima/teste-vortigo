import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TypeDrawer from "./TypeDrawer";
import BackHeader from "../BackHeader";
import { UserContext } from "../../Contexts/UserContext";

import next from "./../../assets/img/next.png";
import nextx2 from "./../../assets/img/next@2x.png";
import nextx3 from "./../../assets/img/next@3x.png";

import RegisterInput from "./RegisterInput";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: "100%",
    textAlign: "center",
  },
  textContainer: {
    [theme.breakpoints.down("md")]: {
      height: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "30%",
    },
  },
  inputContainer: {
    [theme.breakpoints.down("md")]: {
      height: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "40%",
    },
  },
  nextContainer: {
    [theme.breakpoints.down("md")]: {
      height: "25%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "15%",
    },
  },
  selectArrow: {
    transform: "rotate(180deg)",
  },
}));

const Register = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();

  const { username, favType, setFavType } = useContext(UserContext);

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [drawer, setDrawer] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const nextImg = isSm ? next : isLg ? nextx3 : nextx2;

  const handleNext = () => {
    if (step === 1) {
      if (username !== "") setStep(2);
      else setError("Required Field");
    } else {
      if (favType !== "") history.push("/finder");
      else setError("Required Field");
    }
  };

  const handleBack = () => {
    if (step === 1) {
      history.push("/");
    } else {
      setStep(1);
    }
  };

  const openType = () => {
    setDrawer(true);
  };

  const handleTypeSelect = (type) => {
    setFavType(type.name);
  };

  const renderDrawer = () => (
    <TypeDrawer
      {...{ drawer, setDrawer, handleTypeSelect, favType }}
    ></TypeDrawer>
  );

  return (
    <Grid
      container
      spacing={4}
      alignItems="stretch"
      direction={"column"}
      className={classes.rootContainer}
    >
      <BackHeader {...{ handleBack }} />
      <Grid item className={classes.textContainer}>
        <Typography variant="h4">
          {step === 1
            ? "Let's meet each other first?"
            : `Hello, trainer ${username}`}
        </Typography>
      </Grid>
      <Grid item className={classes.inputContainer}>
        <RegisterInput {...{ step, openType, error, setError }} />
        {renderDrawer()}
      </Grid>
      <Grid item className={classes.nextContainer}>
        <Button>
          <img src={nextImg} alt="Next" onClick={handleNext} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
