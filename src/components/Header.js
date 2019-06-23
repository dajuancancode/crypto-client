import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, StatusBar } from 'react-native'
import { robotoWeights  } from 'react-native-typography'

export default class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar translucent  backgroundColor={'#0EBE8F'}/>
        <View style={styles.mainHeader}>
          <View style={styles.headerContainer}>
            <Text style={[robotoWeights.medium, styles.title]}>Crypto App</Text>
            <Text style={[robotoWeights.light, styles.subtitle]}>Subtitle</Text>
          </View>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    height: 150,
    backgroundColor: '#0EBE8F',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    
  },
  headerContainer: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 25,
    paddingLeft: 10, 
  },
  title: {
    fontSize: 34,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff'
  }
})

AppRegistry.registerComponent('Header', () => Header)