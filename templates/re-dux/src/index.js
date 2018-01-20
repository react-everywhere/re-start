import React from 'react';
import {Provider} from "react-redux";
import store from "./utilities/storage/store";
import EntryScreen from './screens/EntryScreen';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <EntryScreen/>
            </Provider>
        );
    }
}


ReactNative.render(<App/>, document.getElementById('root'));