import React from 'react';
import {Provider} from "react-redux";
import store from "./src/utilities/storage/store";
import EntryScreen from './src/screens/EntryScreen';


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
