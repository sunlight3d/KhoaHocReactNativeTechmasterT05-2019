
import PlacesComponent from './PlacesComponent'
import DetailPlace from './DetailPlace'

import { createAppContainer, 
    createStackNavigator, StackActions, 
    NavigationActions } from 'react-navigation'

const StackNavigator = createStackNavigator({
    PlacesComponent: {
        screen: PlacesComponent,
        navigationOptions: {
            header: null 
        },
    },
    DetailPlace: {
        screen: DetailPlace,
        navigationOptions: {
            header: null 
        },
    },
}, {
    initialRouteName: 'PlacesComponent',
})
export default createAppContainer(StackNavigator)