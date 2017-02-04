import React from "react";
import {Provider} from "react-redux";
import store from "../common/utilities/storage/store";
import {Scene, Router} from "react-native-router-flux";
import TopLevelComponent from './screens/TopLevelComponent.native';
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="entryPoint" component={TopLevelComponent} hideNavBar initial/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}