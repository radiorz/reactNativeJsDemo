/**
 * @file:这是 app.js页面
 * @description: 包括路由, 安全范围,tailwind 设置,主题设置灯
 */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '~/components/NavigatorHeader';
import MatchingGame from '~/screens/MatchingGame';
import Home from '~/screens/HomeScreen';

const Root = createNativeStackNavigator();

function App() {
  return (
    <>
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>
          <Root.Navigator
            screenOptions={{
              header: props => <Header headerProps={props} />,
            }}
            initialRouteName="MatchingGame">
            <Root.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
            <Root.Screen name="MatchingGame" component={MatchingGame} />
          </Root.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
const theme = createTheme({
  Button: {
    raised: true,
  },
});
const TheApp = () => (
  <TailwindProvider utilities={utilities}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </TailwindProvider>
);
export default TheApp;
