import * as types from '../actions/actionTypes';

const initialState = {
    hasSignedIn: false,
    emergencyContacts: [],
    primaryContact: null, 
    name : '', 
    location: '',
    nameOfDate: '',
    timeOfDate: '',
    dateStatus: null, 
  };
//spin up an initial statye and create a fall through of reducers.a

const dateReducer = ( state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN : {
      //has signed in, emergency contact/primary, name of user.
      return {
        ...state,
        hasSignedIn: true,
        name: action.payload.firstName,
        emergencyContacts: action.payload.emergencyContacts,
        primaryContact: action.payload.primaryContact
      }
    }
  }
}
export default dateReducer;