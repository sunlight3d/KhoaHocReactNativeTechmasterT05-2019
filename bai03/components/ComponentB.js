import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
//This is a component
export default class ComponentB extends Component {
    render() {
        //JSX 
        //this.props.userName = "dddd" => props is "read-only"
        const {petName} = this.props //destructuring an object
        return <View>
            <Text style={styles.text}>
                Hello mr {petName}
            </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})