/**
 * Created by amoghbanta on 04/02/17.
 */
import {combineReducers} from "redux";
import SampleReducer from "./sampleReducer";
import { routerReducer } from 'react-router-redux';


//this is the list of final reducers
export default combineReducers({
    routing:routerReducer,
    sampleReducer: SampleReducer,
})