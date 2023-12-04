import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControlLabel,
  Checkbox,
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  select: {
    // margin: theme.spacing(1),
    maxWidth: 350,
    border: '0px'
  }
}));

const CheckBoxElem = ({
  label, 
  onClick,
  checked, 
}) => {
  //const classes = useStyles();

  const classes = {};
  return (
    <FormControlLabel
    label= {label}
    labelPlacement='end'
    control={<Checkbox size="small" color="primary" />}
    onClick={onClick}
    checked= {checked}
  />

  );
};

export default CheckBoxElem;