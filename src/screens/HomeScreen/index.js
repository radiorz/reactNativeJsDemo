import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
export default function Home() {
  const tailwind = useTailwind();
  return (
    <>
      <View style={tailwind('justify-center items-center bg-white')}>
        <Text style={tailwind('text-gray-500')}>try tailwind</Text>
      </View>
    </>
  );
}
