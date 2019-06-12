import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    Alert,
    Text, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Header} from './Header'
import {MyButton} from './MyButton'
import Button2 from 'react-native-button'

export default class DetailPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
        this.alertDeletePlace = this.alertDeletePlace.bind(this)
    }
    componentDidMount() {
        this.selectedPlace = this.props.navigation.state.params
        this.setState({
            _id: this.selectedPlace._id,
            name: this.selectedPlace.name,
            description: this.selectedPlace.description
        })
    }
    alertDeletePlace() {
        const {deletePlace} = this.props.navigation.state.params        
        const {_id} = this.state  
        const {goBack} = this.props.navigation 
        Alert.alert(
            'Delete a Place',
            'Delete a Place',
            [              
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {text: 'Yes', onPress: () => {
                    deletePlace(_id)
                    goBack()
              }},
            ],
            {cancelable: false},
          );
    }
    render() {        
        const {name="", description="", _id} = this.state    
        // alert(`this.state = ${JSON.stringify(this.state)}`)
        const {goBack} = this.props.navigation    
        const {savePlace} = this.props.navigation.state.params        
        return <SafeAreaView style={styles.container}>
            <Header 
                backgroundColor="steelblue"
                title="Detail Screen"
                navigation={this.props.navigation}
                />
            <TextInput 
                onChangeText={(text)=>{
                    this.setState({name: text})
                }}
                value={name}
                style={styles.input}>                
            </TextInput>
            <TextInput style={styles.input}
                onChangeText={(text)=>{
                    this.setState({description: text})
                }}
                value={description}
            >                
            </TextInput>
            <View>
                <Button2 style={{ fontSize: 20, color: 'white' }}
                    containerStyle={{ margin: 20, height: 40, 
                        paddingTop: 10,
                        overflow: 'hidden', borderRadius: 4, backgroundColor: 'green' }}
                    onPress={() => {
                        savePlace(_id, name, description)
                        goBack()
                    }}>
                    Save your place
                </Button2>
                <Button2 style={{ fontSize: 20, color: 'white' }}
                    containerStyle={{ margin: 20, height: 40, 
                        paddingTop: 10,
                        overflow: 'hidden', borderRadius: 4, backgroundColor: 'red' }}
                    onPress={this.alertDeletePlace}>
                    Delete this place
                </Button2>                
            </View>
            
        </SafeAreaView>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 100
    },
    detailText: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input: {
        fontSize: 20,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 6,
        marginVertical: 10
    }
    
})
