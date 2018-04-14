import React, {Component} from 'react';
import {connect} from "react-redux";

import  SampleAction from './../actions/SampleAction';
import TopLevelComponent from '../components/TopLevelComponent'


class EntryScreen extends Component {
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

    render() {
        return (
            <TopLevelComponent
                passDispatchedAction={this.passDispatchedAction}
                failDispatchedAction={this.failDispatchedAction}
                message={this.props.sampleReducer.message}
            />
        );
    }
}

function mapStateToProps({sampleReducer}) {
    return ({sampleReducer})
}


export default connect(mapStateToProps)(EntryScreen);

