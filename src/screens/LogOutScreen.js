import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

import { AuthContext } from '../Context';

export const LogOut = () => {
  const { logOut } = React.useContext(AuthContext); //we use the logOut function from authContext

    return (
        <View style = {styles.singOutContainer}>
          <StatusBar backgroundColor = '#0984e3'/>
          <TouchableOpacity onPress={() => logOut()}>
            <Text style = {styles.textContainer}>Press to Log Out</Text>
          </TouchableOpacity>
       </View>
    );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 24,
    color: 'white'
  },
  singOutContainer: {
    flex: 1,
    backgroundColor: '#0984e3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
