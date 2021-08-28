import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({
  user,
  component: Component,
  render,
  ...rest
}) => {
  return user && render
    ? <Route {...rest} render={render} />
    : (
      <Route
        {...rest}
        render={(props) =>
          user
            ? <Component {...props} />
            : <Redirect to='/sign-in' />
        }
      />
    )
}

export default AuthenticatedRoute
