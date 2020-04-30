import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TypeDrawer from "./TypeDrawer";
import BackHeader from "../BackHeader";
import { UserContext } from "../../Contexts/UserContext";

import next from "./../../assets/img/next.png";
import RegisterInput from "./RegisterInput";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    textAlign: "center",
  },
  textContainer: {
    height: "163px",
  },
  inputContainer: {
    height: "350px",
    padding: theme.spacing(2, 6) + "!important",
  },
  nextContainer: {
    height: "123px",
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

  const lg = useMediaQuery(theme.breakpoints.up("1242"));

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
      direction={lg ? "row" : "column"}
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
          <img src={next} alt="Next" onClick={handleNext} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
