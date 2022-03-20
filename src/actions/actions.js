import * as types from './actionTypes'; 
import axios from 'axios';


//make our action objects;


export const logIn = (e) => (dispatch) => {
  const username = e.target[0].value, password = e.target[1].value;
  console.log('We have arrived at the actions ', password, username)
  axios.post('http://localhost:3000/login',
  { username, password })
  .then((data) => {
    console.log(data);
    dispatch({
        type: types.LOG_IN,
        payload: data,
    }); 
  })
  
}