import { StyleSheet } from 'react-native';
import Helper from '../helpers';

export const BTN_CLASSES = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
};

export default function (theme) {
  return StyleSheet.create({
    button: {
      flex: 0,
      height: 40,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    [BTN_CLASSES.secondary]: {
      backgroundColor: 'transparent',
      borderWidth: 3,
      borderColor: theme.accent,
    },
    [BTN_CLASSES.secondary + '-label']: {
      color: theme.accent,
    },
    [BTN_CLASSES.primary]: {
      backgroundColor: theme.accent,
    },
    [BTN_CLASSES.primary + '-label']: {
      color: Helper.contrast(theme.primary),
    },
    [BTN_CLASSES.accent]: {
      backgroundColor: 'transparent',
    },
    [BTN_CLASSES.accent + '-label']: {
      color: theme.accent,
      fontSize: 14,
    },
  });
}
