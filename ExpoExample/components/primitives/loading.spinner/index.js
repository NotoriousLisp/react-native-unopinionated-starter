import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

export default function LoadingSpinner({ size, color }) {
  return <ActivityIndicator size={size} color={color} />;
}

LoadingSpinner.defaultProps = {
  size: 20,
  color: 'black'
};
LoadingSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
