import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

export const ICON_TYPES = {
  feather: 'feather',
  ionicons: 'ionicons'
};
const TYPE_MAPPING = {
  [ICON_TYPES.feather]: Feather,
  [ICON_TYPES.ionicons]: Ionicons
};
export default function Icon({ type, ...rest }) {
  const Model = TYPE_MAPPING[type];
  return <Model {...rest} />;
}
