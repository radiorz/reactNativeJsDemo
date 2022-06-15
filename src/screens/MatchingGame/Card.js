import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
export default function Card({title = '', cover = '?', isShow = false}) {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[styles.buttonText, tailwind('text-2xl')]}>
        {isShow ? title : cover}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (Dimensions.get('window').width - 100 * 4) / (4 * 2),
  },
  buttonText: {},
});
