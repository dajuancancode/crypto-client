import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native'
import { robotoWeights } from 'react-native-typography'

export default class CryptoNewsItem extends Component {
  constructor(props) {
    super(props)
  }

  shortenDescription(text) {
    return text.split(/\s/).slice(0, 10).join(' ') + '...'
  }
  
  render() {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postBody}>
          <TouchableWithoutFeedback onPress={() => {Linking.openURL(this.props.item.url)}}>
            <Text style={[styles.postText, robotoWeights.regular, {color: 'rgb(22, 82, 240)'}]}>{this.props.item.title}</Text>
          </TouchableWithoutFeedback>
          <Text style={[styles.postText, robotoWeights.light]}>{this.props.item.source}</Text>
        </View>
        <View>
          <Image source={{uri: this.props.item.image}} style={{width: 72, height: 72, borderRadius: 6}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(236, 239, 241)',
    marginBottom: 5,
  },
  postBody: {
    flexDirection: 'column',
    width: '75%',
    justifyContent: 'space-evenly'
  },
  postText: {
    color: 'rgba(17, 51, 83, 0.6)',
    fontSize: 14,
    textAlign: 'left',
    paddingBottom: 5
  },
})

