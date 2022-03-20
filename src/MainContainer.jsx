import React from 'react';
import LoginInformation from './components/loginPage/LoginInformation.jsx';
import SignUpButton from './components/loginPage/SignUpButton.jsx';
import logo from '../Images/Axolotl.png';
import SignUpPage from './components/signupPage/SignUpPage.jsx';
import DateInstance from './components/datePage/DateInstance.jsx';
//import { connect } = 'react-redux';




const MainContainer = props => (
  <div className = 'container'>
    <div className = 'logo'><img src={logo} alt = 'Logo'/></div>

    <LoginInformation />
    <SignUpButton />
    <SignUpPage />
    <DateInstance />
  </div>

)

export default MainContainer;