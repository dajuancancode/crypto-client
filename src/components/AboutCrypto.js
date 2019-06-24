import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Linking} from 'react-native'
import { robotoWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons'

export default class AboutCrypto extends Component {
  constructor(props) {
    super(props)
  }

  shortenDescription(text) {
    return text.split(/\s/).slice(0, 35).join(' ') + '...'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.aboutContainer}>
          <Text style={[robotoWeights.bold, styles.header]}>About {this.props.item.name}</Text>
          <Text style={[robotoWeights.medium, styles.aboutText]}>{this.shortenDescription(this.props.item.description)}</Text>
        </View>
        <View style={styles.resourceContainer}>
          <Text style={[robotoWeights.bold, styles.header, {fontSize: 20}]}>Resources</Text>
          <View style={styles.resourceInfoContainer}>
            <Icon name="ios-globe" size={16} color='rgba(17, 51, 83, 0.6)'/>
            <TouchableWithoutFeedback onPress={() => {Linking.openURL(this.props.item.website)}}>
              <Text style={{color: 'rgb(22, 82, 240)'}}>Official Website</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(236, 239, 241)',
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 10,
    
  },
  header: {
    fontSize: 22,
    color: 'rgb(5, 15, 25)',
    paddingLeft: 10
  },
  aboutText: {
    color: 'rgba(17, 51, 83, 0.6)',
    fontSize: 14,
    textAlign: 'left',
    padding: (0, 10)
  },
  aboutContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
    margin: (10, 'auto')
  },
  resourceContainer: {
    flex: 1
  },
  resourceInfoContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly'
  }
})
