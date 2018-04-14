import React from 'react';
import {Provider} from "react-redux";

import EntryScreen from './screens/EntryScreen';
import store from "./utilities/storage/store";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <EntryScreen/>
            </Provider>
        );
    }
}


export default App;
