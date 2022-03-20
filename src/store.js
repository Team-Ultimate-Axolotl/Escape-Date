import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combinedReducers.js'
import thunk from 'redux-thunk'; 

const store = createStore( reducers, composeWithDevTools(applyMiddleware(thunk)) );

//store.dispatch()//spin up initial state from the user profile that's returned from the database.

export default store;