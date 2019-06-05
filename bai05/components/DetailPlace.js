import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    Alert,
    Text, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header} from './Header'

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
                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    margin: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40
                }}
                    onPress={() => {
                        savePlace(placeId, name, title)
                        goBack()
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Save your place</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    margin: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40
                }}
                    onPress={this.alertDeletePlace}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Delete this place</Text>
                </TouchableOpacity>

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
