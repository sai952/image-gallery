import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar , Nav ,NavDropdown} from 'react-bootstrap';

function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{minHeight:'7%'}}>
        <b>
          <Link to="/adminafterlogin">ADMIN HOME </Link> |
              <Link to="/displayall">DISPLAY ALL </Link>|
              <Link to="/search">SEARCH </Link> |
              <Link to="/delete">DELETE </Link>|
              <Link to="/manageemp">MANAGE EMPLOYEE </Link>|
              <Link to="/logout">LOGOUT </Link>
        </b>
      </Navbar>
    )

  }
  else if (authuser === 'USER') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{minHeight:'7%'}}>
        <b>
          <Link to="/userafterlogin">USER HOME </Link> |
            <Link to="#">VIEW PROFILE </Link>|
            <Link to="/updateprofile">UPDATE PROFILE</Link> |
            <Link to="/viewimg">VIEW IMAGE</Link> |
            <Link to="/uploadimg">Upload Image</Link> |
            <Link to="/logout">LOGOUT </Link>
        </b>
      </Navbar>
    )
  }
  else {
    return (
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{minHeight:'7%'}}>
        <b>
          <Link to="/">HOME </Link> |
              <Link to="/reg">REG </Link>|
              <Link to="/login">LOGIN </Link> |
              <Link to="/about">ABOUT US </Link> |
              <Link to="/contact">CONTACT US </Link> |
              <Link to="/adminlogin">ADMIN LOGIN </Link>
        </b>
      </Navbar>
    )
  }
}

export default NavigationBar