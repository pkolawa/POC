import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from './reducers';

const configureStore = () => {
  const store = createStore(
    combineReducers(allReducers),
    applyMiddleware(thunk)
  );
  return store;
};
export { configureStore as default };