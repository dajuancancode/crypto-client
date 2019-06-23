import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Home from './screens/Home'

export default class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('MainApp', () => App)