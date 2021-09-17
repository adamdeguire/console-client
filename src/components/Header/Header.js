import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const authenticatedOptions = (
  <>
    <NavLink to='/profile-photo' className='nav-link'>Change Profile Photo</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const Header = ({ user, deviceSize }) => (
  <Navbar className="navbar-light col-12" id="header" expand='md'>
    <Navbar.Brand>
      <Link to='/home' id="headerTitle">{'{ console }'}</Link>
    </Navbar.Brand>
    <Navbar.Toggle className="navbar-light" aria-controls='basic-navbar-nav' />
    <div className="spacing"></div>
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {
          user
            ? deviceSize > 600
              ? <><SearchBar /><NavDropdown title="Account">{authenticatedOptions}</NavDropdown></>
              : <><SearchBar />{authenticatedOptions}</>
            : unauthenticatedOptions
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
