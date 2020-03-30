import React from 'react';
import { Text as RNText, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function Text({ size, color, style, children, onPress }) {
  const inline = { color, fontSize: size };
  const body = <RNText style={[inline, style]}>{children}</RNText>;
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
  size: 14,
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
