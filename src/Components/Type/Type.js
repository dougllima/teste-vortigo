import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import radioOn from "../../assets/img/radio-on.png";
import radioOff from "../../assets/img/radio-off.png";

const useStyle = makeStyles((theme) => ({
  icon: {
    height: "35px",
  },
  iconContainer: {},
  nameContainer: {},
}));

const Type = ({ name, thumbnailImage, showSelect, selected }) => {
  const classes = useStyle();

  return (
    <Grid container direction="row" spacing={0}>
      <Grid item className={classes.iconContainer} xs={3}>
        <img src={thumbnailImage} alt={name} className={classes.icon} />
      </Grid>
      <Grid item xs={7}>
        <Typography>{name}</Typography>
      </Grid>
      {showSelect && (
        <Grid item xs={2}>
          <img
            src={selected ? radioOn : radioOff}
            alt={selected ? "Unselect" : "Select"}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Type;
