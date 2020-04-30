import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";

import arrow from "./../assets/img/arrow@2x.png";

const useStyles = makeStyles((theme) => ({
  arrow: {
    transform: "rotate(270deg)",
  },

  backContainer: {
    height: "7%",
    textAlign: "left",
    marginTop: theme.spacing(2),
  },
}));

const BackHeader = ({ handleBack }) => {
  const classes = useStyles();

  return (
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
  );
};

export default BackHeader;
