import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom'; 
import ErrorPage from '../errorPage/ErrorPage.jsx'; 

//two text inputs and a submit button. //create an onSubmit handler for the form that sets off our get request for username authentication.

const mapStateToProps = ({ dateState }) => ({
  hasSignedIn: dateState.hasSignedIn,
  emergencyContacts: dateState.emergencyContacts, 
  primaryContact: dateState.primaryContact, 
  name: dateState.name
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
//our login take username and password.



const LoginInformation = props => {
  const navigate = useNavigate();

 return (
  <div className = 'form-container'>
    <form className = 'input-text' onSubmit = {(e) => {
      e.preventDefault();
      props.logIn(e);
      if (props.hasSignedIn === true){
          navigate('/newDate')
        } else {
          navigate('/errorPage')
        }
      }} >
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <button>login</button>
    </form>
  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInformation);