import * as types from "./ActionTypes";


const payloadIfSuccess = {message: "Action was successful"};
const payloadIfFailed = {message: "Action execution failed"};

export default function SampleAction(input) {
    return (dispatch) => {
        if (input === 1) {
            dispatch(somethingHappenedSuccessfully(payloadIfSuccess))
        }
        else if (input === 0) {
            dispatch(somethingFailed(payloadIfFailed))

        }
    }
}

function somethingHappenedSuccessfully(payload) {
    return {
        type: types.SOMETHING_HAPPENED_SUCCESSFULLY,
        data: payload
    }
}

function somethingFailed(payload) {
    return {
        type: types.SOMETHING_FAILED,
        data: payload
    }
}