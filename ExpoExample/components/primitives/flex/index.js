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
  mx,
  my,
  px,
  py
}) {
  const inlineStyles = {
    flex,
    alignSelf,
    alignItems,
    justifyContent,
    marginHorizontal: mx,
    marginVertical: my,
    paddingHorizontal: px,
    paddingVertical: py
  };
  return <View style={[inlineStyles, style]}>{children}</View>;
}

Flex.defaultProps = {
  children: null,
  style: {},
  flex: 0,
  alignSelf: undefined,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  mx: 0,
  my: 0,
  px: 0,
  py: 0
};

Flex.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  flex: PropTypes.number,
  alignSelf: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  mx: PropTypes.number,
  my: PropTypes.number,
  px: PropTypes.number,
  px: PropTypes.number
};
