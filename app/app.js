/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Route, Scene } from 'react-native-router-flux'
import CONFIG           from './config'
import TabIcon          from './components/tabIcon/'
import Intro            from './components/intro/'
import Unauth           from './components/unauth/'
import Register         from './components/unauth/register'
import Login            from './components/unauth/login'
import Dashboard        from './components/dashboard/'
import ProfileView      from './components/profile/view'
import ProfileUpdate    from './components/profile/update'
import Chat             from './components/chat/'
import Matches          from './components/matches/custom/'
//import Matches          from './components/matches/ExampleList'

 import {
   AppRegistry, PropTypes, ActivityIndicator, Text, View, TouchableHighlight, StatusBar, AsyncStorage
 } from 'react-native';

 import EStyleSheet from 'react-native-extended-stylesheet';
 EStyleSheet.build();

 StatusBar.setBarStyle('dark-content', true);

const KApp = () => {

 return (
   <Router hideNavBar={false} >

      <Scene key="root">
        <Scene key="unauth"     component={Unauth}      type="reset" hideNavBar initial/>
        <Scene key="intro"      component={Intro}       type="reset" hideNavBar />
        <Scene key="register"   component={Register}    type="reset" hideNavBar />
        <Scene key="login"      component={Login}       type="reset" hideNavBar />

        <Scene key="dashboard"  component={Dashboard}   type="reset" hideNavBar>
          <Scene key="matches"    component={Matches}    title="Matches" />
          <Scene key="chat"       component={Chat}        title="Roomie Chat" />
        </Scene>


      {/**** PROFILE TABS ****/}

      <Scene key="tabsProfile" tabBarStyle={{backgroundColor:CONFIG.COLOR.g1}} tabs>

        <Scene key="tabProfileUpdate" title="Edit" icon={TabIcon} otherProps={{icon:'edit'}}>
          <Scene key="profileUpdate" component={ProfileUpdate} title="Profile Update"/>
        </Scene>
        <Scene key="tabProfileView" title="View" icon={TabIcon} otherProps={{icon:'user'}}>
          <Scene key="profileView" component={ProfileView} title="Profile View" />
        </Scene>

      </Scene>

      {/**** END TAB BAR ****/}

      </Scene>

    </Router>
  )
}
AppRegistry.registerComponent('KApp', () => KApp);
