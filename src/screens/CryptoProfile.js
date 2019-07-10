import React, { Component } from 'react'
import { Text, View, AppRegistry, ActivityIndicator, ScrollView } from 'react-native'
import Header from '../components/Header'
import AboutCrypto from '../components/AboutCrypto'
import CryptoNews from '../components/CryptoNews'

export default class CryptoProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {isLoading: true}
  }

  static navigationOptions = {
    header: null
  };
  
  componentDidMount(){
    const symbol = this.props.navigation.getParam("symbol")
    return fetch(`https://young-garden-24176.herokuapp.com/api/crypto/${symbol}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.cryptoProfile,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.25}}>
          <Header />
        </View>
        <ScrollView style={{flex: 2}}>
          <AboutCrypto item={this.state.dataSource} />
          <CryptoNews item={this.state.dataSource.news} />
        </ScrollView>
      </View>
    )
  }
}

AppRegistry.registerComponent('CryptoProfile', () => CryptoProfile)