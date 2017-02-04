/**
 * Created by amoghbanta on 04/02/17.
 */
import {combineReducers} from "redux";
import ScreenReducer from "./screenReducer";


//this is the list of final reducers
export default combineReducers({
    session: ScreenReducer,
})