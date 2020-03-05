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

  getData = (gd) => {
    this.setState({ loaded:false, error:null });
    let url = 'https://api.randomuser.me/?results=60';
    let req = new Request(url, { method: 'GET' });

    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .catch(this.errors)
  }

  showData = (data) => {
    this.setState({loaded:true, person: data.results});
    console.log(data);
  }

  errors = (err) => {
      this.setState({loaded: true, error: err.message});
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
        <StatusBar backgroundColor = '#45aaf2' />
        {!this.state.loaded}
              <TouchableOpacity style = { styles.buttonContainer }  onPress = {this.getData}>
                <Text style =  {styles.buttonTextContainer}>PRESS TO GET DATA</Text>
              </TouchableOpacity>
                {this.state.error && ( <Text style = {styles.errorContainer}> {this.state.error} </Text>
                )}
                {this.state.person && (
                  this.state.person.map( people => (
                    <Text key = {people.dob.date} style = {styles.apitextContainer}>
                    {people.name.title} {people.name.first} {people.name.last}
                    </Text>
                  ))
                )}
        </ScrollView>
      );
  }
}

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
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#45aaf2',
    alignItems: 'center',
    paddingVertical: 15
  },
  buttonTextContainer: {
    color: 'white'
  }
});
