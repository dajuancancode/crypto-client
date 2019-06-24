import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, Image } from 'react-native'
import { robotoWeights } from 'react-native-typography'

export default class CryptoItem extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={{width: 32, height: 32, marginRight: 5, borderRadius: 100}}/>
            <View style={styles.introTextContainer}>
              <Text style={[robotoWeights.regular, {fontSize: 20}]}>{this.props.item.name}</Text>
              <Text style={[robotoWeights.light, {fontSize: 16}]}>{this.props.item.symbol}</Text>
            </View>
          </View>
          <View style={styles.introTextContainer}>
            <Text style={[robotoWeights.light, {fontSize: 16}]}>{this.props.item.price}</Text>
            <Text style={[robotoWeights.light, {fontSize: 16}]}>{this.props.item.percent_change_24h}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.infoContainer}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Market Cap</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$107,420,012,961</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Volume (24h)</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$3,557,100,000</Text>
          </View>
          <View style={[styles.infoContainer, {borderRightWidth: 0}]}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Circulating Supply</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$17,146,900 BTC</Text>
          </View>
        </View>    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    width: '95%',
    alignSelf: 'center',
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    height: 100,
  },
  introtextContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFF',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: '#FBFCFE',
    height: '50%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  infoContainer: {
    flex: 1,
    borderRightWidth: 2,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
  }
})


AppRegistry.registerComponent('CryptoItem', CryptoItem)