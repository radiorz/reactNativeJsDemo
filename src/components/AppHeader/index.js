/**
 * @file: 现在是为主页
 * @description: 现在是为人员具体信息页 + 按钮
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useTheme} from '@rneui/themed';
// 组件
import AppTitle from '../AppTitle';
import Space from '../Space';
import TheTime from '../TheTime';
import MqttStatus from '../MqttStatus';
export default function AppHeader() {
  const tw = useTailwind();
  const {theme} = useTheme();
  return (
    <View
      style={[
        tw('flex flex-row justify-between items-center flex-nowrap p-3'),
        {backgroundColor: theme.colors.primary},
      ]}>
      <AppTitle />
      <Space />
      <TheTime style={tw('text-white text-xl')} />
      <MqttStatus />
    </View>
  );
}
