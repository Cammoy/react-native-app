import {DICTIONARY}from '../../config'
import React, {Component} from "react"
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Switch } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import MainView from './main'
import ControlPanel from './controlPanel'
import Summary from './summary'



export default class Dashboard extends Component {

  state = {
    profileStatus: true
  }

  _profileStatus = (value) => {
    this.setState({
      profileStatus: value
    })
  }

  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }

  render () {
    let inactive;
    if( !this.state.profileStatus ) inactive = <Text style={styles.inactive}>{DICTIONARY.INACTIVE}</Text>

    return (
      <Drawer
        openDrawerOffset={250}
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<ControlPanel closeDrawer={this.closeControlPanel} />}
        style={styles.drawer}>

        <View style={styles.container}>

          {/**** HEADER BAR  ***
          -------------------------------------------------------------------*/}
          {inactive}
          <View style={styles.headerBar}>
            <View style={styles.statusContainer}>
              <Switch disabled={false}
                value={this.state.profileStatus}
                onValueChange={this._profileStatus}/>
                <Text style={styles.statusText}>{DICTIONARY.STATUS_TOGGLE}</Text>
            </View>

            {/**** STATUS TOGGLE
            -------------------------------------------------------------------*/}

            <View style={styles.toggle}>
              <TouchableOpacity style={styles.button} onPress={this.openControlPanel }>
                <Text style={styles.toggleText}>MENU</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/**** SUMMARY
          -------------------------------------------------------------------*/}
          <Summary item={{cousine:'Caribbean', budget: '£15', time: 1492326000}} invitee={false} />
        </View>


        {/**** MAIN COMPONENT
        -------------------------------------------------------------------*/}

        <MainView/>

      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'#EEE',
    paddingTop:30,
    paddingBottom:10,
    borderBottomWidth:1
  },
  headerBar: {
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  toggle: {
    marginLeft:30,
  },
  toggleText: {
    fontWeight:'900'
  },
  statusContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    paddingLeft:10,
  },
  inactive: {
    backgroundColor:'#1e8cbe',
    color:'#FFF',
    padding:5,
    marginBottom:5
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
})
