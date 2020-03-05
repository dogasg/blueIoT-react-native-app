import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

export const Splash = () => (
  <View style = { styles.splashContainer}>
    <StatusBar backgroundColor = '#0984e3'/>
    <Text style = { styles.textContainer }>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 24,
    color: 'white'
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#0984e3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
