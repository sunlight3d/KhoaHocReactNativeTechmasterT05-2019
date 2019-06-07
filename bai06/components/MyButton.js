import React, {Component} from 'react'
import {StyleSheet,
    View,
    Platform, TouchableOpacity,
    SafeAreaView,
    Button,
    Alert,
    Text, TextInput, Image} from 'react-native'

export const MyButton = ({action, title}) => {
    if(Platform.OS === 'ios') {
        return(
        <TouchableOpacity style={{
            backgroundColor: 'green',
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
        }}
            onPress={() => {
                action()
                
            }}>
            <Text style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold'
            }}>{title}</Text>
        </TouchableOpacity>)
    } else {
        return (
            <View style={{
                backgroundColor: 'green',
                marginHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
                height: 40
            }}>
                <Button
                    title={title}
                    onPress={() => {
                        action()
                    }}>

                </Button>
            </View>)            
    }
}