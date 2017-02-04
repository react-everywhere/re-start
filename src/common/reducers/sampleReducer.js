/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";


export default function logReducer(state = {}, action) {
    switch (action.type) {

        case types.SCREEN_RENDERED_SUCCESSFULLY:
            return {};
        default:
            return state;
    }
}