import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import Background   from '../background/';
import styles from './style';
import t from 'tcomb-form-native';
var Form = t.form.Form;

var Type = t.struct({
  username: t.String,
  password: t.String
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class Login extends Component {

  onPress() {
    var value = this.refs.form.getValue();
    if (value) {
      Actions.dashboard();
    }
  }

  render() {
    return (
      <Background>
        <View style={styles.container}>
          <Form
            ref="form"
            type={Type}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={Actions.register} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>No account yet?</Text>
          </TouchableHighlight>
        </View>
      </Background>
    );
  }
}
