import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import TopLevelComponent from './screens/TopLevelComponent.web';

export default class App extends Component {


    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={TopLevelComponent}/>
            </Router>
        )
    }
}

