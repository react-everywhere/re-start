import {Platform} from 'react-native';

const RouterPackage = (Platform.OS === 'web') ? require('react-router-dom') : require('react-router-native');

/*
 * Remove Platform specific exports :/
 * */
export const {Link, Route, Redirect} = RouterPackage;
export const Router = (Platform.OS === 'web') ? RouterPackage.BrowserRouter : RouterPackage.NativeRouter;
