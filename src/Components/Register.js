import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Drawer,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { UserContext } from "../Contexts/UserContext";

import arrow from "./../assets/img/arrow@2x.png";
import next from "./../assets/img/next.png";
import { Type } from "./Type/Type";

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

  const { username, setUsername, setFavType } = useContext(UserContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [step, setStep] = useState(username ? 2 : 1);

  const lg = useMediaQuery(theme.breakpoints.up("1242"));

  useEffect(() => {
    if (username) setStep(2);
    else setStep(1);
  }, [username]);

  useEffect(() => {
    if (input !== "") setError(null);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleBack = () => {
    if (step === 1) history.push("/");
    else {
      setFavType("");
      setStep(1);
    }
  };

  const handleNext = () => {
    if (input !== "") {
      if (step === 1) {
        setUsername(input);
        setInput("");
      } else {
        setFavType(input);
        //Redirect
      }
    } else {
      setError("Required field");
    }
  };

  const openType = () => {
    setDrawer(true);
  };

  const cleanType = () => {
    setFavType("");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  const renderInputGroup = () => (
    <>
      <Typography variant="h5">
        {step === 1
          ? "First we need to know your name..."
          : "...now tell us wich is your favorite Pokemon type:"}
      </Typography>
      <br />
      {step === 1 ? (
        <TextField
          fullWidth
          label="Name"
          color="secondary"
          value={input}
          onChange={handleChange}
          helperText={error || ""}
          error={Boolean(error) || false}
        />
      ) : (
        <TextField
          fullWidth
          disabled
          label="Pokemon Type"
          color="secondary"
          value={input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {input ? (
                  "X"
                ) : (
                  <Button onClick={input ? cleanType : openType}>
                    <img
                      src={arrow}
                      alt="Select"
                      className={classes.selectArrow}
                    />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
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
        {renderInputGroup()}
        <Drawer anchor={"bottom"} open={drawer} onClose={toggleDrawer(false)}>
          <Type />
        </Drawer>
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
