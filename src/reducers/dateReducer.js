import * as types from '../actions/actionTypes';

const initialState = {
    hasSignedIn: false,
    emergencyContacts: [],
    primaryContact: null, 
    phoneNumber: null,
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
      if (!action.payload.err){
      //grab the values for emergency contacts here and put them into an array of objects.
      const arr = [];
      for (let i = 1; i <= 3; i++){
        arr.push({name: action.payload[`em${i}_name`], phone: action.payload[`em${i}_phone`] })
      }
      
        return {
          ...state,
          hasSignedIn: true,
          name: action.payload.name,
          emergencyContacts: arr,
          phoneNumber: action.payload.phone
        }
      } else {
        return state
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