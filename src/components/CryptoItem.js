import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, Image } from 'react-native'
import { robotoWeights } from 'react-native-typography'

export default class CryptoItem extends Component {

  constructor(props) {
    super(props)
  }

  moneyConverter(labelValue){
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));
  }

  colorConverter(number){
    if (number < 0) {
      return {color: '#FD0004'}
    }
    return {color: '#7FC277'}
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image source={{uri: this.props.item.logo}}
              style={styles.logo}/>
            <View style={styles.logoIntroTextContainer}>
              <Text style={[robotoWeights.regular, {fontSize: 20}]}>{this.props.item.name}</Text>
              <Text style={[robotoWeights.light, {fontSize: 16}]}>{this.props.item.symbol}</Text>
            </View>
          </View>
          <View style={styles.introTextContainer}>
            <Text style={[robotoWeights.light, {fontSize: 16, textAlign:'left', marginRight: 5}]}>$ {this.props.item.price}</Text>
            <Text style={[robotoWeights.light, {fontSize: 16, textAlign:'left', marginRight: 5}, this.colorConverter(this.props.item.percent_change_24h)]}>{this.props.item.percent_change_24h} %</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.infoContainer}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Market Cap</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$ {this.moneyConverter(this.props.item.market_cap)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Volume (24h)</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$ {this.moneyConverter(this.props.item.volume)}</Text>
          </View>
          <View style={[styles.infoContainer, {borderRightWidth: 0}]}>
            <Text style={[robotoWeights.light, {fontSize: 13}]}>Circulating Supply</Text>
            <Text style={[robotoWeights.thin, {fontSize: 13}]}>$ {this.moneyConverter(this.props.item.circulating_supply)} {this.props.item.symbol}</Text>
          </View>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    width: '97%',
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
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,

  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    alignItems: 'center',
    textAlign: 'center'
  }
})


AppRegistry.registerComponent('CryptoItem', CryptoItem)