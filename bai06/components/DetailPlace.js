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
            title: ''
        }
        this.alertDeletePlace = this.alertDeletePlace.bind(this)
    }
    componentDidMount() {
        this.selectedPlace = this.props.navigation.state.params
        this.setState({
            placeId: this.selectedPlace.placeId,
            name: this.selectedPlace.name,
            title: this.selectedPlace.title
        })
    }
    alertDeletePlace() {
        const {deletePlace} = this.props.navigation.state.params        
        const {placeId} = this.state  
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
                    deletePlace(placeId)
                    goBack()
              }},
            ],
            {cancelable: false},
          );
    }
    render() {        
        const {name="", title="", placeId} = this.state    
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
                    this.setState({title: text})
                }}
                value={title}
            >                
            </TextInput>
            <View>
                <Button2 style={{ fontSize: 20, color: 'white' }}
                    containerStyle={{ margin: 20, height: 40, 
                        paddingTop: 10,
                        overflow: 'hidden', borderRadius: 4, backgroundColor: 'green' }}
                    onPress={() => {
                        savePlace(placeId, name, title)
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
