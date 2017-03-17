import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import styles from './style';
import t from 'tcomb-form-native';
var Form = t.form.Form;


// here we are: define your domain model
var Registration = t.struct({
  username: t.String,
  email: t.String,
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

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    console.log(value); // value here is an instance of Register
    if (value) { // if validation fails, value will be null

      let message = {
        text: value.username,
        email: value,
        datetime: new Date(),
        author: value.name
      }


      Actions.dashboard();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}

        <Text>Register to get started!</Text>
        <Form
          ref="form"
          type={Registration}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={Actions.login} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Already have an account?</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
