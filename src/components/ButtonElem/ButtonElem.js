import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from '@material-ui/core';

export default function ButtonElem({ label, backgroundColor, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={backgroundColor && { backgroundColor: "red" }}>
      {label}
    </Button>
  );
}

ButtonElem.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonElem.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};