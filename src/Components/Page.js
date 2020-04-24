import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";

import bg from "./../assets/img/bg.png";
import bgMd from "./../assets/img/bg@2x.png";
import bgLg from "./../assets/img/bg@3x.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "no-repeat center",
    [theme.breakpoints.down("827")]: {
      maxHeight: "736px",
      maxWidth: "414px",
      backgroundImage: `url(${bg})`,
      backgroundSize: "414px 736px",
    },
    [theme.breakpoints.up("828")]: {
      maxHeight: "1472px",
      maxWidth: "828px",
      backgroundImage: `url(${bgMd})`,
      backgroundSize: "828px 1472px",
    },
    [theme.breakpoints.up("1242")]: {
      maxHeight: "1242px",
      maxWidth: "2208px",
      backgroundImage: `url(${bgLg})`,
      backgroundSize: "2208px 1242px",
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
