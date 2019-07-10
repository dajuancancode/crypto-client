import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, StatusBar, TouchableNativeFeedback } from 'react-native'
import { robotoWeights  } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'

class Header extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar translucent  backgroundColor={'#0EBE8F'}/>
        <View style={styles.mainHeader}>
          <View style={{flex: 0.3, marginTop:30, marginLeft: 7, height: 30}}>
            <TouchableNativeFeedback onPress={() => {this.props.navigation.goBack()}}>
              <Icon name="md-arrow-back" size={30} color='#fff' />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.headerContainer}>
            <Text style={[robotoWeights.medium, styles.title]}>CryptoChain</Text>
            <Text style={[robotoWeights.light, styles.subtitle]}>A better cryptocurrency monitor</Text>
          </View>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    flex: 0.95,
    backgroundColor: '#0EBE8F',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: "flex-end",
    paddingRight: 5,
    flex: 1,
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

export default withNavigation(Header)