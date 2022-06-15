import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header as HeaderRNE, Icon, useTheme} from '@rneui/themed';
import {useTailwind} from 'tailwind-rn';
export default function NavigationHeader({headerProps}) {
  const tailwind = useTailwind();
  const {theme} = useTheme();
  return (
    <>
      <HeaderRNE
        leftComponent={{
          icon: 'arrow-back',
          color: theme.colors.white,
          onPress: () => headerProps.navigation?.goBack(),
        }}
        centerComponent={{
          text: headerProps.route.name,
          style: {
            color: theme.colors.white,
            ...tailwind('text-2xl'),
          },
        }}
      />
      <Text>{JSON.stringify(headerProps)}</Text>
    </>
  );
}
