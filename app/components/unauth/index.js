import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import Background   from '../background/';

import styles from './style';

class Unauth extends Component {

  componentWillMount() {
    this._checkIntro()
  }

  async _checkIntro() {
    try {

    let intro   = await AsyncStorage.getItem('intro');
    // show intro in not already shown
    console.log('intro', intro)
    if( intro !== 'yes' ) {
      Actions.intro({type:'reset'})
    }

    } catch(error) {
      console.log( "Something went wrong" + error );
    }
  }


  render() {
    return (
      <Background>
        <View style={styles.wrapControls}>
          <TouchableHighlight style={styles.button} onPress={Actions.login} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={Actions.register} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
        </View>
      </Background>
    )
  }


}
export default Unauth;
