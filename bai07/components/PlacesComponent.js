import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    FlatList, 
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl,
    Modal,    
    Text, TextInput, Image} from 'react-native'
    
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from './Header'

export default class PlacesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fakedPlaces: [],
            modalVisible: false,
            refreshing: false
        }        
        this.savePlace = this.savePlace.bind(this)
        this.deletePlace = this.deletePlace.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }    
    componentDidMount() {
        this.getPlacesFromServer()
    }
    getPlacesFromServer = async () => {
        this.setState({refreshing: true})
        let response = await fetch('http://127.0.0.1:3000/products/queryProducts', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }            
          })
          let responseJson = await response.json()
          
          this.setState({refreshing: false})
          if(responseJson.result === "ok") {
              this.setState({fakedPlaces: responseJson.data?responseJson.data: []})
          }          
    }
    async savePlace(id, name, description) {
        alert(`id = ${JSON.stringify(id)}`)
        this.setState({ refreshing: true })
        let response = await fetch('http://127.0.0.1:3000/products/updateProduct', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name, description }),

        })
        let responseJson = await response.json()
        this.setState({ refreshing: false })
        if (responseJson.result === "ok") {
            this.getPlacesFromServer();
        }

    }
    showModal() {
        this.setState({modalVisible: true})
    }
    hideModal() {
        this.setState({modalVisible: false})
    }
    async insertPlace(name, description) {  
        this.setState({refreshing: true})
        let response = await fetch('http://127.0.0.1:3000/products/insertProduct', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description}),

          })
          let responseJson = await response.json()          
          this.setState({refreshing: false})
          if(responseJson.result === "ok") {
              this.getPlacesFromServer();
          }                  
    }    
    async deletePlace(id) {        
        this.setState({refreshing: true})
        let response = await fetch('http://127.0.0.1:3000/products/deleteProduct', {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),

          })
          let responseJson = await response.json()          
          this.setState({refreshing: false})
          if(responseJson.result === "ok") {
              this.getPlacesFromServer();
          }                          
    }
    render() {
        const {navigation} = this.props
        if (this.state.refreshing) {
            return <View style={{
                flex: 1,
                justifyContent: 'center',                
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10
            }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>;
          }
        return <SafeAreaView style={styles.container}>            
            <Modal
                    style={{ width: 300, height: 500, borderRadius: 10, backgroundColor:'red'}}
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                <TouchableOpacity 
                    
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
                onPress={()=> {
                    this.hideModal()
                }}
                >
                    <View style={{                                                                                                                        
                        backgroundColor: 'white',
                        borderRadius: 20
                    }}>   
                    <Text style={{alignSelf: 'center', fontSize: 16, paddingVertical: 15}}>                 
                        Enter your new Place
                    </Text>                 
                    <TextInput
                        onChangeText={(text) => {

                        }}
                        placeholder="Enter new name"
                        // value={name}
                        style={styles.input}>
                    </TextInput>
                    <TextInput
                        onChangeText={(text) => {

                        }}
                        placeholder="Enter new title"
                        // value={name}
                        style={styles.input}>
                    </TextInput>
                        <View style={{flexDirection: 'row', alignSelf:'center'}}>
                            <TouchableOpacity style={styles.button}>
                                <Text>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=> {
                                    this.hideModal()
                                }}
                                style={styles.button}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>                    
                    </View>
                    </TouchableOpacity>
                </Modal>
            <View style={styles.view4}>
            <Header 
                backgroundColor="skyblue"
                title="List of Places"
                screenName="PlacesComponent"
                showModal={this.showModal}
                navigation={navigation}
                />
                <FlatList                    
                    data={this.state.fakedPlaces}                                                                               
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.getPlacesFromServer}
                        />
                      }

                    renderItem={({ item, index }) => <PlaceItem place={item} 
                        savePlace ={this.savePlace}
                        deletePlace ={this.deletePlace}
                        index={index}
                        navigation={navigation}
                        />}
                    keyExtractor={(place, index) => {
                        return place._id
                    }}
                />
            </View>
        </SafeAreaView>
    }
}
const PlaceItem = (props) => {
    //alert(`${JSON.stringify(props)}`)
    const {index} = props
    const {navigate} = props.navigation
    const {name,description,imageUrl} = props.place
    const backgroundColor = (index %2 === 0) ? 'aquamarine': 'papayawhip'
    const pressItem = () => {
        //... = clone 
        /*
            Gia su muon co 2 obj doc lap nhu sau:
            let person = {name: "Hoang", age:30}
            let changedPerson = {name: "Hoang", age:30, email:"aa@gmail.com"}
            => Dung cau lenh:
            let changedPerson = {...person,{email:"aa@gmail.com"}}
            //cach truyen thong
            let changedPerson = {}
            changedPerson.name = person.name
            changedPerson.age = person.age
            changedPerson.email = "aa@gmail.com"

        */
        navigate("DetailPlace", {
            ...props.place, 
            savePlace: props.savePlace,
            deletePlace: props.deletePlace,
        })
    }
    return <TouchableOpacity 
                onPress={pressItem}
                style={[styles.placeItemContainer, 
                {backgroundColor}]}>
        <Image
            source={{ uri: imageUrl }}
            style={styles.placeImage}
        />
        <View style={styles.placeView}>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </View>
    </TouchableOpacity> 
}
const styles = StyleSheet.create({
    container: {
        flex: 100
    },
    placeItemContainer: {
        height: 70,
        flexDirection: 'row', 
        alignItems: 'center'               
    },
    placeImage: {
        width: 50,
        height: 50,
        margin: 10        
    },
    placeView: {
        flexDirection: 'column',
    },
    input: {
        fontSize: 20,
        height: 40,
        width: 300,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',
        paddingHorizontal: 10,
        marginHorizontal: 20,        
        borderRadius: 6,
        marginVertical: 10
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },   
})
