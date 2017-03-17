import  MATCHES from '../../../mock/matches.json'
import  MATCHES_DETAIL from '../../../mock/matchesDetailed.json'
import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { StyleSheet, View, ScrollView, TouchableHighlight, Text, AsyncStorage } from 'react-native'
import styles from './style'

import Summary from './summary'
import Detail   from './detail'

 export default class Row extends Component {

  constructor(props) {
    super(props);

    this._getDetail = this._getDetail.bind(this);

  }

  _getDetail(item) {
    console.log('id', item)
  }

  render() {
    return (
      <ScrollView>
        <Summary items={MATCHES_DETAIL} onPress={this._getDetail} />
      </ScrollView>
    );
  }
}
