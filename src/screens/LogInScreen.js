import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

import { AuthContext } from '../Context';

export const LogIn = () => {
    const { logIn } = React.useContext(AuthContext);

    return (
      <KeyboardAvoidingView behaviour = "padding" style = {styles.container}>
        <StatusBar backgroundColor = '#fa8231' />
        <View style = {styles.formContainer}>
          <TextInput
            placeholder = "Username or Email"
            returnKeyType = "next"
            keyboardType = "email-address"
            autoCapitalize = 'none'
            style = {styles.input}
            />
          <TextInput
            placeholder = "Password"
            returnKeyType = "go"
            secureTextEntry
            style = {styles.input}
            />
          <TouchableOpacity style = {styles.buttonContainer} onPress={() => logIn()}>
            <Text style = {styles.buttonTextContainer}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa8231'
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  input: {
    height: 50,
    backgroundColor: '#0984e3',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  buttonContainer: {
    backgroundColor: '#0984e3',
    alignItems: 'center',
    paddingVertical: 15
  },
  buttonTextContainer: {
    color: 'white'
  }
});
