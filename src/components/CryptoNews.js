import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { robotoWeights } from 'react-native-typography'

import CryptoNewsItem from './CryptoNewsItem'

export default class CryptoNews extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={[styles.header, robotoWeights.bold]}> Top Stories </Text>
        <View style={{flex: 1}}>
          <FlatList
              data={this.props.item}
              renderItem={({item}) => <CryptoNewsItem item={item}/>}
              keyExtractor={(item, index) => `list-item-${index}`}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(236, 239, 241)',
    borderRadius: 6,
  },
  header: {
    flex: 0.2,
    fontSize: 22,
    color: 'rgb(5, 15, 25)',
    paddingLeft: 10
  },
})

