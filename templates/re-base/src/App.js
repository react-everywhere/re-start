import React from 'react';
import {Provider} from "react-redux";
import store from "./utilities/storage/store";
import TopLevelComponent from './screens/EntryScreen';
import Routing, {Router} from './utilities/routing/index';

const Route = Routing.Route;


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={TopLevelComponent}/>
                </Router>
            </Provider>
        );
    }
}

