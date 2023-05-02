import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import basicReducer from "./reducer";


const myStore = legacy_createStore(basicReducer, applyMiddleware(logger));

export default myStore;