import React, { useState, useContext, useEffect } from "react";

import { UserContext } from "../../Contexts/UserContext";

import {
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";

const RegisterInput = ({ step, openType, error }) => {
  const { username, favType, setUsername, setFavType } = useContext(
    UserContext
  );

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const CleanType = () => {
    setFavType("");
  };

  return (
    <>
      <Typography variant="h5">
        {step === 1
          ? "First we need to know your name..."
          : "...now tell us wich is your favorite Pokemon type:"}
      </Typography>
      <br />
      <TextField
        fullWidth
        disabled={Boolean(step === 2)}
        label={step === 1 ? "Name" : "Pokemon Type"}
        color="secondary"
        value={step === 1 ? username : favType}
        onChange={step === 1 ? handleNameChange : null}
        helperText={error || ""}
        error={Boolean(error) || false}
        InputProps={
          step === 2
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    {favType ? (
                      <Button onClick={CleanType}>X</Button>
                    ) : (
                      <Button onClick={openType}>></Button>
                    )}
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </>
  );
};

export default RegisterInput;
