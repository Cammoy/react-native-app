import { DASHBOARD } from '../../config'
import React, { Component,PropTypes } from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Menu from './menu'
import Avatar from '../avatar/'

console.log(Actions)

 class ControlPanel extends Component {

  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  _menuActions(item) {
    Actions.chat
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={closeDrawer}>
          <Text style={styles.close}>&times;</Text>
        </TouchableOpacity>
        <Avatar name="Kwasi"/>
        <Menu items={DASHBOARD.MENU} callback={this._menuActions}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EEE',
  },
  controlText: {
    color: 'white',
  },
  close: {
    margin: 5,
    marginBottom:10,
    fontSize:28,
    textAlign:'right',
    color:'red'
  }
})


export default ControlPanel;
