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
    interval: null,
  };

//spin up an initial statye and create a fall through of reducers.a

const dateReducer = ( state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN : {
      //has signed in, emergency contact/primary, name of user.
      //console.log('at the reducer', action.payload);
      return {
        ...state,
        hasSignedIn: true,
        name: action.payload.name,
        emergencyContacts: action.payload.emergencyContacts,
        primaryContact: action.payload.primaryContact
      }
    }
    case types.NEW_DATE_INSTANCE : {
      const { location, nameOfDate, timeOfDate, dateStatus, primaryContact, interval } = action.payload;
      return {
        ...state,
        location, 
        nameOfDate, 
        timeOfDate, 
        dateStatus, 
        primaryContact, 
        interval
      }
    }
    default: {
      return state;
    }
  }
}
export default dateReducer;