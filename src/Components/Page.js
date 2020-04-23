import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";

import bg from "./../assets/img/bg.png";
import bg2 from "./../assets/img/bg@2x.png";
import bg3 from "./../assets/img/bg@3x.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "no-repeat center",
    [theme.breakpoints.down("827")]: {
      maxWidth: "414px",
      backgroundImage: `url(${bg})`,
    },
    [theme.breakpoints.up("828")]: {
      maxWidth: "828px",
      backgroundImage: `url(${bg2})`,
    },
    [theme.breakpoints.up("1242")]: {
      maxWidth: "1242px",
      backgroundImage: `url(${bg3})`,
    },
  },
}));

const Page = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </Container>
  );
};

export default Page;
