import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

//This is a component = a "class"

export default class ComponentA extends React.Component {
    constructor() {
        super()
        //init a state, only in "constructor"
        this.state = {
            counter: 0,    
            email: '',                    
        }        
    }
    componentDidMount() {
        //state = "read-write, private"
        //Timer 
        /*
        setInterval(() => {
            this.setState(previousState => {
                return {
                    counter: previousState.counter + 1
                }
            })    
            //1 "setState" => 1 render
        }, 1000);
        */
    }
    render() {
        //JSX 
        //this.props.userName = "dddd" => props is "read-only"
        const {userName} = this.props //destructuring an object
        const {email, counter} = this.state        
        return <View>
            <Text style={styles.text}>
                Hello mr {userName}
            </Text>
            <TextInput 
                style={styles.emailInput}                
                placeholder="Enter your email"
                keyboardType="email-address"
                onChangeText={(typedText)=> {
                    
                    this.setState({
                        email: typedText
                    })
            }}/>
            <Text style={styles.textCounter}>
                Counter: {counter}
            </Text>
            <Text style={styles.text}>
                You typed: {email}
            </Text>
            <Text style={styles.text}>
                You typed: {email}
            </Text>
        </View>
    }
}

//Component as a "function"
/*
const ComponentA = (props) => {
    //Destructuring 
    const {userName} = props
    return (<View>
        <Text style={styles.text}>
            Hello mr {userName}
        </Text>
    </View>)
}
*/
//Component as a "function" with "specific props"
/*
const ComponentA = ({userName}) => {    
    return (<View>
        <Text style={styles.text}>
            Hello mr {userName}
        </Text>
    </View>)
}
export default ComponentA
*/
const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    textCounter: {
        color: 'red',
        fontSize: 25
    },
    emailInput: {
        height: 40,
        fontSize: 25,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        paddingHorizontal: 10
    }
})
