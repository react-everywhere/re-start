import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

// This is a dumb component that is common for native and web

export default class TopLevelComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.biggerText}>
                    {this.state.message}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.state.dispatchMessage}
                    </Text>
                    <View style={styles.button}>

                        <Button
                            title={"Pass"}
                            onPress={this.props.passDispatchedAction}
                        />
                    </View>
                    <View style={styles.button}>

                        <Button
                            title={"Fail"}
                            onPress={this.props.failDispatchedAction}
                        />
                    </View>
                </View>
                <Text style={styles.biggerText}>
                    {this.props.message}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biggerText: {
        fontSize: 17,
        alignSelf: 'center'
    },
    button: {
        margin: 5
    }
});
