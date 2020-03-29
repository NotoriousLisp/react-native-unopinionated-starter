import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function Flex({
  children,
  style,
  flex,
  alignSelf,
  alignItems,
  justifyContent,
  column
}) {
  const inlineStyles = {
    flex,
    alignSelf,
    alignItems,
    justifyContent,
    flexDirection: column ? 'column' : 'row'
  };
  return <View style={[inlineStyles, style]}>{children}</View>;
}

Flex.defaultProps = {
  children: null,
  style: {},
  flex: 0,
  flexShrink: 0,
  alignSelf: undefined,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  column: false
};

Flex.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  flex: PropTypes.number,
  alignSelf: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  column: PropTypes.bool
};
