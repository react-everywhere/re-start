import React from 'react';
import {Provider} from "react-redux";

import EntryScreen from './screens/EntryScreen';
import store from "./utilities/storage/store";
import Routing, {Router} from './utilities/routing/index';

const Route = Routing.Route;


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={EntryScreen}/>
                </Router>
            </Provider>
        );
    }
}


export default App;
