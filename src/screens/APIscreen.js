import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default class Api extends Component {

  constructor(){
    super();
      this.state = {
        person: null,
        loaded: true,
        error: null
      }
  }

  //const that takes the url of the api and fetch the data
  getData = (gd) => {
    this.setState({ loaded: false, error: null });
    let url = 'https://api.randomuser.me/?results=60';
    let req = new Request(url, { method: 'GET' });

    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .catch(this.errors)
  }

  //const that logs the data to the screen
  showData = (data) => {
    this.setState({loaded: true, person: data.results});
    console.log(data);
  }

  //const that catches and shows the proper error message
  errors = (err) => {
      this.setState({loaded: true, error: err.message});
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
        <StatusBar backgroundColor = '#0984e3' />
          {!this.state.loaded}
            <TouchableOpacity style = { styles.buttonContainer }  onPress = {this.getData}>
              <Text style =  {styles.buttonTextContainer}> PRESS TO GET DATA </Text>
            </TouchableOpacity>
            {this.state.error && ( <Text style = {styles.errorContainer}> {this.state.error} </Text>)}
            {this.state.person && (this.state.person.map( people => (
              <Text key = {people.dob.date} style = {styles.apitextContainer}>
                {people.name.title} {people.name.first} {people.name.last}
              </Text>
              ))
            )}
      </ScrollView>
      );
  }
}


// screen styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fa8231'
  },
  textContainer: {
    fontSize: 24,
    color: 'white',
  },
  errorContainer:{
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
  apitextContainer: {
    color: 'white',
    fontSize: 20,
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
