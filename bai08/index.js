/**
 * @format
 */
import {AppRegistry} from 'react-native';
//import App from './App';
import CounterComponent from './components/CounterComponent';
import {name as appName} from './app.json';
import {store} from './store/store'

import React from 'react'
import { Provider } from 'react-redux'

const App = () => <Provider store={store}>
    <CounterComponent />

</Provider>  

AppRegistry.registerComponent(appName, () => App);
