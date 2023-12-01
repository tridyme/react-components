import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, styled
} from '@material-ui/core';

export default function ButtonElem({ label, style, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={style}>
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