import React, { Component, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { stringify } from "querystring";
import { render } from "@testing-library/react";

const baseUrl = "https://mhw-db.com";
const log = console.log;

interface MonsterProps {
  monsters: Monster[];
}

export const MonsterService: React.FC<MonsterProps> = ({ monsters }) => {
  const fetchMonsters = () => {
    let url = `${baseUrl}/monsters`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        log(data);
      })
      .catch((err) => log(err));
  };

  fetchMonsters();
  
  return (
    <div>
      <h1>Monster Component</h1>
    </div>
  );
};

export default MonsterService;
