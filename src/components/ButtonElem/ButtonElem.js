import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from '@mui/material';

export default function ButtonElem({ label, backgroundColor, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={backgroundColor && { backgroundColor }}>
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