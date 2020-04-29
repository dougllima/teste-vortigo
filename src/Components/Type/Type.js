import React, { useContext } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import { UserContext } from "../../Contexts/UserContext";

import radioOn from "../../assets/img/radio-on.png";
import radioOff from "../../assets/img/radio-off.png";

const useStyle = makeStyles((theme) => ({
  icon: {
    height: "35px",
  },
  iconContainer: {},
  nameContainer: {},
}));

const Type = ({ name, thumbnailImage, showSelect }) => {
  const classes = useStyle();
  const { favType } = useContext(UserContext);

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
            src={favType === name ? radioOn : radioOff}
            alt={favType === name ? "Unselect" : "Select"}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Type;
