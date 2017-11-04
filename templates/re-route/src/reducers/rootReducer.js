/**
 * Created by amoghbanta on 04/02/17.
 */
import {combineReducers} from "redux";
import SampleReducer from "./sampleReducer";


//this is the list of final reducers
export default combineReducers({
    sampleReducer: SampleReducer,
})