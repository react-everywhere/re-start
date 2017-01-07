import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');


export default class Screen1 extends Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    This is the top level component of this app.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

