/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LifecycleComponent from './LifecycleComponent';
import DetailPlace from './components/DetailPlace'
import PlacesComponent from './components/PlacesComponent'
import StackNavigator from './components/StackNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackNavigator);
