import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    Alert,
    Text, TextInput, Image} from 'react-native'
const Header = ({navigation, title, backgroundColor}) => 
<View style={[styles.header, {backgroundColor}]}>

</View>
const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        alignItems: 'center'
    }
})