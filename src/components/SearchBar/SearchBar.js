import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import { search } from '../../api/search'

import './SearchBar.scss'

class SearchBar extends Component {
  state = {
    users: null,
    loading: false,
    value: ''
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.onBlurHandler)
  }

  search = async val => {
    this.setState({ loading: true })
    const results = await search(`${apiUrl}/users?users=${val}`)
    const users = results

    this.setState({ users, loading: false })
  }

  onChangeHandler = async e => {
    this.search(e.target.value)
    this.setState({ value: e.target.value })
  }

  onBlurHandler = e => {
    if (!e.target.classList.contains('search')) {
      this.setState({ value: '' })
    }
  }

  get renderUsers () {
    let users = ''
    if (this.state.users) {
      users = this.state.users.map(user => {
        return (
          <div className='search result' key={user._id}>
            <Link className='search resultLink' to={`/profile/${user.username}`} >{user.username}</Link>
          </div>
        )
      })
    }
    if (!this.state.value) {
      users = ''
    }

    return users
  }

  render () {
    const { value } = this.state
    const noResults = this.renderUsers.length === 0 && value.length > 0
    const noResultsJsx = (<div className="result">No results</div>)
    return (
      <>
        <div className="search searchBar">
          <input className="search searchInput"
            value={value}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Search Users"
          />
          <div className="search resultContainer">
            {noResults ? noResultsJsx : this.renderUsers}
          </div>
        </div>
      </>
    )
  }
}

export default SearchBar
