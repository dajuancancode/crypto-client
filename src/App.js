import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './screens/Home'
import CryptoProfile from './screens/CryptoProfile'

const AppNavigation = createStackNavigator({
  Home: Home,
  CryptoProfile: CryptoProfile
})

const NavigationContainer = createAppContainer(AppNavigation)

export default class App extends Component {
  render() {
    return (
      <NavigationContainer />
    )
  }
}

AppRegistry.registerComponent('MainApp', () => App)