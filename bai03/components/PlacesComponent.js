import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    FlatList, 
    TouchableOpacity,
    Text, TextInput, Image} from 'react-native'
    
import Icon from 'react-native-vector-icons/FontAwesome';

const fakedPlaces = [
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
    }
    render() {
        return <SafeAreaView style={styles.container}>            
            <View style={styles.view4}>
                <FlatList
                    data={fakedPlaces}
                    renderItem={({ item, index }) => <PlaceItem place={item} index={index}/>}
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
    const {placeId,name,title,imageUrl,numberIfStars} = props.place
    const backgroundColor = (index %2 === 0) ? 'aquamarine': 'papayawhip'
    const pressItem = () => {
        alert('press item ...')
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
