import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, ButtonGroup, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const useStyles = makeStyles((theme) => ({
  search: {
    height: "3em",
    // padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    // marginBotton: "2em",
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    border: "none",
    color: "black",
    // "&:hover": {
    //   backgroundColor: "#E6464D",
    //   color: "white",
    // },
    // "&:disabled": {
    //   border: "none",
    // },
  },
}));

const SearchBarElem = ({
  input,
  onChange,
  placeholder,
  onSearch,
  onReset,
  disabled
}) => {
  const classes = useStyles();

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        onSearch();
      }
    }
  };

  const onSearchCheck = () => {
    if (input.length > 0) {
      onSearch();
    }
  };

  return (
    // <Input
    //     value={keyword}
    //     placeholder={placeholder}
    //     onChange={(e) => onChange(e.target.value)}
    //     className={className}
    // />
    <Paper component="form" className={classes.search}>
      <InputBase
        disabled={disabled}
        value={input}
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <ButtonGroup aria-label="search button group">
        <Button
          className={classes.iconButton}
          disabled={disabled}
          onClick={onSearchCheck}
        >
          <SearchIcon />
        </Button>
        <Button
          className={classes.iconButton}
          disabled={disabled}
          onClick={onReset}
        >
          <RotateLeftIcon />
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default SearchBarElem;
