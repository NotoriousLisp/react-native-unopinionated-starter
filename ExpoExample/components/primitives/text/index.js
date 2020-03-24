import React from 'react';
import { Text as RNText, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Text({ className, color, style, children, onPress }) {
  const inline = { color };
  const body = <RNText style={[styles[className], inline, style]}>{children}</RNText>;
  if (!onPress) {
    return body;
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {body}
    </TouchableOpacity>
  );
}

Text.defaultProps = {
  className: 'p',
  style: {},
  color: 'black',
  children: '',
  onPress: null
};

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  onPress: PropTypes.func
};
