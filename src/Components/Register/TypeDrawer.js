import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";
import TypeList from "../Type/TypeList";

const useStyles = makeStyles((theme) => ({
  drawer: {
    maxHeight: "60%",
  },
}));

const TypeDrawer = (props) => {
  const classes = useStyles();
  const { drawer, setDrawer, handleTypeSelect } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={drawer}
      onClose={toggleDrawer(false)}
      classes={{ paper: classes.drawer }}
    >
      <Typography variant="h5">Select your favorite pokémon type</Typography>
      <TypeList handleTypeSelect={handleTypeSelect} showSelect={true} />
    </Drawer>
  );
};

export default TypeDrawer;
