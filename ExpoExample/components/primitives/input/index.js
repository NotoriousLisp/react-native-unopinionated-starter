import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import tinycolor from 'tinycolor2';
import styles from './styles';

export default function Input({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  style,
  color,
  placeholderTextColor,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const inputStyles = [styles.textInput, style, { borderColor: color, color }];
  if (focused) {
    inputStyles.push(styles.focused);
  }
  return (
    <TextInput
      {...props}
      onFocus={() => setFocused(true)}
      onEndEditing={() => setFocused(!focused)}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      selectionColor={color}
      style={inputStyles}
      placeholderTextColor={tinycolor(color)
        .setAlpha(0.75)
        .toRgbString()}
      autoCapitalize='none'
      enablesReturnKeyAutomatically
      underlineColorAndroid={'transparent'}
    />
  );
}

Input.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape({})
};
Input.defaultProps = {
  style: {},
  keyboardType: 'default',
  color: 'white',
  messageColor: 'red',
  placeholder: '',
  placeholderTextColor: 'hsla(0, 0%, 100%, 0.8)'
};
