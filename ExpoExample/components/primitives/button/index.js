import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { useThemeContext } from 'app/state/theme.state';
import makeStyles, { BTN_CLASSES } from './styles';

export { BTN_CLASSES };

export default function Button({
  children,
  label,
  style,
  onPress,
  className,
  small,
  big,
  disabled
}) {
  const [theme] = useThemeContext();
  const styles = makeStyles(theme);
  let body = children;
  const buttonStyles = [styles.button, styles[className], style];
  const labelStyles = [styles.label, styles[className + '-label']];
  if (small) {
    buttonStyles.push({ height: 30, paddingHorizontal: 10 });
    labelStyles.push({ fontSize: 12 });
  }
  if (big) {
    buttonStyles.push({ height: 70, paddingHorizontal: 20 });
    labelStyles.push({ fontSize: 22 });
  }
  if (disabled) {
    buttonStyles.push({
      backgroundColor: tinycolor(theme.accent)
        .lighten(20)
        .toRgbString()
    });
  }
  console.log('rendering button ', disabled);
  if (!body) {
    body = <Text style={labelStyles}>{label}</Text>;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={buttonStyles}
      onPress={() => (disabled ? null : onPress())}
    >
      {body}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  children: null,
  className: BTN_CLASSES.primary,
  label: '',
  onPress: () => null,
  small: null,
  style: {}
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func,
  small: PropTypes.bool,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool
};
