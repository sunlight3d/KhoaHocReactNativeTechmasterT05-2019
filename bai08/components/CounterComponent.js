/**
 * npm install redux, react-redux 
 */
import React, {Component} from 'React'
import {View,
    Text,
    StyleSheet, 
    Button} from 'react-native'
import {connect} from 'react-redux'
import {increaseAction, descreaseAction} from '../actions/actions'
import {store} from '../store/store'
//HOC : convert Component to Container
class CounterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        // alert(`props = ${JSON.stringify(this.props)}`);
        return <View style={styles.container}>
            <Button 
                title="Increase"
                onPress={() => {
                    //this.setState({counter: this.state.counter + 1})
                    store.dispatch(increaseAction(2))
            }} />
            <Text>
                {this.props.counter}
            </Text>
            <Button 
                title="Decrease"
                onPress={() => {
                    // this.setState({counter: this.state.counter - 1})
                    store.dispatch(descreaseAction(2))
            }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
const mapStateToProps = (state = 0) => {    
    return {
        counter: state.counterReducer
    }
}
export default connect(mapStateToProps)(CounterComponent)