import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TypeDrawer from "./TypeDrawer";
import { UserContext } from "../../Contexts/UserContext";

import arrow from "./../../assets/img/arrow@2x.png";
import next from "./../../assets/img/next.png";
import RegisterInput from "./RegisterInput";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    textAlign: "center",
  },
  backContainer: {
    height: "100px",
    textAlign: "left",
    marginTop: theme.spacing(2),
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
  arrow: {
    transform: "rotate(270deg)",
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
      else setError({ nameError: "Required Field" });
    } else {
      if (favType !== "") history.push("/finder");
      else setError({ typeError: "Required Field" });
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
    <TypeDrawer {...{ drawer, setDrawer, handleTypeSelect }}></TypeDrawer>
  );

  return (
    <Grid
      container
      spacing={4}
      alignItems="stretch"
      direction={lg ? "row" : "column"}
      className={classes.rootContainer}
    >
      <Grid item className={classes.backContainer}>
        <Button>
          <img
            src={arrow}
            alt={"Back"}
            className={classes.arrow}
            onClick={handleBack}
          />
        </Button>
      </Grid>
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
