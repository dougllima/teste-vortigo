import React, { useContext } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";

import { UserContext } from "../../Contexts/UserContext";

import radioOn from "../../assets/img/radio-on.png";
import radioOff from "../../assets/img/radio-off.png";

const useStyle = makeStyles((theme) => ({
  icon: {
    height: "35px",
  },
  iconRow: {
    height: "70px",
    width: "70px",
  },
  title: {
    color: "black",
  },
  titleWrap: {
    marginRight: "0",
  },
  titleBar: {
    paddingTop: "25px",
    background: "0",
  },
  rowContanier: {
    width: "85px",
    height: "90px",
  },
}));

const Type = ({
  name,
  thumbnailImage,
  showSelect,
  selected,
  direction,
  onClick,
}) => {
  const classes = useStyle();

  const renderColumn = () => {
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

  const renderRow = () => {
    return (
      <GridListTile
        onClick={onClick}
        key={name}
        className={classes.rowContanier}
      >
        <img
          src={thumbnailImage}
          alt={name}
          className={classes.iconRow}
          style={{ opacity: selected ? "1" : "0.6" }}
        />
        <GridListTileBar
          title={name}
          classes={{
            root: classes.titleBar,
            title: classes.title,
            titleWrap: classes.titleWrap,
          }}
        />
      </GridListTile>
    );
  };

  return direction === "column" ? renderColumn() : renderRow();
};

export default Type;
