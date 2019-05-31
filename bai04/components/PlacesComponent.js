import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    FlatList, 
    TouchableOpacity,
    Text, TextInput, Image} from 'react-native'
    
import Icon from 'react-native-vector-icons/FontAwesome';

var fakedPlaces = [
    {
        placeId: "1",
        name: "Hanoi",
        title: "Hanoi is center",
        imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/08/28/15/rexfeatures_845638j.jpg',
        numberIfStars: 5
    },
    {
        placeId: "2",
        name: "Ha nam",
        title: "Hanam 12344",
        imageUrl: 'https://i.pinimg.com/345x/b3/33/d1/b333d18ff7c06e6419f9993bb83c8e50.jpg',
        numberIfStars: 2
    },
    {
        placeId: "3",
        name: "Plce 33",
        title: "Plcae 333 is center",
        imageUrl: 'https://i.pinimg.com/345x/b3/33/d1/b333d18ff7c06e6419f9993bb83c8e50.jpg',
        numberIfStars: 4
    },
    {
        placeId: "4",
        name: "place 444",
        title: "Plce 444 is center",
        imageUrl: 'https://i.pinimg.com/345x/b3/33/d1/b333d18ff7c06e6419f9993bb83c8e50.jpg',
        numberIfStars: 5
    }
]
export default class PlacesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fakedPlaces: fakedPlaces
        }        
        this.savePlace = this.savePlace.bind(this)
        this.deletePlace = this.deletePlace.bind(this)
    }    
    savePlace(placeId, name, title) {
        //alert(`${JSON.stringify(this.state)}`)
        //map = clone an "old object" => "new object"
        const updatedPlaces = this.state.fakedPlaces.map(fakedPlace => {
            if(fakedPlace.placeId === placeId) {
                fakedPlace.name = name
                fakedPlace.title = title
            }
            return fakedPlace
        })
        this.setState({
            fakedPlaces: updatedPlaces
        })
        
    }
    deletePlace(placeId) {
        //alert(`${JSON.stringify(this.state)}`)        
        const filteredPlaces = this.state.fakedPlaces.filter(fakedPlace => {            
            return fakedPlace.placeId !== placeId
        })
        this.setState({
            fakedPlaces: filteredPlaces
        })
        
    }
    render() {
        const {navigation} = this.props
        return <SafeAreaView style={styles.container}>            
            <View style={styles.view4}>
                <FlatList
                    data={this.state.fakedPlaces}
                    renderItem={({ item, index }) => <PlaceItem place={item} 
                        savePlace ={this.savePlace}
                        deletePlace ={this.deletePlace}
                        index={index}
                        navigation={navigation}
                        />}
                    keyExtractor={(place, index) => {
                        return place.placeId
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
    const {placeId,name,title,imageUrl,numberIfStars} = props.place
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
            <Text>{title}</Text>
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
    }
    
})
