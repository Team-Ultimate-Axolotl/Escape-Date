import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers too, don't forget!
import thunk from 'redux-thunk'; 
//import what we are going to dispatch!! 

const store = createStore( reducers, composeWithDevTools(applyMiddleware(thunk)) );

store.dispatch()//spin up initial state from the user profile that's returned from the database.

export default store;