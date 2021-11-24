import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import Main_Page from "./components/main/main";
//import Landing_Page from "./components/landing/landing";
import Login_Page from "./components/landing/login"
import Register_Page from "./components/landing/register"
import Profile_Page from "./components/profile/profile";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// function App(state) {
//   let location = state.location
//   // if (location === "LANDING_PAGE") {
//   //   return (
//   //       <Landing_Page />
//   //   )
//   // } else
//   if (location === "LOGIN_PAGE") {
//     return <Login_Page />
//   } else if (location === "REGISTER_PAGE") {
//     return <Register_Page />
//   } else if (location === "PROFILE_PAGE") {
//     return <Profile_Page />
//   } else {
//     return <Main_Page />
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     location: state.location
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
