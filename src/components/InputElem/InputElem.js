import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Typography,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
import './InputElem.css';
import { NumericFormat } from 'react-number-format';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  input: {
    color: 'blue',
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  },
}));

const InputElem = ({
  data,
  onChange,
  props, 
  style, 
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
      // variant="outlined"
      >
        <div className={classes.label}>{data.description}</div>
        <div style={{display:'flex', alignItems :'center'}}>
        {typeof data.value === "number" ? 
        (
         
          <NumericFormat
            type="text"
            style={{width : '100%', color: props.disabled ? 'black' : '#0082DE' }}
            onChange={onChange}
            value={data.value}
            disabled = {props.disabled}
          />
        ) :
        (
          <Input
            style={{ border: 0, color: "#0082DE", textAlign: 'center' }}
            type="text"
            onChange={onChange}
            value={data.value}
            disableUnderline={true}
          />
        )
          }
          <Typography style={{marginLeft:'1rem'}}>{data.unit}</Typography>
          {!props.disableInputAdornment && (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                {data.text}
                <ToolTips
                  description={data.description}
                  target={data.text}
                  color = {style.toolTipsColor}
                />
              </InputAdornment>
              )}
        </div>
       
        {/* <InputLabel htmlFor="outlined-adornment-amount">{data.description}</InputLabel>
        <Input
          className={classes.input}
          value={data.value}
          disableUnderline = {props.disableUnderline}
          disabled = {props.disabled}
          inputProps={{ style: style }}
          startAdornment={
            !props.disableInputAdornment && (
            <InputAdornment
              position="start"
              className={classes.inputAdornment}
            >
              {data.text}
              <ToolTips
                description={data.description}
                target={data.text}
                color = {style.toolTipsColor}
              />
            </InputAdornment>
            )
          }
          endAdornment={<InputAdornment position="end">{data.unit}</InputAdornment>}
          onChange={onChange}
        /> */}
      </FormControl>
    </div>
  );
};


InputElem.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

InputElem.defaultProps = {
  onChange: undefined,
};

export default InputElem;
