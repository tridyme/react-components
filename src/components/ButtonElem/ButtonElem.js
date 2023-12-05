import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@material-ui/core';

export default function ButtonElem({ label, onClick, ...style }) {
  return (
    <Button
      onClick={onClick}
      {...style}>
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