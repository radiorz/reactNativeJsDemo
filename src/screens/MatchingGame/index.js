import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@rneui/themed';
import Card from './Card';
function MatchingGame({navigation, route}) {
  const tailwind = useTailwind();
  const {theme} = useTheme();

  const [cardSymbolsInRand, setCardSymbolsInRand] = useState([]);
  useEffect(() => {
    const shuffleArray = arr => {
      const newArr = arr.slice();
      for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr;
    };
    const cardSymbols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let newCardSymbols = [...cardSymbols, ...cardSymbols];
    let cardSymbolsInRand = shuffleArray(newCardSymbols);
    setCardSymbolsInRand(shuffleArray(cardSymbolsInRand));
  }, []);
  const [isOpen, setIsOpen] = useState([]);
  useEffect(() => {
    const isOpen = [];
    for (let i = 0; i < cardSymbolsInRand.length; i++) {
      isOpen.push(false);
    }
    setIsOpen(isOpen);
  }, [cardSymbolsInRand]);
  const onCardPress = index => {
    console.log(index);
  };
  return (
    <>
      <View
        style={[
          styles.header,
          tailwind('justify-center items-center'),
          {backgroundColor: theme.colors.grey5},
        ]}>
        <Text style={[styles.heading, tailwind('text-3xl font-bold')]}>
          Matching Game
        </Text>
      </View>
      <View style={[styles.main, {backgroundColor: theme.colors.background}]}>
        <View
          style={[styles.gameBoard, tailwind('justify-center items-center')]}>
          {cardSymbolsInRand.map((symbol, index) => (
            <Card
              key={index}
              onPress={() => onCardPress(index)}
              title={symbol}
              cover="?"
              isShow={isOpen}
            />
          ))}
        </View>
      </View>
      <View
        style={[
          styles.footer,
          tailwind('justify-center items-center'),
          {
            backgroundColor: theme.colors.grey5,
          },
        ]}>
        <Text style={[styles.footerText, tailwind('text-xl')]}>footer</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  heading: {},
  main: {
    flex: 3,
    backgroundColor: '#fff',
  },
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },

  footer: {
    flex: 1,
  },
});
export default MatchingGame;
