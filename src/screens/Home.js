import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Header from '../components/Header'

export default class Home extends Component {
  render() {
    return (
      <Header />
    )
  }
}

AppRegistry.registerComponent('Home', () => Home)