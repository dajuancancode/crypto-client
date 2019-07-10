import React, { Component } from 'react'
import { AppRegistry, View, FlatList, ActivityIndicator } from 'react-native'

import Header from '../components/Header'
import CryptoItem from '../components/CryptoItem'

export default class CryptoList extends Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount(){
    return fetch('https://young-garden-24176.herokuapp.com/api/list')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.cryptoList,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 4}}>
        <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <CryptoItem item={item}/>}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    );
  }
}