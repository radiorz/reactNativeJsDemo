import React from 'react';
import {StatusBar, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useTailwind, TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';

function App() {
  const tailwind = useTailwind();
  return (
    <>
      {/* <StatusBar /> */}
      <SafeAreaView style={styles.container}>
        {/* 头部 */}
        <View
          style={{
            ...tailwind('flex-1 bg-gray-100 justify-center items-center'),
          }}>
          {/* 头部文字 */}
          <Text style={{...tailwind('font-bold text-3xl')}}>Matching Game</Text>
        </View>
        {/* main部分 */}
        <View style={styles.main}>
          <Text>123</Text>
        </View>
        {/* 底部 */}
        <View style={styles.footer} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    // fontSize: 32,
    // fontWeight: 'bold',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  main: {
    flex: 3,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

const Root = () => (
  <TailwindProvider utilities={utilities}>
    <App />
  </TailwindProvider>
);
export default Root;
