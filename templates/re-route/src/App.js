import React from 'react';

import EntryScreen from './screens/EntryScreen';
import Routing, {Router} from './utilities/routing/index';

const Route = Routing.Route;


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
