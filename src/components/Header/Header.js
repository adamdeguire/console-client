import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <SearchBar />
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar-light" id="header" expand='md'>
    <Navbar.Brand>
      <Link to='/home' id="headerTitle">{'{ console }'}</Link>
    </Navbar.Brand>
    <Navbar.Toggle className="navbar-light" aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
