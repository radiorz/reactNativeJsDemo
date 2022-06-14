import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
export default function Home() {
  const tailwind = useTailwind();
  return (
    <>
      <View style={tailwind('flex-1')}>
        <Text style={tailwind('text-white')}>try tailwind</Text>
      </View>
    </>
  );
}
