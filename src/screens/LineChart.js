import React from 'react';
import {Text ,View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit'; //the library that contains a lot of charts

export const LineKit = () => {
  const screenWidth = Dimensions.get("window").width; //taking screen's width dimension
  const screenHeight = Dimensions.get("window").height; //taking screen's height dimension

  //function that creates the data needed to make the line chart
  //the color is for the line
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: [
      {
        data: [299.38, 287.8, 245.67, 239.86, 237.03, 196.59, 195.22, 203.09, 218.03, 220],
        color: (opacity = 1) => `white`
      }
    ]
  };

  //configuration of line chart
  const chartConfig = {
    backgroundGradientFrom: "#fa8231",
    backgroundGradientTo: "#fa8231",
    decimalPlaces: 2,
    color: (opacity = 1) => `white`,
    labelColor: (opacity = 1) => `white`,
  };


  return(
    <View>
      <StatusBar backgroundColor = '#fa8231' />
      <View>
        <Text style = {styles.textContainer}> Greece's GDP 2010 - 2019 (in Billions) </Text>
      </View>
        <LineChart //Styling and configuration of LineChart
          data = { data }
          withShadow = { false }
          withInnerLines = { false }
          yAxisLabel = "€"
          segments = { 10 }
          width = { screenWidth }
          height = { screenHeight }
          chartConfig = { chartConfig }
        />
    </View>

  )

};

const styles = StyleSheet.create({
  textContainer: {
    height: 75,
    padding: 20,
    backgroundColor: '#fa8231',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
});
