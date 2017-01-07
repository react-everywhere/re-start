import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import App from './src/native/app.native'

export default class reactNativeEverywhere extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('reactNativeEverywhere', () => reactNativeEverywhere);
