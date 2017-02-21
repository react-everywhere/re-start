import {Platform} from 'react-native';

const RouterPackage = (Platform.OS === 'web') ? require('react-router') : require('react-router-native');

/*
 * Platform specific exports :/
 * */
export const {Router, Route} = RouterPackage;
export const history = (Platform.OS === 'web') ? RouterPackage.browserHistory : RouterPackage.nativeHistory;
