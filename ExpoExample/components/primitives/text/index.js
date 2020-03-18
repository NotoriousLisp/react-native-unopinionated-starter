import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Text({ className, color, mt, mr, mb, ml, style, children }) {
  const inline = {
    color,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml
  };
  return <RNText style={[styles[className], inline, style]}>{children}</RNText>;
}

Text.defaultProps = {
  className: 'p',
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  style: {},
  color: 'black',
  children: ''
};

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  style: PropTypes.shape({}),
  children: PropTypes.node
};
