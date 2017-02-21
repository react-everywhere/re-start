import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "../common/utilities/storage/store";
import TopLevelComponent from './screens/TopLevelComponent.web';

// export default class App extends Component {
//
//     render() {
//         return (
//             <Provider store={store}>
//                 <Router history={browserHistory}>
//                     <Route path="/" component={TopLevelComponent}/>
//                 </Router>
//             </Provider>
//         )
//     }
// }

import {Router, Route, history} from './../router';

import {syncHistoryWithStore} from 'react-router-redux';



// Create an enhanced history that syncs navigation events with the store
const enhancedHistory = syncHistoryWithStore(history, store);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={enhancedHistory}>
                    <Route path='/' component={TopLevelComponent}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
