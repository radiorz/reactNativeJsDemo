/**
 * @file:
 * @description:
 */

import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
export default function Space() {
  const tw = useTailwind();
  return <View style={tw('flex-grow')} />;
}
