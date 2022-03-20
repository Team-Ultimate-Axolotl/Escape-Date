import { combineReducers } from 'redux'; 
import dateReducer from './dateReducer'; 


export default combineReducers({
    dateState: dateReducer, 
});
