import React from "react";
import {Scene, Router} from "react-native-router-flux";
import TopLevelComponent from './screens/TopLevelComponent.native';
export default class App extends React.Component {
    render() {
        return (
                <Router>
                    <Scene key="root">
                        <Scene key="entryPoint" component={TopLevelComponent} hideNavBar initial/>
                    </Scene>
                </Router>
        );
    }
}