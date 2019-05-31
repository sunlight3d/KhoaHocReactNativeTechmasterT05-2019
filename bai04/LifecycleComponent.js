/**
 Test of lifecycle
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

export default class LifecycleComponent extends Component {
  constructor(props) {
    super(props)
    console.log(`${Date.now()} - constructor`)
    this.state = {
      counter: 0
    }
    setInterval(() => {
      this.setState((previousState) => {
        return {
          counter: previousState.counter + 1
        }
      })
    }, 1000)
  }
  componentDidMount() {
    console.log(`${Date.now()} - componentDidMount`)
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //? = optional 
    console.log(`${Date.now()} - shouldComponentUpdate`)
    if(nextState.counter == this.state.counter) {
      return false
    }
    return true
  }
  componentWillUnmount() {
    console.log(`${Date.now()} - componentWillUnmount`)
  }
  render() {        
    console.log(`${Date.now()} - render. Current counter = ${this.state.counter}`)
    return (
      <View style={styles.container}>        
        
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
