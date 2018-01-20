import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import App from './templates/re-start/App'


export default class everywhere extends Component {
    render() {
        return  <App/>;
    }
}
AppRegistry.registerComponent('everywhere', () => everywhere);
