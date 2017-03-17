import React, {Component,PropTypes} from "react"
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import Matches from '../matches/custom/'

 export default class Main extends Component {
  render() {
    return (
      <ScrollView>
         <Matches/>
      </ScrollView>
    )
  }
}
