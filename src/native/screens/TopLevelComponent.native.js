import React from 'react';
import {connect} from "react-redux";
import  SampleAction from '../../common/actions/SampleAction'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class TopLevelComponentNative extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
        this.passDispatchedAction = this.passDispatchedAction.bind(this);
        this.failDispatchedAction = this.failDispatchedAction.bind(this)
    }

    passDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.passActionDispatchValue))
    }

    failDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.failActionDispatchValue))

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

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
                            onPress={this.passDispatchedAction}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={"Fail"}
                            onPress={this.failDispatchedAction}
                        />
                    </View>
                </View>
                <Text style={styles.biggerText}>
                    {this.props.sampleReducer.message}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biggerText: {
        fontSize:17
    },
    button: {
        margin: 5
    }
});

function mapStateToProps(state) {
    return ({
            sampleReducer: state.sampleReducer
        }

    )
}

export default connect(mapStateToProps)(TopLevelComponentNative);