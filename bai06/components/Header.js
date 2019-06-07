import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    Alert,
    Text, TextInput, Image} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export const Header = ({navigation, title, backgroundColor, screenName, showModal}) => 
<View style={[styles.header, {backgroundColor}]}>
{screenName !== "PlacesComponent" ? 
    <TouchableHighlight style={styles.button}
        onPress={()=> {
            navigation.goBack()
        }}
        >
        <Text style={styles.title}>Back</Text>
    </TouchableHighlight>:
    <TouchableHighlight />
}
    <Text style={styles.title}>
        {title}
    </Text>
    {
        screenName==="PlacesComponent" ? 
            <TouchableHighlight style={styles.button}
                onPress={()=> {
                    showModal()
                }}
            >
                <Text>Add</Text>
            </TouchableHighlight>:<TouchableHighlight />
    }
    
</View>
const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingLeft: 10,                
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        width: 50,        
        alignSelf:'center'
    },    
    title: {
        fontSize: 16,
        alignItems: 'center',
        color: 'white',
        alignSelf:'center'
    }
})
