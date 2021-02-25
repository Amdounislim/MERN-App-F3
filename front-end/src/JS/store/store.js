import { createStore, applyMiddleware, compose } from "redux";
import reducerUser from "../reducers/reducerUser";
import thunk from "redux-thunk"

 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let arr = [exemple1, exemple2]

const store = createStore(
  reducerUser,
//   composeEnhancers(applyMiddleware(...arr))
  composeEnhancers(applyMiddleware(thunk))
);


export default store