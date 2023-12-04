import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  select: {
    // margin: theme.spacing(1),
    maxWidth: 350,
    border: '0px'
  }
}));

const RadioElem = ({
  defaultValue,
  title,
  list,
  onClick,
  style,
}) => {
  //const classes = useStyles();

  const classes = {};
  return (
    <div>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={defaultValue} name="radio-buttons-group" style={style}>
        {list.map((option) => (
          <FormControlLabel value={option.value} onClick={(event) => onClick(event)} control={<Radio size='small' color ='primary' />} label={option.label} />
        ))}
      </RadioGroup>
    </div>

  );
};

export default RadioElem;