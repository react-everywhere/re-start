import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/rootReducer";

let initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;