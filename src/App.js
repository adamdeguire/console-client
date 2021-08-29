/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import EditPost from './components/posts/EditPost/EditPost'
import Home from './components/Home/Home'
import Post from './components/posts/Post'
import Profile from './components/Profile/Profile'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

	setUser = (user) => this.setState({ user })

	clearUser = () => this.setState({ user: null })

	deleteAlert = (id) => {
	  this.setState((state) => {
	    return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
	  })
	}

	msgAlert = ({ heading, message, variant }) => {
	  const id = uuid()
	  this.setState((state) => {
	    return {
	      msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
	    }
	  })
	}

	componentDidMount () {
	  const { history } = this.props
	  const user = JSON.parse(window.localStorage.getItem('user'))
	  if (window) {
	    this.setUser(user)
	    history.push('/home')
	  }
	}

	render () {
	  const { msgAlerts, user } = this.state

	  return (
	    <>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
	        <AutoDismissAlert
	          key={msgAlert.id}
	          heading={msgAlert.heading}
	          variant={msgAlert.variant}
	          message={msgAlert.message}
	          id={msgAlert.id}
	          deleteAlert={this.deleteAlert}
	        />
	      ))}
	      <main className='container col-sm-12 col-lg-4'>
	        <Route
	          path='/sign-up'
	          render={() => (
	            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
	          )}
	        />
	        <Route
	          path='/sign-in'
	          render={() => (
	            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
	          )}
	        />
	        <AuthenticatedRoute
	          user={user}
	          path='/sign-out'
	          render={() => (
	            <SignOut
	              msgAlert={this.msgAlert}
	              clearUser={this.clearUser}
	              user={user}
	            />
	          )}
	        />
	        <AuthenticatedRoute
	          user={user}
	          path='/change-password'
	          render={() => (
	            <ChangePassword msgAlert={this.msgAlert} user={user} />
	          )}
	        />
	        <AuthenticatedRoute
	          user={user}
					  exact
	          path='/posts/:id/edit'
	          render={() => <EditPost msgAlert={this.msgAlert} user={user} />}
	        />
	        <AuthenticatedRoute
	          user={user}
	          exact
	          path='/home'
	          render={() => <Home msgAlert={this.msgAlert} user={user} />}
	        />
	        <AuthenticatedRoute
	          user={user}
	          exact
	          path='/posts/:id'
	          render={() => <Post msgAlert={this.msgAlert} user={user} />}
	        />
	        <AuthenticatedRoute
	          user={user}
	          exact
	          path='/profile/:username'
	          render={() => <Profile msgAlert={this.msgAlert} user={user} />}
	        />
	      </main>
	    </>
	  )
	}
}

export default withRouter(App)
