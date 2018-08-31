import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  render() {
        const cookies = new Cookies();
        cookies.remove('userID');

        if (cookies.get('userID') === undefined)
        {
            return <Redirect to='/login'/>
        }
    return (
      <div>
        
      </div>
    )
  }
}