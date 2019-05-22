/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {sum, 
  sayHello,
  square} from './calculations/calculations'

export default class App extends Component {
  componentDidMount() {
    //alert(`tong = ${sum(3, 5)}`) //string concatenation
    //alert(`binh phuong  = ${square(8)}`)
    sayHello()
  }
  render() {    
    return (
      <View style={styles.container}>
        <Text style={styles.myText}>Hello
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  myText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  }  
});
