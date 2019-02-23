import React from 'react';

import EntryScreen from './screens/EntryScreen';
import {Route, Router} from './utilities/routing'


class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={EntryScreen}/>
            </Router>
        );
    }
}


export default App;
