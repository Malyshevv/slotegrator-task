import { createStore, compose, applyMiddleware } from 'redux';
import reducers from "./reducers/reducers.js";

const store = createStore(reducers);

export default store;