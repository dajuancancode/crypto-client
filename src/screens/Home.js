import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, StatusBar } from 'react-native'
import {material} from 'react-native-typography'
import LinearGradient from 'react-native-linear-gradient'
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      
      <LinearGradient colors={['#0EBE8F', '#38ef7d']} style={{flex: 1}}>
        <StatusBar translucent  backgroundColor={'#0EBE8F'}/>
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
          <Text style={[material.display3White, {color:'#fff', fontSize: 65}]}>CryptoChain</Text>
          <Text style={[material.display1White, {color:'#fff', fontSize: 24}]}>A better cryptocurrency monitor</Text>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('CryptoList')} >
            <View style={styles.button}>
              <Text style={[material.subheading, {color: '#11998e'}]}>Get Started</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#fff',
    marginBottom: 10,
    padding: (10, 25),
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
})
