import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import CryptoList from './screens/CryptoList'
import CryptoProfile from './screens/CryptoProfile'
import Home from './screens/Home'

const AppNavigation = createStackNavigator({
  Home,
  CryptoList,
  CryptoProfile
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