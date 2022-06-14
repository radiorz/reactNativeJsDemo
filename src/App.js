import React from 'react';
import {StatusBar, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import {utilities} from '../tailwind.json';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <StatusBar /> */}
      <SafeAreaView style={styles.container}>
        {/* 头部 */}
        <View style={styles.header}>
          <Text>Matching Game</Text>
        </View>
        {/* 主要成分 */}
        {/* <View style={styles.main} /> */}
        <Home />
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
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
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
