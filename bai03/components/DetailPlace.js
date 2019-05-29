import React, {Component} from 'react'
import {StyleSheet,
    View,
    SafeAreaView,
    Button,
    Text, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DetailPlace extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Image style={styles.petImage} source={require('../images/pet.jpeg')}>

                </Image>
            </View>
            <View style={styles.view2}>
                <View style={styles.view21}>
                    <Text style={styles.textPlaceName}>
                        Autumn in Sweden
                    </Text>
                    <Text style={styles.textPlaceTitle}>
                        This is nice place
                    </Text>
                </View>
                <View style={styles.view22}>
                    <Text style={styles.numberOfStars}>20</Text>
                    <Icon name="star" size={20} color="yellow" />                    
                </View>
            </View>
            
            
            <View style={styles.view3}>
                <View style={styles.viewCall}>
                    <Icon name="star" size={20} color="yellow" />
                    <Text style={styles.textCall}>Call</Text>
                </View>
                <View style={styles.viewRouter}>
                    <Icon name="star" size={20} color="yellow" />
                    <Text style={styles.textCall}>Router</Text>
                </View>
                <View style={styles.viewShare}>
                    <Icon name="star" size={20} color="yellow" />
                    <Text style={styles.textCall}>Share</Text>
                </View>
            </View>
            <View style={styles.view4}>

            </View>
        </SafeAreaView>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 100
    },
    view1: {
        flex: 35,
        backgroundColor: 'red',
    },
    petImage: {
        width: undefined,
        flex: 1,
    },
    view2: {
        flex: 15,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view21: {
        width: 200,
        flexDirection: 'column'
    },
    //child of view21
    textPlaceName: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textPlaceTitle: {
        fontSize: 14,
        paddingHorizontal: 10,

    },
    view22: {
        width: 100,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    numberOfStars: {
        color: 'yellow',
        paddingRight: 10
    },
    view3: {
        flex: 15,
        backgroundColor: 'blue',
        flexDirection:"row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    viewCall: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    textCall: {
        fontSize: 14,
        color: 'white',
        marginTop: 5
    },
    viewRouter: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    viewShare: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    view4: {
        flex: 35,
        backgroundColor: 'yellow',
    }
})
