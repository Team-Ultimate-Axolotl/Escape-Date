import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux'; 


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
      

const SignUpPage = props => (
  <div className = 'form-container'>
    <form className = 'sign-up-form' onSubmit = {(e) => {
    e.preventDefault(),
    props.signUp(e);
    }}>
        <input type = 'text' placeholder = 'username'/>
        <input type = 'text' placeholder = 'password'/>
        <input type = 'text' placeholder = 'name'/>
        <input type = 'text' placeholder = 'phone'/>
        <input type = 'text' placeholder = 'emergency name 1'/>
        <input type = 'text' placeholder = 'phone number 1'/>
        <input type = 'text' placeholder = 'emergency name 2'/>
        <input type = 'text' placeholder = 'phone number 2'/>
        <input type = 'text' placeholder = 'emergency name 3'/>
        <input type = 'text' placeholder = 'phone number 3'/>
        <button>Submit</button>
    </form >
  </div>
);

export default connect(null, mapDispatchToProps)(SignUpPage);